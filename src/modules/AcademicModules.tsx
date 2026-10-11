
'use client';

import React, { useState } from 'react';
import type { AppProps } from '@/src/components/AppShell';
import {
  Card,
  Note,
  Tag,
  Action,
  ViewHeader,
  SimpleTable,
  Hint,
} from '@/src/components/UI';
import type { Module } from '@/src/lib/demo';

// Configuración de rutas para ejecución local y GitHub Pages.
// Local: ''
// GitHub Pages: '/act6-sivi-uvm'
const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || '';

type Topic = {
  n: number;
  group:
    | 'Inclusión y accesibilidad'
    | 'Circularidad y colaboración'
    | 'Comportamiento'
    | 'Herramientas';
  label: string;
  origin: string;
  area: string;
  decision: string;
  screen: Module;
  status: 'Propuesto' | 'Referencia metodológica' | 'Por validar';
};

const topics: Topic[] = [
  {
    n: 1,
    group: 'Inclusión y accesibilidad',
    label: 'Participación inclusiva',
    origin: 'Unidad 1 · Negocios inclusivos',
    area: 'Inclusión + compras',
    decision: 'Trato equitativo a ciudadanía, personal y proveedores.',
    screen: 'convocatoria',
    status: 'Propuesto',
  },
  {
    n: 2,
    group: 'Inclusión y accesibilidad',
    label: 'Barreras económicas y digitales',
    origin: 'Unidad 1',
    area: 'Investigación UX',
    decision: 'Atención asistida sin correo ni teléfono obligatorio.',
    screen: 'registro',
    status: 'Propuesto',
  },
  {
    n: 3,
    group: 'Inclusión y accesibilidad',
    label: 'Modelo social y ajustes razonables',
    origin: 'Unidad 1',
    area: 'Accesibilidad',
    decision: 'Preguntar apoyos, coordinar y acreditar entrega.',
    screen: 'atencion',
    status: 'Propuesto',
  },
  {
    n: 4,
    group: 'Inclusión y accesibilidad',
    label: 'Personas, empatía y codiseño',
    origin: 'Unidad 1',
    area: 'UX + operación',
    decision:
      'Identificar barreras sin asumir necesidades individuales. Validación posterior.',
    screen: 'ayuda',
    status: 'Por validar',
  },
  {
    n: 5,
    group: 'Inclusión y accesibilidad',
    label: 'Valor y autonomía',
    origin: 'Actividad 1 · Concepto',
    area: 'Diseño de producto',
    decision: 'Resolver una atención; no maximizar la visita.',
    screen: 'inicio',
    status: 'Propuesto',
  },
  {
    n: 6,
    group: 'Inclusión y accesibilidad',
    label: 'Diseño universal',
    origin: 'Unidad 1 · Siete principios',
    area: 'UX + accesibilidad',
    decision: 'Uso equitativo, flexibilidad, claridad y tolerancia al error.',
    screen: 'registro',
    status: 'Propuesto',
  },
  {
    n: 7,
    group: 'Inclusión y accesibilidad',
    label: 'Diseño Universal para el Aprendizaje',
    origin: 'Unidad 1 · DUA',
    area: 'Contenidos + formación',
    decision:
      'Distintas vías de representación y comprensión de instrucciones.',
    screen: 'convocatoria',
    status: 'Propuesto',
  },
  {
    n: 8,
    group: 'Inclusión y accesibilidad',
    label: 'POUR',
    origin: 'Actividad 2 · Maqueta',
    area: 'UX/UI + frontend',
    decision:
      'Perceptible, operable, comprensible y robusto; uso de teclado y semántica.',
    screen: 'registro',
    status: 'Por validar',
  },
  {
    n: 9,
    group: 'Inclusión y accesibilidad',
    label: 'Arquitectura de información y prototipado',
    origin: 'Actividad 2',
    area: 'Diseño de servicios',
    decision: 'Recorridos, títulos, rutas, errores, estado y recuperación.',
    screen: 'presentacion',
    status: 'Propuesto',
  },
  {
    n: 10,
    group: 'Circularidad y colaboración',
    label: 'Economía circular, 3R y prevención',
    origin: 'Unidad 2 · Actividad 3',
    area: 'Ambiental',
    decision: 'Prevenir, separar y registrar destino seguro.',
    screen: 'residuos',
    status: 'Propuesto',
  },
  {
    n: 11,
    group: 'Circularidad y colaboración',
    label: 'Cradle to Cradle y ciclos',
    origin: 'Unidad 2',
    area: 'Ambiental + compras',
    decision:
      'Distinguir ciclos técnicos, biológicos y residuos sanitarios regulados.',
    screen: 'residuos',
    status: 'Propuesto',
  },
  {
    n: 12,
    group: 'Circularidad y colaboración',
    label: 'Durabilidad y modularidad',
    origin: 'Unidad 2',
    area: 'TI + compras',
    decision:
      'Mantener, reparar, reasignar y dar de baja equipos de forma segura.',
    screen: 'infraestructura',
    status: 'Propuesto',
  },
  {
    n: 13,
    group: 'Circularidad y colaboración',
    label: 'Diversidad y resiliencia',
    origin: 'Unidad 2',
    area: 'Continuidad',
    decision: 'Canales, energía y proveedores alternativos.',
    screen: 'centros',
    status: 'Propuesto',
  },
  {
    n: 14,
    group: 'Circularidad y colaboración',
    label: 'Energías renovables',
    origin: 'Unidad 2',
    area: 'Infraestructura',
    decision:
      'Evaluar opciones bajo medición real sin declarar consumo certificado.',
    screen: 'infraestructura',
    status: 'Por validar',
  },
  {
    n: 15,
    group: 'Circularidad y colaboración',
    label: 'Pensamiento sistémico',
    origin: 'Unidad 2',
    area: 'Operaciones',
    decision:
      'Vincular cupos, apoyos, insumos, residuos y retroalimentación.',
    screen: 'centros',
    status: 'Propuesto',
  },
  {
    n: 16,
    group: 'Circularidad y colaboración',
    label: 'Diseño regenerativo y biomímesis',
    origin: 'Unidad 2',
    area: 'Diseño ambiental',
    decision:
      'Marcos conceptuales sin una función clínica específica validada.',
    screen: 'fundamentos',
    status: 'Por validar',
  },
  {
    n: 17,
    group: 'Circularidad y colaboración',
    label: 'Economía de servicio y colaboración',
    origin: 'Actividad 4',
    area: 'Logística',
    decision: 'Coordinación temporal de recursos no clínicos aptos.',
    screen: 'proveedores',
    status: 'Propuesto',
  },
  {
    n: 18,
    group: 'Circularidad y colaboración',
    label: 'Alianzas y diseño circular',
    origin: 'Unidad 2 · Circular Design Guide',
    area: 'Ambiental + diseño',
    decision:
      'Receptores habilitados y trazabilidad sin inventar acuerdos.',
    screen: 'residuos',
    status: 'Propuesto',
  },
  {
    n: 19,
    group: 'Comportamiento',
    label: 'Hook y hábitos',
    origin: 'Actividad 5',
    area: 'Comportamiento + UX',
    decision:
      'Avisos pertinentes, acciones sencillas y continuidad útil.',
    screen: 'citas',
    status: 'Propuesto',
  },
  {
    n: 20,
    group: 'Comportamiento',
    label: 'Recompensas, emociones y contexto',
    origin: 'Actividad 5',
    area: 'UX + comunicación',
    decision:
      'Certeza, mensajes respetuosos y recuperación sin presión.',
    screen: 'ayuda',
    status: 'Propuesto',
  },
  {
    n: 21,
    group: 'Comportamiento',
    label: 'Impacto y mejora continua',
    origin: 'Actividad 5 · Transversal',
    area: 'Analítica + calidad',
    decision:
      'Indicadores con periodo y denominador; sin datos no mostrar logros.',
    screen: 'centros',
    status: 'Por validar',
  },
  {
    n: 22,
    group: 'Herramientas',
    label: 'React, Next.js y TypeScript',
    origin: 'Antecedente de Actividad 4',
    area: 'Ingeniería web',
    decision:
      'Modularizar interfaz y recorridos accesibles; no incluye backend sanitario.',
    screen: 'infraestructura',
    status: 'Referencia metodológica',
  },
  {
    n: 23,
    group: 'Herramientas',
    label: 'Git, pruebas y compilación',
    origin: 'Antecedente de Actividad 4',
    area: 'Ingeniería + calidad',
    decision:
      'Versionar, probar y verificar antes de autorizar publicación.',
    screen: 'infraestructura',
    status: 'Referencia metodológica',
  },
  {
    n: 24,
    group: 'Herramientas',
    label: 'OBS, DaVinci y accesibilidad audiovisual',
    origin: 'Actividad 4 · Producción',
    area: 'Comunicación audiovisual',
    decision:
      'Procedimiento opcional para presentar recorridos, sin video producido.',
    screen: 'presentacion',
    status: 'Referencia metodológica',
  },
];

// ===========================================================
// P13 — HERRAMIENTAS Y FUNDAMENTOS
// ===========================================================

export function Fundamentos({ go }: AppProps) {
  const [group, setGroup] = useState('Inclusión y accesibilidad');
  const [selected, setSelected] = useState<number | null>(null);

  const groups = [...new Set(topics.map((t) => t.group))];
  const list = topics.filter((x) => x.group === group);
  const active = topics.find((x) => x.n === selected) || list[0];

  return (
    <>
      <ViewHeader
        eyebrow="P13 · HERRAMIENTAS Y FUNDAMENTOS"
        title="Lo aprendido, aplicado a decisiones concretas"
        lead="Los conceptos de las unidades anteriores orientan esta solución, sin trasladar proyectos ni resultados de otros trabajos."
      />

      <div
        className="tabs"
        role="group"
        aria-label="Familia de conceptos"
      >
        {groups.map((g) => (
          <button
            key={g}
            className={group === g ? 'active' : ''}
            onClick={() => {
              setGroup(g);
              setSelected(null);
            }}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="topic-grid">
        {list.map((x) => (
          <button
            className={
              'topic-card' + (active?.n === x.n ? ' on' : '')
            }
            key={x.n}
            onClick={() => setSelected(x.n)}
          >
            <small>
              {String(x.n).padStart(2, '0')} ·{' '}
              {x.status.toUpperCase()}
            </small>

            <b>{x.label}</b>
            <span>{x.area}</span>
          </button>
        ))}
      </div>

      {active && (
        <Card title={'Aplicación: ' + active.label}>
          <div className="two-col">
            <div>
              <p>
                <b>Fuente de aprendizaje:</b> {active.origin}
              </p>

              <p>
                <b>Departamento responsable:</b> {active.area}
              </p>

              <p>
                <b>Decisión:</b> {active.decision}
              </p>
            </div>

            <div>
              <p>
                <b>Módulo relacionado:</b> {active.screen}
              </p>

              <Tag
                tone={
                  active.status === 'Propuesto'
                    ? 'blue'
                    : 'warn'
                }
              >
                {active.status}
              </Tag>

              <div className="button-line">
                <Action onClick={() => go(active.screen)}>
                  Abrir módulo relacionado →
                </Action>
              </div>
            </div>
          </div>
        </Card>
      )}

      <Note>
        Esta pantalla es académica y está separada del
        recorrido de registro y atención. «Propuesto» no
        significa probado, certificado o implementado en
        un sistema sanitario real.
      </Note>
    </>
  );
}

// ===========================================================
// PRESENTACIÓN ACADÉMICA — ACTIVIDAD FINAL
// ===========================================================

const slides = [
  {
    title: 'El reto universitario',
    desc:
      'Distribución de vacunas en 32 centros, con inclusión, trazabilidad y límites ambientales del caso.',
    tag: 'Contexto',
    screen: 'inicio' as Module,
  },
  {
    title: 'a) Comunicación y convocatoria',
    desc:
      'Flujo multicanal, proveedores por servicio, calendario relativo y tres páginas máximas en el informe.',
    tag: '20 % de la rúbrica',
    screen: 'convocatoria' as Module,
  },
  {
    title: 'b) Atención inclusiva',
    desc:
      'Apoyos individuales desde el primer contacto hasta el seguimiento, con canales presenciales y asistencia.',
    tag: '17.5 % de la rúbrica',
    screen: 'atencion' as Module,
  },
  {
    title: 'c) Residuos y proveedores',
    desc:
      'Prevención, clasificación, trazabilidad, límites 150/80 kg y cuota local del 80 %.',
    tag: '17.5 % de la rúbrica',
    screen: 'residuos' as Module,
  },
  {
    title: 'd) Mockup de SIVI',
    desc:
      '13 módulos, 33 láminas de referencia y cuatro recorridos que distinguen los estados.',
    tag: '20 % de la rúbrica',
    screen: 'galeria' as Module,
  },
  {
    title: 'e) Infraestructura',
    desc:
      'Perfiles, privacidad, mínimo privilegio, datos ficticios y continuidad: arquitectura conceptual, no sistema operativo.',
    tag: '17.5 % de la rúbrica',
    screen: 'infraestructura' as Module,
  },
  {
    title: 'Conocimientos y cierre',
    desc:
      'POUR, inclusión, economía circular, colaboración y Hook como herramientas para diseñar decisiones responsables.',
    tag: 'Integración académica',
    screen: 'fundamentos' as Module,
  },
];

export function Presentacion({ go }: AppProps) {
  const [i, setI] = useState(0);
  const slide = slides[i];

  return (
    <>
      <ViewHeader
        eyebrow="PRESENTACIÓN · ACTIVIDAD FINAL"
        title="Proyecto integrador: reto de distribución de vacunas"
        lead="Recorrido de exposición preparado para explicar la propuesta a una persona evaluadora, sin confundir el mockup con atención real."
      />

      <div className="slide">
        <div className="slide-index">
          {String(i + 1).padStart(2, '0')} /{' '}
          {String(slides.length).padStart(2, '0')}
        </div>

        <Tag tone="blue">{slide.tag}</Tag>

        <h2>{slide.title}</h2>
        <p>{slide.desc}</p>

        <div className="button-line">
          <Action
            subtle
            disabled={i === 0}
            onClick={() => setI(Math.max(0, i - 1))}
          >
            ← Anterior
          </Action>

          <Action
            onClick={() =>
              i === slides.length - 1
                ? go('agradecimiento')
                : setI(i + 1)
            }
          >
            {i === slides.length - 1
              ? 'Ver agradecimiento →'
              : 'Siguiente →'}
          </Action>

          <Action
            subtle
            onClick={() => go(slide.screen)}
          >
            Ver demostración relacionada ↗
          </Action>
        </div>
      </div>

      <Card title="Mapa de la presentación">
        <div className="mini-grid">
          {slides.map((s, j) => (
            <button
              className={
                'journey-link' + (i === j ? ' active' : '')
              }
              key={s.title}
              onClick={() => setI(j)}
            >
              <b>{j + 1}</b>
              <span>{s.title}</span>
            </button>
          ))}
        </div>
      </Card>

      <div className="two-col">
        <Card title="Los cuatro recorridos">
          <div className="rules">
            <span>
              1. Registro, cita, recepción, vacunación y consulta.
            </span>
            <span>
              2. Atención asistida con apoyos combinados.
            </span>
            <span>
              3. Reporte posterior sin diagnóstico automático.
            </span>
            <span>
              4. Conexión interrumpida, cola y conflicto visible.
            </span>
          </div>
        </Card>

        <Card title="Materiales disponibles">
          <p>
            El paquete incorpora las 33 láminas originales
            del mockup y una interfaz React para recorrer
            los 13 módulos con casos ficticios.
          </p>

          <Action
            subtle
            onClick={() => go('galeria')}
          >
            Abrir galería de las 33 láminas
          </Action>
        </Card>
      </div>
    </>
  );
}

// ===========================================================
// CATÁLOGO DE LAS 33 LÁMINAS
// ===========================================================

const images = [
  ['Inicio · escenario disponible', 'inicio'],
  ['Inicio · sin jornadas', 'inicio'],
  ['Convocatoria y cambios', 'convocatoria'],
  ['Registro accesible · errores', 'registro'],
  ['Registro · revisión', 'registro'],
  ['Cita de demostración', 'citas'],
  ['Cambio rechazado', 'citas'],
  ['Cambio completado', 'citas'],
  ['Recepción y apoyos', 'atencion'],
  ['Borrador de vacunación', 'vacunacion'],
  ['Aplicación registrada', 'vacunacion'],
  ['Perfil insuficiente', 'vacunacion'],
  ['Reporte posterior', 'seguimiento'],
  ['Revisión del caso', 'seguimiento'],
  ['Consulta ciudadana', 'seguimiento'],
  ['Ayuda sin cuenta', 'ayuda'],
  ['Solicitudes y comunicaciones', 'ayuda'],
  ['Centros', 'centros'],
  ['Centros · incidencia', 'centros'],
  ['Residuos · generación', 'residuos'],
  ['Pesaje y destino', 'residuos'],
  ['Proveedores locales', 'proveedores'],
  ['Arquitectura y permisos', 'infraestructura'],
  ['Continuidad y conflicto', 'infraestructura'],
  ['Inclusión y accesibilidad', 'fundamentos'],
  ['Circularidad y colaboración', 'fundamentos'],
  ['Comportamiento y contexto', 'fundamentos'],
  ['Herramientas de producción', 'fundamentos'],
  ['Vista móvil A', 'inicio'],
  ['Recorrido 1 · ordinario', 'presentacion'],
  ['Recorrido 2 · asistido', 'presentacion'],
  ['Recorrido 3 · seguimiento', 'presentacion'],
  ['Recorrido 4 · contingencia', 'presentacion'],
] as [string, Module][];

// ===========================================================
// GALERÍA ACADÉMICA — 33 LÁMINAS
// ===========================================================

export function Galeria({ go }: AppProps) {
  const [i, setI] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const pair = images[i];

  return (
    <>
      <ViewHeader
        eyebrow="GALERÍA ACADÉMICA"
        title="33 láminas visuales del mockup"
        lead="Referencia de diseño procedente del documento aprobado. Cada imagen es estática: sus botones no son controles ejecutables."
      />

      <div className="gallery-controls">
        <Action
          subtle
          disabled={i === 0}
          onClick={() => setI(i - 1)}
        >
          ← Anterior
        </Action>

        <b>
          Lámina {i + 1} de 33 · {pair[0]}
        </b>

        <Action
          subtle
          disabled={i === 32}
          onClick={() => setI(i + 1)}
        >
          Siguiente →
        </Action>
      </div>

      <figure className="image-stage">

        {/* Imagen principal con ruta compatible con GitHub Pages */}
        <img
          src={
            publicBase +
            '/mockup/' +
            String(i + 1).padStart(2, '0') +
            '.png'
          }
          alt={'Lámina ' + (i + 1) + ': ' + pair[0]}
        />

        <figcaption>
          Vista de referencia académica; la aplicación
          React permite ejecutar algunas acciones de ejemplo
          por separado.
        </figcaption>
      </figure>

      <div className="button-line">
        <Action onClick={() => go(pair[1])}>
          Abrir el módulo React correspondiente →
        </Action>

        <Action
          subtle
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? 'Ocultar miniaturas'
            : 'Ver todas las miniaturas'}
        </Action>
      </div>

      {showAll && (
        <div className="thumb-grid">
          {images.map(([label], j) => (
            <button
              className={j === i ? 'on' : ''}
              key={j}
              onClick={() => {
                setI(j);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >

              {/* Miniaturas con ruta compatible con GitHub Pages */}
              <img
                src={
                  publicBase +
                  '/mockup/' +
                  String(j + 1).padStart(2, '0') +
                  '.png'
                }
                alt=""
              />

              <span>
                {j + 1}. {label}
              </span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}

// ===========================================================
// AGRADECIMIENTO A LA DOCENTE
// ===========================================================

export function Agradecimiento({ go }: AppProps) {
  return (
    <>
      <ViewHeader
        eyebrow="CIERRE ACADÉMICO"
        title="Agradecimiento"
        lead="Un reconocimiento a la enseñanza, la orientación y la oportunidad de aplicar lo aprendido durante la materia."
      />

      <div className="thank-you">
        <span
          className="thank-icon"
          aria-hidden="true"
        >
          ✦
        </span>

        <h2>
          Gracias por compartir sus conocimientos.
        </h2>

        <p>
          Quiero expresar mi agradecimiento a la{' '}
          <b>maestra Alba Pulido Pineda</b> por su orientación,
          el tiempo dedicado a la materia{' '}
          <i>Diseñar para Compartir</i> y los conocimientos
          que compartió durante el curso.
        </p>

        <p>
          Las actividades me permitieron comprender que diseñar
          una solución no consiste únicamente en proponer
          una herramienta. También implica reconocer las
          necesidades de las personas, reducir barreras,
          considerar las consecuencias ambientales y
          tomar decisiones responsables.
        </p>

        <p>
          Este proyecto integrador es una oportunidad para
          reunir esos aprendizajes y aplicarlos a un reto
          que exige comunicación clara, inclusión,
          organización y cuidado de la información.
        </p>

        <p>
          Agradezco especialmente la invitación a analizar
          los problemas con mayor profundidad, cuestionar
          nuestras propuestas y buscar soluciones útiles
          para personas con diferentes circunstancias.
        </p>

        <strong>
          Con respeto y gratitud,
          <br />
          Juan Carlos Perez Hernández
        </strong>

        <div className="button-line">
          <Action
            subtle
            onClick={() => go('presentacion')}
          >
            Volver a la presentación
          </Action>

          <Action onClick={() => go('inicio')}>
            Ir al inicio →
          </Action>
        </div>
      </div>

      <Card title="Universidad del Valle de México">
        <p>
          Diseñar para Compartir · Actividad 6.
          Proyecto integrador: reto — Distribución de vacunas.
        </p>

        <p>
          <b>Docente:</b> Alba Pulido Pineda
        </p>

        <p>
          <b>Alumno:</b> Juan Carlos Perez Hernández
        </p>
      </Card>
    </>
  );
}
