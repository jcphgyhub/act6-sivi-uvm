import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SIVI | Actividad 6 · Diseñar para Compartir',
  description: 'Prototipo académico inclusivo para el reto de distribución de vacunas. Datos ficticios, sin servicios sanitarios activos.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es-MX"><body>{children}</body></html>;
}
