const { app, BrowserWindow, ipcMain, shell, Menu, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

const dataDir = app.getPath('userData');
const dataFile = path.join(dataDir, 'facildent-datos.json');
const backupDir = path.join(app.getPath('documents'), 'Facil Dent Respaldos');

function ensure(d) { try { fs.mkdirSync(d, { recursive: true }); } catch (e) {} }

ipcMain.on('load', (e) => {
  try { e.returnValue = fs.existsSync(dataFile) ? fs.readFileSync(dataFile, 'utf8') : null; }
  catch (err) { e.returnValue = null; }
});
ipcMain.on('save', (e, json) => {
  try {
    ensure(dataDir);
    const tmp = dataFile + '.tmp';
    fs.writeFileSync(tmp, json, 'utf8');
    fs.renameSync(tmp, dataFile);           // escritura atómica
    dailyBackup(json);
    e.returnValue = true;
  } catch (err) { e.returnValue = false; }
});
ipcMain.on('open-external', (e, url) => { if (/^https?:\/\//.test(url)) shell.openExternal(url); });
ipcMain.on('open-backups', () => { ensure(backupDir); shell.openPath(backupDir); });

function dailyBackup(json) {
  try {
    ensure(backupDir);
    const d = new Date();
    const name = `respaldo-${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}.json`;
    fs.writeFileSync(path.join(backupDir, name), json, 'utf8');
    // conservar los últimos 60 respaldos
    const files = fs.readdirSync(backupDir).filter(f => /^respaldo-\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
    files.slice(0, Math.max(0, files.length - 60)).forEach(f => fs.unlinkSync(path.join(backupDir, f)));
  } catch (e) {}
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1440, height: 900, minWidth: 1100, minHeight: 700,
    title: 'Facil Dent Gestión', backgroundColor: '#f3f6f9', show: false,
    icon: path.join(__dirname, 'app', 'icon.png'),
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false }
  });
  win.once('ready-to-show', () => { win.maximize(); win.show(); });
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:\/\//.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('file://')) { e.preventDefault(); shell.openExternal(url); } });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
}

Menu.setApplicationMenu(Menu.buildFromTemplate([
  { label: 'Archivo', submenu: [
    { label: 'Abrir carpeta de respaldos', click: () => { ensure(backupDir); shell.openPath(backupDir); } },
    { type: 'separator' }, { role: 'quit', label: 'Salir' } ] },
  { label: 'Ver', submenu: [
    { role: 'reload', label: 'Recargar' }, { role: 'togglefullscreen', label: 'Pantalla completa' },
    { role: 'zoomIn', label: 'Acercar' }, { role: 'zoomOut', label: 'Alejar' }, { role: 'resetZoom', label: 'Tamaño normal' } ] },
  { label: 'Ayuda', submenu: [
    { label: 'Acerca de', click: () => dialog.showMessageBox({ title: 'Facil Dent Gestión', message: 'Facil Dent Gestión v1.3', detail: 'Caja, gastos, tratamientos, pacientes y agenda.\nDatos: ' + dataFile }) },
    { role: 'toggleDevTools', label: 'Herramientas de desarrollo' } ] }
]));

if (!app.requestSingleInstanceLock()) app.quit();
else {
  app.on('second-instance', () => { const w = BrowserWindow.getAllWindows()[0]; if (w) { if (w.isMinimized()) w.restore(); w.focus(); } });
  app.whenReady().then(createWindow);
  app.on('window-all-closed', () => app.quit());
}
