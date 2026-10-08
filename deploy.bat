@echo off
REM Anindojaya Sweetness Deployment Script for Windows
REM Usage: deploy.bat [environment]
REM Environments: local, staging, production

set ENVIRONMENT=%1
if "%ENVIRONMENT%"=="" set ENVIRONMENT=local

set IMAGE_NAME=anindojaya-sweetness
set CONTAINER_NAME=anindojaya-container

echo 🚀 Deploying Anindojaya Sweetness Website - Environment: %ENVIRONMENT%

REM Stop and remove existing container
echo 📦 Stopping existing container...
docker stop %CONTAINER_NAME% 2>nul
docker rm %CONTAINER_NAME% 2>nul

REM Build the Docker image
echo 🔨 Building Docker image...
docker build -t %IMAGE_NAME%:%ENVIRONMENT% .

if errorlevel 1 (
    echo ❌ Docker build failed!
    exit /b 1
)

REM Run based on environment
if "%ENVIRONMENT%"=="local" (
    echo 🏠 Starting local development server...
    docker run -d --name %CONTAINER_NAME% -p 3000:80 %IMAGE_NAME%:%ENVIRONMENT%
    echo ✅ Local server running at http://localhost:3000
    echo 🌐 Indonesian: http://localhost:3000/id
    echo 🌐 English: http://localhost:3000/en
) else if "%ENVIRONMENT%"=="staging" (
    echo 🧪 Starting staging server...
    docker run -d --name %CONTAINER_NAME% -p 8080:80 --restart unless-stopped %IMAGE_NAME%:%ENVIRONMENT%
    echo ✅ Staging server running at http://localhost:8080
) else if "%ENVIRONMENT%"=="production" (
    echo 🌟 Starting production server...
    docker run -d --name %CONTAINER_NAME% -p 80:80 -p 443:443 --restart unless-stopped -v %cd%/ssl:/etc/nginx/ssl:ro %IMAGE_NAME%:%ENVIRONMENT%
    echo ✅ Production server running
    echo 🔒 Make sure SSL certificates are in ./ssl/ directory
) else (
    echo ❌ Unknown environment: %ENVIRONMENT%
    echo Available environments: local, staging, production
    exit /b 1
)

REM Show running containers
echo.
echo 📊 Container Status:
docker ps --filter name=%CONTAINER_NAME%

REM Show logs
echo.
echo 📝 Container Logs (last 10 lines):
docker logs --tail 10 %CONTAINER_NAME%
