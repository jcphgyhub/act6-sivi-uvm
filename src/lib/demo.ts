export type Role = 'ciudadania' | 'recepcion' | 'vacunacion' | 'seguimiento' | 'ayuda' | 'coordinacion' | 'ambiental' | 'compras' | 'soporte' | 'evaluador';
export type Module = 'inicio'|'convocatoria'|'registro'|'citas'|'atencion'|'vacunacion'|'seguimiento'|'ayuda'|'centros'|'residuos'|'proveedores'|'infraestructura'|'fundamentos'|'presentacion'|'galeria'|'agradecimiento';
export type Person = { id: string; label: string; birth: string; center: string; channel: 'presencial'|'web'|'telefono'; supports: string[]; lang: string; reminders: boolean; reviewed: boolean };
export type Appointment = { id: string; person: string; center: string; slot: string; status: 'confirmada'|'reprogramada'|'cancelada'; previous?: string };
export type Application = { id: string; person: string; appointment?: string; center: string; batch: string; actor: string; status: 'confirmada'|'incompleta'; operation: string };
export type Report = { id: string; person: string; description: string; state: 'recibido'|'en revisión'|'canalizado'|'cerrado'|'reabierto'; actor?: string; event?: string; timeline: string[] };
export type Ticket = {id:string; person:string; topic:string; question:string; state:'recibida'|'asignada'|'resuelta'|'reabierta'; answer?:string};
export type Waste = {id:string; source:'campaña'|'proveedor'; mass:number; kind:string; state:'generado'|'retirado'|'recepción acreditada'|'destino acreditado'; evidence:boolean};
export type Supplier = {id:string; service:string; local:'acreditado'|'pendiente'|'no local'; community:string};
export type Comm = {id:string; channel:string; state:'enviado (simulación)'|'entrega fallida (simulación)'|'confirmado (simulación)'; next:string};
export type DemoState = {
  people: Person[]; appointments: Appointment[]; applications:Application[]; reports:Report[]; tickets:Ticket[]; waste:Waste[]; suppliers:Supplier[]; communications:Comm[];
  selectedPerson:string; selectedCenter:string; offline:boolean; queue:string[]; conflict:boolean; lockedCenters:string[]; hints:boolean;
};
export type Action =
 | {type:'SELECT_PERSON'; id:string} | {type:'SELECT_CENTER'; id:string}
 | {type:'UPDATE_PERSON'; person:Person}
 | {type:'ADD_APPOINTMENT'; person:string; slot:string} | {type:'REBOOK'; person:string; slot:string}
 | {type:'CHECK_IN'; person:string} | {type:'ADD_APPLICATION'; person:string; operation:string}
 | {type:'ADD_REPORT'; person:string; description:string} | {type:'ADVANCE_REPORT'; id:string; state:Report['state']}
 | {type:'ADD_TICKET'; person:string; topic:string; question:string} | {type:'RESOLVE_TICKET'; id:string}
 | {type:'ADVANCE_WASTE'; id:string} | {type:'VERIFY_SUPPLIER'; id:string}
 | {type:'TOGGLE_OFFLINE'} | {type:'QUEUE_ACTION'; label:string} | {type:'RECONCILE'} | {type:'MAKE_CONFLICT'}
 | {type:'TOGGLE_CENTER'; id:string} | {type:'TOGGLE_HINTS'} | {type:'RESET'};

export const centerIds = Array.from({length:32},(_,i)=>`DEMO-C${String(i+1).padStart(2,'0')}`);
export const slots = [
 {id:'12 oct 2026 · 09:00', cap:1}, {id:'12 oct 2026 · 10:00',cap:0},
 {id:'13 oct 2026 · 09:00',cap:2}, {id:'13 oct 2026 · 10:30',cap:3}
];
export const roleNames: Record<Role,string> = {
 ciudadania:'Ciudadanía',recepcion:'Recepción',vacunacion:'Vacunación',seguimiento:'Seguimiento',ayuda:'Atención de ayuda',
 coordinacion:'Coordinación',ambiental:'Operación ambiental',compras:'Compras',soporte:'Soporte TI',evaluador:'Evaluación académica'
};
export const nav: {id:Module;title:string;icon:string;group:string;desc:string}[] = [
 {id:'inicio',title:'Inicio',icon:'⌂',group:'ATENCIÓN',desc:'Acceso general a la solución'},
 {id:'convocatoria',title:'Convocatoria',icon:'◉',group:'ATENCIÓN',desc:'Mensajes, canales y apoyos'},
 {id:'registro',title:'Registro',icon:'▤',group:'ATENCIÓN',desc:'Captura accesible y revisión'},
 {id:'citas',title:'Citas',icon:'▣',group:'ATENCIÓN',desc:'Solicitud, confirmación y cambios'},
 {id:'atencion',title:'Atención',icon:'♧',group:'ATENCIÓN',desc:'Recepción y apoyos individuales'},
 {id:'vacunacion',title:'Vacunación',icon:'✚',group:'ATENCIÓN',desc:'Evento de aplicación simulado'},
 {id:'seguimiento',title:'Seguimiento',icon:'♡',group:'ATENCIÓN',desc:'Reporte y revisión distintos'},
 {id:'ayuda',title:'Ayuda',icon:'?',group:'ATENCIÓN',desc:'Respuestas y canales alternativos'},
 {id:'centros',title:'Centros',icon:'▥',group:'OPERACIÓN',desc:'32 sedes de ejemplo'},
 {id:'residuos',title:'Residuos',icon:'♻',group:'OPERACIÓN',desc:'Generación y destino documentado'},
 {id:'proveedores',title:'Proveedores',icon:'◈',group:'OPERACIÓN',desc:'Participación local y evidencias'},
 {id:'infraestructura',title:'Infraestructura',icon:'◇',group:'PROPUESTA',desc:'Arquitectura y continuidad'},
 {id:'fundamentos',title:'Fundamentos',icon:'◎',group:'PROPUESTA',desc:'Conceptos estudiados y aplicación'},
 {id:'presentacion',title:'Presentación',icon:'▶',group:'ACADÉMICO',desc:'Introducción al reto y recorridos'},
 {id:'galeria',title:'33 láminas',icon:'▧',group:'ACADÉMICO',desc:'Referencia visual de diseño aprobada'},
 {id:'agradecimiento',title:'Agradecimiento',icon:'♥',group:'ACADÉMICO',desc:'Reconocimiento a la docente'}
];
export const initialState = ():DemoState=>({
 people:[
  {id:'DEMO-P001', label:'Persona de ejemplo 01',birth:'1989-04-12',center:'DEMO-C01',channel:'web',supports:[],lang:'Español',reminders:true,reviewed:true},
  {id:'DEMO-P002', label:'Persona de ejemplo 02',birth:'1968-02-22',center:'DEMO-C01',channel:'presencial',supports:['Comunicación escrita','Apoyo de movilidad'],lang:'Español',reminders:false,reviewed:true},
  {id:'DEMO-P003', label:'Persona de ejemplo 03',birth:'1979-06-09',center:'DEMO-C02',channel:'presencial',supports:[],lang:'Lengua local por confirmar',reminders:false,reviewed:true}
 ],
 appointments:[{id:'DEMO-CT001',person:'DEMO-P001',center:'DEMO-C01',slot:'12 oct 2026 · 09:00',status:'confirmada'}],
 applications:[],reports:[],tickets:[],
 waste:[{id:'DEMO-GEN01',source:'campaña',mass:145,kind:'Generación previa · ejemplo',state:'generado',evidence:false},
 {id:'DEMO-GEN02',source:'campaña',mass:8,kind:'Punzocortantes · ejemplo de gestión',state:'retirado',evidence:false},
 {id:'DEMO-RPR001',source:'proveedor',mass:82,kind:'Residuos atribuibles al suministro',state:'generado',evidence:false}],
 suppliers:Array.from({length:25},(_,i)=>({id:`DEMO-PR${String(i+1).padStart(2,'0')}`,service:['Interpretación','Señalización','Telefonía','Soporte','Servicio especializado'][i%5],local:i<19?'acreditado':i===19?'pendiente':'no local',community:'Comunidad de ejemplo 01'})) as Supplier[],
 communications:[{id:'DEMO-MSG01',channel:'Web demo',state:'enviado (simulación)',next:'Esperar acuse de ejemplo'},
 {id:'DEMO-MSG02',channel:'Teléfono demo',state:'entrega fallida (simulación)',next:'Revisar vía alternativa'},
 {id:'DEMO-MSG03',channel:'Presencial demo',state:'confirmado (simulación)',next:'Conservar constancia demo'}],
 selectedPerson:'DEMO-P001', selectedCenter:'DEMO-C01',offline:false,queue:[],conflict:false,lockedCenters:['DEMO-C04'],hints:true
});

const serial = (n:number)=>String(n).padStart(3,'0');
export function reducer(s:DemoState,a:Action): DemoState {
 switch(a.type){
  case 'SELECT_PERSON':return {...s,selectedPerson:a.id};
  case 'SELECT_CENTER':return {...s,selectedCenter:a.id};
  case 'UPDATE_PERSON':return {...s,people:s.people.map(p=>p.id===a.person.id?a.person:p),queue:s.offline?[...s.queue,`Perfil ${a.person.id}`]:s.queue};
  case 'ADD_APPOINTMENT':{
   const existing=s.appointments.find(x=>x.person===a.person&&x.status==='confirmada');
   if(existing||s.offline||s.lockedCenters.includes(s.selectedCenter))return s;
   return {...s,appointments:[...s.appointments,{id:`DEMO-CT${serial(s.appointments.length+1)}`,person:a.person,center:s.selectedCenter,slot:a.slot,status:'confirmada'}]};
  }
  case 'REBOOK':{
   if(s.offline)return s;
   const existing=s.appointments.find(x=>x.person===a.person&&x.status==='confirmada');
   if(!existing||a.slot.includes('10:00')||s.lockedCenters.includes(existing.center))return s;
   const next:Appointment={...existing,id:`${existing.id}-R1`,slot:a.slot,previous:existing.id,status:'confirmada'};
   return {...s,appointments:[...s.appointments.map(x=>x.id===existing.id?{...x,status:'reprogramada' as const}:x),next]};
  }
  case 'CHECK_IN': return {...s,queue:s.offline?[...s.queue,`Recepción ${a.person}`]:s.queue};
  case 'ADD_APPLICATION':{
   if(s.offline||s.applications.some(x=>x.operation===a.operation||x.person===a.person))return s;
   return {...s,applications:[...s.applications,{id:`DEMO-APL${serial(s.applications.length+1)}`,person:a.person,center:s.people.find(p=>p.id===a.person)?.center??'DEMO-C01',appointment:s.appointments.find(x=>x.person===a.person&&x.status==='confirmada')?.id,batch:'DEMO-L001',actor:'DEMO-SAN01',status:'confirmada',operation:a.operation}]};
  }
  case 'ADD_REPORT': return {...s,reports:[...s.reports,{id:`DEMO-RP${serial(s.reports.length+1)}`,person:a.person,description:a.description,state:'recibido',timeline:['Recibido en demostración · sin revisión sanitaria']} ]};
  case 'ADVANCE_REPORT':return {...s,reports:s.reports.map(x=>x.id===a.id?{...x,state:a.state,actor:'DEMO-SEG01',timeline:[...x.timeline,`${a.state} · transición simulada`]}:x)};
  case 'ADD_TICKET':return {...s,tickets:[...s.tickets,{id:`DEMO-AY${serial(s.tickets.length+1)}`,person:a.person,topic:a.topic,question:a.question,state:'recibida'}]};
  case 'RESOLVE_TICKET':return {...s,tickets:s.tickets.map(t=>t.id===a.id?{...t,state:'resuelta',answer:'Orientación administrativa explicada en demostración; sin contacto real.'}:t)};
  case 'ADVANCE_WASTE':return {...s,waste:s.waste.map(w=>w.id===a.id?{...w,state:w.state==='generado'?'retirado':w.state==='retirado'?'recepción acreditada':'destino acreditado',evidence:w.state==='recepción acreditada'}:w)};
  case 'VERIFY_SUPPLIER':return {...s,suppliers:s.suppliers.map(p=>p.id===a.id&&p.local==='pendiente'?{...p,local:'acreditado'}:p)};
  case 'TOGGLE_OFFLINE':return {...s,offline:!s.offline,conflict:false};
  case 'QUEUE_ACTION':return {...s,queue:[...s.queue,a.label]};
  case 'RECONCILE':return {...s,queue:[],conflict:false};
  case 'MAKE_CONFLICT':return {...s,conflict:true,queue:s.queue.length?s.queue:['DEMO-OP004 (versión 3 vs 4)']};
  case 'TOGGLE_CENTER':return {...s,lockedCenters:s.lockedCenters.includes(a.id)?s.lockedCenters.filter(id=>id!==a.id):[...s.lockedCenters,a.id]};
  case 'TOGGLE_HINTS':return {...s,hints:!s.hints};
  case 'RESET':return initialState();
 }
}
export const sumMass=(entries:Waste[],source:Waste['source'])=>entries.filter(x=>x.source===source).reduce((n,w)=>n+w.mass,0);
export const verifiedLocal=(suppliers:Supplier[])=>suppliers.filter(p=>p.local==='acreditado').length;
export const percentLocal=(suppliers:Supplier[])=>suppliers.length?Math.round(verifiedLocal(suppliers)/suppliers.length*10000)/100:null;
