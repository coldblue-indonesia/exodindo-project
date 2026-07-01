# Deployment Guide - EXODINDO

## 🚀 Quick Start

### 1. VPS Setup (Ubuntu 22.04)

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org

# Install Nginx & PM2
sudo apt install nginx -y
sudo npm install -g pm2

# Install Git
sudo apt install git -y
```

### 2. Clone & Setup Application

```bash
cd /var/www
sudo git clone https://github.com/coldblue-indonesia/exodindo-project.git exodindo
cd exodindo

# Backend Setup
cd backend
npm install
cp .env.example .env
nano .env  # Edit configuration

# Start with PM2
pm2 start server.js --name exodindo-backend
pm2 save
pm2 startup
```

### 3. Nginx Configuration

Create `/etc/nginx/sites-available/exodindo`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/exodindo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
```

### 5. MongoDB Configuration

```bash
# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Check status
sudo systemctl status mongod
```

### 6. Environment Variables (Production)

Edit `/var/www/exodindo/backend/.env`:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://localhost:27017/exodindoo
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@exodindo.com
FRONTEND_URL=https://your-domain.com
BACKEND_URL=https://your-domain.com/api
```

## 📋 Useful Commands

```bash
# Check PM2 processes
pm2 list
pm2 logs exodindo-backend

# Restart application
pm2 restart exodindo-backend

# View Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Check MongoDB
mongosh
> show databases
> use exodindoo
> db.collections
```

## 🔒 Security Checklist

- ✅ Change JWT_SECRET to a strong random value
- ✅ Setup SSL certificate with Let's Encrypt
- ✅ Configure firewall (ufw)
- ✅ Set MongoDB authentication
- ✅ Use strong passwords for SMTP
- ✅ Enable automatic backups
- ✅ Monitor logs regularly

## 📞 Troubleshooting

### Port already in use
```bash
sudo lsof -i :5000
sudo kill -9 <PID>
```

### MongoDB connection error
```bash
sudo systemctl restart mongod
mongosh  # Test connection
```

### Nginx 502 Bad Gateway
```bash
pm2 logs exodindo-backend
sudo systemctl restart nginx
```
