'use client';
import React, {useEffect,useReducer,useState} from 'react';
import {DemoState,Role,Module,nav,initialState,reducer,roleNames} from '@/src/lib/demo';
import {Tag} from './UI';
import {ModuleView} from '@/src/modules/ModuleView';

export type AppProps={state:DemoState;dispatch:React.Dispatch<import('@/src/lib/demo').Action>;role:Role;setRole:(role:Role)=>void;go:(m:Module)=>void;};
function fromHash():Module {if(typeof window==='undefined')return 'inicio'; const match=window.location.hash.match(/^#\/([a-z]+)$/);const name=match?.[1] as Module|undefined;return name&&nav.some(n=>n.id===name)?name:'inicio';}
export default function AppShell(){
 const [state,dispatch]=useReducer(reducer,undefined,initialState);
 const [module,setModule]=useState<Module>('inicio'); const [role,setRole]=useState<Role>('ciudadania');
 const [menuOpen,setMenuOpen]=useState(false);const [contrast,setContrast]=useState(false);const [big,setBig]=useState(false);
 useEffect(()=>{const sync=()=>setModule(fromHash());sync();window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync);},[]);
 const go=(id:Module)=>{window.location.hash='/'+id;setModule(id);setMenuOpen(false);window.scrollTo({top:0,behavior:'smooth'});};
 const selected=nav.find(x=>x.id===module)!;
 const groupItems=Array.from(new Set(nav.map(x=>x.group)));
 return <div className={'app-root'+(contrast?' contrast':'')+(big?' enlarged':'')}>
  <a className="skip-link" href="#contenido">Saltar al contenido</a>
  <div className="demo-banner"><b>ACTIVIDAD 6 · DEMOSTRACIÓN ACADÉMICA</b><span>Datos sintéticos · No se reservan vacunas ni se envían alertas reales · No ingreses información personal</span></div>
  <header className="mobile-head"><button type="button" aria-label="Abrir menú" onClick={()=>setMenuOpen(!menuOpen)}>☰</button><b>SIVI</b><span>Proyecto integrador</span></header>
  <aside className={'sidebar'+(menuOpen?' show':'')} aria-label="Menú principal">
    <div className="brand"><div className="brand-mark">S</div><div><strong>SIVI</strong><span>Sistema Integral de Vacunación Inclusiva</span></div></div>
    <div className="side-intro">UVM · DISEÑAR PARA COMPARTIR<br/><b>Actividad 6 · Proyecto integrador</b></div>
    <nav>{groupItems.map(group=><div key={group}><div className="nav-group">{group}</div>{nav.filter(x=>x.group===group).map(item=><a key={item.id} href={'#/'+item.id} onClick={()=>setMenuOpen(false)} className={'nav-link'+(module===item.id?' selected':'')} aria-current={module===item.id?'page':undefined} title={item.desc}><span className="nav-icon">{item.icon}</span>{item.title}</a>)}</div>)}</nav>
    <div className="side-bottom"><p>Prototipo académico · Versión 1.0</p><button type="button" onClick={()=>go('agradecimiento')}>Agradecimiento a la docente ↗</button></div>
  </aside>
  <div className="main-area">
   <header className="top-bar"><div className="crumb"><span>ACT. 06</span><span className="crumb-sep">/</span><b>{selected.title}</b></div><div className="top-actions"><button className="text-btn" onClick={()=>setBig(!big)} aria-pressed={big}>A± <span>Texto</span></button><button className="text-btn" onClick={()=>setContrast(!contrast)} aria-pressed={contrast}>◐ <span>Contraste</span></button><button className="text-btn" onClick={()=>dispatch({type:'TOGGLE_HINTS'})} aria-pressed={state.hints}>? <span>Ayudas</span></button><button className="top-present" onClick={()=>go('presentacion')}>Ver presentación ↗</button></div></header>
   <div className="workspace">
    <div className="profile-bar"><div><span>Perfil de recorrido</span><select aria-label="Seleccionar perfil demostrativo" value={role} onChange={e=>setRole(e.target.value as Role)}>{(Object.keys(roleNames) as Role[]).map(r=><option key={r} value={r}>{roleNames[r]}</option>)}</select><small>No es un inicio de sesión ni aplica permisos reales.</small></div><Tag tone="blue">MODO DEMOSTRATIVO</Tag></div>
    <main id="contenido" tabIndex={-1}><ModuleView module={module} role={role} state={state} dispatch={dispatch} setRole={setRole} go={go}/></main>
    <footer className="page-footer"><span>Universidad del Valle de México · Diseñar para Compartir · Actividad 6</span><span>Juan Carlos Perez Hernández · Docente: Alba Pulido Pineda</span></footer>
   </div>
  </div>
 </div>
}
