#!/bin/bash

# Anindojaya Sweetness Deployment Script
# Usage: ./deploy.sh [environment]
# Environments: local, staging, production

ENVIRONMENT=${1:-local}
IMAGE_NAME="anindojaya-sweetness"
CONTAINER_NAME="anindojaya-container"

echo "🚀 Deploying Anindojaya Sweetness Website - Environment: $ENVIRONMENT"

# Stop and remove existing container
echo "📦 Stopping existing container..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t $IMAGE_NAME:$ENVIRONMENT .

if [ $? -ne 0 ]; then
    echo "❌ Docker build failed!"
    exit 1
fi

# Run based on environment
case $ENVIRONMENT in
    "local")
        echo "🏠 Starting local development server..."
        docker run -d \
            --name $CONTAINER_NAME \
            -p 3000:80 \
            $IMAGE_NAME:$ENVIRONMENT
        echo "✅ Local server running at http://localhost:3000"
        echo "🌐 Indonesian: http://localhost:3000/id"
        echo "🌐 English: http://localhost:3000/en"
        ;;
    
    "staging")
        echo "🧪 Starting staging server..."
        docker run -d \
            --name $CONTAINER_NAME \
            -p 8080:80 \
            --restart unless-stopped \
            $IMAGE_NAME:$ENVIRONMENT
        echo "✅ Staging server running at http://localhost:8080"
        ;;
    
    "production")
        echo "🌟 Starting production server..."
        docker run -d \
            --name $CONTAINER_NAME \
            -p 80:80 \
            -p 443:443 \
            --restart unless-stopped \
            -v $(pwd)/ssl:/etc/nginx/ssl:ro \
            $IMAGE_NAME:$ENVIRONMENT
        echo "✅ Production server running"
        echo "🔒 Make sure SSL certificates are in ./ssl/ directory"
        ;;
    
    *)
        echo "❌ Unknown environment: $ENVIRONMENT"
        echo "Available environments: local, staging, production"
        exit 1
        ;;
esac

# Show running containers
echo ""
echo "📊 Container Status:"
docker ps --filter name=$CONTAINER_NAME

# Show logs
echo ""
echo "📝 Container Logs (last 10 lines):"
docker logs --tail 10 $CONTAINER_NAME
