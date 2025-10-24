#!/bin/bash

# Personal Landing Page Deployment Script
# This script syncs your local files to your server

# ============================================
# CONFIGURATION - UPDATE THESE VALUES
# ============================================

SERVER_USER="your-username"
SERVER_HOST="your-server-ip"
SERVER_PATH="/var/www/personal-links"

# ============================================
# Script Start
# ============================================

echo "🚀 Personal Landing Page Deployment"
echo "===================================="
echo ""

# Check if config.js exists
if [ ! -f "config.js" ]; then
    echo "❌ Error: config.js not found!"
    echo "Please create config.js from example-config.js first."
    exit 1
fi

echo "📋 Deployment Configuration:"
echo "  Server: $SERVER_USER@$SERVER_HOST"
echo "  Path: $SERVER_PATH"
echo ""

# Confirm deployment
read -p "Continue with deployment? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 0
fi

echo ""
echo "📦 Syncing files to server..."
echo ""

# Deploy files using rsync
rsync -avz --progress \
    --exclude='.git' \
    --exclude='.DS_Store' \
    --exclude='README.md' \
    --exclude='example-config.js' \
    --exclude='DEPLOYMENT.md' \
    --exclude='deploy.sh' \
    --exclude='.gitignore' \
    index.html config.js \
    "$SERVER_USER@$SERVER_HOST:$SERVER_PATH/"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "🌐 Your site should now be updated at your domain."
    echo "   Try a hard refresh (Cmd+Shift+R) to see changes."
else
    echo ""
    echo "❌ Deployment failed!"
    echo "Please check your server connection and credentials."
    exit 1
fi
