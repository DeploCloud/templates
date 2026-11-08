@echo off
setlocal EnableExtensions DisableDelayedExpansion

set "target="
set "arch=%PROCESSOR_ARCHITECTURE%"
if defined PROCESSOR_ARCHITEW6432 set "arch=%PROCESSOR_ARCHITEW6432%"
if /i "%arch%"=="AMD64" set "target=windows-x64"
if /i "%arch%"=="ARM64" set "target=windows-arm64"
if not defined target (
    echo Unsupported Windows architecture: %arch% 1>&2
    exit /b 1
)

if "%~1"=="" (
    "%~dp0bin\template-validator-%target%.exe" "%~dp0templates"
) else (
    "%~dp0bin\template-validator-%target%.exe" %*
)
exit /b %errorlevel%
