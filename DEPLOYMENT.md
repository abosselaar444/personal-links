# 🚀 Personal Deployment Guide - Nginx Proxy Manager

This guide shows how to deploy YOUR personal landing page (with your config.js) to your own server using Nginx Proxy Manager.

## 📋 Prerequisites

- A server with Nginx Proxy Manager installed
- Domain or subdomain pointed to your server (e.g., `links.yourdomain.com`)
- SSH access to your server

## 🔧 Deployment Steps

### 1. Prepare Your Files Locally

Make sure your `config.js` is configured with your personal information:

```bash
cd ~/personal-links  # Navigate to your project directory

# Verify your config.js exists and is complete
ls -la config.js
```

### 2. Create Web Directory on Server

SSH into your server:

```bash
ssh user@your-server-ip
```

Create a directory for your landing page:

```bash
# Create directory (adjust path as needed)
sudo mkdir -p /var/www/personal-links
sudo chown $USER:$USER /var/www/personal-links
```

### 3. Upload Files to Server

From your **local machine**, upload the files:

```bash
# Option A: Using SCP
scp ~/personal-links/index.html user@your-server:/var/www/personal-links/
scp ~/personal-links/config.js user@your-server:/var/www/personal-links/

# Option B: Using rsync (better for updates)
rsync -avz --exclude='.git' --exclude='README.md' --exclude='example-config.js' --exclude='DEPLOYMENT.md' \
  ~/personal-links/ \
  user@your-server:/var/www/personal-links/

# Option C: Clone repo and add config manually
# On server:
cd /var/www
git clone https://github.com/yourusername/personal-links.git
cd personal-links
# Then SCP just your config.js:
# From local: scp config.js user@your-server:/var/www/personal-links/
```

### 4. Set Permissions

On your server:

```bash
# Set proper permissions
sudo chown -R www-data:www-data /var/www/personal-links
sudo chmod -R 755 /var/www/personal-links
```

### 5. Configure Nginx Proxy Manager

#### Access NPM Web Interface
1. Go to your NPM interface (usually `http://your-server:81`)
2. Login with your credentials

#### Create Proxy Host
1. Click **"Proxy Hosts"** → **"Add Proxy Host"**

2. **Details Tab:**
   - **Domain Names:** `links.yourdomain.com` (or your chosen domain)
   - **Scheme:** `http`
   - **Forward Hostname/IP:** `localhost` or `127.0.0.1`
   - **Forward Port:** `8080` (we'll create this nginx server next)
   - **Block Common Exploits:** ✅ Enabled
   - **Websockets Support:** ❌ Not needed
   - **Access List:** Choose if you want to restrict access

3. **SSL Tab:**
   - **SSL Certificate:** Request a new Let's Encrypt certificate
   - **Force SSL:** ✅ Enabled
   - **HTTP/2 Support:** ✅ Enabled
   - **HSTS Enabled:** ✅ Enabled
   - **Email:** your@email.com (for Let's Encrypt notifications)
   - **Agree to ToS:** ✅

4. Click **Save**

### 6. Create Direct Nginx Configuration

Since NPM needs a backend to proxy to, create a simple Nginx config:

**Option A: Use a simple web server**

On your server:

```bash
# Install a simple Python web server (or use nginx directly)
cd /var/www/personal-links
python3 -m http.server 8080
```

But this won't persist. Better to create a systemd service:

```bash
sudo nano /etc/systemd/system/personal-links.service
```

Add:

```ini
[Unit]
Description=Personal Landing Page HTTP Server
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/personal-links
ExecStart=/usr/bin/python3 -m http.server 8080
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable personal-links
sudo systemctl start personal-links
sudo systemctl status personal-links
```

**Option B: Use Nginx directly (Recommended)**

Create Nginx site config:

```bash
sudo nano /etc/nginx/sites-available/personal-links
```

Add:

```nginx
server {
    listen 8080;
    server_name localhost;

    root /var/www/personal-links;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Enable and restart:

```bash
sudo ln -s /etc/nginx/sites-available/personal-links /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 7. Test Your Site

1. **Local test on server:**
   ```bash
   curl http://localhost:8080
   ```

2. **Test via domain:**
   - Go to `https://links.yourdomain.com`
   - You should see your landing page with your personal data!

3. **Test features:**
   - ✅ Page loads with your name and info
   - ✅ Particles animate in background
   - ✅ Typing animation works
   - ✅ Social links work
   - ✅ Email copy to clipboard works
   - ✅ Projects display correctly
   - ✅ SSL certificate is active (🔒 in browser)

## 🔄 Updating Your Site

### Option A: Using the Deploy Script (Recommended)

1. **First time only - Create your deploy script:**
   ```bash
   cp deploy.example.sh deploy.sh
   chmod +x deploy.sh
   ```

2. **Edit `deploy.sh` with your server details:**
   ```bash
   nano deploy.sh
   ```
   Update these lines:
   ```bash
   SERVER_USER="your-username"
   SERVER_HOST="your-server-ip"
   SERVER_PATH="/var/www/personal-links"
   ```

3. **Deploy changes:**
   ```bash
   ./deploy.sh
   ```

   The script will sync only `index.html` and `config.js` to your server.

**Note:** `deploy.sh` is gitignored, so your server credentials stay private!

### Option B: Manual rsync

When you make changes to your config or want to update:

```bash
# From your local machine
rsync -avz --exclude='.git' --exclude='README.md' --exclude='example-config.js' \
  ~/personal-links/ \
  user@your-server:/var/www/personal-links/

# No server restart needed - just refresh your browser!
```

## 🎨 Adding a Custom Domain

If you want a custom domain (e.g., `arjanbosselaar.com`):

1. **DNS Setup:**
   - Add an A record pointing to your server's public IP
   - Or add a CNAME pointing to your existing domain

2. **Update NPM:**
   - Edit your proxy host
   - Add the new domain to "Domain Names"
   - Request a new SSL certificate for it

## 🔒 Security Considerations

### If Exposing to Public Internet:

1. **Firewall Rules:**
   ```bash
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable
   ```

2. **Keep NPM Updated:**
   ```bash
   # Update NPM regularly via its interface or Docker
   ```

3. **Monitor Access:**
   - Check NPM access logs
   - Consider setting up fail2ban

4. **Rate Limiting:**
   - Configure in NPM under Advanced settings
   - Prevents abuse

### If Internal Only (Homelab):

- Use NPM's Access Lists to restrict to your local network
- Or only expose via VPN (WireGuard, Tailscale, etc.)

## 📊 Monitoring

Check if your site is running:

```bash
# Check service status
sudo systemctl status personal-links  # if using systemd
sudo systemctl status nginx           # if using nginx

# Check logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Test locally
curl -I http://localhost:8080
```

## 🐛 Troubleshooting

### Site not loading
```bash
# Check if service is running
sudo systemctl status nginx
sudo netstat -tulpn | grep :8080

# Check NPM proxy host configuration
# Verify domain DNS is pointed correctly
```

### Config.js not loading
```bash
# Verify file exists and permissions
ls -la /var/www/personal-links/config.js
sudo chmod 644 /var/www/personal-links/config.js
```

### SSL Certificate issues
- Wait 5-10 minutes after requesting certificate
- Check DNS propagation: `dig links.yourdomain.com`
- Verify port 80 and 443 are accessible from internet

### Particles not animating
- Check browser console (F12) for errors
- Ensure JavaScript is enabled
- Try hard refresh (Cmd+Shift+R or Ctrl+Shift+F5)

## ✅ Checklist

- [ ] Files uploaded to server
- [ ] Permissions set correctly
- [ ] Backend service running (port 8080)
- [ ] NPM proxy host configured
- [ ] SSL certificate issued and working
- [ ] Domain resolves correctly
- [ ] Site loads with your personal data
- [ ] All features working (particles, typing, email copy)

---

**Need help?** Check the main README.md or open an issue on GitHub.
