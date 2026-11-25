/* ==========================================================
   Facil Dent · Gestión — caja, gastos, tratamientos, agenda
   ========================================================== */
'use strict';

/* ---------- Icons ---------- */
const ICONS = {
  home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  cash:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 9.5v.01M18 14.5v.01"/>',
  box:'<path d="M4 7h16v13H4z"/><path d="M2 3h20v4H2zM10 11h4"/>',
  receipt:'<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  wallet:'<path d="M3 7a2 2 0 0 1 2-2h13v4"/><path d="M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2z"/><circle cx="16" cy="14.5" r="1.2"/>',
  tooth:'<path d="M7.5 3C5 3 3.5 5 3.5 7.5c0 2 .8 3.5 1.4 5.3.6 1.8.8 4 1.6 5.7.5 1 1.1 1 1.5.1.6-1.3.9-3.3 1.4-4.3.3-.6.8-.9 2.6-.9s2.3.3 2.6.9c.5 1 .8 3 1.4 4.3.4.9 1 .9 1.5-.1.8-1.7 1-3.9 1.6-5.7.6-1.8 1.4-3.3 1.4-5.3C20.5 5 19 3 16.5 3c-1.7 0-2.6.9-4.5.9S9.2 3 7.5 3z"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c2 .6 3.3 2.3 3.6 5.2"/>',
  cal:'<rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
  'cal-plus':'<rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M12 12.5v5M9.5 15h5"/>',
  chart:'<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  print:'<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
  down:'<path d="M12 4v11M7 10l5 5 5-5M4 20h16"/>',
  up:'<path d="M12 20V9M7 14l5-5 5 5M4 4h16"/>',
  lock:'<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
  unlock:'<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 7.7-1.5"/>',
  check:'<path d="M4 12.5l5 5L20 6.5"/>',
  alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17v.01"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.01"/>',
  left:'<path d="M15 5l-7 7 7 7"/>',
  right:'<path d="M9 5l7 7-7 7"/>',
  wa:'<path d="M4 20l1.3-4A8 8 0 1 1 8.3 19z"/><path d="M9 9.5c.3 2 2.5 4.6 5 5l1-1.3 1.8.8c-.2 1.3-1.2 2-2.3 2-3.4-.2-6.6-3.4-6.8-6.8 0-1.1.7-2.1 2-2.3l.8 1.8z"/>',
  google:'<path d="M20.5 12.2c0-.6-.1-1.2-.2-1.7H12v3.3h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.6-3.9 2.6-6.5z"/><path d="M12 21c2.4 0 4.5-.8 5.9-2.2L15 16.5c-.8.5-1.8.9-3 .9-2.3 0-4.3-1.6-5-3.7H4v2.3A9 9 0 0 0 12 21z"/><path d="M7 13.7a5.4 5.4 0 0 1 0-3.4V8H4a9 9 0 0 0 0 8z"/><path d="M12 6.6c1.3 0 2.5.5 3.4 1.3L18 5.3A9 9 0 0 0 4 8l3 2.3c.7-2.1 2.7-3.7 5-3.7z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  phone:'<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c.6-4 3.8-6.5 8-6.5s7.4 2.5 8 6.5"/>',
  trend:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  file:'<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
  upload:'<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  tag:'<path d="M3 12V3h9l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.3"/>',
  percent:'<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  layers:'<path d="M12 3 2 8l10 5 10-5z"/><path d="M2 13l10 5 10-5"/><path d="M2 17.5l10 5 10-5" opacity=".5"/>',
  repeat:'<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
  sync:'<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4"/>'
};
function icon(name){return `<i data-i="${name}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg></i>`}
function hydrateIcons(root=document){root.querySelectorAll('i[data-i]:empty').forEach(el=>{el.outerHTML=icon(el.dataset.i)})}

/* ---------- Utils ---------- */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const r2=n=>Math.round((+n||0)*100)/100;
const pad=n=>String(n).padStart(2,'0');
const ymd=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const hm=d=>`${pad(d.getHours())}:${pad(d.getMinutes())}`;
const nowISO=()=>{const d=new Date();return `${ymd(d)}T${hm(d)}:${pad(d.getSeconds())}`};
const today=()=>ymd(new Date());
const parseD=s=>{const [y,m,d]=s.slice(0,10).split('-').map(Number);return new Date(y,m-1,d)};
const addDays=(s,n)=>{const d=parseD(s);d.setDate(d.getDate()+n);return ymd(d)};
const DIAS=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const DIAS_C=['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
const MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const fmtDate=s=>{if(!s)return'';const d=parseD(s);return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`};
const fmtDateLong=s=>{const d=parseD(s);return `${DIAS[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]}`};
const fmtDT=s=>s?`${fmtDate(s)} ${s.slice(11,16)}`:'';
const money=n=>{const v=r2(n);return (v<0?'-':'')+'S/ '+Math.abs(v).toLocaleString('es-PE',{minimumFractionDigits:2,maximumFractionDigits:2})};
const moneyS=n=>{const v=Math.round(+n||0);return 'S/ '+v.toLocaleString('es-PE')};
const monthKey=s=>s.slice(0,7);
const addMonths=(s,n)=>{const d=parseD(s);const day=d.getDate();const r=new Date(d.getFullYear(),d.getMonth()+n,1);const last=new Date(r.getFullYear(),r.getMonth()+1,0).getDate();r.setDate(Math.min(day,last));return ymd(r)};
const startOfWeek=s=>{const d=parseD(s);const k=(d.getDay()+6)%7;d.setDate(d.getDate()-k);return ymd(d)};
const initials=n=>String(n||'?').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
const AV_COLORS=['#1565d8','#3b7ddd','#7c5cd6','#e9a23b','#ef6b5b','#22a06b','#0a2350','#c2489a'];
const avColor=s=>{let h=0;for(const c of String(s))h=(h*31+c.charCodeAt(0))>>>0;return AV_COLORS[h%AV_COLORS.length]};
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const num=v=>{const n=parseFloat(String(v).replace(',','.'));return isNaN(n)?0:n};
const timeToMin=t=>{const [h,m]=t.split(':').map(Number);return h*60+m};
const minToTime=m=>`${pad(Math.floor(m/60))}:${pad(m%60)}`;

/* ---------- Storage ---------- */
const STORE_KEY='facildent_gestion_v1';
const hasNative=typeof window.facilApi!=='undefined';

function seed(){
  const T=(nombre,categoria,precio,duracion=30)=>({id:uid(),nombre,categoria,precio,duracion,activo:true});
  return {
    version:1,
    config:{
      clinica:'Facil Dent',razon:'',ruc:'',direccion:'Av. Los Olivos 104, San Martín de Porres',telefono:'986 466 346',
      horaInicio:'09:00',horaFin:'21:00',refrigerioIni:'13:00',refrigerioFin:'15:00',diasLaborables:[1,2,3,4,5,6],
      intervalo:30,metaMensual:0,
      doctores:[
        {id:'d1',nombre:'Dr. Nicolás Roldán Machado',especialidad:'Odontología general',color:'#1565d8'},
        {id:'d2',nombre:'Dr. Elmer Valverde G.',especialidad:'Implantología',color:'#3b7ddd'},
        {id:'d3',nombre:'Jorge Ramírez',especialidad:'Endodoncia',color:'#7c5cd6'}
      ],
      metodos:['Efectivo','Yape','Plin','Tarjeta','Transferencia'],
      catGastos:['Materiales dentales','Laboratorio','Planilla / honorarios','Alquiler','Luz, agua e internet','Publicidad','Mantenimiento de equipos','Limpieza','Impuestos','Otros'],
      reciboPie:'Gracias por confiar en Facil Dent. ¡Tu sonrisa es nuestra prioridad!',
      correlativo:1
    },
    tratamientos:[
      T('Consulta y diagnóstico','Diagnóstico',30,30),T('Radiografía periapical','Diagnóstico',20,15),T('Radiografía panorámica','Diagnóstico',60,15),
      T('Profilaxis (limpieza dental)','Prevención',80,45),T('Destartraje + profilaxis','Prevención',120,60),T('Fluorización','Prevención',40,20),T('Sellantes (por pieza)','Prevención',40,20),
      T('Curación con resina simple','Operatoria',80,40),T('Curación con resina compuesta','Operatoria',120,45),
      T('Extracción simple','Cirugía',80,30),T('Extracción de tercera molar','Cirugía',300,60),
      T('Endodoncia anterior','Endodoncia',350,60),T('Endodoncia premolar','Endodoncia',450,75),T('Endodoncia molar','Endodoncia',550,90),
      T('Pulpotomía (niños)','Odontopediatría',150,40),
      T('Corona de porcelana','Rehabilitación',800,60),T('Corona de zirconio','Rehabilitación',1200,60),T('Prótesis removible','Rehabilitación',900,45),T('Prótesis total','Rehabilitación',1200,45),
      T('Implante dental','Implantología',2800,90),
      T('Instalación de brackets metálicos','Ortodoncia',1500,90),T('Control de ortodoncia','Ortodoncia',150,30),
      T('Blanqueamiento dental','Estética',450,60)
    ],
    pacientes:[],ventas:[],gastos:[],cajas:[],citas:[],planes:[]
  };
}

let S;
function load(){
  let raw=null;
  try{ raw=hasNative?window.facilApi.load():localStorage.getItem(STORE_KEY) }catch(e){}
  if(raw){ try{ S=JSON.parse(raw) }catch(e){ S=null } }
  if(!S){ S=seed(); persist(true) }
  // migraciones defensivas
  const base=seed();
  for(const k of Object.keys(base)) if(S[k]===undefined) S[k]=base[k];
  for(const k of Object.keys(base.config)) if(S.config[k]===undefined) S.config[k]=base.config[k];
}
let saveTimer=null;
function persist(now){
  const doSave=()=>{
    const json=JSON.stringify(S);
    try{ if(hasNative) window.facilApi.save(json); else localStorage.setItem(STORE_KEY,json) }
    catch(e){ toast('No se pudo guardar: '+e.message,'err') }
  };
  clearTimeout(saveTimer);
  if(now) doSave(); else saveTimer=setTimeout(doSave,150);
}
window.addEventListener('beforeunload',()=>persist(true));

/* ---------- Domain helpers ---------- */
const cajaAbierta=()=>S.cajas.find(c=>!c.cierre);
const pagado=v=>r2(v.pagos.reduce((a,p)=>a+p.monto,0));
const saldo=v=>v.anulada?0:r2(v.total-pagado(v));
const paciente=id=>S.pacientes.find(p=>p.id===id);
const doctor=id=>S.config.doctores.find(d=>d.id===id);
const docName=id=>doctor(id)?.nombre||'—';
const docColor=id=>doctor(id)?.color||'#7b8b9b';

function allPagos(){ // flatten pagos (cash basis)
  const out=[];
  for(const v of S.ventas){ if(v.anulada) continue;
    v.pagos.forEach(p=>out.push({...p,venta:v})) }
  return out;
}
function ingresosRango(a,b){return r2(allPagos().filter(p=>p.fecha.slice(0,10)>=a&&p.fecha.slice(0,10)<=b).reduce((s,p)=>s+p.monto,0))}
function gastosRango(a,b){return r2(S.gastos.filter(g=>g.fecha>=a&&g.fecha<=b).reduce((s,g)=>s+g.monto,0))}
function porCobrar(){return r2(S.ventas.reduce((s,v)=>s+Math.max(0,saldo(v)),0))}

function abrirCaja(monto,nota='',auto=false){
  const c={id:uid(),apertura:nowISO(),montoInicial:r2(monto),cierre:null,nota,auto};
  S.cajas.push(c); persist(); return c;
}
function resumenCaja(c){
  const pagos=allPagos().filter(p=>p.cajaId===c.id);
  const gastos=S.gastos.filter(g=>g.cajaId===c.id);
  const porMetodo={}; S.config.metodos.forEach(m=>porMetodo[m]=0);
  pagos.forEach(p=>porMetodo[p.metodo]=r2((porMetodo[p.metodo]||0)+p.monto));
  const gastosEf=r2(gastos.filter(g=>g.metodo==='Efectivo').reduce((s,g)=>s+g.monto,0));
  const gastosTot=r2(gastos.reduce((s,g)=>s+g.monto,0));
  const ingresos=r2(pagos.reduce((s,p)=>s+p.monto,0));
  const efectivoEsperado=r2(c.montoInicial+(porMetodo['Efectivo']||0)-gastosEf);
  return {pagos,gastos,porMetodo,gastosEf,gastosTot,ingresos,efectivoEsperado,neto:r2(ingresos-gastosTot)};
}
function asegurarCaja(){
  let c=cajaAbierta();
  if(!c){ c=abrirCaja(0,'Apertura automática',true); toast('Caja abierta automáticamente (monto inicial S/ 0.00)','ok'); renderSide() }
  return c;
}
function nextRecibo(){const n=S.config.correlativo||1;S.config.correlativo=n+1;return 'R-'+String(n).padStart(6,'0')}

/* ---------- UI infra ---------- */
function toast(msg,type='ok'){
  const el=document.createElement('div');el.className='toast '+type;
  el.innerHTML=icon(type==='err'?'alert':'check')+`<span>${esc(msg)}</span>`;
  $('#toast-root').appendChild(el);setTimeout(()=>{el.style.opacity='0';el.style.transition='opacity .3s'},3200);setTimeout(()=>el.remove(),3600);
}
let modalStack=[];
function openModal({title,body,foot='',size='',onMount,onClose}){
  const ov=document.createElement('div');ov.className='ov';
  ov.innerHTML=`<div class="modal ${size}" role="dialog"><div class="modal-h"><h2>${title}</h2><button class="btn icon ghost" data-close>${icon('x')}</button></div><div class="modal-b">${body}</div>${foot?`<div class="modal-f">${foot}</div>`:''}</div>`;
  $('#modal-root').appendChild(ov);
  const close=()=>{ov.remove();modalStack=modalStack.filter(m=>m!==api);onClose&&onClose()};
  const api={el:ov,close};
  ov.addEventListener('mousedown',e=>{if(e.target===ov) ov._down=true});
  ov.addEventListener('mouseup',e=>{if(e.target===ov&&ov._down) close();ov._down=false});
  ov.querySelector('[data-close]').onclick=close;
  modalStack.push(api);
  onMount&&onMount(ov.querySelector('.modal'),close);
  const f=ov.querySelector('[autofocus]');if(f) setTimeout(()=>f.focus(),30);
  return api;
}
function confirmBox(msg,{ok='Confirmar',danger=false}={}){
  return new Promise(res=>{
    let done=false;
    openModal({title:'Confirmar',size:'sm',body:`<p style="margin:0;line-height:1.5">${msg}</p>`,
      foot:`<button class="btn" data-no>Cancelar</button><button class="btn ${danger?'danger solid':'primary'}" data-yes>${ok}</button>`,
      onMount:(m,close)=>{m.querySelector('[data-no]').onclick=()=>{done=true;close();res(false)};m.querySelector('[data-yes]').onclick=()=>{done=true;close();res(true)};setTimeout(()=>m.querySelector('[data-yes]').focus(),30)},
      onClose:()=>{if(!done)res(false)}});
  });
}
function download(name,content,type='text/plain'){
  const blob=content instanceof Blob?content:new Blob([content],{type});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);
}
function openExternal(url){ if(hasNative&&window.facilApi.openExternal) window.facilApi.openExternal(url); else window.open(url,'_blank') }
function printHTML(html){
  const f=$('#print-frame');const d=f.contentDocument;
  d.open();d.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    body{font-family:"Segoe UI",Arial,sans-serif;color:#111;margin:0;padding:18px;font-size:12px}
    h1{font-size:18px;margin:0}h2{font-size:14px;margin:14px 0 6px}
    table{width:100%;border-collapse:collapse}td,th{padding:5px 4px;border-bottom:1px solid #ddd;text-align:left}th{font-size:11px;text-transform:uppercase;color:#555}
    .r{text-align:right}.c{text-align:center}.muted{color:#666}.tot td{font-weight:700;border-top:2px solid #111;border-bottom:0}
    .ticket{width:300px;margin:0 auto}.ticket td{border:0;padding:2px 0}.hr{border-top:1px dashed #999;margin:8px 0}
    @page{margin:10mm}
  </style></head><body>${html}</body></html>`);d.close();
  setTimeout(()=>{f.contentWindow.focus();f.contentWindow.print()},250);
}
function csv(rows){return '﻿'+rows.map(r=>r.map(c=>{const s=String(c??'');return /[;"\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s}).join(';')).join('\r\n')}

/* ---------- Navigation ---------- */
const PAGES=[
  {sec:'Principal'},
  {id:'inicio',t:'Inicio',i:'home'},
  {id:'caja',t:'Caja',i:'box'},
  {id:'cobros',t:'Cobros',i:'receipt'},
  {id:'gastos',t:'Gastos',i:'wallet'},
  {sec:'Clínica'},
  {id:'agenda',t:'Agenda',i:'cal'},
  {id:'planes',t:'Planes de tratamiento',i:'layers'},
  {id:'pacientes',t:'Pacientes',i:'users'},
  {id:'tratamientos',t:'Tratamientos y precios',i:'tooth'},
  {sec:'Análisis'},
  {id:'reportes',t:'Reportes',i:'chart'},
  {id:'config',t:'Configuración',i:'gear'},
  {id:'historia',t:'Historia clínica',i:'file',hidden:true}
];
let page='inicio';
const UI={agendaWeek:startOfWeek(today()),agendaView:'semana',agendaDoc:'',cobrosQ:'',cobrosDesde:addDays(today(),-30),cobrosHasta:today(),cobrosFiltro:'todos',
  gastosMes:monthKey(today()),gastosQ:'',gastosCat:'',tratQ:'',tratCat:'',pacQ:'',repPreset:'mes',repDesde:today().slice(0,8)+'01',repHasta:today(),cfgTab:'clinica',planQ:'',planEstado:'Activo',citaQ:'',citaDesde:'',citaHasta:'',citaEstado:''};

function go(p){page=p;render()}
function renderNav(){
  const deudores=S.ventas.filter(v=>saldo(v)>0).length;
  const citasHoy=S.citas.filter(c=>c.fecha===today()&&!['Cancelada','No asistió','Atendida'].includes(c.estado)).length;
  $('#nav').innerHTML=PAGES.filter(p=>!p.hidden).map(p=>p.sec?`<div class="sec">${p.sec}</div>`:
    `<a class="${page===p.id||(page==='historia'&&p.id==='pacientes')?'on':''}" data-go="${p.id}">${icon(p.i)}<span>${p.t}</span>${p.id==='agenda'&&citasHoy?`<em class="badge" style="background:#1565d8;font-style:normal">${citasHoy}</em>`:''}${p.id==='cobros'&&deudores?`<em class="badge" style="font-style:normal" title="Pacientes con saldo pendiente">${deudores}</em>`:''}</a>`).join('');
}
function renderSide(){
  const c=cajaAbierta();
  $('#side-caja').innerHTML=`<div class="side-caja ${c?'open':''}" data-go="caja"><span class="dot"></span><div><b>${c?'Caja abierta':'Caja cerrada'}</b>${c?`Efectivo: ${money(resumenCaja(c).efectivoEsperado)}`:'Clic para abrir'}</div></div>${S.config.pinHash?`<button class="side-lock" data-action="lock">${icon('lock')}Bloquear</button>`:''}`;
}
function render(){
  renderNav();renderSide();
  const P=PAGES.find(p=>p.id===page);
  $('#page-title').textContent=P.t;
  $('#page-date').textContent=fmtDateLong(today())+' de '+new Date().getFullYear();
  const v=$('#view');
  v.innerHTML=VIEWS[page]();
  hydrateIcons(v);
  AFTER[page]&&AFTER[page](v);
}

/* =================== VIEWS =================== */
const VIEWS={},AFTER={};

/* ---------- INICIO ---------- */
VIEWS.inicio=()=>{
  const t=today(),mes=monthKey(t),ini=mes+'-01';
  const d=parseD(t);const prevIni=ymd(new Date(d.getFullYear(),d.getMonth()-1,1));
  const prevSame=ymd(new Date(d.getFullYear(),d.getMonth()-1,Math.min(d.getDate(),new Date(d.getFullYear(),d.getMonth(),0).getDate())));
  const ingHoy=ingresosRango(t,t),ingMes=ingresosRango(ini,t),ingPrev=ingresosRango(prevIni,prevSame);
  const gasMes=gastosRango(ini,t),util=r2(ingMes-gasMes),cobrar=porCobrar();
  const varPct=ingPrev>0?Math.round((ingMes-ingPrev)/ingPrev*100):null;
  const atendHoy=new Set(allPagos().filter(p=>p.fecha.slice(0,10)===t).map(p=>p.venta.id)).size;
  const citasHoy=S.citas.filter(c=>c.fecha===t).sort((a,b)=>a.hora.localeCompare(b.hora));
  const c=cajaAbierta();const rc=c&&resumenCaja(c);
  const meta=S.config.metaMensual;
  // top tratamientos mes (facturado)
  const top={};S.ventas.filter(v=>!v.anulada&&v.fecha.slice(0,10)>=ini).forEach(v=>v.items.forEach(it=>{top[it.nombre]=(top[it.nombre]||0)+it.precio*it.cant}));
  const topArr=Object.entries(top).sort((a,b)=>b[1]-a[1]).slice(0,6);const topMax=topArr[0]?.[1]||1;
  // métodos mes
  const met={};allPagos().filter(p=>p.fecha.slice(0,10)>=ini).forEach(p=>met[p.metodo]=(met[p.metodo]||0)+p.monto);
  const empty=!S.ventas.length&&!S.gastos.length;
  return `
  ${empty?`<div class="notice blue mb">${icon('info')}<div><b>¡Bienvenido a Facil Dent Gestión!</b> Empieza revisando tus <a class="link" data-go="tratamientos">precios de tratamientos</a>, luego registra tu primer cobro con <b>F2</b> o agenda una cita con <b>F3</b>. Si quieres ver cómo luce con datos, carga el <a class="link" data-action="demo">ejemplo de demostración</a> (lo puedes borrar después).</div></div>`:''}
  <div class="grid g5">
    <div class="card kpi"><div class="lbl">${icon('cash')}Ingresos de hoy</div><div class="val num">${money(ingHoy)}</div><div class="foot">${atendHoy} cobro${atendHoy===1?'':'s'} registrado${atendHoy===1?'':'s'}</div></div>
    <div class="card kpi c-blue"><div class="lbl">${icon('trend')}Ingresos del mes</div><div class="val num">${money(ingMes)}</div><div class="foot">${varPct===null?'Sin datos del mes anterior':`<span class="${varPct>=0?'up':'down'}">${varPct>=0?'▲':'▼'} ${Math.abs(varPct)}%</span> vs. mismo periodo mes anterior`}</div></div>
    <div class="card kpi c-coral"><div class="lbl">${icon('wallet')}Gastos del mes</div><div class="val num">${money(gasMes)}</div><div class="foot">${S.gastos.filter(g=>g.fecha>=ini).length} gastos registrados</div></div>
    <div class="card kpi c-green"><div class="lbl">${icon('chart')}Utilidad del mes</div><div class="val num" style="color:${util<0?'var(--coral)':'inherit'}">${money(util)}</div><div class="foot">${ingMes>0?`Margen ${Math.round(util/ingMes*100)}%`:'Ingresos − gastos'}</div></div>
    <div class="card kpi c-amber"><div class="lbl">${icon('clock')}Por cobrar</div><div class="val num">${money(cobrar)}</div><div class="foot"><a class="link" data-action="ver-deudas">${S.ventas.filter(v=>saldo(v)>0).length} paciente(s) con saldo</a></div></div>
  </div>
  ${(()=>{const v=S.planes.filter(x=>x.estado==='Activo').map(planStats).filter(x=>x.montoVencido>0);return v.length?`<div class="notice coral mt">${icon('alert')}<div><b>${v.length} paciente(s) con cuotas vencidas</b> por ${money(v.reduce((s,x)=>s+x.montoVencido,0))} en planes de tratamiento. <a class="link" data-action="ver-vencidas">Ver planes</a></div></div>`:''})()}
  ${meta>0?`<div class="card mt" style="padding:14px 18px"><div class="between"><b>Meta del mes: ${moneyS(meta)}</b><span class="num">${Math.round(ingMes/meta*100)}% alcanzado · faltan ${money(Math.max(0,meta-ingMes))}</span></div><div class="mb-track mt" style="height:10px;margin-top:10px"><div class="mb-fill" style="width:${Math.min(100,ingMes/meta*100)}%;background:linear-gradient(90deg,#29a8f0,#0d47a1)"></div></div></div>`:''}
  <div class="grid mt" style="grid-template-columns:2fr 1fr">
    <div class="card"><div class="card-h"><h3>Ingresos vs. gastos <span class="sub">· últimos 14 días</span></h3><div class="legend"><span><em style="background:#1565d8"></em>Ingresos</span><span><em style="background:#ef6b5b"></em>Gastos</span></div></div><div class="card-b" id="chart14"></div></div>
    <div class="card"><div class="card-h"><h3>Caja actual</h3>${c?'<span class="pill green">Abierta</span>':'<span class="pill gray">Cerrada</span>'}</div><div class="card-b">
      ${c?`<div class="muted small">Abierta ${fmtDT(c.apertura)}</div>
        <div class="cash-big num" style="margin:6px 0 2px">${money(rc.efectivoEsperado)}</div><div class="muted small">Efectivo que debe haber en caja</div>
        <div class="mt" style="display:flex;flex-direction:column;gap:6px">${Object.entries(rc.porMetodo).filter(([,v])=>v>0).map(([m,v])=>`<div class="between small"><span>${esc(m)}</span><b class="num">${money(v)}</b></div>`).join('')||'<div class="muted small">Aún no hay cobros en esta caja.</div>'}
        ${rc.gastosTot>0?`<div class="between small"><span>Gastos pagados</span><b class="num down">−${money(rc.gastosTot)}</b></div>`:''}</div>
        <button class="btn dark block mt" data-go="caja">${icon('lock')}Ir a cierre de caja</button>`
      :`<p class="muted" style="margin-top:0">No hay una caja abierta. Ábrela al iniciar el día con el sencillo que tienes, o se abrirá sola al registrar el primer cobro.</p><button class="btn primary block" data-action="abrir-caja">${icon('unlock')}Abrir caja</button>`}
    </div></div>
  </div>
  <div class="grid g3 mt">
    <div class="card"><div class="card-h"><h3>Citas de hoy</h3><button class="btn sm" data-go="agenda">Ver agenda</button></div><div class="card-b tight">
      ${citasHoy.length?citasHoy.slice(0,7).map(ci=>`<div class="list-item" style="cursor:pointer" data-cita="${ci.id}"><div class="time-box">${ci.hora}<small>${ci.duracion} min</small></div><div class="grow"><b>${esc(ci.pacienteNombre)}</b><div class="muted small">${esc(ci.tratamiento||'Consulta')} · ${esc(docName(ci.doctor).replace(/^Dr\. /,''))}</div></div>${estadoPill(ci.estado)}</div>`).join(''):`<div class="empty">${icon('cal')}No hay citas para hoy</div>`}
    </div></div>
    <div class="card"><div class="card-h"><h3>Más vendidos del mes</h3></div><div class="card-b">
      ${topArr.length?`<div class="bar-list">${topArr.map(([n,v])=>`<div class="bl"><div class="bl-top"><span>${esc(n)}</span><b class="num">${moneyS(v)}</b></div><div class="bl-track"><div class="bl-fill" style="width:${v/topMax*100}%"></div></div></div>`).join('')}</div>`:`<div class="empty">${icon('tooth')}Sin ventas este mes</div>`}
    </div></div>
    <div class="card"><div class="card-h"><h3>Cobros por método <span class="sub">· mes</span></h3></div><div class="card-b" id="donut-met" data-v='${esc(JSON.stringify(met))}'></div></div>
  </div>`;
};
AFTER.inicio=v=>{
  const days=[];for(let i=13;i>=0;i--){const d=addDays(today(),-i);days.push({l:d,a:ingresosRango(d,d),b:gastosRango(d,d)})}
  $('#chart14',v).innerHTML=barChart(days);
  const met=JSON.parse($('#donut-met',v).dataset.v);$('#donut-met',v).innerHTML=donut(met);
};
function estadoPill(e){const m={Programada:'blue',Confirmada:'teal',Atendida:'green','No asistió':'coral',Cancelada:'gray'};return `<span class="pill ${m[e]||'gray'}">${esc(e)}</span>`}
const MET_COLORS={Efectivo:'#22a06b',Yape:'#7c5cd6',Plin:'#14b8c4',Tarjeta:'#3b7ddd',Transferencia:'#e9a23b'};
const metColor=(m,i)=>MET_COLORS[m]||AV_COLORS[(i+3)%AV_COLORS.length];

function barChart(days){
  const W=760,H=230,pl=52,pb=26,pt=10,pr=8;const max=Math.max(100,...days.map(d=>Math.max(d.a,d.b)));
  const nice=Math.pow(10,Math.floor(Math.log10(max)));const top=Math.ceil(max/nice)*nice;
  const cw=(W-pl-pr)/days.length;const bw=Math.min(16,cw/3);
  const y=v=>pt+(H-pt-pb)*(1-v/top);
  let s=`<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="height:230px">`;
  for(let i=0;i<=4;i++){const v=top/4*i;s+=`<line class="grid-l" x1="${pl}" x2="${W-pr}" y1="${y(v)}" y2="${y(v)}"/><text x="${pl-8}" y="${y(v)+4}" text-anchor="end">${v>=1000?(v/1000).toFixed(v%1000?1:0)+'k':v}</text>`}
  days.forEach((d,i)=>{const x=pl+cw*i+cw/2;const dd=parseD(d.l);
    s+=`<rect x="${x-bw-1}" y="${y(d.a)}" width="${bw}" height="${Math.max(0,H-pb-y(d.a))}" rx="3" fill="#1565d8"><title>${fmtDate(d.l)} · Ingresos ${money(d.a)}</title></rect>`;
    s+=`<rect x="${x+1}" y="${y(d.b)}" width="${bw}" height="${Math.max(0,H-pb-y(d.b))}" rx="3" fill="#ef6b5b"><title>${fmtDate(d.l)} · Gastos ${money(d.b)}</title></rect>`;
    s+=`<text x="${x}" y="${H-8}" text-anchor="middle" ${d.l===today()?'style="fill:#0f2233;font-weight:700"':''}>${DIAS_C[dd.getDay()]} ${dd.getDate()}</text>`});
  return s+'</svg>';
}
function donut(obj){
  const ent=Object.entries(obj).filter(([,v])=>v>0);const tot=ent.reduce((s,[,v])=>s+v,0);
  if(!tot) return `<div class="empty">${icon('cash')}Sin cobros este mes</div>`;
  const R=52,C=2*Math.PI*R;let off=0;
  let s=`<svg width="140" height="140" viewBox="0 0 140 140"><circle cx="70" cy="70" r="${R}" fill="none" stroke="#eef2f6" stroke-width="18"/>`;
  ent.forEach(([m,v],i)=>{const len=v/tot*C;s+=`<circle cx="70" cy="70" r="${R}" fill="none" stroke="${metColor(m,i)}" stroke-width="18" stroke-dasharray="${Math.max(0,len-1.5)} ${C}" stroke-dashoffset="${-off}" transform="rotate(-90 70 70)"><title>${m}: ${money(v)}</title></circle>`;off+=len});
  s+=`<text x="70" y="66" text-anchor="middle" style="font-size:11px;fill:#7b8b9b">Total</text><text x="70" y="84" text-anchor="middle" style="font-size:15px;font-weight:700;fill:#0f2233">${moneyS(tot)}</text></svg>`;
  return `<div class="donut-wrap">${s}<div class="lgd">${ent.map(([m,v],i)=>`<div><em style="background:${metColor(m,i)}"></em>${esc(m)}<span class="num">${Math.round(v/tot*100)}%</span></div>`).join('')}</div></div>`;
}

/* ---------- CAJA ---------- */
VIEWS.caja=()=>{
  const c=cajaAbierta();
  const hist=S.cajas.filter(x=>x.cierre).sort((a,b)=>b.cierre.localeCompare(a.cierre)).slice(0,30);
  let main='';
  if(c){
    const r=resumenCaja(c);const maxM=Math.max(1,...Object.values(r.porMetodo));
    const movs=[...r.pagos.map(p=>({f:p.fecha,tipo:'in',desc:`${p.venta.pacienteNombre} — ${p.venta.items.map(i=>i.nombre).join(', ')}`,ref:p.venta.recibo,met:p.metodo,m:p.monto,vid:p.venta.id,abono:p.abono})),
      ...r.gastos.map(g=>({f:g.fecha+'T'+(g.hora||'00:00'),tipo:'out',desc:`${g.categoria}${g.descripcion?' — '+g.descripcion:''}`,met:g.metodo,m:g.monto,gid:g.id}))].sort((a,b)=>b.f.localeCompare(a.f));
    main=`
    <div class="card"><div class="caja-hero">
      <div class="state">${icon('unlock')}</div>
      <div class="grow"><div class="center"><h3 style="margin:0;font-size:17px">Caja abierta</h3><span class="pill green">En curso</span>${c.auto?'<span class="pill gray">apertura automática</span>':''}</div>
        <div class="muted small" style="margin-top:3px">Desde ${fmtDT(c.apertura)} · monto inicial ${money(c.montoInicial)}</div></div>
      <div class="right"><div class="muted small">Efectivo esperado en caja</div><div class="cash-big num">${money(r.efectivoEsperado)}</div></div>
      <div class="center" style="flex-direction:column;align-items:stretch;gap:8px">
        <button class="btn primary" data-action="nuevo-cobro">${icon('plus')}Cobrar</button>
        <button class="btn dark" data-action="cerrar-caja">${icon('lock')}Cerrar caja</button>
      </div>
    </div></div>
    <div class="grid g4 mt">
      <div class="card kpi"><div class="lbl">${icon('cash')}Total cobrado</div><div class="val num">${money(r.ingresos)}</div><div class="foot">${r.pagos.length} pago(s)</div></div>
      <div class="card kpi c-coral"><div class="lbl">${icon('wallet')}Gastos de caja</div><div class="val num">${money(r.gastosTot)}</div><div class="foot">En efectivo: ${money(r.gastosEf)}</div></div>
      <div class="card kpi c-green"><div class="lbl">${icon('chart')}Neto del turno</div><div class="val num">${money(r.neto)}</div><div class="foot">Cobrado − gastos</div></div>
      <div class="card kpi c-blue"><div class="lbl">${icon('box')}Fondo inicial</div><div class="val num">${money(c.montoInicial)}</div><div class="foot"><a class="link" data-action="editar-fondo">Corregir monto</a></div></div>
    </div>
    <div class="grid mt" style="grid-template-columns:1fr 2fr">
      <div class="card"><div class="card-h"><h3>Cuadre por método de pago</h3></div><div class="card-b"><div class="method-bar">
        ${Object.entries(r.porMetodo).map(([m,v],i)=>`<div class="mb-row"><span>${esc(m)}</span><div class="mb-track"><div class="mb-fill" style="width:${v/maxM*100}%;background:${metColor(m,i)}"></div></div><b class="num right">${money(v)}</b></div>`).join('')}
        <div class="mb-row" style="border-top:1px solid var(--line2);padding-top:10px"><b>Total</b><span></span><b class="num right">${money(r.ingresos)}</b></div>
      </div>
      <div class="notice green mt">${icon('info')}<div>Efectivo esperado = fondo ${money(c.montoInicial)} + cobros en efectivo ${money(r.porMetodo.Efectivo||0)} − gastos en efectivo ${money(r.gastosEf)}</div></div>
      </div></div>
      <div class="card"><div class="card-h"><h3>Movimientos de esta caja</h3><button class="btn sm" data-action="nuevo-gasto">${icon('plus')}Registrar gasto</button></div>
        <div class="tbl-wrap">${movs.length?`<table class="t"><thead><tr><th>Hora</th><th>Detalle</th><th>Método</th><th class="r">Monto</th></tr></thead><tbody>
        ${movs.map(m=>`<tr ${m.vid?`data-venta="${m.vid}" style="cursor:pointer"`:''}><td class="num">${m.f.slice(11,16)}<div class="muted small">${fmtDate(m.f)}</div></td><td>${esc(m.desc)} ${m.ref?`<span class="muted small">${m.ref}</span>`:''}${m.abono?' <span class="pill amber">abono</span>':''}${m.tipo==='out'?' <span class="pill coral">gasto</span>':''}</td><td>${esc(m.met)}</td><td class="r num ${m.tipo==='out'?'down':''}"><b>${m.tipo==='out'?'−':''}${money(m.m)}</b></td></tr>`).join('')}
        </tbody></table>`:`<div class="empty">${icon('receipt')}Todavía no hay movimientos. Presiona <b>F2</b> para registrar un cobro.</div>`}</div>
      </div>
    </div>`;
  } else {
    main=`<div class="card"><div class="caja-hero">
      <div class="state closed">${icon('lock')}</div>
      <div class="grow"><h3 style="margin:0;font-size:17px">La caja está cerrada</h3><div class="muted small" style="margin-top:3px">Ábrela al comenzar el turno indicando el efectivo (sencillo) con el que empiezas.</div></div>
      <button class="btn primary" data-action="abrir-caja">${icon('unlock')}Abrir caja</button>
    </div></div>`;
  }
  return main+`
  <div class="card mt2"><div class="card-h"><h3>Historial de cierres</h3><span class="sub">Últimos 30</span></div>
  ${hist.length?`<div class="tbl-wrap"><table class="t"><thead><tr><th>Apertura</th><th>Cierre</th><th class="r">Fondo</th><th class="r">Cobrado</th><th class="r">Gastos</th><th class="r">Efectivo esperado</th><th class="r">Contado</th><th class="r">Diferencia</th><th></th></tr></thead><tbody>
  ${hist.map(h=>`<tr><td>${fmtDT(h.apertura)}</td><td>${fmtDT(h.cierre)}</td><td class="r num">${money(h.montoInicial)}</td><td class="r num">${money(h.resumen?.ingresos)}</td><td class="r num">${money(h.resumen?.gastosTot)}</td><td class="r num">${money(h.resumen?.efectivoEsperado)}</td><td class="r num">${money(h.contado)}</td><td class="r num">${difPill(h.diferencia)}</td><td class="actions"><button class="btn xs" data-action="print-cierre" data-id="${h.id}">${icon('print')}</button></td></tr>`).join('')}
  </tbody></table></div>`:`<div class="empty">${icon('box')}Aún no hay cierres de caja</div>`}</div>`;
};
function difPill(d){d=r2(d);if(Math.abs(d)<0.01)return '<span class="pill green">Cuadra</span>';return `<span class="pill ${d>0?'blue':'coral'}">${d>0?'Sobra ':'Falta '}${money(Math.abs(d))}</span>`}

function modalAbrirCaja(){
  const last=S.cajas.filter(c=>c.cierre).sort((a,b)=>b.cierre.localeCompare(a.cierre))[0];
  openModal({title:'Abrir caja',size:'sm',body:`
    <div class="field"><label>Efectivo inicial (sencillo)</label><input class="inp money" id="ac-m" type="number" step="0.10" min="0" value="${last?.dejado??0}" autofocus></div>
    ${last?.dejado?`<div class="muted small mt">Sugerido: ${money(last.dejado)} que se dejó en el último cierre.</div>`:''}
    <div class="field mt"><label>Nota (opcional)</label><input class="inp" id="ac-n" placeholder="Turno mañana, responsable…"></div>`,
    foot:`<button class="btn" data-close2>Cancelar</button><button class="btn primary" id="ac-ok">${icon('unlock')}Abrir caja</button>`,
    onMount:(m,close)=>{m.querySelector('[data-close2]').onclick=close;
      const ok=()=>{abrirCaja(num($('#ac-m',m).value),$('#ac-n',m).value);close();toast('Caja abierta');render()};
      $('#ac-ok',m).onclick=ok;$('#ac-m',m).onkeydown=e=>{if(e.key==='Enter')ok()}}});
}
function modalCerrarCaja(){
  const c=cajaAbierta();if(!c)return;const r=resumenCaja(c);
  const den=[200,100,50,20,10,5,2,1,0.5,0.2,0.1];
  openModal({title:'Cierre de caja',size:'lg',body:`
    <div class="grid g2">
      <div>
        <h4 style="margin:0 0 10px">Resumen del turno</h4>
        <div class="tot-line"><span>Fondo inicial</span><b class="num">${money(c.montoInicial)}</b></div>
        ${Object.entries(r.porMetodo).map(([m,v])=>`<div class="tot-line"><span>Cobros · ${esc(m)}</span><b class="num">${money(v)}</b></div>`).join('')}
        <div class="tot-line"><span>Gastos en efectivo</span><b class="num down">−${money(r.gastosEf)}</b></div>
        ${r.gastosTot-r.gastosEf>0?`<div class="tot-line"><span>Gastos otros medios</span><b class="num down">−${money(r.gastosTot-r.gastosEf)}</b></div>`:''}
        <div class="tot-line big"><span>Efectivo esperado</span><span class="num">${money(r.efectivoEsperado)}</span></div>
        <div class="notice blue mt">${icon('info')}<div>Los cobros por Yape, Plin, tarjeta y transferencia no están en la gaveta: verifícalos en tus apps/banco (${money(r.ingresos-(r.porMetodo.Efectivo||0))}).</div></div>
      </div>
      <div>
        <h4 style="margin:0 0 10px">Conteo de efectivo <span class="muted small">(opcional: usa los billetes y monedas)</span></h4>
        <div class="denoms">${den.map(d=>`<div class="d"><span>${d>=10?'Billete':'Moneda'}</span><b>S/ ${d.toFixed(d<1?2:0)}</b><input class="inp sm" type="number" min="0" data-den="${d}" placeholder="0"></div>`).join('')}</div>
        <div class="field mt"><label>Efectivo contado</label><input class="inp money" id="cc-cont" type="number" step="0.10" value="${r.efectivoEsperado.toFixed(2)}"></div>
        <div id="cc-dif" class="mt"></div>
        <div class="field mt"><label>Efectivo que se queda como fondo para mañana</label><input class="inp money" id="cc-dej" type="number" step="0.10" value="${c.montoInicial.toFixed(2)}"></div>
        <div class="field mt"><label>Observaciones</label><input class="inp" id="cc-nota" placeholder="Opcional"></div>
      </div>
    </div>`,
    foot:`<button class="btn" data-x>Cancelar</button><button class="btn dark" id="cc-ok">${icon('lock')}Cerrar caja</button><button class="btn primary" id="cc-okp">${icon('print')}Cerrar e imprimir</button>`,
    onMount:(m,close)=>{
      m.querySelector('[data-x]').onclick=close;
      const upd=()=>{const cont=num($('#cc-cont',m).value);const d=r2(cont-r.efectivoEsperado);
        $('#cc-dif',m).innerHTML=Math.abs(d)<0.01?`<div class="notice green">${icon('check')}<div><b>¡La caja cuadra!</b></div></div>`:`<div class="notice ${d>0?'blue':'coral'}">${icon('alert')}<div><b>${d>0?'Sobran':'Faltan'} ${money(Math.abs(d))}</b> respecto a lo esperado.</div></div>`;
        const dej=$('#cc-dej',m);dej.max=cont};
      $$('[data-den]',m).forEach(i=>i.oninput=()=>{let t=0;$$('[data-den]',m).forEach(x=>t+=num(x.value)*num(x.dataset.den));$('#cc-cont',m).value=r2(t).toFixed(2);upd()});
      $('#cc-cont',m).oninput=upd;upd();
      const finish=pr=>{c.cierre=nowISO();c.contado=r2(num($('#cc-cont',m).value));c.diferencia=r2(c.contado-r.efectivoEsperado);c.dejado=r2(num($('#cc-dej',m).value));c.retiro=r2(c.contado-c.dejado);c.notaCierre=$('#cc-nota',m).value;
        c.resumen={ingresos:r.ingresos,gastosTot:r.gastosTot,gastosEf:r.gastosEf,efectivoEsperado:r.efectivoEsperado,porMetodo:r.porMetodo,nPagos:r.pagos.length};
        persist(true);close();toast('Caja cerrada correctamente');if(pr)printCierre(c);render()};
      $('#cc-ok',m).onclick=()=>finish(false);$('#cc-okp',m).onclick=()=>finish(true);
    }});
}
function printCierre(c){
  const r=c.resumen;const cfg=S.config;
  const pagos=allPagos().filter(p=>p.cajaId===c.id);const gastos=S.gastos.filter(g=>g.cajaId===c.id);
  printHTML(`<img src="${LOGO_DATA}" style="width:56px;height:56px;float:right"><h1>${esc(cfg.clinica)} — Cierre de caja</h1><div class="muted">Apertura: ${fmtDT(c.apertura)} · Cierre: ${fmtDT(c.cierre)}</div>
  <h2>Resumen</h2><table>
  <tr><td>Fondo inicial</td><td class="r">${money(c.montoInicial)}</td></tr>
  ${Object.entries(r.porMetodo).map(([m,v])=>`<tr><td>Cobros ${esc(m)}</td><td class="r">${money(v)}</td></tr>`).join('')}
  <tr><td>Total cobrado</td><td class="r"><b>${money(r.ingresos)}</b></td></tr>
  <tr><td>Gastos (efectivo)</td><td class="r">-${money(r.gastosEf)}</td></tr><tr><td>Gastos (total)</td><td class="r">-${money(r.gastosTot)}</td></tr>
  <tr><td>Efectivo esperado</td><td class="r">${money(r.efectivoEsperado)}</td></tr><tr><td>Efectivo contado</td><td class="r">${money(c.contado)}</td></tr>
  <tr class="tot"><td>Diferencia</td><td class="r">${money(c.diferencia)}</td></tr>
  <tr><td>Fondo que queda</td><td class="r">${money(c.dejado)}</td></tr><tr><td>Retiro de efectivo</td><td class="r">${money(c.retiro)}</td></tr></table>
  <h2>Cobros (${pagos.length})</h2><table><tr><th>Hora</th><th>Recibo</th><th>Paciente</th><th>Método</th><th class="r">Monto</th></tr>
  ${pagos.map(p=>`<tr><td>${p.fecha.slice(11,16)}</td><td>${p.venta.recibo}</td><td>${esc(p.venta.pacienteNombre)}</td><td>${esc(p.metodo)}</td><td class="r">${money(p.monto)}</td></tr>`).join('')}</table>
  ${gastos.length?`<h2>Gastos (${gastos.length})</h2><table><tr><th>Categoría</th><th>Detalle</th><th>Método</th><th class="r">Monto</th></tr>${gastos.map(g=>`<tr><td>${esc(g.categoria)}</td><td>${esc(g.descripcion)}</td><td>${esc(g.metodo)}</td><td class="r">${money(g.monto)}</td></tr>`).join('')}</table>`:''}
  ${c.notaCierre?`<p><b>Observaciones:</b> ${esc(c.notaCierre)}</p>`:''}
  <p style="margin-top:50px">_______________________<br>Firma responsable</p>`);
}

/* ---------- POS: NUEVO COBRO ---------- */
function modalCobro(pre={}){
  const st={pacienteId:pre.pacienteId||null,pacienteNombre:pre.pacienteNombre||'',telefono:'',items:[],descVal:0,descTipo:'S/',pagos:[{metodo:'Efectivo',monto:0}],doctor:pre.doctor||S.config.doctores[0]?.id||'',nota:'',citaId:pre.citaId||null,touchedPago:false,recibido:''};
  if(pre.tratamiento){const t=S.tratamientos.find(x=>x.nombre===pre.tratamiento);if(t)st.items.push({tratId:t.id,nombre:t.nombre,precio:t.precio,cant:1})}
  const total=()=>{const sub=r2(st.items.reduce((s,i)=>s+i.precio*i.cant,0));const d=st.descTipo==='%'?r2(sub*Math.min(100,st.descVal)/100):Math.min(sub,st.descVal);return {sub,desc:r2(d),total:r2(sub-d)}};
  const cats=[...new Set(S.tratamientos.filter(t=>t.activo).map(t=>t.categoria))];
  openModal({title:'Nuevo cobro',size:'xl',body:`<div class="pos" style="margin:-18px -20px">
    <div class="pos-l">
      <div class="grid g2">
        <div class="field ac"><label>Paciente</label><input class="inp" id="p-pac" placeholder="Buscar por nombre o DNI…" autocomplete="off" value="${esc(st.pacienteNombre)}" autofocus><div class="ac-list" id="p-ac" hidden></div></div>
        <div class="field"><label>Atendido por</label><select class="inp" id="p-doc">${S.config.doctores.map(d=>`<option value="${d.id}" ${d.id===st.doctor?'selected':''}>${esc(d.nombre)}</option>`).join('')}</select></div>
      </div>
      <div id="p-pacinfo" class="small muted" style="margin-top:6px;min-height:18px"></div>
      <div class="between mt"><label style="font-size:12px;font-weight:600;color:var(--ink2)">Agregar tratamientos</label><button class="link small" id="p-libre">+ Concepto libre</button></div>
      <div class="row" style="gap:8px;margin:6px 0 8px"><div class="search grow">${icon('search')}<input class="inp sm" id="p-q" placeholder="Buscar tratamiento…"></div>
        <select class="inp sm" id="p-cat" style="width:170px"><option value="">Todas las categorías</option>${cats.map(c=>`<option>${esc(c)}</option>`).join('')}</select></div>
      <div class="cat-list" id="p-cats"></div>
      <div class="items"><table class="t"><thead><tr><th>Concepto</th><th style="width:70px">Cant.</th><th style="width:100px" class="r">Precio</th><th class="r" style="width:100px">Subtotal</th><th style="width:36px"></th></tr></thead><tbody id="p-items"></tbody></table></div>
      <div class="field mt"><label>Nota (opcional)</label><input class="inp" id="p-nota" placeholder="Ej.: pieza 36, 1ra sesión de 3…"></div>
    </div>
    <div class="pos-r">
      <div class="tot-line"><span>Subtotal</span><b class="num" id="t-sub"></b></div>
      <div class="tot-line" style="align-items:center"><span>Descuento</span><div class="center"><div class="seg" id="p-dtipo"><button data-t="S/">S/</button><button data-t="%">%</button></div><input class="inp sm money" id="p-desc" type="number" min="0" step="0.5" style="width:90px" value="0"></div></div>
      <div class="tot-line"><span></span><span class="num down small" id="t-desc"></span></div>
      <div class="tot-line big"><span>Total</span><span class="num" id="t-tot"></span></div>
      <h4 style="margin:18px 0 8px;font-size:13px">Forma de pago</h4>
      <div id="p-pagos"></div>
      <button class="link small" id="p-addpago">+ Pago mixto (otro método)</button>
      <div id="p-vuelto" class="mt"></div>
      <div id="p-saldo" class="mt"></div>
    </div></div>`,
    foot:`<span class="muted small" style="margin-right:auto">${cajaAbierta()?'Se registrará en la caja abierta':'Se abrirá la caja automáticamente'}</span><button class="btn" data-x>Cancelar</button><button class="btn dark" id="p-ok">${icon('check')}Cobrar</button><button class="btn primary" id="p-okp">${icon('print')}Cobrar e imprimir</button>`,
    onMount:(m,close)=>{
      m.querySelector('[data-x]').onclick=close;
      const drawCats=()=>{const q=norm($('#p-q',m).value),c=$('#p-cat',m).value;
        const list=S.tratamientos.filter(t=>t.activo&&(!c||t.categoria===c)&&(!q||norm(t.nombre).includes(q)));
        $('#p-cats',m).innerHTML=list.map(t=>`<button class="chip" data-add="${t.id}">${esc(t.nombre)} <b>${moneyS(t.precio)}</b></button>`).join('')||'<span class="muted small">Sin resultados</span>'};
      const drawItems=()=>{
        $('#p-items',m).innerHTML=st.items.length?st.items.map((it,i)=>`<tr><td>${it.libre?`<input class="inp sm" style="width:100%" data-nm="${i}" value="${esc(it.nombre)}" placeholder="Descripción">`:esc(it.nombre)}</td><td><input class="inp sm qty" type="number" min="1" data-q="${i}" value="${it.cant}"></td><td class="r"><input class="inp sm money" type="number" min="0" step="0.5" data-pr="${i}" value="${it.precio}"></td><td class="r num"><b>${money(it.precio*it.cant)}</b></td><td><button class="btn xs icon" style="width:26px;height:26px;padding:4px" data-del="${i}">${icon('x')}</button></td></tr>`).join(''):`<tr><td colspan="5" class="empty" style="padding:22px">Selecciona tratamientos de la lista de arriba</td></tr>`;
        drawTot()};
      const drawPagos=()=>{
        $('#p-pagos',m).innerHTML=st.pagos.map((p,i)=>`<div class="pay-row"><select class="inp sm" data-pm="${i}">${S.config.metodos.map(x=>`<option ${x===p.metodo?'selected':''}>${esc(x)}</option>`).join('')}</select><input class="inp sm money" type="number" min="0" step="0.5" data-pv="${i}" value="${p.monto}"><button class="btn xs icon" style="width:32px;height:32px" data-pd="${i}" ${st.pagos.length<2?'disabled':''}>${icon('x')}</button></div>`).join('');
      };
      const drawTot=()=>{const T=total();
        if(!st.touchedPago){ if(st.pagos.length===1) st.pagos[0].monto=T.total; drawPagos() }
        $('#t-sub',m).textContent=money(T.sub);$('#t-desc',m).textContent=T.desc?'−'+money(T.desc):'';$('#t-tot',m).textContent=money(T.total);
        const pg=r2(st.pagos.reduce((s,p)=>s+num(p.monto),0));const sal=r2(T.total-pg);
        const ef=st.pagos.find(p=>p.metodo==='Efectivo');
        $('#p-vuelto',m).innerHTML=ef?`<div class="field"><label>Paga con (efectivo) — para calcular vuelto</label><input class="inp sm money" id="p-rec" type="number" min="0" step="0.5" value="${st.recibido}" placeholder="${num(ef.monto).toFixed(2)}"></div>${st.recibido&&num(st.recibido)>=num(ef.monto)?`<div class="notice green mt">${icon('cash')}<div>Vuelto: <b style="font-size:16px">${money(num(st.recibido)-num(ef.monto))}</b></div></div>`:''}`:'';
        const rec=$('#p-rec',m);if(rec){rec.oninput=()=>{st.recibido=rec.value;const pos=rec.selectionStart;drawTot();const n=$('#p-rec',m);n.focus();try{n.setSelectionRange(pos,pos)}catch(e){}}}
        $('#p-saldo',m).innerHTML=sal>0.004?`<div class="notice amber">${icon('alert')}<div>Pago parcial: quedará un <b>saldo pendiente de ${money(sal)}</b> a cuenta del paciente.</div></div>`:sal<-0.004?`<div class="notice coral">${icon('alert')}<div>El pago supera el total en ${money(-sal)}. Ajusta los montos (el vuelto se calcula arriba).</div></div>`:'';
        $$('#p-dtipo button',m).forEach(b=>b.classList.toggle('on',b.dataset.t===st.descTipo));
      };
      // patient autocomplete
      const pin=$('#p-pac',m),acl=$('#p-ac',m);let hl=0;
      const pinfo=()=>{const p=st.pacienteId&&paciente(st.pacienteId);
        if(p){const deuda=S.ventas.filter(v=>v.pacienteId===p.id).reduce((s,v)=>s+Math.max(0,saldo(v)),0);
          $('#p-pacinfo',m).innerHTML=`${icon('user')} ${p.dni?'DNI '+esc(p.dni)+' · ':''}${p.telefono?esc(p.telefono)+' · ':''}${S.ventas.filter(v=>v.pacienteId===p.id&&!v.anulada).length} atención(es)${deuda>0?` · <span class="down">saldo pendiente ${money(deuda)}</span>`:''}`;hydrateIcons($('#p-pacinfo',m))}
        else $('#p-pacinfo',m).innerHTML=pin.value.trim()?`<span class="pill teal">Nuevo paciente</span> se registrará "<b>${esc(pin.value.trim())}</b>" <input class="inp sm" id="p-tel" placeholder="Celular (opcional)" style="width:150px;display:inline-block;margin-left:6px" value="${esc(st.telefono)}">`:'';
        const tel=$('#p-tel',m);if(tel)tel.oninput=()=>st.telefono=tel.value};
      const showAc=()=>{const q=norm(pin.value);if(!q){acl.hidden=true;return}
        const res=S.pacientes.filter(p=>norm(p.nombre).includes(q)||(p.dni||'').includes(q)||(p.telefono||'').replace(/\s/g,'').includes(q.replace(/\s/g,''))).slice(0,8);
        if(!res.length){acl.hidden=true;return}hl=Math.min(hl,res.length-1);
        acl.innerHTML=res.map((p,i)=>`<div data-pid="${p.id}" class="${i===hl?'hl':''}"><span>${esc(p.nombre)}</span><span class="muted small">${esc(p.dni||p.telefono||'')}</span></div>`).join('');acl.hidden=false;
        $$('[data-pid]',acl).forEach(d=>d.onmousedown=e=>{e.preventDefault();pick(d.dataset.pid)})};
      const pick=id=>{const p=paciente(id);st.pacienteId=id;st.pacienteNombre=p.nombre;pin.value=p.nombre;acl.hidden=true;pinfo()};
      pin.oninput=()=>{st.pacienteId=null;st.pacienteNombre=pin.value;hl=0;showAc();pinfo()};
      pin.onkeydown=e=>{const items=$$('[data-pid]',acl);if(acl.hidden||!items.length)return;
        if(e.key==='ArrowDown'){hl=(hl+1)%items.length;showAc();e.preventDefault()}else if(e.key==='ArrowUp'){hl=(hl-1+items.length)%items.length;showAc();e.preventDefault()}else if(e.key==='Enter'){pick(items[hl].dataset.pid);e.preventDefault()}};
      pin.onblur=()=>setTimeout(()=>acl.hidden=true,150);
      if(st.pacienteId) pinfo(); else if(st.pacienteNombre){const ex=S.pacientes.find(p=>norm(p.nombre)===norm(st.pacienteNombre));if(ex)pick(ex.id);else pinfo()}
      // events
      $('#p-q',m).oninput=drawCats;$('#p-cat',m).onchange=drawCats;
      $('#p-doc',m).onchange=e=>st.doctor=e.target.value;$('#p-nota',m).oninput=e=>st.nota=e.target.value;
      m.addEventListener('click',e=>{
        const a=e.target.closest('[data-add]');if(a){const t=S.tratamientos.find(x=>x.id===a.dataset.add);const ex=st.items.find(i=>i.tratId===t.id);if(ex)ex.cant++;else st.items.push({tratId:t.id,nombre:t.nombre,precio:t.precio,cant:1});drawItems();return}
        const d=e.target.closest('[data-del]');if(d){st.items.splice(+d.dataset.del,1);drawItems();return}
        const pd=e.target.closest('[data-pd]');if(pd){st.pagos.splice(+pd.dataset.pd,1);st.touchedPago=st.pagos.length>1;drawPagos();drawTot();return}
        const dt=e.target.closest('#p-dtipo button');if(dt){st.descTipo=dt.dataset.t;drawTot()}
      });
      m.addEventListener('input',e=>{const t=e.target;
        if(t.dataset.q!==undefined){st.items[+t.dataset.q].cant=Math.max(1,parseInt(t.value)||1);updateRow(t)}
        if(t.dataset.pr!==undefined){st.items[+t.dataset.pr].precio=num(t.value);updateRow(t)}
        if(t.dataset.nm!==undefined){st.items[+t.dataset.nm].nombre=t.value}
        if(t.dataset.pv!==undefined){st.pagos[+t.dataset.pv].monto=num(t.value);st.touchedPago=true;drawTotKeep()}
        if(t.id==='p-desc'){st.descVal=num(t.value);drawTot()}
      });
      m.addEventListener('change',e=>{const t=e.target;if(t.dataset.pm!==undefined){st.pagos[+t.dataset.pm].metodo=t.value;drawTot()}});
      const updateRow=inp=>{const tr=inp.closest('tr');const i=+(inp.dataset.q??inp.dataset.pr);tr.children[3].innerHTML=`<b>${money(st.items[i].precio*st.items[i].cant)}</b>`;drawTot()};
      const drawTotKeep=()=>{const T=total();const pg=r2(st.pagos.reduce((s,p)=>s+num(p.monto),0));const sal=r2(T.total-pg);
        $('#p-saldo',m).innerHTML=sal>0.004?`<div class="notice amber">${icon('alert')}<div>Pago parcial: quedará un <b>saldo pendiente de ${money(sal)}</b> a cuenta del paciente.</div></div>`:sal<-0.004?`<div class="notice coral">${icon('alert')}<div>El pago supera el total en ${money(-sal)}.</div></div>`:''};
      $('#p-addpago',m).onclick=()=>{const T=total();const pg=st.pagos.reduce((s,p)=>s+num(p.monto),0);const used=st.pagos.map(p=>p.metodo);
        st.pagos.push({metodo:S.config.metodos.find(x=>!used.includes(x))||'Yape',monto:r2(Math.max(0,T.total-pg))});st.touchedPago=true;drawPagos();drawTot()};
      $('#p-libre',m).onclick=()=>{st.items.push({tratId:null,nombre:'',precio:0,cant:1,libre:true});drawItems();setTimeout(()=>{const ins=$$('[data-nm]',m);ins[ins.length-1]?.focus()},20)};
      const finish=pr=>{
        const T=total();const name=pin.value.trim();
        if(!name){toast('Indica el nombre del paciente','err');pin.focus();return}
        if(!st.items.length){toast('Agrega al menos un tratamiento','err');return}
        if(st.items.some(i=>!String(i.nombre).trim())){toast('Completa la descripción del concepto libre','err');return}
        const pagos=st.pagos.filter(p=>num(p.monto)>0);const pg=r2(pagos.reduce((s,p)=>s+num(p.monto),0));
        if(pg-T.total>0.004){toast('El pago supera el total. Ajusta los montos.','err');return}
        let pid=st.pacienteId;
        if(!pid){const ex=S.pacientes.find(p=>norm(p.nombre)===norm(name));if(ex)pid=ex.id;else{const p={id:uid(),nombre:name,dni:'',telefono:st.telefono||'',email:'',nacimiento:'',notas:'',creado:nowISO()};S.pacientes.push(p);pid=p.id}}
        const caja=pagos.length?asegurarCaja():cajaAbierta();const f=nowISO();
        const v={id:uid(),recibo:nextRecibo(),fecha:f,pacienteId:pid,pacienteNombre:paciente(pid).nombre,doctor:st.doctor,
          items:st.items.map(i=>({tratId:i.tratId,nombre:String(i.nombre).trim(),precio:r2(i.precio),cant:i.cant})),
          subtotal:T.sub,descuento:T.desc,total:T.total,pagos:pagos.map(p=>({id:uid(),fecha:f,metodo:p.metodo,monto:r2(num(p.monto)),cajaId:caja?.id||null})),nota:st.nota,anulada:false};
        S.ventas.push(v);
        if(st.citaId){const ci=S.citas.find(c=>c.id===st.citaId);if(ci){ci.estado='Atendida';ci.ventaId=v.id}}
        persist(true);close();toast(`Cobro registrado ${v.recibo} · ${money(pg)}`);if(pr)printRecibo(v);render();
      };
      $('#p-ok',m).onclick=()=>finish(false);$('#p-okp',m).onclick=()=>finish(true);
      drawCats();drawItems();
    }});
}
function printRecibo(v){
  const c=S.config;const sal=saldo(v);
  printHTML(`<div class="ticket"><div class="c"><img src="${LOGO_DATA}" style="width:90px;height:90px"><h1>${esc(c.clinica)}</h1>${c.razon?`<div>${esc(c.razon)}</div>`:''}${c.ruc?`<div>RUC ${esc(c.ruc)}</div>`:''}<div class="muted">${esc(c.direccion)}</div><div class="muted">Tel. ${esc(c.telefono)}</div></div>
  <div class="hr"></div><div class="c"><b>RECIBO INTERNO ${v.recibo}</b><div class="muted small">No válido como comprobante de pago SUNAT</div></div><div class="hr"></div>
  <table><tr><td>Fecha:</td><td class="r">${fmtDT(v.fecha)}</td></tr><tr><td>Paciente:</td><td class="r">${esc(v.pacienteNombre)}</td></tr><tr><td>Atendió:</td><td class="r">${esc(docName(v.doctor))}</td></tr></table>
  <div class="hr"></div><table>${v.items.map(i=>`<tr><td>${i.cant} x ${esc(i.nombre)}</td><td class="r">${money(i.precio*i.cant)}</td></tr>`).join('')}</table><div class="hr"></div>
  <table><tr><td>Subtotal</td><td class="r">${money(v.subtotal)}</td></tr>${v.descuento?`<tr><td>Descuento</td><td class="r">-${money(v.descuento)}</td></tr>`:''}
  <tr><td><b>TOTAL</b></td><td class="r"><b>${money(v.total)}</b></td></tr>
  ${v.pagos.map(p=>`<tr><td>${esc(p.metodo)} ${p.abono?'(abono '+fmtDate(p.fecha)+')':''}</td><td class="r">${money(p.monto)}</td></tr>`).join('')}
  ${sal>0?`<tr><td><b>SALDO PENDIENTE</b></td><td class="r"><b>${money(sal)}</b></td></tr>`:''}</table>
  ${v.nota?`<div class="hr"></div><div>${esc(v.nota)}</div>`:''}<div class="hr"></div><div class="c muted">${esc(c.reciboPie)}</div></div>`);
}

/* ---------- COBROS ---------- */
VIEWS.cobros=()=>{
  const q=norm(UI.cobrosQ);
  let list=S.ventas.filter(v=>v.fecha.slice(0,10)>=UI.cobrosDesde&&v.fecha.slice(0,10)<=UI.cobrosHasta);
  if(UI.cobrosFiltro==='deuda') list=S.ventas.filter(v=>saldo(v)>0);
  if(UI.cobrosFiltro==='anuladas') list=list.filter(v=>v.anulada);
  if(q) list=list.filter(v=>norm(v.pacienteNombre).includes(q)||norm(v.recibo).includes(q)||v.items.some(i=>norm(i.nombre).includes(q)));
  list.sort((a,b)=>b.fecha.localeCompare(a.fecha));
  const act=list.filter(v=>!v.anulada);
  const tot=r2(act.reduce((s,v)=>s+v.total,0)),cob=r2(act.reduce((s,v)=>s+pagado(v),0)),sal=r2(act.reduce((s,v)=>s+Math.max(0,saldo(v)),0));
  return `<div class="toolbar">
    <div class="seg" id="cb-f">${[['todos','Todos'],['deuda','Con saldo pendiente'],['anuladas','Anulados']].map(([k,l])=>`<button data-f="${k}" class="${UI.cobrosFiltro===k?'on':''}">${l}</button>`).join('')}</div>
    ${UI.cobrosFiltro!=='deuda'?`<input type="date" class="inp" style="width:150px" id="cb-d" value="${UI.cobrosDesde}"><span class="muted">a</span><input type="date" class="inp" style="width:150px" id="cb-h" value="${UI.cobrosHasta}">`:''}
    <div class="search grow" style="max-width:320px">${icon('search')}<input class="inp" id="cb-q" placeholder="Paciente, recibo o tratamiento…" value="${esc(UI.cobrosQ)}"></div>
    ${UI.cobrosQ||UI.cobrosFiltro!=='todos'||UI.cobrosDesde!==addDays(today(),-30)||UI.cobrosHasta!==today()?`<button class="btn sm" data-action="clear-cobros">${icon('x')}Limpiar filtros</button>`:''}
    <span class="grow"></span><button class="btn" data-action="exp-cobros">${icon('down')}Exportar Excel</button><button class="btn primary" data-action="nuevo-cobro">${icon('plus')}Nuevo cobro</button></div>
  <div class="grid g3 mb"><div class="card kpi"><div class="lbl">${icon('receipt')}Facturado</div><div class="val num">${money(tot)}</div><div class="foot">${act.length} atención(es)</div></div>
    <div class="card kpi c-green"><div class="lbl">${icon('cash')}Cobrado</div><div class="val num">${money(cob)}</div></div>
    <div class="card kpi c-amber"><div class="lbl">${icon('clock')}Saldo pendiente</div><div class="val num">${money(sal)}</div></div></div>
  <div class="card">${list.length?`<div class="tbl-wrap" style="max-height:none"><table class="t"><thead><tr><th>Recibo</th><th>Fecha</th><th>Paciente</th><th>Tratamientos</th><th>Atendió</th><th class="r">Total</th><th class="r">Pagado</th><th class="r">Saldo</th><th></th></tr></thead><tbody>
  ${list.map(v=>{const s=saldo(v);return `<tr class="${v.anulada?'void':''}" data-venta="${v.id}" style="cursor:pointer"><td><b>${v.recibo}</b></td><td class="num">${fmtDT(v.fecha)}</td><td>${esc(v.pacienteNombre)}${v.planId?' <span class="pill violet">Plan</span>':''}</td><td style="max-width:260px">${esc(v.items.map(i=>(i.cant>1?i.cant+'× ':'')+i.nombre).join(', '))}</td><td class="small">${esc(docName(v.doctor))}</td><td class="r num">${money(v.total)}</td><td class="r num">${money(pagado(v))}</td><td class="r num">${v.anulada?'<span class="pill gray">Anulado</span>':s>0?`<span class="pill amber">${money(s)}</span>`:'<span class="pill green">Pagado</span>'}</td>
  <td class="actions">${!v.anulada&&s>0?`<button class="btn xs primary" data-action="abonar" data-id="${v.id}">Abonar</button> `:''}<button class="btn xs" data-action="print-venta" data-id="${v.id}" title="Imprimir">${icon('print')}</button></td></tr>`}).join('')}
  </tbody></table></div>`:`<div class="empty">${icon('receipt')}No hay cobros para este filtro</div>`}</div>`;
};
AFTER.cobros=v=>{
  $$('#cb-f button',v).forEach(b=>b.onclick=()=>{UI.cobrosFiltro=b.dataset.f;render()});
  const d=$('#cb-d',v),h=$('#cb-h',v);if(d){d.onchange=()=>{UI.cobrosDesde=d.value;render()};h.onchange=()=>{UI.cobrosHasta=h.value;render()}}
  const q=$('#cb-q',v);q.oninput=()=>{UI.cobrosQ=q.value;clearTimeout(q._t);q._t=setTimeout(()=>{render();const n=$('#cb-q');n.focus();n.setSelectionRange(n.value.length,n.value.length)},250)};
};
function modalVenta(id){
  const v=S.ventas.find(x=>x.id===id);if(!v)return;const s=saldo(v);
  openModal({title:`Recibo ${v.recibo}`,size:'lg',body:`
    <div class="between"><div><div class="center"><h3 style="margin:0">${esc(v.pacienteNombre)}</h3>${v.anulada?'<span class="pill coral">ANULADO</span>':s>0?`<span class="pill amber">Saldo ${money(s)}</span>`:'<span class="pill green">Pagado</span>'}</div>
      <div class="muted small" style="margin-top:3px">${fmtDT(v.fecha)} · Atendió ${esc(docName(v.doctor))}</div></div>
      <button class="btn sm" data-x2>${icon('user')}Ver ficha del paciente</button></div>
    <div class="items mt"><table class="t"><thead><tr><th>Concepto</th><th class="r">Cant.</th><th class="r">P. unit.</th><th class="r">Importe</th></tr></thead><tbody>
    ${v.items.map(i=>`<tr><td>${esc(i.nombre)}</td><td class="r">${i.cant}</td><td class="r num">${money(i.precio)}</td><td class="r num">${money(i.precio*i.cant)}</td></tr>`).join('')}</tbody>
    <tfoot>${v.descuento?`<tr><td colspan="3" class="r">Descuento</td><td class="r num">−${money(v.descuento)}</td></tr>`:''}<tr><td colspan="3" class="r">Total</td><td class="r num">${money(v.total)}</td></tr></tfoot></table></div>
    <h4 style="margin:18px 0 8px">Pagos</h4>
    <table class="t"><thead><tr><th>Fecha</th><th>Método</th><th>Tipo</th><th class="r">Monto</th><th></th></tr></thead><tbody>
    ${v.pagos.map(p=>`<tr><td>${fmtDT(p.fecha)}</td><td>${esc(p.metodo)}</td><td>${p.abono?'<span class="pill amber">Abono</span>':'<span class="pill teal">Pago inicial</span>'}</td><td class="r num">${money(p.monto)}</td><td class="actions">${!v.anulada?`<button class="btn xs danger" data-delpago="${p.id}" title="Borrar este pago">${icon('trash')}</button>`:''}</td></tr>`).join('')||'<tr><td colspan="5" class="muted">Sin pagos registrados</td></tr>'}</tbody></table>
    ${v.planId&&planById(v.planId)?`<div class="notice blue mt">${icon('layers')}<div>Este cobro pertenece al plan <a class="link" id="v-plan">${esc(planById(v.planId).nombre)}</a>.</div></div>`:''}
    ${v.nota?`<div class="notice blue mt">${icon('info')}<div>${esc(v.nota)}</div></div>`:''}
    ${v.anulada?`<div class="notice coral mt">${icon('alert')}<div>Anulado el ${fmtDT(v.anuladaFecha)}. Motivo: ${esc(v.motivoAnulacion||'—')}</div></div>`:''}`,
    foot:`${!v.anulada?`<button class="btn danger" id="v-anu" style="margin-right:auto">${icon('trash')}Anular</button>`:''}<button class="btn" id="v-pr">${icon('print')}Imprimir</button>${!v.anulada&&s>0?`<button class="btn primary" id="v-ab">${icon('cash')}Registrar abono</button>`:''}`,
    onMount:(m,close)=>{
      m.querySelector('[data-x2]').onclick=()=>{close();modalFicha(v.pacienteId)};
      $('#v-pr',m).onclick=()=>printRecibo(v);
      const vp=$('#v-plan',m);if(vp)vp.onclick=()=>{close();modalPlan(v.planId)};
      $$('[data-delpago]',m).forEach(b=>b.onclick=async()=>{const pg=v.pagos.find(x=>x.id===b.dataset.delpago);
        if(await confirmBox(`¿Borrar el pago de <b>${money(pg.monto)}</b> (${esc(pg.metodo)}, ${fmtDT(pg.fecha)})?<br><span class="muted small">El monto volverá a quedar como saldo pendiente y se descontará de la caja donde se registró.</span>`,{ok:'Borrar pago',danger:true})){
          v.pagos=v.pagos.filter(x=>x.id!==pg.id);persist(true);close();toast('Pago borrado');render();modalVenta(v.id)}});
      const ab=$('#v-ab',m);if(ab)ab.onclick=()=>{close();modalAbono(v.id)};
      const an=$('#v-anu',m);if(an)an.onclick=()=>{
        openModal({title:'Anular cobro',size:'sm',body:`<p style="margin-top:0">Se anulará <b>${v.recibo}</b> por ${money(v.total)}. Los pagos dejarán de contar en caja y reportes.</p><div class="field"><label>Motivo</label><input class="inp" id="an-m" autofocus placeholder="Error de digitación, devolución…"></div>`,
          foot:`<button class="btn" data-n>Cancelar</button><button class="btn danger solid" id="an-ok">Anular cobro</button>`,
          onMount:(m2,c2)=>{m2.querySelector('[data-n]').onclick=c2;$('#an-ok',m2).onclick=()=>{v.anulada=true;v.anuladaFecha=nowISO();v.motivoAnulacion=$('#an-m',m2).value;persist(true);c2();close();toast('Cobro anulado');render()}}});
      };
    }});
}
function modalAbono(id,montoDef,onDone){
  const v=S.ventas.find(x=>x.id===id);const s=saldo(v);const def=montoDef?Math.min(s,montoDef):s;
  openModal({title:'Registrar abono',size:'sm',body:`
    <div class="notice amber">${icon('info')}<div><b>${esc(v.pacienteNombre)}</b> · ${v.recibo}<br>Total ${money(v.total)} · pagado ${money(pagado(v))} · <b>saldo ${money(s)}</b></div></div>
    <div class="grid g2 mt"><div class="field"><label>Método</label><select class="inp" id="ab-m">${S.config.metodos.map(x=>`<option>${esc(x)}</option>`).join('')}</select></div>
    <div class="field"><label>Monto</label><input class="inp money" id="ab-v" type="number" step="0.5" min="0" max="${s}" value="${def.toFixed(2)}" autofocus></div></div>${v.planId?`<div class="muted small mt">Pago del plan de tratamiento. Saldo total: ${money(s)}</div>`:''}`,
    foot:`<button class="btn" data-n>Cancelar</button><button class="btn primary" id="ab-ok">${icon('check')}Registrar</button><button class="btn dark" id="ab-okp">${icon('print')}Registrar e imprimir</button>`,
    onMount:(m,close)=>{m.querySelector('[data-n]').onclick=close;
      const fin=pr=>{const val=r2(num($('#ab-v',m).value));if(val<=0||val-s>0.004){toast('Monto inválido (máximo '+money(s)+')','err');return}
        const caja=asegurarCaja();v.pagos.push({id:uid(),fecha:nowISO(),metodo:$('#ab-m',m).value,monto:val,cajaId:caja.id,abono:true});persist(true);close();toast('Abono registrado: '+money(val));if(pr)printRecibo(v);onDone?onDone():render()};
      $('#ab-ok',m).onclick=()=>fin(false);$('#ab-okp',m).onclick=()=>fin(true)}});
}

/* ---------- GASTOS ---------- */
VIEWS.gastos=()=>{
  const mes=UI.gastosMes;const q=norm(UI.gastosQ);
  let list=S.gastos.filter(g=>monthKey(g.fecha)===mes&&(!UI.gastosCat||g.categoria===UI.gastosCat)&&(!q||norm(g.descripcion+' '+g.proveedor+' '+g.categoria).includes(q)));
  list.sort((a,b)=>(b.fecha+(b.hora||'')).localeCompare(a.fecha+(a.hora||'')));
  const all=S.gastos.filter(g=>monthKey(g.fecha)===mes);const tot=r2(all.reduce((s,g)=>s+g.monto,0));
  const byCat={};all.forEach(g=>byCat[g.categoria]=(byCat[g.categoria]||0)+g.monto);const cats=Object.entries(byCat).sort((a,b)=>b[1]-a[1]);const cmax=cats[0]?.[1]||1;
  const [y,mm]=mes.split('-').map(Number);const ingMes=ingresosRango(mes+'-01',mes+'-31');
  return `<div class="toolbar">
    <button class="btn icon" data-action="gmes" data-d="-1">${icon('left')}</button><b style="min-width:140px;text-align:center;text-transform:capitalize">${MESES[mm-1]} ${y}</b><button class="btn icon" data-action="gmes" data-d="1">${icon('right')}</button>
    <select class="inp" style="width:200px" id="g-cat"><option value="">Todas las categorías</option>${S.config.catGastos.map(c=>`<option ${c===UI.gastosCat?'selected':''}>${esc(c)}</option>`).join('')}</select>
    <div class="search" style="width:260px">${icon('search')}<input class="inp" id="g-q" placeholder="Buscar…" value="${esc(UI.gastosQ)}"></div>
    ${UI.gastosQ||UI.gastosCat||UI.gastosMes!==monthKey(today())?`<button class="btn sm" data-action="clear-gastos">${icon('x')}Limpiar filtros</button>`:''}
    <span class="grow"></span><button class="btn" data-action="exp-gastos">${icon('down')}Exportar Excel</button><button class="btn primary" data-action="nuevo-gasto">${icon('plus')}Registrar gasto</button></div>
  <div class="grid" style="grid-template-columns:2fr 1fr">
    <div class="card">${list.length?`<div class="tbl-wrap" style="max-height:none"><table class="t"><thead><tr><th>Fecha</th><th>Categoría</th><th>Descripción</th><th>Proveedor</th><th>Método</th><th class="r">Monto</th><th></th></tr></thead><tbody>
    ${list.map(g=>`<tr><td class="num">${fmtDate(g.fecha)}</td><td><span class="pill">${esc(g.categoria)}</span></td><td>${esc(g.descripcion)}${g.comprobante?`<div class="muted small">${esc(g.comprobante)}</div>`:''}</td><td>${esc(g.proveedor)}</td><td>${esc(g.metodo)}${g.cajaId?' <span class="muted small" title="Pagado desde la caja">· caja</span>':''}</td><td class="r num"><b>${money(g.monto)}</b></td><td class="actions"><button class="btn xs" data-action="edit-gasto" data-id="${g.id}">${icon('edit')}</button> <button class="btn xs danger" data-action="del-gasto" data-id="${g.id}">${icon('trash')}</button></td></tr>`).join('')}
    </tbody><tfoot><tr><td colspan="5">Total ${UI.gastosCat||q?'filtrado':''}</td><td class="r num">${money(list.reduce((s,g)=>s+g.monto,0))}</td><td></td></tr></tfoot></table></div>`:`<div class="empty">${icon('wallet')}No hay gastos en este mes</div>`}</div>
    <div>
      <div class="card kpi c-coral"><div class="lbl">${icon('wallet')}Total gastos del mes</div><div class="val num">${money(tot)}</div><div class="foot">${ingMes>0?`Equivale al ${Math.round(tot/ingMes*100)}% de los ingresos`:'—'}</div></div>
      <div class="card mt"><div class="card-h"><h3>Por categoría</h3></div><div class="card-b">${cats.length?`<div class="bar-list">${cats.map(([c,v])=>`<div class="bl"><div class="bl-top"><span>${esc(c)}</span><b class="num">${money(v)}</b></div><div class="bl-track"><div class="bl-fill" style="width:${v/cmax*100}%;background:var(--coral)"></div></div></div>`).join('')}</div>`:'<div class="muted">Sin datos</div>'}</div></div>
    </div></div>`;
};
AFTER.gastos=v=>{
  $('#g-cat',v).onchange=e=>{UI.gastosCat=e.target.value;render()};
  const q=$('#g-q',v);q.oninput=()=>{UI.gastosQ=q.value;clearTimeout(q._t);q._t=setTimeout(()=>{render();const n=$('#g-q');n.focus();n.setSelectionRange(n.value.length,n.value.length)},250)};
};
function modalGasto(id){
  const g=id?S.gastos.find(x=>x.id===id):null;const c=cajaAbierta();
  openModal({title:g?'Editar gasto':'Registrar gasto',body:`
    <div class="grid g2">
      <div class="field"><label>Fecha</label><input type="date" class="inp" id="g-f" value="${g?.fecha||today()}"></div>
      <div class="field"><label>Monto (S/)</label><input type="number" step="0.10" min="0" class="inp money" id="g-m" value="${g?.monto??''}" autofocus placeholder="0.00"></div>
      <div class="field"><label>Categoría</label><select class="inp" id="g-c">${S.config.catGastos.map(x=>`<option ${x===g?.categoria?'selected':''}>${esc(x)}</option>`).join('')}</select></div>
      <div class="field"><label>Método de pago</label><select class="inp" id="g-me">${S.config.metodos.map(x=>`<option ${x===(g?.metodo||'Efectivo')?'selected':''}>${esc(x)}</option>`).join('')}</select></div>
      <div class="field span2"><label>Descripción</label><input class="inp" id="g-d" value="${esc(g?.descripcion||'')}" placeholder="Ej.: resinas Filtek, guantes, pago laboratorio corona…"></div>
      <div class="field"><label>Proveedor</label><input class="inp" id="g-p" value="${esc(g?.proveedor||'')}" list="g-provs"><datalist id="g-provs">${[...new Set(S.gastos.map(x=>x.proveedor).filter(Boolean))].map(p=>`<option value="${esc(p)}">`).join('')}</datalist></div>
      <div class="field"><label>N.° comprobante (opcional)</label><input class="inp" id="g-co" value="${esc(g?.comprobante||'')}" placeholder="F001-123"></div>
    </div>
    ${!g?`<label class="chk mt"><input type="checkbox" id="g-caja" ${c?'checked':''}> Pagado con dinero de la caja ${c?'(se descuenta del cuadre)':'(se abrirá la caja)'}</label>`:''}`,
    foot:`<button class="btn" data-n>Cancelar</button><button class="btn primary" id="g-ok">${icon('check')}Guardar</button>`,
    onMount:(m,close)=>{m.querySelector('[data-n]').onclick=close;
      const save=()=>{const monto=r2(num($('#g-m',m).value));if(monto<=0){toast('Ingresa un monto válido','err');return}
        const data={fecha:$('#g-f',m).value||today(),monto,categoria:$('#g-c',m).value,metodo:$('#g-me',m).value,descripcion:$('#g-d',m).value.trim(),proveedor:$('#g-p',m).value.trim(),comprobante:$('#g-co',m).value.trim()};
        if(g) Object.assign(g,data); else { const useCaja=$('#g-caja',m)?.checked;S.gastos.push({id:uid(),...data,hora:hm(new Date()),cajaId:useCaja?asegurarCaja().id:null}) }
        persist(true);close();toast(g?'Gasto actualizado':'Gasto registrado');render()};
      $('#g-ok',m).onclick=save;$('#g-m',m).onkeydown=e=>{if(e.key==='Enter')save()}}});
}

/* ---------- TRATAMIENTOS ---------- */
VIEWS.tratamientos=()=>{
  const q=norm(UI.tratQ);const cats=[...new Set(S.tratamientos.map(t=>t.categoria))].sort();
  const list=S.tratamientos.filter(t=>(!UI.tratCat||t.categoria===UI.tratCat)&&(!q||norm(t.nombre).includes(q)));
  const grouped={};list.forEach(t=>(grouped[t.categoria]=grouped[t.categoria]||[]).push(t));
  const vendidos={};S.ventas.filter(v=>!v.anulada).forEach(v=>v.items.forEach(i=>{if(i.tratId)vendidos[i.tratId]=(vendidos[i.tratId]||0)+i.cant}));
  return `<div class="toolbar">
    <div class="search" style="width:300px">${icon('search')}<input class="inp" id="t-q" placeholder="Buscar tratamiento…" value="${esc(UI.tratQ)}"></div>
    <select class="inp" style="width:200px" id="t-cat"><option value="">Todas las categorías</option>${cats.map(c=>`<option ${c===UI.tratCat?'selected':''}>${esc(c)}</option>`).join('')}</select>
    ${UI.tratQ||UI.tratCat?`<button class="btn sm" data-action="clear-trat">${icon('x')}Limpiar filtros</button>`:''}
    <span class="grow"></span><button class="btn" data-action="ajuste-precios">${icon('percent')}Ajustar precios</button><button class="btn" data-action="print-tarifario">${icon('print')}Imprimir tarifario</button><button class="btn primary" data-action="nuevo-trat">${icon('plus')}Agregar tratamiento</button></div>
  <div class="notice blue mb">${icon('info')}<div>Los precios cargados son referenciales. Haz clic en cualquier precio para editarlo directamente; se guarda al salir de la casilla.</div></div>
  ${Object.keys(grouped).length?Object.entries(grouped).map(([cat,ts])=>`<div class="card mb"><div class="card-h"><h3>${esc(cat)} <span class="sub">· ${ts.length} tratamiento(s)</span></h3></div>
    <table class="t"><thead><tr><th>Tratamiento</th><th style="width:120px">Duración</th><th style="width:110px">Vendidos</th><th style="width:90px">Estado</th><th class="r" style="width:150px">Precio (S/)</th><th style="width:90px"></th></tr></thead><tbody>
    ${ts.map(t=>`<tr><td><b>${esc(t.nombre)}</b>${t.desc?`<div class="muted small">${esc(t.desc)}</div>`:''}</td><td class="muted">${t.duracion} min</td><td class="num">${vendidos[t.id]||0}</td><td>${t.activo?'<span class="pill green">Activo</span>':'<span class="pill gray">Inactivo</span>'}</td>
    <td class="r"><input class="inp sm money" style="width:110px;display:inline-block" type="number" min="0" step="1" data-price="${t.id}" value="${t.precio}"></td>
    <td class="actions"><button class="btn xs" data-action="edit-trat" data-id="${t.id}">${icon('edit')}</button> <button class="btn xs danger" data-action="del-trat" data-id="${t.id}">${icon('trash')}</button></td></tr>`).join('')}</tbody></table></div>`).join(''):`<div class="card"><div class="empty">${icon('tooth')}No hay tratamientos que coincidan</div></div>`}`;
};
AFTER.tratamientos=v=>{
  const q=$('#t-q',v);q.oninput=()=>{UI.tratQ=q.value;clearTimeout(q._t);q._t=setTimeout(()=>{render();const n=$('#t-q');n.focus();n.setSelectionRange(n.value.length,n.value.length)},250)};
  $('#t-cat',v).onchange=e=>{UI.tratCat=e.target.value;render()};
  $$('[data-price]',v).forEach(i=>{i.onchange=()=>{const t=S.tratamientos.find(x=>x.id===i.dataset.price);const old=t.precio;t.precio=r2(num(i.value));persist();toast(`${t.nombre}: ${money(old)} → ${money(t.precio)}`)};i.onkeydown=e=>{if(e.key==='Enter')i.blur()}});
};
function modalTrat(id){
  const t=id?S.tratamientos.find(x=>x.id===id):null;const cats=[...new Set(S.tratamientos.map(x=>x.categoria))];
  openModal({title:t?'Editar tratamiento':'Nuevo tratamiento',body:`<div class="grid g2">
    <div class="field span2"><label>Nombre</label><input class="inp" id="tr-n" value="${esc(t?.nombre||'')}" autofocus placeholder="Ej.: Carillas de resina"></div>
    <div class="field"><label>Categoría</label><input class="inp" id="tr-c" list="tr-cats" value="${esc(t?.categoria||'')}" placeholder="Elige o escribe una nueva"><datalist id="tr-cats">${cats.map(c=>`<option value="${esc(c)}">`).join('')}</datalist></div>
    <div class="field"><label>Precio (S/)</label><input class="inp money" type="number" min="0" step="1" id="tr-p" value="${t?.precio??''}"></div>
    <div class="field"><label>Duración estimada (min)</label><input class="inp" type="number" min="5" step="5" id="tr-d" value="${t?.duracion??30}"></div>
    <div class="field"><label>Estado</label><select class="inp" id="tr-a"><option value="1">Activo</option><option value="0" ${t&&!t.activo?'selected':''}>Inactivo (no aparece al cobrar)</option></select></div>
    <div class="field span2"><label>Descripción (opcional)</label><input class="inp" id="tr-ds" value="${esc(t?.desc||'')}"></div></div>`,
    foot:`<button class="btn" data-n>Cancelar</button><button class="btn primary" id="tr-ok">${icon('check')}Guardar</button>`,
    onMount:(m,close)=>{m.querySelector('[data-n]').onclick=close;$('#tr-ok',m).onclick=()=>{
      const nombre=$('#tr-n',m).value.trim();if(!nombre){toast('Escribe el nombre','err');return}
      const data={nombre,categoria:$('#tr-c',m).value.trim()||'General',precio:r2(num($('#tr-p',m).value)),duracion:parseInt($('#tr-d',m).value)||30,activo:$('#tr-a',m).value==='1',desc:$('#tr-ds',m).value.trim()};
      if(t)Object.assign(t,data);else S.tratamientos.push({id:uid(),...data});persist(true);close();toast('Tratamiento guardado');render()}}});
}
function modalAjustePrecios(){
  const cats=[...new Set(S.tratamientos.map(t=>t.categoria))];
  openModal({title:'Ajuste masivo de precios',size:'sm',body:`
    <div class="field"><label>Aplicar a</label><select class="inp" id="aj-c"><option value="">Todos los tratamientos</option>${cats.map(c=>`<option>${esc(c)}</option>`).join('')}</select></div>
    <div class="field mt"><label>Porcentaje (usa negativo para bajar)</label><input class="inp money" type="number" step="1" id="aj-p" value="10" autofocus></div>
    <div class="field mt"><label>Redondear a</label><select class="inp" id="aj-r"><option value="1">S/ 1</option><option value="5" selected>S/ 5</option><option value="10">S/ 10</option></select></div>`,
    foot:`<button class="btn" data-n>Cancelar</button><button class="btn primary" id="aj-ok">Aplicar</button>`,
    onMount:(m,close)=>{m.querySelector('[data-n]').onclick=close;$('#aj-ok',m).onclick=async()=>{
      const c=$('#aj-c',m).value,p=num($('#aj-p',m).value),rd=num($('#aj-r',m).value);const ts=S.tratamientos.filter(t=>!c||t.categoria===c);
      if(!(await confirmBox(`¿Ajustar ${p>0?'+':''}${p}% el precio de ${ts.length} tratamiento(s)?`)))return;
      ts.forEach(t=>t.precio=Math.max(0,Math.round(t.precio*(1+p/100)/rd)*rd));persist(true);close();toast('Precios actualizados');render()}}});
}

/* ---------- PACIENTES ---------- */
VIEWS.pacientes=()=>{
  const q=norm(UI.pacQ);
  const stats={};S.ventas.filter(v=>!v.anulada).forEach(v=>{const s=stats[v.pacienteId]=stats[v.pacienteId]||{n:0,tot:0,deuda:0,ult:''};s.n++;s.tot+=v.total;s.deuda+=Math.max(0,saldo(v));if(v.fecha>s.ult)s.ult=v.fecha});
  const prox={};S.citas.filter(c=>c.fecha>=today()&&!['Cancelada','Atendida','No asistió'].includes(c.estado)).forEach(c=>{if(c.pacienteId&&(!prox[c.pacienteId]||c.fecha+c.hora<prox[c.pacienteId]))prox[c.pacienteId]=c.fecha+' '+c.hora});
  const list=S.pacientes.filter(p=>!q||norm(p.nombre).includes(q)||(p.dni||'').includes(q)||(p.telefono||'').replace(/\s/g,'').includes(q.replace(/\s/g,''))).sort((a,b)=>a.nombre.localeCompare(b.nombre));
  return `<div class="toolbar"><div class="search" style="width:340px">${icon('search')}<input class="inp" id="pa-q" placeholder="Buscar por nombre, DNI o celular…" value="${esc(UI.pacQ)}"></div>
    ${UI.pacQ?`<button class="btn sm" data-action="clear-pac">${icon('x')}Limpiar</button>`:''}<span class="muted">${S.pacientes.length} paciente(s)</span><span class="grow"></span><button class="btn" data-action="exp-pacientes">${icon('down')}Exportar Excel</button><button class="btn primary" data-action="nuevo-paciente">${icon('plus')}Nuevo paciente</button></div>
  <div class="card">${list.length?`<div class="tbl-wrap" style="max-height:none"><table class="t"><thead><tr><th>Paciente</th><th>DNI</th><th>Celular</th><th>Última atención</th><th>Próxima cita</th><th class="r">Atenciones</th><th class="r">Total facturado</th><th class="r">Saldo</th><th></th></tr></thead><tbody>
  ${list.map(p=>{const s=stats[p.id]||{n:0,tot:0,deuda:0,ult:''};return `<tr data-pac="${p.id}" style="cursor:pointer"><td><div class="center"><span class="av" style="background:${avColor(p.nombre)};width:30px;height:30px;font-size:11.5px;border-radius:8px">${initials(p.nombre)}</span><b>${esc(p.nombre)}</b></div></td><td>${esc(p.dni)}</td><td>${esc(p.telefono)}</td><td>${s.ult?fmtDate(s.ult):'<span class="muted">—</span>'}</td><td>${prox[p.id]?`<span class="pill teal">${fmtDate(prox[p.id])} ${prox[p.id].slice(11)}</span>`:'<span class="muted">—</span>'}</td><td class="r">${s.n}</td><td class="r num">${money(s.tot)}</td><td class="r num">${s.deuda>0?`<span class="pill amber">${money(s.deuda)}</span>`:'<span class="muted">—</span>'}</td><td class="actions"><button class="btn xs" data-action="open-hc" data-id="${p.id}" title="Historia clínica">${icon('file')}HC</button> ${p.telefono?`<button class="btn xs" data-action="wa-pac" data-id="${p.id}" title="WhatsApp">${icon('wa')}</button>`:''}</td></tr>`}).join('')}
  </tbody></table></div>`:`<div class="empty">${icon('users')}${S.pacientes.length?'Sin resultados':'Aún no hay pacientes. Se crean automáticamente al cobrar o agendar.'}</div>`}</div>`;
};
AFTER.pacientes=v=>{const q=$('#pa-q',v);q.oninput=()=>{UI.pacQ=q.value;clearTimeout(q._t);q._t=setTimeout(()=>{render();const n=$('#pa-q');n.focus();n.setSelectionRange(n.value.length,n.value.length)},250)}};
function modalPaciente(id,onSaved){
  const p=id?paciente(id):null;
  openModal({title:p?'Editar paciente':'Nuevo paciente',body:`<div class="grid g2">
    <div class="field span2"><label>Nombres y apellidos</label><input class="inp" id="pc-n" value="${esc(p?.nombre||'')}" autofocus></div>
    <div class="field"><label>DNI</label><input class="inp" id="pc-d" value="${esc(p?.dni||'')}" maxlength="12"></div>
    <div class="field"><label>Celular</label><input class="inp" id="pc-t" value="${esc(p?.telefono||'')}" placeholder="9XX XXX XXX"></div>
    <div class="field"><label>Fecha de nacimiento</label><input class="inp" type="date" id="pc-b" value="${esc(p?.nacimiento||'')}"></div>
    <div class="field"><label>Correo</label><input class="inp" id="pc-e" value="${esc(p?.email||'')}"></div>
    <div class="field"><label>Sexo</label><select class="inp" id="pc-sx"><option value="">—</option>${['Femenino','Masculino'].map(x=>`<option ${p?.sexo===x?'selected':''}>${x}</option>`).join('')}</select></div>
    <div class="field"><label>Ocupación</label><input class="inp" id="pc-oc" value="${esc(p?.ocupacion||'')}"></div>
    <div class="field span2"><label>Domicilio</label><input class="inp" id="pc-dm" value="${esc(p?.domicilio||'')}"></div>
    <div class="field span2"><label>Referencia (¿cómo nos conoció? / referido por)</label><input class="inp" id="pc-rf" value="${esc(p?.referencia||'')}"></div>
    <div class="field span2"><label>Notas</label><textarea class="inp" id="pc-o">${esc(p?.notas||'')}</textarea></div></div>`,
    foot:`<button class="btn" data-n>Cancelar</button><button class="btn primary" id="pc-ok">${icon('check')}Guardar</button>`,
    onMount:(m,close)=>{m.querySelector('[data-n]').onclick=close;$('#pc-ok',m).onclick=()=>{
      const nombre=$('#pc-n',m).value.trim();if(!nombre){toast('Escribe el nombre','err');return}
      const data={nombre,dni:$('#pc-d',m).value.trim(),telefono:$('#pc-t',m).value.trim(),nacimiento:$('#pc-b',m).value,email:$('#pc-e',m).value.trim(),notas:$('#pc-o',m).value.trim(),sexo:$('#pc-sx',m).value,ocupacion:$('#pc-oc',m).value.trim(),domicilio:$('#pc-dm',m).value.trim(),referencia:$('#pc-rf',m).value.trim()};
      let pid;if(p){Object.assign(p,data);pid=p.id;S.ventas.filter(v=>v.pacienteId===p.id).forEach(v=>v.pacienteNombre=nombre);S.citas.filter(c=>c.pacienteId===p.id).forEach(c=>{c.pacienteNombre=nombre;c.telefono=data.telefono})}
      else{const np={id:uid(),...data,creado:nowISO()};S.pacientes.push(np);pid=np.id}
      persist(true);close();toast('Paciente guardado');onSaved?onSaved(pid):render()}}});
}
function modalFicha(id){
  const p=paciente(id);if(!p)return;
  const ventas=S.ventas.filter(v=>v.pacienteId===id).sort((a,b)=>b.fecha.localeCompare(a.fecha));
  const citas=S.citas.filter(c=>c.pacienteId===id).sort((a,b)=>(b.fecha+b.hora).localeCompare(a.fecha+a.hora));
  const act=ventas.filter(v=>!v.anulada);const tot=act.reduce((s,v)=>s+v.total,0),deuda=act.reduce((s,v)=>s+Math.max(0,saldo(v)),0);
  let edad='';if(p.nacimiento){const b=parseD(p.nacimiento),n=new Date();edad=n.getFullYear()-b.getFullYear()-((n.getMonth()<b.getMonth()||(n.getMonth()===b.getMonth()&&n.getDate()<b.getDate()))?1:0)}
  openModal({title:'Ficha del paciente',size:'lg',body:`
    <div class="ficha-h"><span class="av" style="background:${avColor(p.nombre)}">${initials(p.nombre)}</span><div class="grow"><h3 style="margin:0;font-size:18px">${esc(p.nombre)}</h3><div class="muted small">${p.dni?'DNI '+esc(p.dni):'Sin DNI'}${edad!==''?' · '+edad+' años':''} · paciente desde ${fmtDate(p.creado)}</div></div>
      <div class="right"><div class="muted small">Total facturado</div><b class="num" style="font-size:18px">${money(tot)}</b>${deuda>0?`<div class="down small">Saldo pendiente ${money(deuda)}</div>`:''}</div></div>
    ${alergiasDe(p)?`<div class="notice coral mt">${icon('alert')}<div><b>Alergias:</b> ${esc(alergiasDe(p))}</div></div>`:''}
    <dl class="kv mt"><dt>Celular</dt><dd>${esc(p.telefono||'—')}</dd><dt>Correo</dt><dd>${esc(p.email||'—')}</dd><dt>Notas</dt><dd style="white-space:pre-wrap">${esc(p.notas||'—')}</dd></dl>
    <h4 style="margin:20px 0 8px">Historial de atenciones (${ventas.length})</h4>
    ${ventas.length?`<div class="items" style="margin-top:0"><table class="t"><thead><tr><th>Fecha</th><th>Recibo</th><th>Tratamientos</th><th class="r">Total</th><th class="r">Saldo</th></tr></thead><tbody>${ventas.map(v=>`<tr class="${v.anulada?'void':''}" data-venta2="${v.id}" style="cursor:pointer"><td>${fmtDate(v.fecha)}</td><td>${v.recibo}</td><td>${esc(v.items.map(i=>i.nombre).join(', '))}</td><td class="r num">${money(v.total)}</td><td class="r">${saldo(v)>0?`<span class="pill amber">${money(saldo(v))}</span>`:'—'}</td></tr>`).join('')}</tbody></table></div>`:'<div class="muted">Sin atenciones registradas</div>'}
    ${(()=>{const pls=S.planes.filter(x=>x.pacienteId===id);return pls.length?`<h4 style="margin:20px 0 8px">Planes de tratamiento (${pls.length})</h4><div class="items" style="margin-top:0"><table class="t"><tbody>${pls.map(x=>{const st=planStats(x);return `<tr data-fplan="${x.id}" style="cursor:pointer"><td><b>${esc(x.nombre)}</b> <span class="pill ${x.estado==='Activo'?'teal':'gray'}">${x.estado}</span></td><td class="small">${st.atendidas}/${st.sesiones} sesiones</td><td class="small num">${money(st.pag)} de ${money(st.total)}</td><td>${st.montoVencido>0?`<span class="pill coral">Vencido ${money(st.montoVencido)}</span>`:''}</td></tr>`}).join('')}</tbody></table></div>`:''})()}
    <h4 style="margin:20px 0 8px">Citas (${citas.length}) <span class="muted small" style="font-weight:400">· clic para ver o editar</span></h4>
    ${citas.length?`<div class="items" style="margin-top:0;max-height:300px;overflow:auto"><table class="t"><tbody>${citas.map(c=>`<tr data-fcita="${c.id}" style="cursor:pointer" class="${c.fecha>=today()?'':'muted'}"><td>${fmtDate(c.fecha)} ${c.hora}</td><td>${esc(c.tratamiento||'Consulta')}${c.planId?' <span class="pill violet">Plan</span>':''}</td><td class="small">${esc(docName(c.doctor))}</td><td>${estadoPill(c.estado)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="muted">Sin citas</div>'}`,
    foot:`<button class="btn danger" id="f-del" style="margin-right:auto">${icon('trash')}Eliminar</button>${p.telefono?`<button class="btn" id="f-wa">${icon('wa')}WhatsApp</button>`:''}<button class="btn" id="f-ed">${icon('edit')}Editar</button><button class="btn dark" id="f-hc">${icon('file')}Historia clínica</button><button class="btn" id="f-pl">${icon('layers')}Nuevo plan</button><button class="btn" id="f-ci">${icon('cal-plus')}Agendar cita</button><button class="btn primary" id="f-co">${icon('cash')}Cobrar</button>`,
    onMount:(m,close)=>{
      $$('[data-venta2]',m).forEach(r=>r.onclick=()=>{close();modalVenta(r.dataset.venta2)});
      $$('[data-fcita]',m).forEach(r=>r.onclick=()=>{close();modalCita(r.dataset.fcita)});
      $$('[data-fplan]',m).forEach(r=>r.onclick=()=>{close();modalPlan(r.dataset.fplan)});
      $('#f-hc',m).onclick=()=>{close();abrirHistoria(id)};
      $('#f-ed',m).onclick=()=>{close();modalPaciente(id,()=>{render();modalFicha(id)})};
      $('#f-co',m).onclick=()=>{close();modalCobro({pacienteId:id,pacienteNombre:p.nombre})};
      $('#f-ci',m).onclick=()=>{close();modalCita(null,{pacienteId:id})};
      $('#f-pl',m).onclick=()=>{close();modalNuevoPlan({pacienteId:id})};
      const wa=$('#f-wa',m);if(wa)wa.onclick=()=>openExternal(waLink(p.telefono,`Hola ${p.nombre.split(' ')[0]}, te saludamos de ${S.config.clinica}. `));
      $('#f-del',m).onclick=async()=>{if(ventas.length){toast('No se puede eliminar: tiene cobros registrados','err');return}
        if(await confirmBox(`¿Eliminar a <b>${esc(p.nombre)}</b>? Sus citas también se eliminarán.`,{ok:'Eliminar',danger:true})){S.pacientes=S.pacientes.filter(x=>x.id!==id);S.citas=S.citas.filter(c=>c.pacienteId!==id);persist(true);close();toast('Paciente eliminado');render()}};
    }});
}

/* ---------- AGENDA ---------- */
function waLink(tel,msg){let t=String(tel||'').replace(/\D/g,'');if(t.length===9)t='51'+t;return `https://wa.me/${t}?text=${encodeURIComponent(msg)}`}
function gcalLink(c){
  const s=c.fecha.replace(/-/g,'')+'T'+c.hora.replace(':','')+'00';const endM=timeToMin(c.hora)+(+c.duracion||30);
  const e=c.fecha.replace(/-/g,'')+'T'+minToTime(endM).replace(':','')+'00';
  const p=new URLSearchParams({action:'TEMPLATE',text:`🦷 ${c.pacienteNombre} — ${c.tratamiento||'Consulta'}`,dates:`${s}/${e}`,ctz:'America/Lima',
    details:`Paciente: ${c.pacienteNombre}\nCelular: ${c.telefono||'—'}\nTratamiento: ${c.tratamiento||'Consulta'}\nDoctor: ${docName(c.doctor)}${c.nota?'\nNota: '+c.nota:''}\n\n— ${S.config.clinica}`,
    location:`${S.config.clinica}, ${S.config.direccion}`});
  return 'https://calendar.google.com/calendar/render?'+p.toString();
}
function icsFor(citas){
  const st=s=>s.replace(/[,;\\]/g,m=>'\\'+m).replace(/\n/g,'\\n');
  const L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Facil Dent//Gestion//ES','CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:Agenda Facil Dent','X-WR-TIMEZONE:America/Lima',
    'BEGIN:VTIMEZONE','TZID:America/Lima','BEGIN:STANDARD','DTSTART:19700101T000000','TZOFFSETFROM:-0500','TZOFFSETTO:-0500','TZNAME:-05','END:STANDARD','END:VTIMEZONE'];
  const stamp=new Date().toISOString().replace(/[-:]/g,'').slice(0,15)+'Z';
  citas.forEach(c=>{const s=c.fecha.replace(/-/g,'')+'T'+c.hora.replace(':','')+'00';const e=c.fecha.replace(/-/g,'')+'T'+minToTime(timeToMin(c.hora)+(+c.duracion||30)).replace(':','')+'00';
    L.push('BEGIN:VEVENT',`UID:${c.id}@facildent`,`DTSTAMP:${stamp}`,`DTSTART;TZID=America/Lima:${s}`,`DTEND;TZID=America/Lima:${e}`,`SUMMARY:${st(c.pacienteNombre+' — '+(c.tratamiento||'Consulta'))}`,
      `DESCRIPTION:${st(`Celular: ${c.telefono||'—'}\nDoctor: ${docName(c.doctor)}\nEstado: ${c.estado}${c.nota?'\nNota: '+c.nota:''}`)}`,`LOCATION:${st(S.config.clinica+', '+S.config.direccion)}`,
      c.estado==='Cancelada'?'STATUS:CANCELLED':'STATUS:CONFIRMED','BEGIN:VALARM','TRIGGER:-PT30M','ACTION:DISPLAY','DESCRIPTION:Recordatorio de cita','END:VALARM','END:VEVENT')});
  L.push('END:VCALENDAR');return L.join('\r\n');
}
VIEWS.agenda=()=>{
  const cfg=S.config;const view=UI.agendaView;
  const days=view==='dia'?[UI.agendaDay||today()]:Array.from({length:7},(_,i)=>addDays(UI.agendaWeek,i)).filter(d=>cfg.diasLaborables.includes(parseD(d).getDay()));
  const ini=timeToMin(cfg.horaInicio),fin=timeToMin(cfg.horaFin),step=cfg.intervalo||30;const rIni=timeToMin(cfg.refrigerioIni),rFin=timeToMin(cfg.refrigerioFin);
  const slots=[];for(let m=ini;m<fin;m+=step)slots.push(m);
  const SLOT=view==='dia'?44:36;const pxMin=SLOT/step;
  const filt=c=>!UI.agendaDoc||c.doctor===UI.agendaDoc;
  const t=today();const nowM=new Date().getHours()*60+new Date().getMinutes();
  const rangeTxt=view==='dia'?fmtDateLong(days[0]):`${fmtDate(days[0])} – ${fmtDate(days[days.length-1])}`;
  const pend=S.citas.filter(c=>c.fecha>=t&&c.estado==='Programada').length;
  // layout overlapping events
  const layout=list=>{list.sort((a,b)=>a.hora.localeCompare(b.hora)||b.duracion-a.duracion);let cl=[],cols=[],end=-1;
    const flush=()=>{cl.forEach(e=>e._n=cols.length);cl=[];cols=[]};
    list.forEach(e=>{const s=timeToMin(e.hora),f=s+(+e.duracion||30);if(s>=end)flush();let i=cols.findIndex(c=>c<=s);if(i<0){i=cols.length;cols.push(f)}else cols[i]=f;e._col=i;cl.push(e);end=Math.max(s>=end?f:end,f)});flush();return list};
  return `<div class="toolbar">
    <button class="btn" data-action="ag-hoy">Hoy</button><button class="btn icon" data-action="ag-mov" data-d="-1">${icon('left')}</button><button class="btn icon" data-action="ag-mov" data-d="1">${icon('right')}</button>
    <b style="font-size:15px;min-width:170px">${view==="buscar"?"":rangeTxt}</b>
    <div class="seg" id="ag-v"><button data-v="dia" class="${view==='dia'?'on':''}">Día</button><button data-v="semana" class="${view==='semana'?'on':''}">Semana</button><button data-v="lista" class="${view==='lista'?'on':''}">Lista</button><button data-v="buscar" class="${view==='buscar'?'on':''}">Buscar citas</button></div>
    ${UI.agendaDoc?`<button class="btn sm" data-action="clear-agdoc">${icon('x')}</button>`:''}<select class="inp" style="width:200px" id="ag-doc"><option value="">Todos los doctores</option>${cfg.doctores.map(d=>`<option value="${d.id}" ${d.id===UI.agendaDoc?'selected':''}>${esc(d.nombre)}</option>`).join('')}</select>
    <span class="grow"></span><button class="btn" data-action="recordatorios">${icon('wa')}Recordatorios</button><button class="btn icon" data-action="sync-info" title="Conectar con el celular / Google Calendar">${icon('sync')}</button><button class="btn icon" data-action="ics-week" title="Exportar la semana (.ics) para Google Calendar">${icon('down')}</button><button class="btn icon" data-action="print-agenda" title="Imprimir agenda">${icon('print')}</button></div>
  <div class="between mb"><div class="legend">${cfg.doctores.map(d=>`<span><em style="background:${d.color}"></em>${esc(d.nombre)}</span>`).join('')}</div>${pend?`<span class="muted small">${pend} cita(s) próximas sin confirmar</span>`:''}</div>
  ${view==='buscar'?agendaBuscar(filt):view==='lista'?agendaLista(filt):`
  <div class="ag-wrap" style="--days:${days.length};--slot:${SLOT}px">
    <div class="ag-head" style="border-right:1px solid var(--line)"></div>
    ${days.map(d=>{const dd=parseD(d);const n=S.citas.filter(c=>c.fecha===d&&filt(c)&&c.estado!=='Cancelada').length;return `<div class="ag-head ${d===t?'today':''}" style="cursor:pointer" data-agday="${d}">${DIAS_C[dd.getDay()]}<b>${dd.getDate()}</b><div class="cnt">${n?n+' cita'+(n>1?'s':''):'&nbsp;'}</div></div>`}).join('')}
    <div class="ag-times">${slots.map(m=>`<div class="ag-time">${m%60===0?minToTime(m):''}</div>`).join('')}</div>
    ${days.map(d=>{const evs=layout(S.citas.filter(c=>c.fecha===d&&filt(c)));return `<div class="ag-col ${d===t?'today':''}">
      ${slots.map(m=>{const br=m>=rIni&&m<rFin;return `<div class="ag-slot ${(m+step)%60!==0?'half':''} ${br?'break':''}" ${br?'title="Refrigerio"':`data-slot="${d}|${minToTime(m)}"`}></div>`}).join('')}
      ${evs.map(e=>{const top=(timeToMin(e.hora)-ini)*pxMin;const h=Math.max(SLOT-3,(+e.duracion)*pxMin-3);const col=docColor(e.doctor);const w=100/e._n;
        return `<div class="ag-ev st-${e.estado.replace(/\s/g,'')}" data-cita="${e.id}" style="top:${top+1}px;height:${h}px;left:calc(${w*e._col}% + 3px);width:calc(${w}% - 6px);right:auto;background:${col}1a;border-color:${col};color:#0f2233" title="${esc(e.hora+' '+e.pacienteNombre+' — '+(e.tratamiento||''))}"><b>${esc(e.pacienteNombre)}</b><span class="tm">${e.hora} · ${esc(e.tratamiento||'Consulta')}</span>${e.estado==='Confirmada'?' ✓':''}</div>`}).join('')}
      ${d===t&&nowM>=ini&&nowM<=fin?`<div class="ag-now" style="top:${(nowM-ini)*pxMin}px"></div>`:''}
    </div>`}).join('')}
  </div>`}`;
};
function agendaBuscar(filt){
  const q=norm(UI.citaQ);
  let list=S.citas.filter(c=>filt(c)&&(!UI.citaEstado||c.estado===UI.citaEstado)&&(!UI.citaDesde||c.fecha>=UI.citaDesde)&&(!UI.citaHasta||c.fecha<=UI.citaHasta)&&(!q||norm(c.pacienteNombre+' '+c.tratamiento+' '+(c.telefono||'')+' '+(c.nota||'')).includes(q)));
  const t0=today();const fut=list.filter(c=>c.fecha>=t0).sort((a,b)=>(a.fecha+a.hora).localeCompare(b.fecha+b.hora)),pas=list.filter(c=>c.fecha<t0).sort((a,b)=>(b.fecha+b.hora).localeCompare(a.fecha+a.hora));list=[...fut,...pas];const total=list.length;list=list.slice(0,300);
  const on=UI.citaQ||UI.citaEstado||UI.citaDesde||UI.citaHasta;
  return `<div class="toolbar"><div class="search" style="width:300px">${icon('search')}<input class="inp" id="cq-q" placeholder="Paciente, tratamiento, celular o nota…" value="${esc(UI.citaQ)}"></div>
    <select class="inp" id="cq-e" style="width:160px"><option value="">Todos los estados</option>${['Programada','Confirmada','Atendida','No asistió','Cancelada'].map(e=>`<option ${e===UI.citaEstado?'selected':''}>${e}</option>`).join('')}</select>
    <input type="date" class="inp" id="cq-d" style="width:150px" value="${UI.citaDesde}" title="Desde"><span class="muted">a</span><input type="date" class="inp" id="cq-h" style="width:150px" value="${UI.citaHasta}" title="Hasta">
    ${on?`<button class="btn sm" data-action="clear-citas">${icon('x')}Limpiar filtros</button>`:''}<span class="grow"></span><span class="muted small">${total} cita(s)${total>300?' · mostrando 300':''}</span></div>
  <div class="card">${list.length?`<div class="tbl-wrap" style="max-height:none"><table class="t"><thead><tr><th>Fecha</th><th>Hora</th><th>Paciente</th><th>Tratamiento</th><th>Doctor</th><th>Estado</th><th>Nota</th></tr></thead><tbody>
  ${list.map(c=>`<tr data-cita="${c.id}" style="cursor:pointer"><td class="num">${fmtDate(c.fecha)}${c.fecha===today()?' <span class="pill teal">hoy</span>':''}</td><td>${c.hora}</td><td><b>${esc(c.pacienteNombre)}</b></td><td>${esc(c.tratamiento||'Consulta')}${c.planId?' <span class="pill violet">Plan</span>':''}</td><td class="small"><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${docColor(c.doctor)};margin-right:5px"></span>${esc(docName(c.doctor))}</td><td>${estadoPill(c.estado)}</td><td class="small muted">${esc(c.nota||'')}</td></tr>`).join('')}
  </tbody></table></div>`:`<div class="empty">${icon('search')}No se encontraron citas</div>`}</div>`;
}
function agendaLista(filt){
  const desde=UI.agendaWeek;const list=S.citas.filter(c=>c.fecha>=desde&&c.fecha<=addDays(desde,6)&&filt(c)).sort((a,b)=>(a.fecha+a.hora).localeCompare(b.fecha+b.hora));
  if(!list.length)return `<div class="card"><div class="empty">${icon('cal')}No hay citas esta semana</div></div>`;
  const by={};list.forEach(c=>(by[c.fecha]=by[c.fecha]||[]).push(c));
  return Object.entries(by).map(([d,cs])=>`<div class="card mb"><div class="card-h"><h3 style="text-transform:capitalize">${fmtDateLong(d)}</h3><span class="sub">${cs.length} cita(s)</span></div><div class="card-b tight">
    ${cs.map(c=>`<div class="list-item" data-cita="${c.id}" style="cursor:pointer"><div class="time-box">${c.hora}<small>${c.duracion} min</small></div><span style="width:4px;align-self:stretch;border-radius:4px;background:${docColor(c.doctor)}"></span><div class="grow"><b>${esc(c.pacienteNombre)}</b> <span class="muted small">${esc(c.telefono||'')}</span><div class="muted small">${esc(c.tratamiento||'Consulta')} · ${esc(docName(c.doctor))}${c.nota?' · '+esc(c.nota):''}</div></div>${estadoPill(c.estado)}
    ${c.telefono?`<button class="btn xs" data-action="wa-cita" data-id="${c.id}" title="Recordatorio WhatsApp">${icon('wa')}</button>`:''}<button class="btn xs" data-action="gcal-cita" data-id="${c.id}" title="Google Calendar">${icon('google')}</button></div>`).join('')}</div></div>`).join('');
}
AFTER.agenda=v=>{
  $$('#ag-v button',v).forEach(b=>b.onclick=()=>{UI.agendaView=b.dataset.v;if(b.dataset.v==='dia'&&!UI.agendaDay)UI.agendaDay=today();render()});
  $('#ag-doc',v).onchange=e=>{UI.agendaDoc=e.target.value;render()};
  const cq=$('#cq-q',v);if(cq){cq.oninput=()=>{UI.citaQ=cq.value;clearTimeout(cq._t);cq._t=setTimeout(()=>{render();const n=$('#cq-q');n.focus();n.setSelectionRange(n.value.length,n.value.length)},250)};
    $('#cq-e',v).onchange=e=>{UI.citaEstado=e.target.value;render()};$('#cq-d',v).onchange=e=>{UI.citaDesde=e.target.value;render()};$('#cq-h',v).onchange=e=>{UI.citaHasta=e.target.value;render()}}
  $$('[data-slot]',v).forEach(s=>s.onclick=()=>{const [f,h]=s.dataset.slot.split('|');modalCita(null,{fecha:f,hora:h,doctor:UI.agendaDoc||undefined})});
  $$('[data-agday]',v).forEach(h=>h.onclick=()=>{UI.agendaView='dia';UI.agendaDay=h.dataset.agday;render()});
  const wrap=$('.ag-wrap',v);if(wrap){const nowEl=$('.ag-now',v);if(nowEl)setTimeout(()=>{$('#view').scrollTop=Math.max(0,nowEl.offsetTop-160)},10)}
};
function citaConflicto(c,ignoreId){
  const s=timeToMin(c.hora),e=s+(+c.duracion);
  return S.citas.find(x=>x.id!==ignoreId&&x.fecha===c.fecha&&x.doctor===c.doctor&&!['Cancelada','No asistió'].includes(x.estado)&&timeToMin(x.hora)<e&&timeToMin(x.hora)+(+x.duracion)>s);
}
function modalCita(id,pre={}){
  const c=id?S.citas.find(x=>x.id===id):null;const cfg=S.config;
  const st={pacienteId:c?.pacienteId||pre.pacienteId||null};
  const pPre=st.pacienteId?paciente(st.pacienteId):null;
  const horas=[];for(let m=timeToMin(cfg.horaInicio);m<timeToMin(cfg.horaFin);m+=15)horas.push(minToTime(m));
  const hSel=c?.hora||pre.hora||'09:00';if(!horas.includes(hSel))horas.push(hSel),horas.sort();
  openModal({title:c?'Detalle de la cita':'Nueva cita',size:'lg',body:`
    <div class="grid g2">
      <div class="field ac span2"><label>Paciente</label><input class="inp" id="ci-p" autocomplete="off" placeholder="Buscar o escribir nombre nuevo…" value="${esc(c?.pacienteNombre||pPre?.nombre||'')}" ${c?'':'autofocus'}><div class="ac-list" id="ci-ac" hidden></div></div>
      <div class="field"><label>Celular</label><input class="inp" id="ci-t" value="${esc(c?.telefono||pPre?.telefono||'')}" placeholder="9XX XXX XXX"></div>
      <div class="field"><label>Tratamiento</label><input class="inp" id="ci-tr" list="ci-trs" value="${esc(c?.tratamiento||pre.tratamiento||'')}" placeholder="Consulta"><datalist id="ci-trs">${S.tratamientos.filter(t=>t.activo).map(t=>`<option value="${esc(t.nombre)}">`).join('')}</datalist></div>
      <div class="field"><label>Fecha</label><input type="date" class="inp" id="ci-f" value="${c?.fecha||pre.fecha||today()}"></div>
      <div class="grid g2" style="gap:10px"><div class="field"><label>Hora</label><select class="inp" id="ci-h">${horas.map(h=>`<option ${h===hSel?'selected':''}>${h}</option>`).join('')}</select></div>
        <div class="field"><label>Duración</label><select class="inp" id="ci-d">${[15,20,30,40,45,60,75,90,120,150,180].map(d=>`<option value="${d}" ${d==(c?.duracion||30)?'selected':''}>${d} min</option>`).join('')}</select></div></div>
      <div class="field"><label>Doctor</label><select class="inp" id="ci-doc">${cfg.doctores.map(d=>`<option value="${d.id}" ${d.id===(c?.doctor||pre.doctor)?'selected':''}>${esc(d.nombre)}</option>`).join('')}</select></div>
      <div class="field"><label>Estado</label><select class="inp" id="ci-e">${['Programada','Confirmada','Atendida','No asistió','Cancelada'].map(e=>`<option ${e===(c?.estado||'Programada')?'selected':''}>${e}</option>`).join('')}</select></div>
      <div class="field span2"><label>Nota</label><input class="inp" id="ci-n" value="${esc(c?.nota||'')}" placeholder="Ej.: trae radiografía, 2da sesión de endodoncia…"></div>
      ${!c?`<div class="field"><label>${icon('repeat')} Repetir</label><select class="inp" id="ci-rep"><option value="">No repetir</option>${FREQS.map(([k,l])=>`<option value="${k}">${l}</option>`).join('')}</select></div>
      <div class="field"><label>Número de citas</label><input class="inp" type="number" min="2" max="60" id="ci-rn" value="4" disabled></div>`:''}
      <div class="field span2" id="ci-planbox"></div>
    </div>
    <div id="ci-warn" class="mt"></div>
    ${c&&alergiasDe(paciente(c.pacienteId))?`<div class="notice coral mt">${icon('alert')}<div><b>Alergias del paciente:</b> ${esc(alergiasDe(paciente(c.pacienteId)))}</div></div>`:''}
    ${c?.planId&&planById(c.planId)?`<div class="notice blue mt">${icon('layers')}<div>Esta cita es parte del plan <a class="link" id="ci-plan">${esc(planById(c.planId).nombre)}</a> · ${esc(c.nota||'')}</div></div>`:''}
    ${c?`<div class="card mt" style="background:#fafcfd"><div class="card-b"><div class="between"><div><b>Atención y recordatorios</b><div class="muted small">Historia clínica, evolución de la cita, Google Calendar o recordatorio por WhatsApp.</div></div>
      <div class="center"><button class="btn sm" id="ci-hc">${icon('file')}Historia</button><button class="btn sm" id="ci-ev">${icon('edit')}Evolución</button><button class="btn sm" id="ci-gc">${icon('google')}Google Calendar</button>${c.telefono?`<button class="btn sm" id="ci-wa">${icon('wa')}Recordatorio</button>`:''}</div></div></div></div>`:''}`,
    foot:`${c?`<button class="btn danger" id="ci-del" style="margin-right:auto">${icon('trash')}Eliminar</button>`:''}${c&&c.estado!=='Atendida'?`<button class="btn" id="ci-cob">${icon('cash')}Atender y cobrar</button>`:''}<button class="btn" data-n>Cancelar</button><button class="btn primary" id="ci-ok">${icon('check')}${c?'Guardar cambios':'Agendar'}</button>${!c?`<button class="btn dark" id="ci-okg" title="Agendar y abrir Google Calendar">${icon('google')}Agendar + Google</button>`:''}`,
    onMount:(m,close)=>{
      m.querySelector('[data-n]').onclick=close;
      const pin=$('#ci-p',m),acl=$('#ci-ac',m);
      const planBox=()=>{const box=$('#ci-planbox',m);if(!box)return;const pls=st.pacienteId?S.planes.filter(x=>x.pacienteId===st.pacienteId&&x.estado==='Activo'):[];
        box.innerHTML=pls.length?`<label>Plan de tratamiento</label><select class="inp" id="ci-pl"><option value="">— Cita suelta (sin plan) —</option>${pls.map(x=>`<option value="${x.id}" ${x.id===(c?.planId||pre.planId)?'selected':''}>${esc(x.nombre)}</option>`).join('')}</select>`:'';};
      setTimeout(planBox,0);
      const rep=$('#ci-rep',m);if(rep)rep.onchange=()=>{$('#ci-rn',m).disabled=!rep.value};
      const pl0=$('#ci-plan',m);if(pl0)pl0.onclick=()=>{close();modalPlan(c.planId)};
      pin.addEventListener('input',()=>setTimeout(planBox,0));
      pin.oninput=()=>{st.pacienteId=null;const q=norm(pin.value);if(!q){acl.hidden=true;return}
        const res=S.pacientes.filter(p=>norm(p.nombre).includes(q)||(p.dni||'').includes(q)).slice(0,7);
        acl.innerHTML=res.map(p=>`<div data-pid="${p.id}"><span>${esc(p.nombre)}</span><span class="muted small">${esc(p.telefono||'')}</span></div>`).join('');acl.hidden=!res.length;
        $$('[data-pid]',acl).forEach(d=>d.onmousedown=e=>{e.preventDefault();const p=paciente(d.dataset.pid);st.pacienteId=p.id;pin.value=p.nombre;if(p.telefono)$('#ci-t',m).value=p.telefono;acl.hidden=true;planBox()})};
      pin.onblur=()=>setTimeout(()=>acl.hidden=true,150);
      $('#ci-tr',m).onchange=()=>{const t=S.tratamientos.find(x=>x.nombre===$('#ci-tr',m).value);if(t){const sel=$('#ci-d',m);const opt=[...sel.options].find(o=>+o.value>=t.duracion);if(opt)sel.value=opt.value}check()};
      const read=()=>({fecha:$('#ci-f',m).value,hora:$('#ci-h',m).value,duracion:+$('#ci-d',m).value,doctor:$('#ci-doc',m).value});
      const check=()=>{const d=read();const k=citaConflicto(d,c?.id);const w=[];
        if(k)w.push(`<div class="notice amber">${icon('alert')}<div>${esc(docName(d.doctor))} ya tiene una cita a las <b>${k.hora}</b> con ${esc(k.pacienteNombre)}.</div></div>`);
        const s=timeToMin(d.hora),e=s+d.duracion;if(s<timeToMin(cfg.refrigerioFin)&&e>timeToMin(cfg.refrigerioIni))w.push(`<div class="notice blue mt">${icon('clock')}<div>La cita cruza el horario de refrigerio (${cfg.refrigerioIni}–${cfg.refrigerioFin}).</div></div>`);
        if(!cfg.diasLaborables.includes(parseD(d.fecha).getDay()))w.push(`<div class="notice blue mt">${icon('info')}<div>Ese día no es laborable según tu configuración.</div></div>`);
        $('#ci-warn',m).innerHTML=w.join('')};
      ['#ci-f','#ci-h','#ci-d','#ci-doc'].forEach(s=>$(s,m).onchange=check);check();
      const save=()=>{const name=pin.value.trim();if(!name){toast('Indica el paciente','err');pin.focus();return null}
        const tel=$('#ci-t',m).value.trim();let pid=st.pacienteId;
        if(!pid){const ex=S.pacientes.find(p=>norm(p.nombre)===norm(name));if(ex)pid=ex.id;else{const np={id:uid(),nombre:name,dni:'',telefono:tel,email:'',nacimiento:'',notas:'',creado:nowISO()};S.pacientes.push(np);pid=np.id}}
        const p=paciente(pid);if(tel&&!p.telefono)p.telefono=tel;
        const plSel=$('#ci-pl',m);const data={...read(),pacienteId:pid,pacienteNombre:p.nombre,telefono:tel||p.telefono||'',tratamiento:$('#ci-tr',m).value.trim(),estado:$('#ci-e',m).value,nota:$('#ci-n',m).value.trim()};
        if(plSel)data.planId=plSel.value||null;
        let ci;let extra=0;
        if(c){Object.assign(c,data);ci=c}
        else{const freq=rep?.value;const n=freq?Math.max(2,Math.min(60,parseInt($('#ci-rn',m).value)||2)):1;const ds=freq?recurDates(data.fecha,freq,n):[data.fecha];
          ds.forEach((d,i)=>{const x={id:uid(),creado:nowISO(),...data,fecha:d,nota:n>1?((data.nota?data.nota+' · ':'')+`Cita ${i+1} de ${n}`):data.nota};S.citas.push(x);if(i===0)ci=x});extra=n-1}
        persist(true);close();toast(c?'Cita actualizada':extra?`${extra+1} citas agendadas desde el ${fmtDate(ci.fecha)}`:`Cita agendada: ${fmtDate(ci.fecha)} ${ci.hora}`);if(page==='agenda'||page==='inicio')render();else renderNav();return ci};
      $('#ci-ok',m).onclick=save;
      const og=$('#ci-okg',m);if(og)og.onclick=()=>{const ci=save();if(ci)openExternal(gcalLink(ci))};
      const gc=$('#ci-gc',m);if(gc)gc.onclick=()=>openExternal(gcalLink(c));
      const hcb=$('#ci-hc',m);if(hcb)hcb.onclick=()=>{close();abrirHistoria(c.pacienteId)};
      const evb=$('#ci-ev',m);if(evb)evb.onclick=()=>{close();modalEvol(c.pacienteId,null,{fecha:c.fecha,doctor:c.doctor,citaId:c.id,motivo:c.tratamiento||''})};
      const wa=$('#ci-wa',m);if(wa)wa.onclick=()=>openExternal(waLink(c.telefono,recordatorioMsg(c)));
      const del=$('#ci-del',m);if(del)del.onclick=async()=>{if(await confirmBox('¿Eliminar esta cita?',{ok:'Eliminar',danger:true})){S.citas=S.citas.filter(x=>x.id!==c.id);persist(true);close();toast('Cita eliminada');render()}};
      const cob=$('#ci-cob',m);if(cob)cob.onclick=()=>{close();
        const pl=c.planId&&planById(c.planId);
        if(pl){c.estado='Atendida';persist(true);const st=planStats(pl);toast('Sesión marcada como atendida');
          if(st.sal>0)modalAbono(pl.ventaId,st.montoVencido>0?st.montoVencido:st.proxCuota?r2(st.proxCuota.monto-st.proxCuota.cubierto):st.sal,()=>{render();modalPlan(pl.id)});else{render();modalPlan(pl.id)}}
        else modalCobro({pacienteId:c.pacienteId,pacienteNombre:c.pacienteNombre,tratamiento:c.tratamiento,doctor:c.doctor,citaId:c.id})};
    }});
}
function modalRecordatorios(){
  let d=addDays(today(),1);let g=0;while(!S.config.diasLaborables.includes(parseD(d).getDay())&&g++<7)d=addDays(d,1);
  const draw=(m,fecha)=>{const cs=S.citas.filter(c=>c.fecha===fecha&&!['Cancelada','Atendida','No asistió'].includes(c.estado)).sort((a,b)=>a.hora.localeCompare(b.hora));
    $('#rc-list',m).innerHTML=cs.length?cs.map(c=>`<div class="list-item"><div class="time-box">${c.hora}</div><div class="grow"><b>${esc(c.pacienteNombre)}</b><div class="muted small">${esc(c.tratamiento||'Consulta')} · ${esc(c.telefono||'sin celular')}</div></div>${estadoPill(c.estado)}
      ${c.telefono?`<button class="btn sm ${c.recordado?'':'primary'}" data-rc="${c.id}">${icon('wa')}${c.recordado?'Reenviar':'Enviar'}</button>`:'<span class="muted small">—</span>'}
      <button class="btn sm" data-cf="${c.id}" ${c.estado==='Confirmada'?'disabled':''}>${icon('check')}Confirmó</button></div>`).join(''):`<div class="empty">${icon('cal')}No hay citas pendientes ese día</div>`;
    $$('[data-rc]',m).forEach(b=>b.onclick=()=>{const c=S.citas.find(x=>x.id===b.dataset.rc);openExternal(waLink(c.telefono,recordatorioMsg(c)));c.recordado=true;persist();draw(m,fecha)});
    $$('[data-cf]',m).forEach(b=>b.onclick=()=>{const c=S.citas.find(x=>x.id===b.dataset.cf);c.estado='Confirmada';persist();draw(m,fecha);if(page==='agenda')render()})};
  openModal({title:'Recordatorios por WhatsApp',size:'lg',body:`<div class="between mb"><div class="muted small">Envía el recordatorio a cada paciente y marca quién confirmó.</div><input type="date" class="inp" id="rc-f" style="width:170px" value="${d}"></div><div class="card"><div class="card-b tight" id="rc-list"></div></div>`,
    onMount:m=>{draw(m,d);$('#rc-f',m).onchange=e=>draw(m,e.target.value)}});
}
function recordatorioMsg(c){const d=parseD(c.fecha);return `Hola ${c.pacienteNombre.split(' ')[0]} 👋, te recordamos tu cita en *${S.config.clinica}* el *${DIAS[d.getDay()].toLowerCase()} ${d.getDate()} de ${MESES[d.getMonth()]}* a las *${c.hora}* (${c.tratamiento||'consulta'}) con ${docName(c.doctor)}.\n📍 ${S.config.direccion}\n\nPor favor confírmanos tu asistencia respondiendo este mensaje. ¡Te esperamos! 🦷`}
function modalSyncInfo(){
  openModal({title:'Conectar la agenda con tu celular',size:'lg',body:`
    <p style="margin-top:0;color:var(--ink2)">Hay dos formas de tener las citas en tu celular. Las dos usan Google Calendar, que se sincroniza solo con Android y iPhone.</p>
    <div class="grid g2">
      <div class="card"><div class="card-b"><div class="center"><span class="pill teal">Recomendado</span><b>Cita por cita</b></div>
        <p class="small" style="color:var(--ink2);line-height:1.55">Al agendar, usa <b>“Agendar + Google”</b> o, en una cita existente, el botón <b>Google Calendar</b>. Se abre tu navegador con el evento ya lleno (paciente, celular, tratamiento, doctor) y solo das <b>Guardar</b>. En segundos aparece en tu celular con notificación.</p>
        <p class="small muted">Tip: crea en Google Calendar un calendario llamado “Facil Dent” y compártelo con los doctores para que todos vean la agenda.</p></div></div>
      <div class="card"><div class="card-b"><b>Toda la semana de una vez</b>
        <p class="small" style="color:var(--ink2);line-height:1.55">Exporta el archivo <b>.ics</b> de la semana (botón “Exportar .ics”) e impórtalo en <b>calendar.google.com → Configuración → Importar y exportar → Importar</b>. Útil para cargar muchas citas juntas.</p>
        <button class="btn sm" id="sy-ics">${icon('down')}Exportar próximos 30 días (.ics)</button></div></div>
    </div>
    <div class="notice blue mt">${icon('wa')}<div><b>Recordatorios a pacientes:</b> en cada cita y en la lista de la agenda tienes el botón de WhatsApp que abre el chat con un mensaje de recordatorio listo para enviar.</div></div>
    <div class="notice amber mt">${icon('shield')}<div>La sincronización en ambos sentidos (que lo que cambies en el celular vuelva aquí automáticamente) necesita una cuenta de Google Cloud con credenciales propias de la clínica. Se puede añadir en una versión futura.</div></div>`,
    onMount:m=>{$('#sy-ics',m).onclick=()=>{const t=today();const cs=S.citas.filter(c=>c.fecha>=t&&c.fecha<=addDays(t,30)&&c.estado!=='Cancelada');if(!cs.length){toast('No hay citas próximas','err');return}download(`agenda-facildent-${t}.ics`,icsFor(cs),'text/calendar');toast(cs.length+' citas exportadas')}}});
}

/* ---------- PLANES DE TRATAMIENTO ---------- */
const planById=id=>S.planes.find(p=>p.id===id);
const planVenta=pl=>S.ventas.find(v=>v.id===pl.ventaId);
const nextWorkday=s=>{let g=0;while(!S.config.diasLaborables.includes(parseD(s).getDay())&&g++<7)s=addDays(s,1);return s};
function recurDates(start,freq,n){ // freq: 'w1','w2','w3','w4','m1'
  const out=[];let d=start;
  for(let i=0;i<n;i++){out.push(nextWorkday(d));d=freq==='m1'?addMonths(start,i+1):addDays(start,7*(+freq.slice(1))*(i+1))}
  return out;
}
function planStats(pl){
  const v=planVenta(pl);const citas=S.citas.filter(c=>c.planId===pl.id);
  const atendidas=citas.filter(c=>c.estado==='Atendida').length;
  const futuras=citas.filter(c=>c.fecha>=today()&&!['Cancelada','Atendida','No asistió'].includes(c.estado)).sort((a,b)=>(a.fecha+a.hora).localeCompare(b.fecha+b.hora));
  const total=v?v.total:pl.total,pag=v?pagado(v):0,sal=v?saldo(v):0;
  // asignar lo pagado (menos la inicial) a las cuotas en orden
  let disp=r2(pag-(pl.inicial||0));const t=today();
  const cuotas=(pl.cuotas||[]).map(c=>{const cubierto=Math.max(0,Math.min(c.monto,disp));disp=r2(disp-cubierto);
    const estado=cubierto>=c.monto-0.004?'Pagada':c.fecha<t?'Vencida':cubierto>0?'Parcial':'Pendiente';return {...c,cubierto:r2(cubierto),estado}});
  const vencidas=cuotas.filter(c=>c.estado==='Vencida');
  const montoVencido=r2(vencidas.reduce((s,c)=>s+c.monto-c.cubierto,0));
  const proxCuota=cuotas.find(c=>c.estado!=='Pagada');
  return {v,citas,atendidas,futuras,total,pag,sal,cuotas,vencidas,montoVencido,proxCuota,sesiones:pl.sesiones||citas.length};
}
function crearPlan(o){ // o: {pacienteId,nombre,doctor,total,inicial,metodoIni,nCuotas,primeraCuota,freqCuotas, citas:{n,freq,inicio,hora,duracion,tratamiento}|null, nota, fechaVenta}
  const p=paciente(o.pacienteId);const f=o.fechaVenta||nowISO();
  const pl={id:uid(),pacienteId:p.id,pacienteNombre:p.nombre,nombre:o.nombre,doctor:o.doctor,total:r2(o.total),inicial:r2(o.inicial||0),sesiones:o.sesiones||0,inicio:f.slice(0,10),estado:'Activo',nota:o.nota||'',cuotas:[],creado:nowISO()};
  const resto=r2(pl.total-pl.inicial);const n=Math.max(0,o.nCuotas|0);
  if(n>0&&resto>0){const base=Math.floor(resto/n*100)/100;for(let i=0;i<n;i++){const fecha=o.freqCuotas==='m1'?addMonths(o.primeraCuota,i):addDays(o.primeraCuota,7*(+String(o.freqCuotas||'w4').slice(1))*i);pl.cuotas.push({n:i+1,fecha,monto:i===n-1?r2(resto-base*(n-1)):base})}}
  const pagos=[];
  if(pl.inicial>0){const caja=o.demoCaja||asegurarCaja();pagos.push({id:uid(),fecha:f,metodo:o.metodoIni||'Efectivo',monto:pl.inicial,cajaId:caja.id})}
  const v={id:uid(),recibo:nextRecibo(),fecha:f,pacienteId:p.id,pacienteNombre:p.nombre,doctor:o.doctor,items:[{tratId:null,nombre:o.nombre,precio:pl.total,cant:1}],subtotal:pl.total,descuento:0,total:pl.total,pagos,nota:'Plan de tratamiento'+(n?` · ${n} cuota(s)`:''),anulada:false,planId:pl.id};
  S.ventas.push(v);pl.ventaId=v.id;S.planes.push(pl);
  let conflictos=0;
  if(o.citas&&o.citas.n>0){const ds=recurDates(o.citas.inicio,o.citas.freq,o.citas.n);
    if(!pl.sesiones)pl.sesiones=o.citas.n;
    ds.forEach((d,i)=>{const c={id:uid(),creado:nowISO(),fecha:d,hora:o.citas.hora,duracion:o.citas.duracion,doctor:o.doctor,pacienteId:p.id,pacienteNombre:p.nombre,telefono:p.telefono||'',tratamiento:o.citas.tratamiento||o.nombre,estado:'Programada',nota:`Sesión ${i+1} de ${pl.sesiones}`,planId:pl.id};
      if(citaConflicto(c))conflictos++;S.citas.push(c)})}
  persist(true);return {pl,conflictos};
}
function progressBar(val,max,color='var(--teal)'){const pct=max>0?Math.min(100,val/max*100):0;return `<div class="mb-track" style="height:7px;min-width:90px"><div class="mb-fill" style="width:${pct}%;background:${color}"></div></div>`}

VIEWS.planes=()=>{
  const q=norm(UI.planQ);
  let list=S.planes.filter(pl=>(!UI.planEstado||pl.estado===UI.planEstado)&&(!q||norm(pl.pacienteNombre+' '+pl.nombre).includes(q)));
  const stats=new Map(list.map(pl=>[pl.id,planStats(pl)]));
  list.sort((a,b)=>stats.get(b.id).montoVencido-stats.get(a.id).montoVencido||b.creado.localeCompare(a.creado));
  const act=S.planes.filter(p=>p.estado==='Activo').map(planStats);
  const porCob=r2(act.reduce((s,x)=>s+x.sal,0)),venc=r2(act.reduce((s,x)=>s+x.montoVencido,0)),nVenc=act.filter(x=>x.montoVencido>0).length;
  const filtrosOn=UI.planQ||UI.planEstado!=='Activo';
  return `<div class="toolbar">
    <div class="seg" id="pl-e">${[['Activo','Activos'],['Terminado','Terminados'],['Cancelado','Cancelados'],['','Todos']].map(([k,l])=>`<button data-e="${k}" class="${UI.planEstado===k?'on':''}">${l}</button>`).join('')}</div>
    <div class="search" style="width:300px">${icon('search')}<input class="inp" id="pl-q" placeholder="Paciente o tratamiento…" value="${esc(UI.planQ)}"></div>
    ${filtrosOn?`<button class="btn sm" data-action="clear-planes">${icon('x')}Limpiar filtros</button>`:''}
    <span class="grow"></span><button class="btn primary" data-action="nuevo-plan">${icon('plus')}Nuevo plan</button></div>
  <div class="grid g4 mb">
    <div class="card kpi"><div class="lbl">${icon('layers')}Planes activos</div><div class="val num">${act.length}</div><div class="foot">${act.reduce((s,x)=>s+x.futuras.length,0)} citas programadas</div></div>
    <div class="card kpi c-blue"><div class="lbl">${icon('receipt')}Valor de planes activos</div><div class="val num">${money(act.reduce((s,x)=>s+x.total,0))}</div><div class="foot">Cobrado ${money(act.reduce((s,x)=>s+x.pag,0))}</div></div>
    <div class="card kpi c-amber"><div class="lbl">${icon('clock')}Por cobrar en planes</div><div class="val num">${money(porCob)}</div></div>
    <div class="card kpi c-coral"><div class="lbl">${icon('alert')}Cuotas vencidas</div><div class="val num">${money(venc)}</div><div class="foot">${nVenc} paciente(s)</div></div>
  </div>
  <div class="card">${list.length?`<div class="tbl-wrap" style="max-height:none"><table class="t"><thead><tr><th>Paciente</th><th>Plan</th><th>Doctor</th><th style="width:170px">Sesiones</th><th style="width:210px">Pagos</th><th>Próxima cita</th><th>Próxima cuota</th><th></th></tr></thead><tbody>
  ${list.map(pl=>{const st=stats.get(pl.id);const pc=st.futuras[0];const cu=st.proxCuota;return `<tr data-plan="${pl.id}" style="cursor:pointer">
    <td><b>${esc(pl.pacienteNombre)}</b></td><td>${esc(pl.nombre)} ${pl.estado!=='Activo'?`<span class="pill ${pl.estado==='Terminado'?'green':'gray'}">${pl.estado}</span>`:''}</td><td class="small">${esc(docName(pl.doctor))}</td>
    <td><div class="between small"><span>${st.atendidas} de ${st.sesiones}</span></div>${progressBar(st.atendidas,st.sesiones)}</td>
    <td><div class="between small"><span class="num">${money(st.pag)}</span><span class="muted num">de ${money(st.total)}</span></div>${progressBar(st.pag,st.total,'var(--green)')}</td>
    <td>${pc?`<span class="pill teal">${fmtDate(pc.fecha)} ${pc.hora}</span>`:'<span class="muted">—</span>'}</td>
    <td>${st.montoVencido>0?`<span class="pill coral">Vencido ${money(st.montoVencido)}</span>`:cu?`<span class="small">${fmtDate(cu.fecha)} · ${money(cu.monto-cu.cubierto)}</span>`:st.sal>0?`<span class="pill amber">Saldo ${money(st.sal)}</span>`:'<span class="pill green">Pagado</span>'}</td>
    <td class="actions">${st.sal>0&&pl.estado==='Activo'?`<button class="btn xs primary" data-action="pagar-plan" data-id="${pl.id}">Pagar</button>`:''}</td></tr>`}).join('')}
  </tbody></table></div>`:`<div class="empty">${icon('layers')}${S.planes.length?'No hay planes con este filtro':'Aún no hay planes. Úsalos para ortodoncia, implantes, rehabilitaciones o cualquier tratamiento de varias citas y pagos en cuotas.'}</div>`}</div>`;
};
AFTER.planes=v=>{
  $$('#pl-e button',v).forEach(b=>b.onclick=()=>{UI.planEstado=b.dataset.e;render()});
  const q=$('#pl-q',v);q.oninput=()=>{UI.planQ=q.value;clearTimeout(q._t);q._t=setTimeout(()=>{render();const n=$('#pl-q');n.focus();n.setSelectionRange(n.value.length,n.value.length)},250)};
};
function bindPacAuto(m,pin,acl,onPick){
  pin.addEventListener('input',()=>{const q=norm(pin.value);onPick(null);if(!q){acl.hidden=true;return}
    const res=S.pacientes.filter(p=>norm(p.nombre).includes(q)||(p.dni||'').includes(q)||(p.telefono||'').replace(/\s/g,'').includes(q.replace(/\s/g,''))).slice(0,7);
    acl.innerHTML=res.map(p=>`<div data-pid="${p.id}"><span>${esc(p.nombre)}</span><span class="muted small">${esc(p.dni||p.telefono||'')}</span></div>`).join('');acl.hidden=!res.length;
    $$('[data-pid]',acl).forEach(d=>d.onmousedown=e=>{e.preventDefault();const p=paciente(d.dataset.pid);pin.value=p.nombre;acl.hidden=true;onPick(p)})});
  pin.addEventListener('blur',()=>setTimeout(()=>acl.hidden=true,150));
}
const FREQS=[['w1','Cada semana'],['w2','Cada 2 semanas'],['w3','Cada 3 semanas'],['w4','Cada 4 semanas'],['m1','Cada mes (mismo día)']];
function modalNuevoPlan(pre={}){
  const cfg=S.config;const pPre=pre.pacienteId?paciente(pre.pacienteId):null;let pid=pPre?.id||null;
  const horas=[];for(let mm=timeToMin(cfg.horaInicio);mm<timeToMin(cfg.horaFin);mm+=15)horas.push(minToTime(mm));
  const t1=addDays(today(),7);
  openModal({title:'Nuevo plan de tratamiento',size:'xl',body:`
    <div class="grid g3">
      <div class="field ac"><label>Paciente</label><input class="inp" id="np-p" autocomplete="off" placeholder="Buscar o escribir nombre…" value="${esc(pPre?.nombre||'')}" ${pPre?'':'autofocus'}><div class="ac-list" id="np-ac" hidden></div></div>
      <div class="field"><label>Tratamiento / nombre del plan</label><input class="inp" id="np-n" list="np-trs" placeholder="Ej.: Ortodoncia con brackets metálicos"><datalist id="np-trs">${S.tratamientos.filter(t=>t.activo).map(t=>`<option value="${esc(t.nombre)}">`).join('')}</datalist></div>
      <div class="field"><label>Doctor</label><select class="inp" id="np-doc">${cfg.doctores.map(d=>`<option value="${d.id}">${esc(d.nombre)}</option>`).join('')}</select></div>
    </div>
    <div class="grid g2 mt" style="gap:20px">
      <div class="card"><div class="card-h"><h3>${icon('cash')} Costo y cuotas</h3></div><div class="card-b"><div class="grid g2">
        <div class="field"><label>Costo total del tratamiento (S/)</label><input class="inp money" type="number" min="0" step="10" id="np-t" placeholder="0.00"></div>
        <div class="field"><label>Pago inicial hoy (S/)</label><input class="inp money" type="number" min="0" step="10" id="np-i" value="0"></div>
        <div class="field"><label>Método del pago inicial</label><select class="inp" id="np-im">${cfg.metodos.map(x=>`<option>${esc(x)}</option>`).join('')}</select></div>
        <div class="field"><label>N.° de cuotas para el saldo</label><input class="inp" type="number" min="0" max="60" id="np-nc" value="0"></div>
        <div class="field"><label>Frecuencia de cuotas</label><select class="inp" id="np-fc">${FREQS.map(([k,l])=>`<option value="${k}" ${k==='m1'?'selected':''}>${l}</option>`).join('')}</select></div>
        <div class="field"><label>Primera cuota</label><input class="inp" type="date" id="np-fq" value="${addMonths(today(),1)}"></div>
      </div><div class="muted small mt">0 cuotas = el saldo queda abierto y se paga con abonos libres.</div></div></div>
      <div class="card"><div class="card-h"><h3>${icon('repeat')} Citas del tratamiento</h3><label class="chk small"><input type="checkbox" id="np-ag" checked> Agendar ahora</label></div><div class="card-b"><div class="grid g2" id="np-cbox">
        <div class="field"><label>Número de sesiones</label><input class="inp" type="number" min="1" max="60" id="np-ns" value="12"></div>
        <div class="field"><label>Frecuencia</label><select class="inp" id="np-fs">${FREQS.map(([k,l])=>`<option value="${k}" ${k==='w4'?'selected':''}>${l}</option>`).join('')}</select></div>
        <div class="field"><label>Primera sesión</label><input class="inp" type="date" id="np-fi" value="${nextWorkday(t1)}"></div>
        <div class="grid g2" style="gap:10px"><div class="field"><label>Hora</label><select class="inp" id="np-h">${horas.map(h=>`<option ${h==='16:00'?'selected':''}>${h}</option>`).join('')}</select></div>
          <div class="field"><label>Duración</label><select class="inp" id="np-d">${[15,20,30,40,45,60,90,120].map(d=>`<option value="${d}" ${d===30?'selected':''}>${d} min</option>`).join('')}</select></div></div>
        <div class="field span2"><label>Descripción de cada cita</label><input class="inp" id="np-ct" placeholder="Ej.: Control de ortodoncia"></div>
      </div></div></div>
    </div>
    <div class="field mt"><label>Nota (opcional)</label><input class="inp" id="np-no" placeholder="Ej.: incluye retenedores al final"></div>
    <div class="card mt" style="background:#fafcfd"><div class="card-b" id="np-prev"></div></div>`,
    foot:`<button class="btn" data-n>Cancelar</button><button class="btn primary" id="np-ok">${icon('check')}Crear plan</button>`,
    onMount:(m,close)=>{m.querySelector('[data-n]').onclick=close;
      bindPacAuto(m,$('#np-p',m),$('#np-ac',m),p=>{pid=p?p.id:null});
      $('#np-n',m).addEventListener('change',()=>{const t=S.tratamientos.find(x=>x.nombre===$('#np-n',m).value);if(t){if(!num($('#np-t',m).value))$('#np-t',m).value=t.precio;if(!$('#np-ct',m).value)$('#np-ct',m).value=/ortodon/i.test(t.nombre)?'Control de ortodoncia':t.nombre;const sel=$('#np-d',m);const o=[...sel.options].find(x=>+x.value>=Math.min(60,t.duracion));if(o)sel.value=o.value}prev()});
      const read=()=>({total:num($('#np-t',m).value),inicial:num($('#np-i',m).value),nC:parseInt($('#np-nc',m).value)||0,fc:$('#np-fc',m).value,fq:$('#np-fq',m).value,
        ag:$('#np-ag',m).checked,nS:parseInt($('#np-ns',m).value)||0,fs:$('#np-fs',m).value,fi:$('#np-fi',m).value,h:$('#np-h',m).value,d:+$('#np-d',m).value});
      const prev=()=>{const r=read();$('#np-cbox',m).style.opacity=r.ag?1:.45;const resto=r2(r.total-r.inicial);const parts=[];
        if(r.total>0)parts.push(`<div><b>Pagos:</b> ${money(r.total)} en total${r.inicial>0?` · inicial hoy ${money(r.inicial)}`:''}${r.nC>0&&resto>0?` · ${r.nC} cuota(s) de ~${money(resto/r.nC)} desde el ${fmtDate(r.fq)}`:resto>0?` · saldo abierto ${money(resto)}`:''}</div>`);
        if(r.ag&&r.nS>0&&r.fi){const ds=recurDates(r.fi,r.fs,r.nS);parts.push(`<div class="mt"><b>Citas:</b> ${r.nS} sesiones, de ${fmtDate(ds[0])} a ${fmtDate(ds[ds.length-1])} a las ${r.h}</div><div class="small muted" style="margin-top:4px">${ds.slice(0,14).map(d=>{const dd=parseD(d);return `${DIAS_C[dd.getDay()]} ${fmtDate(d).slice(0,5)}`}).join(' · ')}${ds.length>14?' …':''}</div>`)}
        if(r.inicial>r.total&&r.total>0)parts.push(`<div class="notice coral mt">${icon('alert')}<div>El pago inicial supera el costo total.</div></div>`);
        $('#np-prev',m).innerHTML=parts.join('')||'<span class="muted">Completa los datos para ver el resumen.</span>';hydrateIcons($('#np-prev',m))};
      m.addEventListener('input',prev);m.addEventListener('change',prev);prev();
      $('#np-ok',m).onclick=()=>{const r=read();const name=$('#np-p',m).value.trim();const nombre=$('#np-n',m).value.trim();
        if(!name){toast('Indica el paciente','err');return}if(!nombre){toast('Indica el tratamiento','err');return}
        if(r.total<=0){toast('Indica el costo total','err');return}if(r.inicial>r.total){toast('El pago inicial supera el total','err');return}
        if(!pid){const ex=S.pacientes.find(p=>norm(p.nombre)===norm(name));if(ex)pid=ex.id;else{const np={id:uid(),nombre:name,dni:'',telefono:'',email:'',nacimiento:'',notas:'',creado:nowISO()};S.pacientes.push(np);pid=np.id}}
        const res=crearPlan({pacienteId:pid,nombre,doctor:$('#np-doc',m).value,total:r.total,inicial:r.inicial,metodoIni:$('#np-im',m).value,nCuotas:r.nC,primeraCuota:r.fq,freqCuotas:r.fc,sesiones:r.ag?r.nS:r.nS,
          citas:r.ag&&r.nS>0?{n:r.nS,freq:r.fs,inicio:r.fi,hora:r.h,duracion:r.d,tratamiento:$('#np-ct',m).value.trim()||nombre}:null,nota:$('#np-no',m).value.trim()});
        close();toast(`Plan creado${r.ag?` con ${r.nS} citas`:''}`);if(res.conflictos)setTimeout(()=>toast(`${res.conflictos} cita(s) se cruzan con otras del doctor. Revísalas en la agenda.`,'err'),400);
        page==='planes'?render():go('planes');modalPlan(res.pl.id)};
    }});
}
function modalPlan(id){
  const pl=planById(id);if(!pl)return;const st=planStats(pl);
  const citas=st.citas.slice().sort((a,b)=>(a.fecha+a.hora).localeCompare(b.fecha+b.hora));
  openModal({title:'Plan de tratamiento',size:'xl',body:`
    <div class="between"><div><div class="center"><h3 style="margin:0;font-size:18px">${esc(pl.nombre)}</h3><span class="pill ${pl.estado==='Activo'?'teal':pl.estado==='Terminado'?'green':'gray'}">${pl.estado}</span></div>
      <div class="muted small" style="margin-top:3px"><a class="link" id="pp-pac">${esc(pl.pacienteNombre)}</a> · ${esc(docName(pl.doctor))} · inicio ${fmtDate(pl.inicio)}${pl.nota?' · '+esc(pl.nota):''}</div></div></div>
    <div class="grid g3 mt">
      <div class="card" style="padding:14px 16px"><div class="muted small">Sesiones atendidas</div><div style="font-size:22px;font-weight:700">${st.atendidas} <span class="muted" style="font-size:14px">de ${st.sesiones}</span></div>${progressBar(st.atendidas,st.sesiones)}</div>
      <div class="card" style="padding:14px 16px"><div class="muted small">Pagado</div><div style="font-size:22px;font-weight:700" class="num">${money(st.pag)} <span class="muted" style="font-size:14px">de ${money(st.total)}</span></div>${progressBar(st.pag,st.total,'var(--green)')}</div>
      <div class="card" style="padding:14px 16px"><div class="muted small">Saldo pendiente</div><div style="font-size:22px;font-weight:700;color:${st.montoVencido>0?'var(--coral)':'inherit'}" class="num">${money(st.sal)}</div><div class="small ${st.montoVencido>0?'down':'muted'}">${st.montoVencido>0?`Vencido: ${money(st.montoVencido)}`:st.proxCuota?`Próx. cuota ${fmtDate(st.proxCuota.fecha)}`:'Sin cuotas vencidas'}</div></div>
    </div>
    <div class="grid g2 mt" style="gap:20px">
      <div><h4 style="margin:0 0 8px">Cuotas</h4>${st.cuotas.length?`<div class="items" style="margin-top:0;max-height:300px;overflow:auto"><table class="t"><thead><tr><th>#</th><th>Vence</th><th class="r">Monto</th><th>Estado</th></tr></thead><tbody>
        ${pl.inicial?`<tr><td>—</td><td>${fmtDate(pl.inicio)}</td><td class="r num">${money(pl.inicial)}</td><td><span class="pill green">Inicial</span></td></tr>`:''}
        ${st.cuotas.map(c=>`<tr><td>${c.n}</td><td>${fmtDate(c.fecha)}</td><td class="r num">${money(c.monto)}${c.estado==='Parcial'?`<div class="muted small">pagado ${money(c.cubierto)}</div>`:''}</td><td><span class="pill ${({Pagada:'green',Vencida:'coral',Parcial:'amber',Pendiente:'gray'})[c.estado]}">${c.estado}</span></td></tr>`).join('')}</tbody></table></div>`:`<div class="muted small">Sin cronograma de cuotas: el saldo se paga con abonos libres.</div>`}
        <h4 style="margin:16px 0 8px">Pagos recibidos</h4>${st.v&&st.v.pagos.length?`<div class="items" style="margin-top:0"><table class="t"><tbody>${st.v.pagos.map(p=>`<tr><td>${fmtDT(p.fecha)}</td><td>${esc(p.metodo)}</td><td class="r num">${money(p.monto)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="muted small">Aún no hay pagos.</div>'}
      </div>
      <div><div class="between" style="margin-bottom:8px"><h4 style="margin:0">Citas (${citas.length})</h4>${pl.estado==='Activo'?`<button class="btn xs" id="pp-mas">${icon('plus')}Agendar más citas</button>`:''}</div>
        ${citas.length?`<div class="items" style="margin-top:0;max-height:420px;overflow:auto"><table class="t"><tbody>${citas.map((c,i)=>`<tr data-pcita="${c.id}" style="cursor:pointer"><td class="muted">${i+1}</td><td>${fmtDate(c.fecha)} ${c.hora}</td><td class="small">${esc(c.tratamiento)}</td><td>${estadoPill(c.estado)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="muted small">Sin citas agendadas.</div>'}</div>
    </div>`,
    foot:`${pl.estado==='Activo'?`<button class="btn danger" id="pp-can" style="margin-right:auto">Cancelar plan</button><button class="btn" id="pp-fin">${icon('check')}Marcar terminado</button>`:`<button class="btn" id="pp-re" style="margin-right:auto">Reactivar plan</button>`}${st.v?`<button class="btn" id="pp-rec">${icon('receipt')}Ver cobro</button>`:''}${st.sal>0?`<button class="btn primary" id="pp-pay">${icon('cash')}Registrar pago</button>`:''}`,
    onMount:(m,close)=>{
      const reopen=()=>{render();modalPlan(id)};
      $('#pp-pac',m).onclick=()=>{close();modalFicha(pl.pacienteId)};
      $$('[data-pcita]',m).forEach(r=>r.onclick=()=>{close();modalCita(r.dataset.pcita)});
      const pay=$('#pp-pay',m);if(pay)pay.onclick=()=>{close();modalAbono(pl.ventaId,st.montoVencido>0?st.montoVencido:st.proxCuota?r2(st.proxCuota.monto-st.proxCuota.cubierto):st.sal,reopen)};
      const rec=$('#pp-rec',m);if(rec)rec.onclick=()=>{close();modalVenta(pl.ventaId)};
      const fin=$('#pp-fin',m);if(fin)fin.onclick=async()=>{if(await confirmBox(`¿Marcar el plan como terminado?${st.futuras.length?` Las ${st.futuras.length} cita(s) futuras se mantendrán.`:''}${st.sal>0?` El saldo de ${money(st.sal)} seguirá pendiente.`:''}`)){pl.estado='Terminado';persist(true);close();reopen()}};
      const re=$('#pp-re',m);if(re)re.onclick=()=>{pl.estado='Activo';persist(true);close();reopen()};
      const can=$('#pp-can',m);if(can)can.onclick=()=>{openModal({title:'Cancelar plan',size:'sm',body:`<p style="margin-top:0">El plan quedará como cancelado.</p>
        <label class="chk"><input type="checkbox" id="cx-c" checked> Cancelar las ${st.futuras.length} cita(s) futuras</label>
        ${st.sal>0?`<label class="chk mt"><input type="checkbox" id="cx-s"> Perdonar el saldo pendiente (${money(st.sal)})</label><div class="muted small" style="margin:4px 0 0 24px">Si no lo marcas, el saldo sigue como deuda del paciente.</div>`:''}`,
        foot:`<button class="btn" data-n>Volver</button><button class="btn danger solid" id="cx-ok">Cancelar plan</button>`,
        onMount:(m2,c2)=>{m2.querySelector('[data-n]').onclick=c2;$('#cx-ok',m2).onclick=()=>{pl.estado='Cancelado';
          if($('#cx-c',m2).checked)st.futuras.forEach(c=>c.estado='Cancelada');
          const sx=$('#cx-s',m2);if(sx&&sx.checked&&st.v){const pg=pagado(st.v);st.v.descuento=r2((st.v.descuento||0)+st.v.total-pg);st.v.total=pg;st.v.nota+=' · saldo perdonado al cancelar';}
          persist(true);c2();close();toast('Plan cancelado');reopen()}}})};
      const mas=$('#pp-mas',m);if(mas)mas.onclick=()=>{close();modalMasCitas(pl)};
    }});
}
function modalMasCitas(pl){
  const cfg=S.config;const horas=[];for(let mm=timeToMin(cfg.horaInicio);mm<timeToMin(cfg.horaFin);mm+=15)horas.push(minToTime(mm));
  const last=S.citas.filter(c=>c.planId===pl.id).sort((a,b)=>(b.fecha+b.hora).localeCompare(a.fecha+a.hora))[0];
  openModal({title:'Agendar más citas del plan',body:`<div class="grid g2">
    <div class="field"><label>Cantidad de citas</label><input class="inp" type="number" min="1" max="60" id="mc-n" value="4" autofocus></div>
    <div class="field"><label>Frecuencia</label><select class="inp" id="mc-f">${FREQS.map(([k,l])=>`<option value="${k}" ${k==='w4'?'selected':''}>${l}</option>`).join('')}</select></div>
    <div class="field"><label>Desde</label><input class="inp" type="date" id="mc-d" value="${last?nextWorkday(addDays(last.fecha,28)):nextWorkday(addDays(today(),7))}"></div>
    <div class="grid g2" style="gap:10px"><div class="field"><label>Hora</label><select class="inp" id="mc-h">${horas.map(h=>`<option ${h===(last?.hora||'16:00')?'selected':''}>${h}</option>`).join('')}</select></div>
      <div class="field"><label>Duración</label><select class="inp" id="mc-du">${[15,20,30,40,45,60,90,120].map(d=>`<option value="${d}" ${d==(last?.duracion||30)?'selected':''}>${d} min</option>`).join('')}</select></div></div>
    <div class="field span2"><label>Descripción</label><input class="inp" id="mc-t" value="${esc(last?.tratamiento||pl.nombre)}"></div>
    <label class="chk span2"><input type="checkbox" id="mc-s" checked> Sumar estas citas al total de sesiones del plan (ahora ${pl.sesiones})</label></div>`,
    foot:`<button class="btn" data-n>Cancelar</button><button class="btn primary" id="mc-ok">Agendar</button>`,
    onMount:(m,close)=>{m.querySelector('[data-n]').onclick=close;$('#mc-ok',m).onclick=()=>{
      const n=parseInt($('#mc-n',m).value)||0;if(n<1)return;const ds=recurDates($('#mc-d',m).value,$('#mc-f',m).value,n);const p=paciente(pl.pacienteId);
      if($('#mc-s',m).checked)pl.sesiones=(pl.sesiones||0)+n;const prev=S.citas.filter(c=>c.planId===pl.id).length;let k=0;
      ds.forEach((d,i)=>{const c={id:uid(),creado:nowISO(),fecha:d,hora:$('#mc-h',m).value,duracion:+$('#mc-du',m).value,doctor:pl.doctor,pacienteId:pl.pacienteId,pacienteNombre:pl.pacienteNombre,telefono:p?.telefono||'',tratamiento:$('#mc-t',m).value.trim(),estado:'Programada',nota:`Sesión ${prev+i+1} de ${pl.sesiones}`,planId:pl.id};if(citaConflicto(c))k++;S.citas.push(c)});
      persist(true);close();toast(`${n} citas agendadas`);if(k)setTimeout(()=>toast(`${k} cita(s) se cruzan con otras del doctor`,'err'),400);render();modalPlan(pl.id)}}});
}

/* ---------- HISTORIA CLÍNICA ---------- */
const HC_GRUPOS={
  motivo:{t:'Motivo de consulta',items:['Emergencia','Revisión','Lesión cariosa','Odontoxesis (limpieza)','Puente','Prostodoncia','Extracción','Amalgamas / resinas','Ortodoncia','Estética','Dolor','Otro']},
  enfermedades:{t:'Enfermedades personales',items:['Aparato cardiovascular','Hipertensión','Sistema nervioso','Aparato respiratorio','Propensión hemorrágica','Renal','Aparato digestivo','Diabetes','Artritis','Hepatitis','Asma','Epilepsia','VIH / inmunodeprimido']},
  habitos:{t:'Hábitos',items:['Bruxomanía','Contracciones musculares','Hábitos de mordida','Respiración bucal','Chupa labios','Chupa lengua','Chupa dedos','Fuma','Consume alcohol','Muerde objetos']},
  duros:{t:'Examen de tejidos · Duros',items:['Esmalte','Dentina','Raíz','Huesos']},
  blandos:{t:'Examen de tejidos · Blandos',items:['Encía','Epitelial (migración)','Pulpa (alteraciones)','Velo del paladar','Carrillos','Inserción','Lengua','Labios','Piso de boca']},
  oclusion:{t:'Oclusión',items:['Sobremordida vertical','Sobremordida horizontal','Desgaste','Intercuspidación','Mordida cruzada','Mordida abierta','Apiñamiento','Dolor ATM']},
  otros:{t:'Otros antecedentes',items:['Desmayos','Vértigos','Mareos','Embarazo','Lactancia','Cirugías previas','Reacción a anestesia']}
};
const ODO_UP=[18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28],ODO_DN=[48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38];
const ODO_UPT=[55,54,53,52,51,61,62,63,64,65],ODO_DNT=[85,84,83,82,81,71,72,73,74,75];
const ODO_TOOLS=[
  {k:'caries',l:'Caries',c:'#e5484d',sf:1},{k:'obturado',l:'Obturado / resina',c:'#2f6fdb',sf:1},
  {k:'ausente',l:'Ausente',c:'#2f6fdb'},{k:'extraer',l:'Extracción indicada',c:'#e5484d'},
  {k:'endodoncia',l:'Endodoncia',c:null},{k:'corona',l:'Corona',c:null},{k:'implante',l:'Implante',c:null},
  {k:'sellante',l:'Sellante',c:null},{k:'fractura',l:'Fractura',c:'#e5484d'},{k:'borrar',l:'Borrar',c:'#7b8b9b'}];
function hcOf(p){if(!p.hc)p.hc={anam:{},odo:{},evol:[],odoTemporal:false};if(!p.hc.evol)p.hc.evol=[];if(!p.hc.odo)p.hc.odo={};if(!p.hc.anam)p.hc.anam={};return p.hc}
function edadDe(n){if(!n)return '';const b=parseD(n),t=new Date();return t.getFullYear()-b.getFullYear()-((t.getMonth()<b.getMonth()||(t.getMonth()===b.getMonth()&&t.getDate()<b.getDate()))?1:0)}
function alergiasDe(p){return p?.hc?.anam?.alergias?.trim()||''}
function toothSVG(n,d,sel){
  d=d||{};const cs=d.caras||{};const col=v=>v==='caries'?'#e5484d':v==='obturado'?'#2f6fdb':'#fff';
  const s=34,o=4,i=11;const P=(pts)=>pts.map(p=>p.join(',')).join(' ');
  const mc=d.color==='rojo'?'#e5484d':'#2f6fdb';
  let g=`<g>`;
  g+=`<polygon data-f="t" points="${P([[0,0],[s,0],[s-i,i],[i,i]])}" fill="${col(cs.t)}"/>`;
  g+=`<polygon data-f="r" points="${P([[s,0],[s,s],[s-i,s-i],[s-i,i]])}" fill="${col(cs.r)}"/>`;
  g+=`<polygon data-f="b" points="${P([[s,s],[0,s],[i,s-i],[s-i,s-i]])}" fill="${col(cs.b)}"/>`;
  g+=`<polygon data-f="l" points="${P([[0,s],[0,0],[i,i],[i,s-i]])}" fill="${col(cs.l)}"/>`;
  g+=`<rect data-f="c" x="${i}" y="${i}" width="${s-2*i}" height="${s-2*i}" fill="${col(cs.c)}"/>`;
  g+=`<g stroke="#6b7c8c" stroke-width="1" fill="none" pointer-events="none"><rect x=".5" y=".5" width="${s-1}" height="${s-1}"/><rect x="${i}" y="${i}" width="${s-2*i}" height="${s-2*i}"/><path d="M.5 .5L${i} ${i}M${s-.5} .5L${s-i} ${i}M${s-.5} ${s-.5}L${s-i} ${s-i}M.5 ${s-.5}L${i} ${s-i}"/></g>`;
  const m=d.marca;
  if(m==='ausente'||m==='extraer')g+=`<path d="M-2 -2L${s+2} ${s+2}M${s+2} -2L-2 ${s+2}" stroke="${m==='ausente'?'#2f6fdb':'#e5484d'}" stroke-width="3" pointer-events="none"/>`;
  if(m==='corona')g+=`<circle cx="${s/2}" cy="${s/2}" r="${s/2+3}" fill="none" stroke="${mc}" stroke-width="2.5" pointer-events="none"/>`;
  if(m==='endodoncia')g+=`<path d="M${s/2} -8V${s+8}" stroke="${mc}" stroke-width="3" pointer-events="none"/>`;
  if(m==='implante')g+=`<text x="${s/2}" y="${s/2+6}" text-anchor="middle" font-size="17" font-weight="700" fill="${mc}" pointer-events="none">IM</text>`;
  if(m==='sellante')g+=`<text x="${s/2}" y="${s/2+6}" text-anchor="middle" font-size="17" font-weight="700" fill="${mc}" pointer-events="none">S</text>`;
  if(m==='fractura')g+=`<path d="M4 4L${s/2} ${s/2-4}L${s/2-4} ${s/2+4}L${s-4} ${s-4}" stroke="#e5484d" stroke-width="2.5" fill="none" pointer-events="none"/>`;
  g+='</g>';
  return `<div class="tooth ${sel?'sel':''} ${d.nota?'has-note':''}" data-tooth="${n}" title="Pieza ${n}${d.nota?': '+esc(d.nota):''}"><span class="tn">${n}</span><svg width="44" height="44" viewBox="-5 -5 44 44">${g}</svg></div>`;
}
function odontogramaHTML(hc,sel,printable){
  const row=arr=>`<div class="odo-row">${arr.map((n,i)=>(i===arr.length/2?'<span class="odo-mid"></span>':'')+toothSVG(n,hc.odo[n],sel==n)).join('')}</div>`;
  return `<div class="odo ${printable?'print':''}">${row(ODO_UP)}${hc.odoTemporal||printable?row(ODO_UPT)+row(ODO_DNT):''}${row(ODO_DN)}</div>`;
}
VIEWS.historia=()=>{
  const p=paciente(UI.hcPac);if(!p)return `<div class="empty">Paciente no encontrado</div>`;const hc=hcOf(p);const a=hc.anam;const tab=UI.hcTab||'anam';
  const al=alergiasDe(p);const ed=edadDe(p.nacimiento);
  const chk=(g)=>`<div class="card"><div class="card-h"><h3>${HC_GRUPOS[g].t}</h3></div><div class="card-b"><div class="hc-chks">${HC_GRUPOS[g].items.map(it=>`<label class="chk"><input type="checkbox" data-hcg="${g}" value="${esc(it)}" ${(a[g]||[]).includes(it)?'checked':''}>${esc(it)}</label>`).join('')}</div></div></div>`;
  const fld=(k,l,ph='',ta=false)=>`<div class="field"><label>${l}</label>${ta?`<textarea class="inp" data-hc="${k}" placeholder="${ph}">${esc(a[k]||'')}</textarea>`:`<input class="inp" data-hc="${k}" value="${esc(a[k]||'')}" placeholder="${ph}">`}</div>`;
  let body='';
  if(tab==='anam') body=`
    <div class="grid g3">
      <div class="card"><div class="card-h"><h3>Antecedentes médicos</h3></div><div class="card-b" style="display:flex;flex-direction:column;gap:12px">
        <div class="field"><label>¿Está bajo tratamiento médico?</label><select class="inp" data-hc="bajoTrat"><option value="">—</option><option ${a.bajoTrat==='No'?'selected':''}>No</option><option ${a.bajoTrat==='Sí'?'selected':''}>Sí</option></select></div>
        ${fld('tratMedico','¿Cuál tratamiento / médico?')}
        ${fld('medicamentos','Medicamentos que toma','',true)}
        <div class="field"><label style="color:#c4392a">Alergias ⚠</label><input class="inp" data-hc="alergias" value="${esc(a.alergias||'')}" placeholder="Penicilina, látex, anestesia… (vacío si no tiene)" style="${a.alergias?'border-color:#ef6b5b;background:#fff6f5':''}"></div>
        ${fld('embarazoMeses','Embarazo (meses), si aplica')}
      </div></div>
      <div class="card"><div class="card-h"><h3>Examen general</h3></div><div class="card-b" style="display:flex;flex-direction:column;gap:12px">
        <div class="field"><label>Higiene bucal</label><select class="inp" data-hc="higiene"><option value="">—</option>${['Buena','Regular','Mala'].map(x=>`<option ${a.higiene===x?'selected':''}>${x}</option>`).join('')}</select></div>
        ${fld('alimentacion','Alimentación','Ej.: alta en azúcares')}
        ${fld('colorDientes','Color de dientes','Ej.: A2')}
        ${fld('presion','Presión arterial','Ej.: 120/80')}
        ${fld('observaciones','Observaciones generales','',true)}
      </div></div>
      ${chk('motivo')}
    </div>
    <div class="grid g4 mt">${chk('enfermedades')}${chk('habitos')}${chk('oclusion')}${chk('otros')}</div>
    <div class="grid g2 mt">${chk('duros')}${chk('blandos')}</div>
    <div class="muted small mt">Se guarda automáticamente${a._upd?` · última modificación ${fmtDT(a._upd)}`:''}.</div>`;
  if(tab==='odo'){
    const sel=UI.odoSel;const sd=sel&&hc.odo[sel]||{};
    body=`<div class="grid" style="grid-template-columns:1fr 300px">
      <div class="card"><div class="card-h"><h3>Odontograma</h3><div class="center"><label class="chk small"><input type="checkbox" id="odo-temp" ${hc.odoTemporal?'checked':''}> Mostrar dientes de leche</label></div></div>
        <div class="card-b">
          <div class="odo-tools">${ODO_TOOLS.map(t=>`<button class="odo-tool ${UI.odoTool===t.k?'on':''}" data-tool="${t.k}"><em style="background:${t.c||'linear-gradient(90deg,#2f6fdb 50%,#e5484d 50%)'}"></em>${t.l}</button>`).join('')}
            <span class="grow"></span><div class="seg" id="odo-col"><button data-c="azul" class="${(UI.odoColor||'azul')==='azul'?'on':''}" title="Tratamiento realizado / buen estado">Azul · realizado</button><button data-c="rojo" class="${UI.odoColor==='rojo'?'on':''}" title="Pendiente / mal estado">Rojo · pendiente</button></div></div>
          <div class="muted small" style="margin:10px 0 14px">${UI.odoTool?`Herramienta <b>${ODO_TOOLS.find(t=>t.k===UI.odoTool).l}</b>: ${ODO_TOOLS.find(t=>t.k===UI.odoTool).sf?'haz clic en la cara del diente (centro = oclusal).':'haz clic en el diente.'}`:'Elige una herramienta y haz clic en los dientes. Sin herramienta, el clic selecciona el diente para escribir una nota.'}</div>
          <div id="odo-wrap">${odontogramaHTML(hc,sel)}</div>
          <div class="legend mt" style="justify-content:center"><span><em style="background:#e5484d"></em>Rojo: caries / pendiente</span><span><em style="background:#2f6fdb"></em>Azul: tratado / buen estado</span><span>✕ ausente / extraer · ○ corona · │ endodoncia · IM implante · S sellante</span></div>
        </div></div>
      <div class="card"><div class="card-h"><h3>${sel?'Pieza '+sel:'Detalle de pieza'}</h3>${sel?`<button class="btn xs" data-action="odo-clear-tooth">Limpiar pieza</button>`:''}</div><div class="card-b">
        ${sel?`<div class="small muted">Marca: <b>${sd.marca?ODO_TOOLS.find(t=>t.k===sd.marca)?.l:'—'}</b>${sd.caras&&Object.keys(sd.caras).length?` · Caras: ${Object.entries(sd.caras).map(([f,v])=>({t:'sup.',b:'inf.',l:'izq.',r:'der.',c:'oclusal'})[f]+' '+v).join(', ')}`:''}</div>
          <div class="field mt"><label>Nota de la pieza</label><textarea class="inp" id="odo-note" placeholder="Ej.: caries profunda distal, evaluar endodoncia">${esc(sd.nota||'')}</textarea></div>`:'<div class="muted small">Selecciona un diente (sin herramienta activa) para agregar una nota.</div>'}
        <h4 style="margin:18px 0 8px;font-size:13px">Piezas con hallazgos</h4>
        <div style="display:flex;flex-direction:column;gap:6px;max-height:320px;overflow:auto">${Object.entries(hc.odo).filter(([,v])=>v&&(v.marca||v.nota||(v.caras&&Object.keys(v.caras).length))).sort((x,y)=>x[0]-y[0]).map(([n,v])=>`<div class="small" style="cursor:pointer" data-tooth-list="${n}"><b>${n}</b> · ${[v.marca?ODO_TOOLS.find(t=>t.k===v.marca)?.l:'',...Object.values(v.caras||{})].filter(Boolean).filter((x,i,a)=>a.indexOf(x)===i).join(', ')}${v.nota?` — <span class="muted">${esc(v.nota)}</span>`:''}</div>`).join('')||'<div class="muted small">Sin hallazgos registrados.</div>'}</div>
      </div></div></div>`;
  }
  if(tab==='evol'){
    const ev=hc.evol.slice().sort((x,y)=>(y.fecha+(y.hora||'')).localeCompare(x.fecha+(x.hora||'')));
    body=`<div class="toolbar"><span class="muted">${ev.length} evolución(es) registradas</span><span class="grow"></span><button class="btn primary" data-action="nueva-evol">${icon('plus')}Registrar evolución</button></div>
      ${ev.length?ev.map(e=>`<div class="card mb evol"><div class="card-h"><div><h3>${fmtDate(e.fecha)}${e.hora?' · '+e.hora:''} <span class="sub">· ${esc(docName(e.doctor))}${e.piezas?' · piezas '+esc(e.piezas):''}</span></h3></div><div class="center"><button class="btn xs" data-action="edit-evol" data-id="${e.id}">${icon('edit')}</button><button class="btn xs danger" data-action="del-evol" data-id="${e.id}">${icon('trash')}</button></div></div>
        <div class="card-b"><dl class="kv" style="grid-template-columns:150px 1fr">${[['motivo','Motivo'],['diagnostico','Diagnóstico'],['procedimiento','Procedimiento realizado'],['indicaciones','Indicaciones / receta'],['proximo','Próximo paso'],['obs','Observaciones']].filter(([k])=>e[k]).map(([k,l])=>`<dt>${l}</dt><dd style="white-space:pre-wrap">${esc(e[k])}</dd>`).join('')}</dl></div></div>`).join('')
      :`<div class="card"><div class="empty">${icon('file')}Aún no hay evoluciones. Registra lo que se hizo en cada cita o evaluación.</div></div>`}`;
  }
  return `<div class="between mb"><div class="ficha-h"><span class="av" style="background:${avColor(p.nombre)}">${initials(p.nombre)}</span><div><h2 style="margin:0;font-size:20px">${esc(p.nombre)}</h2>
      <div class="muted small">${p.dni?'DNI '+esc(p.dni)+' · ':''}${ed!==''?ed+' años · ':''}${p.sexo?esc(p.sexo)+' · ':''}${p.telefono?esc(p.telefono)+' · ':''}HC N.° ${esc(p.hcNum||String(S.pacientes.indexOf(p)+1).padStart(5,'0'))}</div></div></div>
    <div class="center"><button class="btn" data-action="hc-back">${icon('left')}Volver</button><button class="btn" data-action="hc-ficha">${icon('user')}Ficha</button><button class="btn" data-action="print-hc">${icon('print')}Imprimir historia</button><button class="btn primary" data-action="nueva-evol">${icon('plus')}Evolución</button></div></div>
  ${al?`<div class="notice coral mb">${icon('alert')}<div><b>ALERGIAS:</b> ${esc(al)}</div></div>`:''}
  <div class="tabs">${[['anam','Anamnesis y examen'],['odo','Odontograma'],['evol',`Evoluciones (${hc.evol.length})`]].map(([k,l])=>`<button data-hctab="${k}" class="${tab===k?'on':''}">${l}</button>`).join('')}</div>${body}`;
};
AFTER.historia=v=>{
  const p=paciente(UI.hcPac);if(!p)return;const hc=hcOf(p);
  $$('[data-hctab]',v).forEach(b=>b.onclick=()=>{UI.hcTab=b.dataset.hctab;render()});
  const touch=()=>{hc.anam._upd=nowISO();persist()};
  $$('[data-hc]',v).forEach(i=>{const ev=i.tagName==='SELECT'?'change':'input';i.addEventListener(ev,()=>{hc.anam[i.dataset.hc]=i.value;touch()});if(i.dataset.hc==='alergias')i.addEventListener('change',()=>render())});
  $$('[data-hcg]',v).forEach(i=>i.onchange=()=>{const g=i.dataset.hcg;hc.anam[g]=$$(`[data-hcg="${g}"]`,v).filter(x=>x.checked).map(x=>x.value);touch()});
  $$('[data-tool]',v).forEach(b=>b.onclick=()=>{UI.odoTool=UI.odoTool===b.dataset.tool?null:b.dataset.tool;render()});
  $$('#odo-col button',v).forEach(b=>b.onclick=()=>{UI.odoColor=b.dataset.c;render()});
  const tmp=$('#odo-temp',v);if(tmp)tmp.onchange=()=>{hc.odoTemporal=tmp.checked;persist();render()};
  const note=$('#odo-note',v);if(note)note.oninput=()=>{const d=hc.odo[UI.odoSel]=hc.odo[UI.odoSel]||{};d.nota=note.value;persist()};
  $$('[data-tooth-list]',v).forEach(x=>x.onclick=()=>{UI.odoTool=null;UI.odoSel=x.dataset.toothList;render()});
  const wrap=$('#odo-wrap',v);if(wrap)wrap.addEventListener('click',e=>{const t=e.target.closest('[data-tooth]');if(!t)return;const n=t.dataset.tooth;const tool=UI.odoTool;
    const d=hc.odo[n]=hc.odo[n]||{};d.caras=d.caras||{};
    if(!tool){UI.odoSel=n;render();return}
    const T=ODO_TOOLS.find(x=>x.k===tool);
    if(tool==='borrar'){const f=e.target.dataset?.f;if(f&&d.caras[f])delete d.caras[f];else{d.marca=null;d.color=null}}
    else if(T.sf){const f=e.target.dataset?.f||'c';d.caras[f]=d.caras[f]===tool?undefined:tool;if(!d.caras[f])delete d.caras[f]}
    else{if(d.marca===tool&&(T.c||d.color===(UI.odoColor||'azul'))){d.marca=null;d.color=null}else{d.marca=tool;d.color=T.c?null:(UI.odoColor||'azul')}}
    UI.odoSel=n;hc.anam._upd=nowISO();persist();const sc=$('#view').scrollTop;render();$('#view').scrollTop=sc});
};
function abrirHistoria(pid,tab){UI.hcPac=pid;UI.hcTab=tab||'anam';UI.odoSel=null;UI.hcPrev=page==='historia'?UI.hcPrev:page;go('historia')}
function modalEvol(pid,evId,pre={}){
  const p=paciente(pid);const hc=hcOf(p);const e=evId?hc.evol.find(x=>x.id===evId):null;
  const ta=(k,l,ph,rows=2)=>`<div class="field span2"><label>${l}</label><textarea class="inp" id="ev-${k}" rows="${rows}" placeholder="${ph}">${esc(e?.[k]??pre[k]??'')}</textarea></div>`;
  openModal({title:(e?'Editar evolución':'Registrar evolución')+' · '+esc(p.nombre),size:'lg',body:`
    ${alergiasDe(p)?`<div class="notice coral mb">${icon('alert')}<div><b>Alergias:</b> ${esc(alergiasDe(p))}</div></div>`:''}
    <div class="grid g3"><div class="field"><label>Fecha</label><input type="date" class="inp" id="ev-fecha" value="${e?.fecha||pre.fecha||today()}"></div>
      <div class="field"><label>Doctor</label><select class="inp" id="ev-doctor">${S.config.doctores.map(d=>`<option value="${d.id}" ${d.id===(e?.doctor||pre.doctor)?'selected':''}>${esc(d.nombre)}</option>`).join('')}</select></div>
      <div class="field"><label>Pieza(s)</label><input class="inp" id="ev-piezas" value="${esc(e?.piezas||pre.piezas||'')}" placeholder="Ej.: 36, 37"></div></div>
    <div class="grid g2 mt">
      ${ta('motivo','Motivo / síntomas','Ej.: dolor al masticar lado izquierdo')}
      ${ta('diagnostico','Diagnóstico','Ej.: caries profunda en 36 con compromiso pulpar')}
      ${ta('procedimiento','Procedimiento realizado','Ej.: anestesia infiltrativa, apertura cameral, primera sesión de endodoncia',3)}
      ${ta('indicaciones','Indicaciones / receta','Ej.: ibuprofeno 400 mg c/8h por 3 días; no masticar del lado izquierdo')}
      <div class="field"><label>Próximo paso</label><input class="inp" id="ev-proximo" value="${esc(e?.proximo||'')}" placeholder="Ej.: 2da sesión endodoncia en 1 semana"></div>
      <div class="field"><label>Observaciones</label><input class="inp" id="ev-obs" value="${esc(e?.obs||'')}"></div>
    </div>`,
    foot:`<button class="btn" data-n>Cancelar</button>${!e?`<button class="btn" id="ev-okc">${icon('cal-plus')}Guardar y agendar siguiente</button>`:''}<button class="btn primary" id="ev-ok">${icon('check')}Guardar</button>`,
    onMount:(m,close)=>{m.querySelector('[data-n]').onclick=close;
      const save=()=>{const g=k=>$('#ev-'+k,m).value.trim();const data={fecha:g('fecha')||today(),doctor:g('doctor'),piezas:g('piezas'),motivo:g('motivo'),diagnostico:g('diagnostico'),procedimiento:g('procedimiento'),indicaciones:g('indicaciones'),proximo:g('proximo'),obs:g('obs')};
        if(!data.motivo&&!data.diagnostico&&!data.procedimiento){toast('Escribe al menos el motivo, diagnóstico o procedimiento','err');return false}
        if(e)Object.assign(e,data);else hc.evol.push({id:uid(),hora:hm(new Date()),citaId:pre.citaId||null,creado:nowISO(),...data});
        persist(true);close();toast('Evolución guardada');if(page==='historia')render();return true};
      $('#ev-ok',m).onclick=save;
      const c=$('#ev-okc',m);if(c)c.onclick=()=>{if(save())modalCita(null,{pacienteId:pid,doctor:$('#ev-doctor',m)?.value})};
    }});
}
function printHistoria(pid){
  const p=paciente(pid);const hc=hcOf(p);const a=hc.anam;const c=S.config;
  const grp=g=>`<td style="vertical-align:top;width:25%"><b>${HC_GRUPOS[g].t}</b><br>${HC_GRUPOS[g].items.map(it=>`${(a[g]||[]).includes(it)?'☒':'☐'} ${esc(it)}`).join('<br>')}</td>`;
  const ev=hc.evol.slice().sort((x,y)=>(x.fecha+(x.hora||'')).localeCompare(y.fecha+(y.hora||'')));
  printHTML(`<style>.odo{display:flex;flex-direction:column;align-items:center;gap:6px}.odo-row{display:flex;gap:2px}.odo-mid{width:12px}.tooth{display:flex;flex-direction:column;align-items:center;font-size:9px}.tooth svg{width:34px;height:34px}td{font-size:11px}</style>
  <table style="border:0"><tr><td style="border:0"><div style="display:flex;align-items:center;gap:12px"><img src="${LOGO_DATA}" style="width:64px;height:64px"><div><h1>HISTORIA CLÍNICA DENTAL</h1><div class="muted">${esc(c.clinica)} · ${esc(c.direccion)} · Tel. ${esc(c.telefono)}</div></div></div></td><td class="r" style="border:0">Fecha: ${fmtDate(today())}<br>HC N.° ${esc(p.hcNum||String(S.pacientes.indexOf(p)+1).padStart(5,'0'))}</td></tr></table>
  <table><tr><td><b>Paciente:</b> ${esc(p.nombre)}</td><td><b>DNI:</b> ${esc(p.dni)}</td><td><b>Edad:</b> ${edadDe(p.nacimiento)}</td><td><b>Sexo:</b> ${esc(p.sexo||'')}</td></tr>
  <tr><td colspan="2"><b>Domicilio:</b> ${esc(p.domicilio||'')}</td><td><b>Tel.:</b> ${esc(p.telefono)}</td><td><b>Ocupación:</b> ${esc(p.ocupacion||'')}</td></tr>
  <tr><td colspan="2"><b>Referencia:</b> ${esc(p.referencia||'')}</td><td colspan="2"><b>Bajo tratamiento médico:</b> ${esc(a.bajoTrat||'')} ${esc(a.tratMedico||'')}</td></tr>
  <tr><td colspan="2"><b>Medicamentos:</b> ${esc(a.medicamentos||'')}</td><td colspan="2"><b>ALERGIAS:</b> ${esc(a.alergias||'Ninguna referida')}</td></tr>
  <tr><td><b>Higiene bucal:</b> ${esc(a.higiene||'')}</td><td><b>Alimentación:</b> ${esc(a.alimentacion||'')}</td><td><b>Color:</b> ${esc(a.colorDientes||'')}</td><td><b>Presión:</b> ${esc(a.presion||'')}</td></tr></table>
  <h2>Odontograma</h2>${odontogramaHTML(hc,null,true)}
  <div class="muted" style="text-align:center;font-size:10px;margin-top:4px">Rojo: caries/pendiente · Azul: tratado · ✕ ausente/extraer · ○ corona · │ endodoncia · IM implante · S sellante</div>
  ${Object.entries(hc.odo).filter(([,v])=>v&&v.nota).length?`<p style="font-size:11px"><b>Notas por pieza:</b> ${Object.entries(hc.odo).filter(([,v])=>v&&v.nota).map(([n,v])=>`<b>${n}</b>: ${esc(v.nota)}`).join(' · ')}</p>`:''}
  <h2>Anamnesis y examen</h2><table><tr>${grp('duros')}${grp('blandos')}${grp('habitos')}${grp('motivo')}</tr><tr>${grp('oclusion')}${grp('otros')}${grp('enfermedades')}<td style="vertical-align:top"><b>Observaciones</b><br>${esc(a.observaciones||'')}</td></tr></table>
  <h2>Evolución</h2>${ev.length?`<table><tr><th style="width:80px">Fecha</th><th>Detalle</th><th style="width:120px">Doctor</th></tr>${ev.map(e=>`<tr><td>${fmtDate(e.fecha)}</td><td>${e.piezas?`<b>Piezas ${esc(e.piezas)}.</b> `:''}${e.motivo?`<b>Motivo:</b> ${esc(e.motivo)}. `:''}${e.diagnostico?`<b>Dx:</b> ${esc(e.diagnostico)}. `:''}${e.procedimiento?`<b>Tto:</b> ${esc(e.procedimiento)}. `:''}${e.indicaciones?`<b>Indicaciones:</b> ${esc(e.indicaciones)}. `:''}${e.proximo?`<b>Próx.:</b> ${esc(e.proximo)}`:''}</td><td>${esc(docName(e.doctor))}</td></tr>`).join('')}</table>`:'<p class="muted">Sin evoluciones.</p>'}
  <p style="margin-top:50px">_______________________ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _______________________<br>Firma del paciente &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Firma y sello del odontólogo</p>`);
}

/* ---------- REPORTES ---------- */
function repRange(){
  const t=today(),d=parseD(t);
  switch(UI.repPreset){
    case 'hoy':return [t,t];
    case 'semana':return [startOfWeek(t),t];
    case 'mes':return [t.slice(0,8)+'01',t];
    case 'mesant':{const a=new Date(d.getFullYear(),d.getMonth()-1,1),b=new Date(d.getFullYear(),d.getMonth(),0);return [ymd(a),ymd(b)]}
    case 'anio':return [t.slice(0,4)+'-01-01',t];
    default:return [UI.repDesde,UI.repHasta];
  }
}
function repData(){
  const [a,b]=repRange();const inR=s=>s.slice(0,10)>=a&&s.slice(0,10)<=b;
  const ventas=S.ventas.filter(v=>!v.anulada&&inR(v.fecha));const pagos=allPagos().filter(p=>inR(p.fecha));const gastos=S.gastos.filter(g=>inR(g.fecha));
  const fact=r2(ventas.reduce((s,v)=>s+v.total,0)),cob=r2(pagos.reduce((s,p)=>s+p.monto,0)),gas=r2(gastos.reduce((s,g)=>s+g.monto,0)),desc=r2(ventas.reduce((s,v)=>s+(v.descuento||0),0));
  const porTrat={};ventas.forEach(v=>{const f=v.subtotal>0?v.total/v.subtotal:1;v.items.forEach(i=>{const k=i.nombre;porTrat[k]=porTrat[k]||{n:0,m:0};porTrat[k].n+=i.cant;porTrat[k].m+=i.precio*i.cant*f})});
  const porDoc={};ventas.forEach(v=>{const k=docName(v.doctor);porDoc[k]=porDoc[k]||{n:0,m:0};porDoc[k].n++;porDoc[k].m+=v.total});
  const porMet={};pagos.forEach(p=>porMet[p.metodo]=(porMet[p.metodo]||0)+p.monto);
  const porCat={};gastos.forEach(g=>porCat[g.categoria]=(porCat[g.categoria]||0)+g.monto);
  const pacientesU=new Set(ventas.map(v=>v.pacienteId)).size;
  const citas=S.citas.filter(c=>c.fecha>=a&&c.fecha<=b);
  const citasSt={};citas.forEach(c=>citasSt[c.estado]=(citasSt[c.estado]||0)+1);
  // serie diaria/mensual
  const days=(parseD(b)-parseD(a))/864e5+1;const serie=[];
  if(days<=62){for(let i=0;i<days;i++){const d=addDays(a,i);serie.push({l:d,a:r2(pagos.filter(p=>p.fecha.slice(0,10)===d).reduce((s,p)=>s+p.monto,0)),b:r2(gastos.filter(g=>g.fecha===d).reduce((s,g)=>s+g.monto,0))})}}
  else{const ms={};pagos.forEach(p=>{const k=monthKey(p.fecha);ms[k]=ms[k]||{a:0,b:0};ms[k].a+=p.monto});gastos.forEach(g=>{const k=monthKey(g.fecha);ms[k]=ms[k]||{a:0,b:0};ms[k].b+=g.monto});Object.keys(ms).sort().forEach(k=>serie.push({l:k+'-01',a:r2(ms[k].a),b:r2(ms[k].b),mes:true}))}
  return {a,b,ventas,pagos,gastos,fact,cob,gas,desc,util:r2(cob-gas),porTrat,porDoc,porMet,porCat,pacientesU,citas,citasSt,serie,ticket:ventas.length?r2(fact/ventas.length):0};
}
function lineChart(serie){
  if(!serie.length)return `<div class="empty">${icon('chart')}Sin datos en el periodo</div>`;
  const W=900,H=240,pl=56,pb=28,pt=12,pr=12;const max=Math.max(100,...serie.map(d=>Math.max(d.a,d.b)));const nice=Math.pow(10,Math.floor(Math.log10(max)));const top=Math.ceil(max/nice)*nice;
  const x=i=>pl+(serie.length===1?(W-pl-pr)/2:(W-pl-pr)*i/(serie.length-1));const y=v=>pt+(H-pt-pb)*(1-v/top);
  let s=`<svg class="chart" viewBox="0 0 ${W} ${H}" style="height:240px">`;
  for(let i=0;i<=4;i++){const v=top/4*i;s+=`<line class="grid-l" x1="${pl}" x2="${W-pr}" y1="${y(v)}" y2="${y(v)}"/><text x="${pl-8}" y="${y(v)+4}" text-anchor="end">${v>=1000?(v/1000).toFixed(v%1000?1:0)+'k':v}</text>`}
  const path=k=>serie.map((d,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(d[k]).toFixed(1)}`).join('');
  s+=`<path d="${path('a')} L${x(serie.length-1)},${H-pb} L${x(0)},${H-pb}Z" fill="#1565d8" opacity=".08"/>`;
  s+=`<path d="${path('a')}" fill="none" stroke="#1565d8" stroke-width="2.5" stroke-linejoin="round"/><path d="${path('b')}" fill="none" stroke="#ef6b5b" stroke-width="2" stroke-dasharray="5 4" stroke-linejoin="round"/>`;
  const every=Math.ceil(serie.length/12);
  serie.forEach((d,i)=>{s+=`<circle cx="${x(i)}" cy="${y(d.a)}" r="3" fill="#1565d8"><title>${d.mes?MESES[+d.l.slice(5,7)-1]:fmtDate(d.l)}: ingresos ${money(d.a)} · gastos ${money(d.b)}</title></circle>`;
    if(i%every===0){const dd=parseD(d.l);s+=`<text x="${x(i)}" y="${H-8}" text-anchor="middle">${d.mes?MESES[dd.getMonth()].slice(0,3):dd.getDate()+'/'+(dd.getMonth()+1)}</text>`}});
  return s+'</svg>';
}
VIEWS.reportes=()=>{
  const R=repData();
  const pt=Object.entries(R.porTrat).sort((a,b)=>b[1].m-a[1].m);const ptMax=pt[0]?.[1].m||1;
  const pc=Object.entries(R.porCat).sort((a,b)=>b[1]-a[1]);const pcMax=pc[0]?.[1]||1;
  return `<div class="toolbar"><div class="seg" id="rp-p">${[['hoy','Hoy'],['semana','Esta semana'],['mes','Este mes'],['mesant','Mes anterior'],['anio','Este año'],['custom','Personalizado']].map(([k,l])=>`<button data-p="${k}" class="${UI.repPreset===k?'on':''}">${l}</button>`).join('')}</div>
    ${UI.repPreset==='custom'?`<input type="date" class="inp" style="width:150px" id="rp-d" value="${UI.repDesde}"><span class="muted">a</span><input type="date" class="inp" style="width:150px" id="rp-h" value="${UI.repHasta}">`:`<span class="muted">${fmtDate(R.a)} – ${fmtDate(R.b)}</span>`}
    <span class="grow"></span><button class="btn" data-action="exp-reporte">${icon('down')}Exportar Excel</button><button class="btn" data-action="print-reporte">${icon('print')}Imprimir</button></div>
  <div class="grid g5">
    <div class="card kpi"><div class="lbl">${icon('cash')}Cobrado</div><div class="val num">${money(R.cob)}</div><div class="foot">${R.pagos.length} pagos</div></div>
    <div class="card kpi c-blue"><div class="lbl">${icon('receipt')}Facturado</div><div class="val num">${money(R.fact)}</div><div class="foot">Ticket promedio ${money(R.ticket)}</div></div>
    <div class="card kpi c-coral"><div class="lbl">${icon('wallet')}Gastos</div><div class="val num">${money(R.gas)}</div><div class="foot">${R.gastos.length} registros</div></div>
    <div class="card kpi c-green"><div class="lbl">${icon('chart')}Utilidad</div><div class="val num" style="color:${R.util<0?'var(--coral)':'inherit'}">${money(R.util)}</div><div class="foot">${R.cob>0?'Margen '+Math.round(R.util/R.cob*100)+'%':'Cobrado − gastos'}</div></div>
    <div class="card kpi c-amber"><div class="lbl">${icon('users')}Pacientes atendidos</div><div class="val num">${R.pacientesU}</div><div class="foot">${R.ventas.length} atenciones · desc. ${money(R.desc)}</div></div>
  </div>
  <div class="card mt"><div class="card-h"><h3>Evolución</h3><div class="legend"><span><em style="background:#1565d8"></em>Ingresos</span><span><em style="background:#ef6b5b"></em>Gastos</span></div></div><div class="card-b">${lineChart(R.serie)}</div></div>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Ingresos por tratamiento</h3></div><div class="card-b tight">${pt.length?`<table class="t"><thead><tr><th>Tratamiento</th><th class="r">Cant.</th><th class="r">Monto</th><th style="width:30%"></th></tr></thead><tbody>${pt.map(([n,v])=>`<tr><td>${esc(n)}</td><td class="r">${v.n}</td><td class="r num">${money(v.m)}</td><td><div class="bl-track" style="height:7px;background:var(--line2);border-radius:5px"><div style="height:100%;border-radius:5px;background:var(--teal);width:${v.m/ptMax*100}%"></div></div></td></tr>`).join('')}</tbody></table>`:'<div class="empty">Sin datos</div>'}</div></div>
    <div>
      <div class="card"><div class="card-h"><h3>Cobros por método</h3></div><div class="card-b">${donut(R.porMet)}</div></div>
      <div class="card mt"><div class="card-h"><h3>Producción por doctor</h3></div><div class="card-b tight">${Object.keys(R.porDoc).length?`<table class="t"><tbody>${Object.entries(R.porDoc).sort((a,b)=>b[1].m-a[1].m).map(([n,v])=>`<tr><td>${esc(n)}</td><td class="r">${v.n} atenc.</td><td class="r num"><b>${money(v.m)}</b></td></tr>`).join('')}</tbody></table>`:'<div class="empty">Sin datos</div>'}</div></div>
    </div>
  </div>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Gastos por categoría</h3></div><div class="card-b">${pc.length?`<div class="bar-list">${pc.map(([c,v])=>`<div class="bl"><div class="bl-top"><span>${esc(c)}</span><b class="num">${money(v)} <span class="muted small">${Math.round(v/R.gas*100)}%</span></b></div><div class="bl-track"><div class="bl-fill" style="width:${v/pcMax*100}%;background:var(--coral)"></div></div></div>`).join('')}</div>`:'<div class="muted">Sin gastos</div>'}</div></div>
    <div class="card"><div class="card-h"><h3>Agenda del periodo</h3><span class="sub">${R.citas.length} citas</span></div><div class="card-b">${R.citas.length?`<div class="bar-list">${['Atendida','Confirmada','Programada','No asistió','Cancelada'].filter(e=>R.citasSt[e]).map(e=>`<div class="bl"><div class="bl-top"><span>${estadoPill(e)}</span><b>${R.citasSt[e]} <span class="muted small">${Math.round(R.citasSt[e]/R.citas.length*100)}%</span></b></div></div>`).join('')}</div>`:'<div class="muted">Sin citas</div>'}</div></div>
  </div>`;
};
AFTER.reportes=v=>{
  $$('#rp-p button',v).forEach(b=>b.onclick=()=>{UI.repPreset=b.dataset.p;render()});
  const d=$('#rp-d',v);if(d){d.onchange=()=>{UI.repDesde=d.value;render()};$('#rp-h',v).onchange=e=>{UI.repHasta=e.target.value;render()}}
};

/* ---------- CONFIG ---------- */
VIEWS.config=()=>{
  const c=S.config;const tab=UI.cfgTab;
  const tabs=[['clinica','Clínica'],['equipo','Doctores'],['listas','Métodos y categorías'],['horario','Horario'],['datos','Respaldo y datos']];
  let body='';
  if(tab==='clinica') body=`<div class="card" style="max-width:760px"><div class="card-b"><div class="grid g2">
    <div class="field"><label>Nombre comercial</label><input class="inp" data-cfg="clinica" value="${esc(c.clinica)}"></div>
    <div class="field"><label>Razón social</label><input class="inp" data-cfg="razon" value="${esc(c.razon)}"></div>
    <div class="field"><label>RUC</label><input class="inp" data-cfg="ruc" value="${esc(c.ruc)}"></div>
    <div class="field"><label>Teléfono</label><input class="inp" data-cfg="telefono" value="${esc(c.telefono)}"></div>
    <div class="field span2"><label>Dirección</label><input class="inp" data-cfg="direccion" value="${esc(c.direccion)}"></div>
    <div class="field span2"><label>Mensaje al pie del recibo</label><input class="inp" data-cfg="reciboPie" value="${esc(c.reciboPie)}"></div>
    <div class="field"><label>Meta de ingresos mensual (S/) · 0 = sin meta</label><input class="inp money" type="number" min="0" step="100" data-cfg="metaMensual" data-num="1" value="${c.metaMensual}"></div>
    <div class="field"><label>Siguiente N.° de recibo</label><input class="inp" type="number" min="1" data-cfg="correlativo" data-num="1" value="${c.correlativo}"></div>
  </div><div class="muted small mt">Los cambios se guardan automáticamente.</div></div></div>`;
  if(tab==='equipo') body=`<div class="card" style="max-width:860px"><table class="t"><thead><tr><th style="width:60px">Color</th><th>Nombre</th><th>Especialidad</th><th></th></tr></thead><tbody>
    ${c.doctores.map(d=>`<tr><td><input type="color" data-dc="${d.id}" value="${d.color}" style="width:36px;height:30px;border:0;background:none;cursor:pointer"></td><td><input class="inp sm" data-dn="${d.id}" value="${esc(d.nombre)}"></td><td><input class="inp sm" data-de="${d.id}" value="${esc(d.especialidad||'')}"></td><td class="actions"><button class="btn xs danger" data-action="del-doc" data-id="${d.id}">${icon('trash')}</button></td></tr>`).join('')}
    </tbody></table><div class="card-b"><button class="btn sm" data-action="add-doc">${icon('plus')}Agregar doctor / especialista</button></div></div>`;
  if(tab==='listas') body=`<div class="grid g2" style="max-width:1000px">
    <div class="card"><div class="card-h"><h3>Métodos de pago</h3></div><div class="card-b"><div class="tag-edit">${c.metodos.map((m,i)=>`<span class="pill teal">${esc(m)}${m!=='Efectivo'?`<button data-action="del-met" data-i="${i}" title="Quitar">×</button>`:''}</span>`).join('')}</div>
      <div class="row mt" style="gap:8px"><input class="inp sm" id="nm-met" placeholder="Nuevo método (ej.: Izipay, POS BCP)"><button class="btn sm" data-action="add-met">Agregar</button></div></div></div>
    <div class="card"><div class="card-h"><h3>Categorías de gastos</h3></div><div class="card-b"><div class="tag-edit">${c.catGastos.map((m,i)=>`<span class="pill">${esc(m)}<button data-action="del-cat" data-i="${i}" title="Quitar">×</button></span>`).join('')}</div>
      <div class="row mt" style="gap:8px"><input class="inp sm" id="nm-cat" placeholder="Nueva categoría"><button class="btn sm" data-action="add-cat">Agregar</button></div></div></div></div>`;
  if(tab==='horario') body=`<div class="card" style="max-width:760px"><div class="card-b"><div class="grid g2">
    <div class="field"><label>Hora de apertura</label><input class="inp" type="time" data-cfg="horaInicio" value="${c.horaInicio}"></div>
    <div class="field"><label>Hora de cierre</label><input class="inp" type="time" data-cfg="horaFin" value="${c.horaFin}"></div>
    <div class="field"><label>Refrigerio desde</label><input class="inp" type="time" data-cfg="refrigerioIni" value="${c.refrigerioIni}"></div>
    <div class="field"><label>Refrigerio hasta</label><input class="inp" type="time" data-cfg="refrigerioFin" value="${c.refrigerioFin}"></div>
    <div class="field"><label>Intervalo de la agenda</label><select class="inp" data-cfg="intervalo" data-num="1">${[15,20,30,60].map(n=>`<option value="${n}" ${n==c.intervalo?'selected':''}>${n} minutos</option>`).join('')}</select></div>
    <div class="field span2"><label>Días laborables</label><div class="row wrap" style="gap:14px">${[1,2,3,4,5,6,0].map(d=>`<label class="chk"><input type="checkbox" data-dia="${d}" ${c.diasLaborables.includes(d)?'checked':''}>${DIAS[d]}</label>`).join('')}</div></div>
  </div></div></div>`;
  if(tab==='datos') body=`<div class="grid g2" style="max-width:1000px">
    <div class="card"><div class="card-h"><h3>Copia de seguridad</h3></div><div class="card-b">
      <p class="small" style="color:var(--ink2);margin-top:0;line-height:1.55">Toda la información se guarda en esta computadora${hasNative?' y se crea una copia automática diaria en <b>Documentos › Facil Dent Respaldos</b>':''}. Descarga un respaldo cada semana y guárdalo en un USB o en Google Drive.</p>
      <div class="row wrap" style="gap:8px"><button class="btn primary" data-action="backup">${icon('down')}Descargar respaldo</button><label class="btn">${icon('upload')}Restaurar respaldo<input type="file" id="restore" accept=".json" hidden></label>${hasNative?`<button class="btn" data-action="open-backups">Abrir carpeta de respaldos</button>`:''}</div>
      <div class="muted small mt">${S.pacientes.length} pacientes · ${S.ventas.length} cobros · ${S.gastos.length} gastos · ${S.citas.length} citas · ${S.cajas.length} cajas</div></div></div>
    <div class="card"><div class="card-h"><h3>Seguridad</h3>${S.config.pinHash?'<span class="pill green">PIN activo</span>':'<span class="pill gray">Sin PIN</span>'}</div><div class="card-b">
      <p class="small" style="color:var(--ink2);margin-top:0">Protege la app con un PIN para que solo el personal autorizado vea los ingresos.</p>
      <button class="btn" data-action="set-pin">${icon('lock')}${S.config.pinHash?'Cambiar o quitar PIN':'Activar PIN'}</button></div></div>
    <div class="card"><div class="card-h"><h3>Datos de demostración</h3></div><div class="card-b">
      <p class="small" style="color:var(--ink2);margin-top:0">Carga pacientes, cobros, gastos y citas de ejemplo para conocer la app. Luego bórralos antes de empezar a usarla de verdad.</p>
      <div class="row wrap" style="gap:8px"><button class="btn" data-action="demo">Cargar ejemplo</button><button class="btn danger" data-action="reset">${icon('trash')}Borrar movimientos</button></div>
      <div class="muted small mt">“Borrar movimientos” elimina pacientes, cobros, gastos, cajas y citas. Conserva tratamientos, precios y configuración.</div></div></div></div>`;
  return `<div class="tabs">${tabs.map(([k,l])=>`<button data-tab="${k}" class="${tab===k?'on':''}">${l}</button>`).join('')}</div>${body}`;
};
AFTER.config=v=>{
  $$('[data-tab]',v).forEach(b=>b.onclick=()=>{UI.cfgTab=b.dataset.tab;render()});
  $$('[data-cfg]',v).forEach(i=>i.onchange=()=>{S.config[i.dataset.cfg]=i.dataset.num?num(i.value):i.value;persist();toast('Guardado');renderSide()});
  $$('[data-dia]',v).forEach(i=>i.onchange=()=>{S.config.diasLaborables=$$('[data-dia]',v).filter(x=>x.checked).map(x=>+x.dataset.dia);persist();toast('Guardado')});
  $$('[data-dn]',v).forEach(i=>i.onchange=()=>{doctor(i.dataset.dn).nombre=i.value;persist();toast('Guardado')});
  $$('[data-de]',v).forEach(i=>i.onchange=()=>{doctor(i.dataset.de).especialidad=i.value;persist();toast('Guardado')});
  $$('[data-dc]',v).forEach(i=>i.onchange=()=>{doctor(i.dataset.dc).color=i.value;persist();toast('Guardado')});
  const rs=$('#restore',v);if(rs)rs.onchange=async()=>{const f=rs.files[0];if(!f)return;try{const d=JSON.parse(await f.text());if(!d.config||!d.tratamientos)throw new Error('Archivo no válido');
    if(await confirmBox(`¿Restaurar el respaldo <b>${esc(f.name)}</b>? Se reemplazarán TODOS los datos actuales.`,{ok:'Restaurar',danger:true})){S=d;load2();persist(true);toast('Respaldo restaurado');render()}}catch(e){toast('No se pudo leer el respaldo: '+e.message,'err')}rs.value=''};
};
function load2(){const base=seed();for(const k of Object.keys(base))if(S[k]===undefined)S[k]=base[k];for(const k of Object.keys(base.config))if(S.config[k]===undefined)S.config[k]=base.config[k]}

/* ---------- Demo data ---------- */
function loadDemo(){
  const nombres=['María Fernanda Quispe','José Luis Mendoza','Rosa Elena Huamán','Carlos Alberto Ríos','Lucía Paredes Soto','Miguel Ángel Torres','Ana Cecilia Flores','Jorge Castillo Vega','Patricia Gutiérrez','Luis Enrique Chávez','Carmen Rosa Salazar','Diego Ramírez Lozano','Valeria Campos','Ricardo Navarro','Sofía Delgado Ruiz','Fernando Cárdenas','Gabriela Espinoza','Andrés Villanueva'];
  const pacs=nombres.map((n,i)=>({id:uid(),nombre:n,dni:String(40000000+Math.floor(Math.random()*39999999)),telefono:'9'+String(Math.floor(10000000+Math.random()*89999999)).replace(/(\d{2})(\d{3})(\d{3})/,'$1 $2 $3'),email:'',nacimiento:`${1965+i*2}-0${1+i%9}-1${i%9}`,notas:i%5===0?'Alergia a la penicilina':'',creado:addDays(today(),-90+i)+'T10:00:00',demo:true}));
  S.pacientes.push(...pacs);
  const T=S.tratamientos.filter(t=>t.activo);const pick=a=>a[Math.floor(Math.random()*a.length)];
  const comunes=T.filter(t=>t.precio<=200);
  for(let d=-40;d<=0;d++){const f=addDays(today(),d);const dow=parseD(f).getDay();if(!S.config.diasLaborables.includes(dow))continue;
    const caja={id:uid(),apertura:f+'T09:00:00',montoInicial:100,cierre:d<0?f+'T21:05:00':null,demo:true};S.cajas.push(caja);
    const n=3+Math.floor(Math.random()*5);
    for(let k=0;k<n;k++){const p=pick(pacs);const items=[{...(Math.random()<.75?pick(comunes):pick(T))}].map(t=>({tratId:t.id,nombre:t.nombre,precio:t.precio,cant:1}));if(Math.random()<.3){const t=pick(comunes);items.push({tratId:t.id,nombre:t.nombre,precio:t.precio,cant:1})}
      const sub=items.reduce((s,i)=>s+i.precio,0);const desc=Math.random()<.15?Math.round(sub*.1):0;const total=sub-desc;const hr=`${pad(9+Math.floor(Math.random()*11))}:${pad(Math.floor(Math.random()*4)*15)}`;const fh=`${f}T${hr}:00`;
      const parcial=total>800&&Math.random()<.6;const pg=parcial?Math.round(total*.4):total;const met=pick(['Efectivo','Efectivo','Yape','Yape','Plin','Tarjeta','Transferencia']);
      S.ventas.push({id:uid(),recibo:nextRecibo(),fecha:fh,pacienteId:p.id,pacienteNombre:p.nombre,doctor:pick(S.config.doctores).id,items,subtotal:sub,descuento:desc,total,pagos:[{id:uid(),fecha:fh,metodo:met,monto:pg,cajaId:caja.id}],nota:'',anulada:false,demo:true})}
    if(Math.random()<.5)S.gastos.push({id:uid(),fecha:f,hora:'12:00',categoria:pick(['Materiales dentales','Limpieza','Otros','Laboratorio']),descripcion:pick(['Guantes y mascarillas','Resinas','Anestesia','Útiles de limpieza','Corona de laboratorio','Movilidad']),proveedor:pick(['Dental Lima','DentalShop','Lab. Sonrisa','']),metodo:'Efectivo',monto:20+Math.floor(Math.random()*180),cajaId:caja.id,demo:true});
    if(d<0){const r=resumenCaja(caja);caja.contado=r.efectivoEsperado;caja.diferencia=0;caja.dejado=100;caja.retiro=r2(r.efectivoEsperado-100);caja.resumen={ingresos:r.ingresos,gastosTot:r.gastosTot,gastosEf:r.gastosEf,efectivoEsperado:r.efectivoEsperado,porMetodo:r.porMetodo,nPagos:r.pagos.length}}
  }
  [[-35,'Alquiler','Alquiler del local',2500,'Transferencia'],[-35,'Planilla / honorarios','Asistente dental',1300,'Transferencia'],[-30,'Luz, agua e internet','Recibos del mes',380,'Yape'],[-20,'Publicidad','Anuncios Facebook/Instagram',250,'Tarjeta'],[-5,'Alquiler','Alquiler del local',2500,'Transferencia'],[-4,'Planilla / honorarios','Asistente dental',1300,'Transferencia'],[-2,'Luz, agua e internet','Recibos del mes',395,'Yape']]
    .forEach(([d,c,desc,m,met])=>S.gastos.push({id:uid(),fecha:addDays(today(),d),hora:'10:00',categoria:c,descripcion:desc,proveedor:'',metodo:met,monto:m,cajaId:null,demo:true}));
  for(let d=-3;d<=12;d++){const f=addDays(today(),d);if(!S.config.diasLaborables.includes(parseD(f).getDay()))continue;
    const hrs=['09:00','10:00','11:30','15:00','16:00','17:30','18:30','19:30'].filter(()=>Math.random()<.55);
    hrs.forEach(h=>{const p=pick(pacs);const t=pick(T);S.citas.push({id:uid(),fecha:f,hora:h,duracion:Math.min(90,t.duracion),pacienteId:p.id,pacienteNombre:p.nombre,telefono:p.telefono,tratamiento:t.nombre,doctor:pick(S.config.doctores).id,estado:d<0?pick(['Atendida','Atendida','No asistió']):d===0?pick(['Confirmada','Programada','Atendida']):pick(['Programada','Confirmada']),nota:'',creado:nowISO(),demo:true})})}
  // planes de ejemplo
  const orto=S.tratamientos.find(t=>/brackets/i.test(t.nombre));const imp=S.tratamientos.find(t=>/implante/i.test(t.nombre));
  const f0=addDays(today(),-75);
  crearPlan({pacienteId:pacs[2].id,nombre:'Ortodoncia con brackets metálicos',doctor:S.config.doctores[0].id,total:3600,inicial:900,metodoIni:'Efectivo',nCuotas:12,primeraCuota:addDays(f0,30),freqCuotas:'m1',sesiones:24,demoCaja:S.cajas[0],fechaVenta:f0+'T16:00:00',citas:{n:24,freq:'w4',inicio:nextWorkday(f0),hora:'16:00',duracion:30,tratamiento:'Control de ortodoncia'}});
  crearPlan({pacienteId:pacs[7].id,nombre:imp?imp.nombre:'Implante dental',doctor:S.config.doctores[1].id,total:2800,inicial:1000,metodoIni:'Transferencia',nCuotas:3,primeraCuota:addDays(today(),10),freqCuotas:'m1',sesiones:4,demoCaja:S.cajas[S.cajas.length-1],fechaVenta:addDays(today(),-20)+'T11:00:00',citas:{n:4,freq:'w3',inicio:nextWorkday(addDays(today(),-20)),hora:'11:00',duracion:60,tratamiento:'Implante — control'}});
  S.planes.forEach(pl=>{S.citas.filter(c=>c.planId===pl.id&&c.fecha<today()).forEach(c=>c.estado='Atendida');pl.demo=true});
  const v1=planVenta(S.planes[0]);v1.pagos.push({id:uid(),fecha:addDays(f0,30)+'T16:10:00',metodo:'Yape',monto:225,cajaId:null,abono:true});
  persist(true);
}
function resetMovs(){S.planes=[];S.pacientes=[];S.ventas=[];S.gastos=[];S.cajas=[];S.citas=[];S.config.correlativo=1;persist(true)}

/* ---------- Exports ---------- */
function expCobros(){
  const rows=[['Recibo','Fecha','Hora','Paciente','Tratamientos','Doctor','Subtotal','Descuento','Total','Pagado','Saldo','Métodos','Estado','Nota']];
  S.ventas.slice().sort((a,b)=>a.fecha.localeCompare(b.fecha)).forEach(v=>rows.push([v.recibo,fmtDate(v.fecha),v.fecha.slice(11,16),v.pacienteNombre,v.items.map(i=>i.cant+'x '+i.nombre).join(' + '),docName(v.doctor),v.subtotal,v.descuento,v.total,pagado(v),saldo(v),[...new Set(v.pagos.map(p=>p.metodo))].join('/'),v.anulada?'Anulado':saldo(v)>0?'Con saldo':'Pagado',v.nota]));
  download(`cobros-facildent-${today()}.csv`,csv(rows),'text/csv');toast('Archivo exportado (se abre con Excel)');
}
function expGastos(){
  const rows=[['Fecha','Categoría','Descripción','Proveedor','Comprobante','Método','Monto','Desde caja']];
  S.gastos.slice().sort((a,b)=>a.fecha.localeCompare(b.fecha)).forEach(g=>rows.push([fmtDate(g.fecha),g.categoria,g.descripcion,g.proveedor,g.comprobante||'',g.metodo,g.monto,g.cajaId?'Sí':'No']));
  download(`gastos-facildent-${today()}.csv`,csv(rows),'text/csv');toast('Archivo exportado');
}
function expPacientes(){
  const rows=[['Nombre','DNI','Celular','Correo','Nacimiento','Notas','Registrado']];S.pacientes.forEach(p=>rows.push([p.nombre,p.dni,p.telefono,p.email,p.nacimiento,p.notas,fmtDate(p.creado)]));
  download(`pacientes-facildent-${today()}.csv`,csv(rows),'text/csv');toast('Archivo exportado');
}
function expReporte(){
  const R=repData();const rows=[['REPORTE FACIL DENT',`${fmtDate(R.a)} - ${fmtDate(R.b)}`],[],['Cobrado',R.cob],['Facturado',R.fact],['Gastos',R.gas],['Utilidad',R.util],['Descuentos',R.desc],['Atenciones',R.ventas.length],['Pacientes',R.pacientesU],[],['INGRESOS POR TRATAMIENTO','Cantidad','Monto']];
  Object.entries(R.porTrat).sort((a,b)=>b[1].m-a[1].m).forEach(([n,v])=>rows.push([n,v.n,r2(v.m)]));
  rows.push([],['COBROS POR MÉTODO','Monto']);Object.entries(R.porMet).forEach(([m,v])=>rows.push([m,r2(v)]));
  rows.push([],['PRODUCCIÓN POR DOCTOR','Atenciones','Monto']);Object.entries(R.porDoc).forEach(([n,v])=>rows.push([n,v.n,r2(v.m)]));
  rows.push([],['GASTOS POR CATEGORÍA','Monto']);Object.entries(R.porCat).forEach(([c,v])=>rows.push([c,r2(v)]));
  rows.push([],['DETALLE DIARIO','Ingresos','Gastos']);R.serie.forEach(d=>rows.push([d.mes?d.l.slice(0,7):fmtDate(d.l),d.a,d.b]));
  download(`reporte-facildent-${R.a}_${R.b}.csv`,csv(rows),'text/csv');toast('Reporte exportado');
}
function printReporte(){
  const R=repData();
  printHTML(`<img src="${LOGO_DATA}" style="width:56px;height:56px;float:right"><h1>${esc(S.config.clinica)} — Reporte</h1><div class="muted">Del ${fmtDate(R.a)} al ${fmtDate(R.b)} · generado ${fmtDT(nowISO())}</div>
  <h2>Resumen</h2><table><tr><td>Cobrado</td><td class="r">${money(R.cob)}</td></tr><tr><td>Facturado</td><td class="r">${money(R.fact)}</td></tr><tr><td>Gastos</td><td class="r">${money(R.gas)}</td></tr><tr class="tot"><td>Utilidad</td><td class="r">${money(R.util)}</td></tr><tr><td>Atenciones / pacientes</td><td class="r">${R.ventas.length} / ${R.pacientesU}</td></tr></table>
  <h2>Ingresos por tratamiento</h2><table><tr><th>Tratamiento</th><th class="r">Cant.</th><th class="r">Monto</th></tr>${Object.entries(R.porTrat).sort((a,b)=>b[1].m-a[1].m).map(([n,v])=>`<tr><td>${esc(n)}</td><td class="r">${v.n}</td><td class="r">${money(v.m)}</td></tr>`).join('')}</table>
  <h2>Cobros por método</h2><table>${Object.entries(R.porMet).map(([m,v])=>`<tr><td>${esc(m)}</td><td class="r">${money(v)}</td></tr>`).join('')}</table>
  <h2>Producción por doctor</h2><table>${Object.entries(R.porDoc).map(([n,v])=>`<tr><td>${esc(n)}</td><td class="r">${v.n}</td><td class="r">${money(v.m)}</td></tr>`).join('')}</table>
  <h2>Gastos por categoría</h2><table>${Object.entries(R.porCat).map(([c,v])=>`<tr><td>${esc(c)}</td><td class="r">${money(v)}</td></tr>`).join('')}</table>`);
}
function printTarifario(){
  const g={};S.tratamientos.filter(t=>t.activo).forEach(t=>(g[t.categoria]=g[t.categoria]||[]).push(t));
  printHTML(`<img src="${LOGO_DATA}" style="width:56px;height:56px;float:right"><h1>${esc(S.config.clinica)} — Tarifario</h1><div class="muted">${esc(S.config.direccion)} · Tel. ${esc(S.config.telefono)} · ${fmtDate(today())}</div>
  ${Object.entries(g).map(([c,ts])=>`<h2>${esc(c)}</h2><table>${ts.map(t=>`<tr><td>${esc(t.nombre)}</td><td class="r">${money(t.precio)}</td></tr>`).join('')}</table>`).join('')}`);
}
function printAgenda(){
  const days=UI.agendaView==='dia'?[UI.agendaDay||today()]:Array.from({length:7},(_,i)=>addDays(UI.agendaWeek,i));
  const html=days.map(d=>{const cs=S.citas.filter(c=>c.fecha===d&&(!UI.agendaDoc||c.doctor===UI.agendaDoc)).sort((a,b)=>a.hora.localeCompare(b.hora));if(!cs.length)return'';
    return `<h2 style="text-transform:capitalize">${fmtDateLong(d)}</h2><table><tr><th>Hora</th><th>Paciente</th><th>Celular</th><th>Tratamiento</th><th>Doctor</th><th>Estado</th></tr>${cs.map(c=>`<tr><td>${c.hora}</td><td>${esc(c.pacienteNombre)}</td><td>${esc(c.telefono)}</td><td>${esc(c.tratamiento)}</td><td>${esc(docName(c.doctor))}</td><td>${c.estado}</td></tr>`).join('')}</table>`}).join('');
  printHTML(`<img src="${LOGO_DATA}" style="width:56px;height:56px;float:right"><h1>${esc(S.config.clinica)} — Agenda</h1>${html||'<p>Sin citas.</p>'}`);
}

/* ---------- Global events ---------- */
document.addEventListener('click',async e=>{
  const g=e.target.closest('[data-go]');if(g){go(g.dataset.go);return}
  const ve=e.target.closest('[data-venta]');const actEl=e.target.closest('[data-action]');
  if(ve&&!actEl){modalVenta(ve.dataset.venta);return}
  const pc=e.target.closest('[data-pac]');if(pc&&!actEl){modalFicha(pc.dataset.pac);return}
  const ci=e.target.closest('[data-cita]');if(ci&&!actEl){modalCita(ci.dataset.cita);return}
  const pl=e.target.closest('[data-plan]');if(pl&&!actEl){modalPlan(pl.dataset.plan);return}
  if(!actEl)return;const a=actEl.dataset.action,id=actEl.dataset.id;
  switch(a){
    case 'nuevo-cobro':modalCobro();break;
    case 'nueva-cita':modalCita(null,{doctor:UI.agendaDoc||undefined});break;
    case 'abrir-caja':modalAbrirCaja();break;
    case 'cerrar-caja':modalCerrarCaja();break;
    case 'editar-fondo':{const c=cajaAbierta();openModal({title:'Corregir fondo inicial',size:'sm',body:`<div class="field"><label>Monto inicial</label><input class="inp money" type="number" id="ef-m" step="0.1" value="${c.montoInicial}" autofocus></div>`,foot:`<button class="btn primary" id="ef-ok">Guardar</button>`,onMount:(m,close)=>{$('#ef-ok',m).onclick=()=>{c.montoInicial=r2(num($('#ef-m',m).value));c.auto=false;persist(true);close();render()}}});break}
    case 'print-cierre':printCierre(S.cajas.find(c=>c.id===id));break;
    case 'nuevo-gasto':modalGasto();break;
    case 'edit-gasto':modalGasto(id);break;
    case 'del-gasto':if(await confirmBox('¿Eliminar este gasto?',{ok:'Eliminar',danger:true})){S.gastos=S.gastos.filter(g=>g.id!==id);persist(true);toast('Gasto eliminado');render()}break;
    case 'gmes':{const [y,m]=UI.gastosMes.split('-').map(Number);const d=new Date(y,m-1+(+actEl.dataset.d),1);UI.gastosMes=ymd(d).slice(0,7);render();break}
    case 'abonar':modalAbono(id);break;
    case 'print-venta':printRecibo(S.ventas.find(v=>v.id===id));break;
    case 'ver-deudas':UI.cobrosFiltro='deuda';go('cobros');break;
    case 'nuevo-trat':modalTrat();break;
    case 'edit-trat':modalTrat(id);break;
    case 'del-trat':{const t=S.tratamientos.find(x=>x.id===id);if(await confirmBox(`¿Eliminar <b>${esc(t.nombre)}</b> del catálogo? Los cobros anteriores no se modifican.`,{ok:'Eliminar',danger:true})){S.tratamientos=S.tratamientos.filter(x=>x.id!==id);persist(true);toast('Tratamiento eliminado');render()}break}
    case 'ajuste-precios':modalAjustePrecios();break;
    case 'print-tarifario':printTarifario();break;
    case 'nuevo-paciente':modalPaciente();break;
    case 'wa-pac':{const p=paciente(id);openExternal(waLink(p.telefono,`Hola ${p.nombre.split(' ')[0]}, te saludamos de ${S.config.clinica}. `));break}
    case 'ag-hoy':UI.agendaWeek=startOfWeek(today());UI.agendaDay=today();render();break;
    case 'ag-mov':{const d=+actEl.dataset.d;if(UI.agendaView==='dia'){let n=addDays(UI.agendaDay||today(),d);let guard=0;while(!S.config.diasLaborables.includes(parseD(n).getDay())&&guard++<7)n=addDays(n,d);UI.agendaDay=n;UI.agendaWeek=startOfWeek(n)}else UI.agendaWeek=addDays(UI.agendaWeek,7*d);render();break}
    case 'ics-week':{const cs=S.citas.filter(c=>c.fecha>=UI.agendaWeek&&c.fecha<=addDays(UI.agendaWeek,6)&&c.estado!=='Cancelada');if(!cs.length){toast('No hay citas en esta semana','err');break}download(`agenda-${UI.agendaWeek}.ics`,icsFor(cs),'text/calendar');toast(`${cs.length} citas exportadas. Impórtalas en Google Calendar.`);break}
    case 'sync-info':modalSyncInfo();break;
    case 'nuevo-plan':modalNuevoPlan();break;
    case 'open-hc':abrirHistoria(id);break;
    case 'hc-back':go(UI.hcPrev&&UI.hcPrev!=='historia'?UI.hcPrev:'pacientes');break;
    case 'hc-ficha':modalFicha(UI.hcPac);break;
    case 'print-hc':printHistoria(UI.hcPac);break;
    case 'nueva-evol':modalEvol(UI.hcPac);break;
    case 'edit-evol':modalEvol(UI.hcPac,id);break;
    case 'del-evol':{const hc=hcOf(paciente(UI.hcPac));if(await confirmBox('¿Eliminar esta evolución?',{ok:'Eliminar',danger:true})){hc.evol=hc.evol.filter(x=>x.id!==id);persist(true);render()}break}
    case 'odo-clear-tooth':{const hc=hcOf(paciente(UI.hcPac));delete hc.odo[UI.odoSel];persist(true);render();break}
    case 'pagar-plan':{const pl=planById(id);const st=planStats(pl);modalAbono(pl.ventaId,st.montoVencido>0?st.montoVencido:st.proxCuota?r2(st.proxCuota.monto-st.proxCuota.cubierto):st.sal);break}
    case 'clear-planes':UI.planQ='';UI.planEstado='Activo';render();break;
    case 'clear-cobros':UI.cobrosQ='';UI.cobrosFiltro='todos';UI.cobrosDesde=addDays(today(),-30);UI.cobrosHasta=today();render();break;
    case 'clear-gastos':UI.gastosQ='';UI.gastosCat='';UI.gastosMes=monthKey(today());render();break;
    case 'clear-trat':UI.tratQ='';UI.tratCat='';render();break;
    case 'clear-pac':UI.pacQ='';render();break;
    case 'clear-citas':UI.citaQ='';UI.citaEstado='';UI.citaDesde='';UI.citaHasta='';render();break;
    case 'clear-agdoc':UI.agendaDoc='';render();break;
    case 'ver-vencidas':UI.planEstado='Activo';go('planes');break;
    case 'recordatorios':modalRecordatorios();break;
    case 'lock':showLock();break;
    case 'set-pin':modalPin();break;
    case 'print-agenda':printAgenda();break;
    case 'wa-cita':{const c=S.citas.find(x=>x.id===id);openExternal(waLink(c.telefono,recordatorioMsg(c)));break}
    case 'gcal-cita':openExternal(gcalLink(S.citas.find(x=>x.id===id)));break;
    case 'exp-cobros':expCobros();break;case 'exp-gastos':expGastos();break;case 'exp-pacientes':expPacientes();break;case 'exp-reporte':expReporte();break;case 'print-reporte':printReporte();break;
    case 'add-doc':S.config.doctores.push({id:uid(),nombre:'Nuevo doctor',especialidad:'',color:AV_COLORS[S.config.doctores.length%AV_COLORS.length]});persist(true);render();break;
    case 'del-doc':{if(S.config.doctores.length<2){toast('Debe quedar al menos un doctor','err');break}const d=doctor(id);if(await confirmBox(`¿Quitar a <b>${esc(d.nombre)}</b>? Sus cobros y citas anteriores se conservan.`,{ok:'Quitar',danger:true})){S.config.doctores=S.config.doctores.filter(x=>x.id!==id);persist(true);render()}break}
    case 'add-met':{const v=$('#nm-met').value.trim();if(v&&!S.config.metodos.includes(v)){S.config.metodos.push(v);persist(true);render()}break}
    case 'del-met':S.config.metodos.splice(+actEl.dataset.i,1);persist(true);render();break;
    case 'add-cat':{const v=$('#nm-cat').value.trim();if(v&&!S.config.catGastos.includes(v)){S.config.catGastos.push(v);persist(true);render()}break}
    case 'del-cat':S.config.catGastos.splice(+actEl.dataset.i,1);persist(true);render();break;
    case 'backup':download(`respaldo-facildent-${today()}.json`,JSON.stringify(S,null,1),'application/json');toast('Respaldo descargado');break;
    case 'open-backups':window.facilApi.openBackups();break;
    case 'demo':if(await confirmBox('Se agregarán datos de ejemplo (pacientes, cobros, gastos y citas de las últimas semanas). Podrás borrarlos desde Configuración › Respaldo y datos.')){loadDemo();toast('Datos de ejemplo cargados');render()}break;
    case 'reset':if(await confirmBox('Se borrarán <b>todos</b> los pacientes, cobros, gastos, cajas y citas. Se recomienda descargar un respaldo antes. ¿Continuar?',{ok:'Borrar todo',danger:true})){resetMovs();toast('Movimientos borrados');render()}break;
  }
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&modalStack.length){modalStack[modalStack.length-1].close();return}
  if(e.key==='F2'){e.preventDefault();if(!modalStack.length)modalCobro()}
  if(e.key==='F3'){e.preventDefault();if(!modalStack.length)modalCita(null,{})}
});
// refresh clock-dependent bits every minute
setInterval(()=>{if(!modalStack.length&&(page==='agenda'||page==='inicio')){const sc=$('#view').scrollTop;render();$('#view').scrollTop=sc}},60000);

/* ---------- PIN lock ---------- */
async function hash(t){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('facildent:'+t));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
function showLock(){
  if(!S.config.pinHash)return;if($('#lock'))return;
  const el=document.createElement('div');el.id='lock';
  el.innerHTML=`<div class="lock-card"><img src="${LOGO_DATA}" style="width:120px;height:120px;display:block;margin:0 auto 12px"><div class="muted" style="margin:4px 0 18px">Ingresa tu PIN para continuar</div>
    <input class="inp" id="lock-pin" type="password" inputmode="numeric" maxlength="8" style="text-align:center;font-size:22px;letter-spacing:8px" autofocus><div id="lock-err" class="down small" style="min-height:18px;margin-top:8px"></div><button class="btn primary block" id="lock-ok">Ingresar</button></div>`;
  document.body.appendChild(el);hydrateIcons(el);const i=$('#lock-pin',el);setTimeout(()=>i.focus(),50);
  const tryIt=async()=>{if(await hash(i.value)===S.config.pinHash){el.remove()}else{$('#lock-err',el).textContent='PIN incorrecto';i.value='';i.focus()}};
  $('#lock-ok',el).onclick=tryIt;i.onkeydown=e=>{if(e.key==='Enter')tryIt()};
}
function modalPin(){
  openModal({title:S.config.pinHash?'Cambiar o quitar PIN':'Proteger con PIN',size:'sm',body:`<p class="small muted" style="margin-top:0">El PIN se pide al abrir la app y al presionar “Bloquear”. Evita que otras personas vean los montos.</p>
    ${S.config.pinHash?`<div class="field"><label>PIN actual</label><input class="inp" type="password" id="pn-a" inputmode="numeric"></div>`:''}
    <div class="field mt"><label>Nuevo PIN (4 a 8 dígitos; vacío = sin PIN)</label><input class="inp" type="password" id="pn-n" inputmode="numeric" maxlength="8"></div>
    <div class="field mt"><label>Repetir nuevo PIN</label><input class="inp" type="password" id="pn-r" inputmode="numeric" maxlength="8"></div>`,
    foot:`<button class="btn primary" id="pn-ok">Guardar</button>`,
    onMount:(m,close)=>{$('#pn-ok',m).onclick=async()=>{
      if(S.config.pinHash&&await hash($('#pn-a',m).value)!==S.config.pinHash){toast('PIN actual incorrecto','err');return}
      const n=$('#pn-n',m).value,r=$('#pn-r',m).value;if(n!==r){toast('Los PIN no coinciden','err');return}
      if(n&&!/^\d{4,8}$/.test(n)){toast('El PIN debe tener de 4 a 8 dígitos','err');return}
      S.config.pinHash=n?await hash(n):'';persist(true);close();toast(n?'PIN activado':'PIN desactivado');render()}}});
}

/* ---------- Boot ---------- */
load();hydrateIcons(document);render();showLock();
