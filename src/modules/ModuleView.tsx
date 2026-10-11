'use client';
import React from 'react';
import type {AppProps} from '@/src/components/AppShell';
import type {Module} from '@/src/lib/demo';
import {Home,Convocatoria,Registro,Citas,Atencion,Vacunacion,Seguimiento,Ayuda} from './CitizenModules';
import {Centros,Residuos,Proveedores,Infraestructura} from './OperationsModules';
import {Fundamentos,Presentacion,Galeria,Agradecimiento} from './AcademicModules';
export function ModuleView({module,...rest}:{module:Module}&Omit<AppProps,'module'>){const props=rest;
 switch(module){case 'inicio':return <Home {...props}/>;case 'convocatoria':return <Convocatoria {...props}/>;case 'registro':return <Registro {...props}/>;case 'citas':return <Citas {...props}/>;case 'atencion':return <Atencion {...props}/>;case 'vacunacion':return <Vacunacion {...props}/>;case 'seguimiento':return <Seguimiento {...props}/>;case 'ayuda':return <Ayuda {...props}/>;case 'centros':return <Centros {...props}/>;case 'residuos':return <Residuos {...props}/>;case 'proveedores':return <Proveedores {...props}/>;case 'infraestructura':return <Infraestructura {...props}/>;case 'fundamentos':return <Fundamentos {...props}/>;case 'presentacion':return <Presentacion {...props}/>;case 'galeria':return <Galeria {...props}/>;case 'agradecimiento':return <Agradecimiento {...props}/>}
}
