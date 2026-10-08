# 🚀 Anindojaya Sweetness - Deployment Guide

This guide will help you deploy your Anindojaya Sweetness website from the current codebase to your own domain (anindojaya.com).

## 📋 Prerequisites

- Docker installed on your system
- A domain name (anindojaya.com)
- A VPS or cloud server (DigitalOcean, AWS, etc.)

## 🏗️ Local Development & Testing

### 1. Test Locally First

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit:
- Indonesian: `http://localhost:8081/id`
- English: `http://localhost:8081/en`

### 2. Build Production Version

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🐳 Docker Deployment

### Option 1: Quick Deploy (Windows)

```cmd
# Local testing
deploy.bat local

# Staging deployment
deploy.bat staging

# Production deployment
deploy.bat production
```

### Option 2: Quick Deploy (Linux/Mac)

```bash
# Local testing
./deploy.sh local

# Staging deployment
./deploy.sh staging

# Production deployment
./deploy.sh production
```

### Option 3: Manual Docker Commands

```bash
# Build the image
docker build -t anindojaya-sweetness .

# Run locally (port 3000)
docker run -d --name anindojaya-container -p 3000:80 anindojaya-sweetness

# Run for production (ports 80 & 443)
docker run -d --name anindojaya-container -p 80:80 -p 443:443 --restart unless-stopped anindojaya-sweetness
```

## 🌐 Server Deployment

### 1. Set Up Your Server

**Recommended VPS Providers:**
- DigitalOcean ($5-10/month)
- Linode ($5-10/month)
- AWS EC2 (varies)
- Vultr ($2.50-6/month)

**Server Requirements:**
- Ubuntu 20.04+ or CentOS 8+
- 1GB RAM minimum (2GB recommended)
- 20GB storage
- Docker installed

### 2. Install Docker on Server

```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker
```

### 3. Deploy to Server

```bash
# Clone your repository
git clone https://github.com/yourusername/anindojaya-sweetness-showcase.git
cd anindojaya-sweetness-showcase

# Build and run
docker build -t anindojaya-sweetness .
docker run -d --name anindojaya-website -p 80:80 -p 443:443 --restart unless-stopped anindojaya-sweetness
```

## 🔒 SSL Certificate Setup (HTTPS)

### Option 1: Let's Encrypt (Free)

```bash
# Install certbot
sudo apt install certbot

# Get SSL certificate
sudo certbot certonly --standalone -d anindojaya.com -d www.anindojaya.com

# Copy certificates to ssl directory
sudo mkdir -p ssl
sudo cp /etc/letsencrypt/live/anindojaya.com/fullchain.pem ssl/
sudo cp /etc/letsencrypt/live/anindojaya.com/privkey.pem ssl/
```

### Option 2: Cloudflare (Recommended)

1. Sign up for Cloudflare (free)
2. Add your domain to Cloudflare
3. Update nameservers at your domain registrar
4. Enable "Full (Strict)" SSL in Cloudflare
5. Cloudflare handles HTTPS automatically

## 🌍 Domain Configuration

### 1. DNS Settings

In your domain registrar or DNS provider, create these records:

```
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 300

Type: A  
Name: www
Value: YOUR_SERVER_IP
TTL: 300

Type: CNAME
Name: id
Value: anindojaya.com
TTL: 300

Type: CNAME
Name: en  
Value: anindojaya.com
TTL: 300
```

### 2. Nginx Configuration (if needed)

If you need custom routing, create `custom-nginx.conf`:

```nginx
server {
    listen 80;
    server_name anindojaya.com www.anindojaya.com;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name anindojaya.com www.anindojaya.com;
    
    # SSL Configuration
    ssl_certificate /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;
    
    # Proxy to your app
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🚀 Complete Deployment Checklist

### Pre-Deployment
- [ ] Test locally with `npm run dev`
- [ ] Build successfully with `npm run build`
- [ ] Test Docker build locally
- [ ] Purchase domain name
- [ ] Set up VPS/server

### Server Setup
- [ ] Install Docker on server
- [ ] Clone repository to server
- [ ] Build Docker image
- [ ] Run container on port 80/443

### Domain & SSL
- [ ] Point domain to server IP
- [ ] Set up SSL certificate
- [ ] Test HTTPS access
- [ ] Configure redirects

### Final Testing
- [ ] Visit https://anindojaya.com/id (Indonesian)
- [ ] Visit https://anindojaya.com/en (English)
- [ ] Test language switching
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test mobile responsiveness

## 🔧 Maintenance Commands

```bash
# View running containers
docker ps

# View logs
docker logs anindojaya-container

# Update deployment
git pull
docker build -t anindojaya-sweetness .
docker stop anindojaya-container
docker rm anindojaya-container
docker run -d --name anindojaya-container -p 80:80 -p 443:443 --restart unless-stopped anindojaya-sweetness

# Backup
docker save anindojaya-sweetness > anindojaya-backup.tar
```

## 📞 Support

If you need help with deployment:
1. Check container logs: `docker logs anindojaya-container`
2. Verify DNS propagation: `nslookup anindojaya.com`
3. Test SSL: `curl -I https://anindojaya.com`

## 🎯 Expected Results

After successful deployment:
- ✅ https://anindojaya.com → Redirects to /id (Indonesian)
- ✅ https://anindojaya.com/id → Indonesian version
- ✅ https://anindojaya.com/en → English version
- ✅ Language switcher works
- ✅ All features functional
- ✅ Mobile responsive
- ✅ HTTPS secured
