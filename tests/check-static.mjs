import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..');
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
const demo=read('src/lib/demo.ts');const pages=read('src/modules/ModuleView.tsx');const shell=read('src/components/AppShell.tsx');
const mandatory=['inicio','convocatoria','registro','citas','atencion','vacunacion','seguimiento','ayuda','centros','residuos','proveedores','infraestructura','fundamentos'];
for(const mod of mandatory){assert.ok(demo.includes("id:'"+mod+"'"),'Falta módulo '+mod);assert.ok(pages.includes("case '"+mod+"'"),'Falta página '+mod)}
assert.equal(fs.readdirSync(path.join(root,'public/mockup')).filter(f=>f.endsWith('.png')).length,33,'No existen exactamente 33 láminas');
assert.ok(shell.includes('contrast')&&shell.includes('enlarged'),'Faltan preferencias accesibles');
assert.ok(read('src/modules/AcademicModules.tsx').includes('Alba Pulido Pineda'),'Falta agradecimiento');
assert.ok(read('src/modules/CitizenModules.tsx').includes('No se ha reservado una vacuna'),'Falta aviso sobre alcance de la simulación');
assert.ok(read('src/modules/OperationsModules.tsx').includes('150'),'Falta límite de residuos');
console.log('PASS: 13 módulos, 33 láminas, ayuda, presentación, agradecimiento y límites de la demo.');
