# ACT_06 · SIVI — Sistema Integral de Vacunación Inclusiva

**Universidad del Valle de México · Diseñar para Compartir · Actividad 6. Proyecto integrador: reto**
  
Alumno: Juan Carlos Perez Hernández · Docente: Alba Pulido Pineda

## Alcance del paquete

Prototipo académico navegable construido con **Next.js, React y TypeScript**. Reproduce los **13 módulos**, incorpora los **33 diseños visuales originales**, permite recorrer **cuatro escenarios** con datos sintéticos y ofrece presentación, ayuda contextual, preguntas frecuentes, glosario de herramientas, accesibilidad básica y un agradecimiento a la profesora.

**No es un sistema sanitario operativo.** No reserva vacunas reales, no diagnostica, no contacta a personas, no protege expedientes reales ni constituye certificación técnica o clínica. El cambio de perfil simula la interfaz, no implementa autenticación real. La sincronización es una representación y no una conexión con un servidor.

## En Windows 11 · PowerShell (una línea por operación)

Requisitos: Node.js compatible con Next.js 16, npm y acceso a Internet para instalar dependencias la primera vez.

1. Abre PowerShell en la carpeta que contiene `package.json`.
2. Comprueba versiones: `node --version; npm --version`
3. Instala: `npm install`
4. Ejecuta: `npm run dev`
5. Abre **http://localhost:3000**.

La página principal permite navegar por menú o por su presentación académica; las rutas internas utilizan `#/modulo` para que el sitio también pueda exportarse como estático.

Comprobaciones opcionales:

- `npm run check` — TypeScript.
- `npm run test:logic` — revisión de archivos y restricciones estructurales.
- `npm run build` — exportación estática mediante Next.js (carpeta `out/`).

**Aviso técnico:** el paquete se preparó en un entorno sin acceso al registro de npm. No incluye `node_modules` ni lockfile, y las versiones de dependencias se resolverán durante `npm install`. No se presenta una compilación de Next.js como verificada hasta ejecutarla en un entorno con dependencias instaladas.

## Estructura del código

- `app/` — aplicación Next.js y estilos.
- `src/components/` — interfaz general, navegación, accesibilidad, tarjetas, controles y tooltips.
- `src/modules/CitizenModules.tsx` — P01 a P08.
- `src/modules/OperationsModules.tsx` — P09 a P12.
- `src/modules/AcademicModules.tsx` — P13, presentación, galería de 33 láminas y agradecimiento.
- `src/lib/demo.ts` — modelo de datos, fixtures, reglas y transiciones de la simulación.
- `public/mockup/` — láminas visuales originales del Word de mockup.
- `tests/` — comprobaciones del proyecto que no requieren datos reales.

## Cuatro recorridos

1. **Registro ordinario:** `Convocatoria → Registro → Citas → Atención → Vacunación → Seguimiento`. Para confirmar una aplicación en demostración, cambiar al perfil *Vacunación*.
2. **Atención asistida:** seleccionar `DEMO-P002` en Registro (sin teléfono propio) → Citas → Atención; revisar apoyos coordinados versus entregados.
3. **Reporte posterior:** en Seguimiento elegir `DEMO-P003`, crear un reporte sintético; cambiar a perfil *Seguimiento* para revisar y canalizar de modo simulado. Un reporte recibido no implica revisión profesional.
4. **Conectividad y conflicto:** en Infraestructura simular desconexión → añadir operación de ejemplo → reconectar → simular conflicto. Se conservan ambas versiones para revisión; no hay servidor remoto.

## Ejemplos ambientales

- Generación de campaña de ejemplo: **145 kg + 8 kg = 153 kg**; límite de referencia nacional **150 kg**. Transferir no resta la generación.
- Proveedores de ejemplo: **19/25 = 76 %**; al acreditar documentalmente el caso pendiente, **20/25 = 80 %**.
- Masa de proveedores de ejemplo: **82 kg**, comparación independiente con límite de **80 kg**.

Los límites del caso no aclaran inequívocamente su ámbito nacional o por centro. La app presenta ambas lecturas como escenarios y no promete cumplimiento sin pesajes reales. No propone reutilización de agujas ni reciclaje inseguro de residuos peligrosos.

## Ayudas y accesibilidad

- Acceso por teclado y foco visible; salto al contenido.
- Controles con etiquetas, avisos por texto y mensajes de error.
- Controles de contraste y ampliación de texto; preferencia de movimiento reducido.
- Ayudas `?`, preguntas frecuentes y alternativas para la atención presencial.
- Recursos audio, traducciones y canales no producidos aparecen como pendientes; ningún enlace afirma servicios inexistentes.

Estos mecanismos constituyen un primer desarrollo que **aún requiere pruebas de accesibilidad manuales con tecnologías de apoyo** y validación con personas antes de una implantación real.

## Notas para la entrega académica

El Word académico final debe conservar **portada + solución de los cinco incisos + referencias**, con **máximo tres páginas para el inciso a)**. El ZIP es un complemento tecnológico solicitado para demostrar el mockup, no reemplaza el trabajo oficial. Esta entrega no se publica en GitHub por defecto ni incluye datos sanitarios reales.

La presentación (`#/presentacion`), fundamentos (`#/fundamentos`), galería (`#/galeria`) y agradecimiento (`#/agradecimiento`) son apartados auxiliares independientes, no pasos obligatorios para atender a una persona.

## Referencias de diseño

- Actividad 6. Proyecto integrador: reto: instrucciones y rúbrica UVM proporcionadas por el alumno.
- Caso académico «Distribución de vacunas», dos páginas.
- `ACT_06_Desarrollo_Solucion_Especificacion_Funcional_SIVI_V1_0.docx`.
- `ACT_06_Mockup_Visual_SIVI_V1_0.docx`.
- Documentación: https://nextjs.org/docs/app/guides/static-exports
- Accesibilidad: https://www.w3.org/TR/WCAG22/

**No incluye ZIP de terceros, repositorios ajenos, ni fuentes, marcas o proyectos de actividades anteriores.**

### Acceso inmediato, sin npm

Abre `VISTA_PREVIA_SIN_INSTALACION.html` para recorrer las 33 láminas, consultar el resumen de los cinco incisos y leer el agradecimiento. Esta es **solo una galería de referencia**; para formularios, navegación React y simulaciones, utiliza `INICIAR_SIVI_WINDOWS.cmd` o los comandos de npm indicados arriba.

En Windows, `INICIAR_SIVI_WINDOWS.cmd` verifica Node/npm, instala dependencias locales si faltan y abre el servidor de desarrollo. No ejecuta publicación en Internet.
