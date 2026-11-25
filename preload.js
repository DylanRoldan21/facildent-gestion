const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('facilApi', {
  load: () => ipcRenderer.sendSync('load'),
  save: (json) => ipcRenderer.sendSync('save', json),
  openExternal: (url) => ipcRenderer.send('open-external', url),
  openBackups: () => ipcRenderer.send('open-backups')
});
