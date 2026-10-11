@echo off
setlocal
cd /d "%~dp0"
echo ==========================================================
echo SIVI - Actividad 6 - Prototipo academico React / Next.js
echo ==========================================================
where node >nul 2>&1
if errorlevel 1 (
 echo No se encontro Node.js. Instala una version compatible desde nodejs.org.
 pause
 exit /b 1
)
where npm >nul 2>&1
if errorlevel 1 (
 echo No se encontro npm. Revisa la instalacion de Node.js.
 pause
 exit /b 1
)
echo.
echo Versiones detectadas:
node --version
npm --version
if not exist "node_modules" (
 echo.
 echo Primera ejecucion: se instalaran dependencias locales de este proyecto.
 call npm install
 if errorlevel 1 (
  echo No fue posible instalar paquetes. Comprueba Internet y el registro de npm.
  pause
  exit /b 1
 )
)
echo.
echo La aplicacion iniciara en http://localhost:3000
start "" "http://localhost:3000"
call npm run dev
pause
