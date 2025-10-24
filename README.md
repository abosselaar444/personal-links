# 🚀 Modern Personal Landing Page Template

A stunning, customizable personal landing page template that's a beautiful alternative to LinkTree. Features cutting-edge design with animated backgrounds, glassmorphism effects, and smooth interactions - perfect for developers, designers, and creators.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

**🎨 [Live Demo](https://yoursite.com)** | **📖 [Documentation](#customization-guide)**

## ⚡ Quick Setup (5 Minutes)

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/personal-links.git
   cd personal-links
   ```

2. **Create your config file**
   ```bash
   cp example-config.js config.js
   ```

3. **Edit `config.js` with your information**
   - Update your name, title, and bio
   - Add your social media links
   - Customize your projects
   - Optional: Change colors and toggle features

4. **Open `index.html` in your browser**
   - That's it! No build process, no dependencies.

5. **Deploy** (See [deployment options](#-quick-start) below)

## ✨ Features

### 🎨 Visual Effects
- **Animated Gradient Background** - Smoothly shifting color gradients
- **Particle System** - Interactive floating particles with connection lines
- **Glassmorphism Cards** - Frosted glass effect with backdrop blur
- **Animated Profile Border** - Rotating gradient border around profile image
- **Smooth Hover Animations** - Premium micro-interactions on all elements

### 🎯 Functionality
- **Typing Animation** - Auto-typing bio text with realistic cursor
- **View Counter** - localStorage-based page view tracking
- **Copy to Clipboard** - One-click email copying with toast notification
- **Scroll Reveal Animations** - Elements fade in as you scroll
- **Konami Code Easter Egg** - Hidden surprise (↑ ↑ ↓ ↓ ← → ← → B A)
- **Responsive Design** - Mobile-first, works perfectly on all devices

### 🛠️ Technical Stack
- Pure HTML5, CSS3, JavaScript (no frameworks)
- Modern CSS features (Grid, Flexbox, backdrop-filter, CSS animations)
- Font Awesome icons
- Google Fonts (Space Grotesk, JetBrains Mono)
- Single file deployment - everything is inline

## 🚀 Quick Start

### Option 1: Local Development
1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process needed.

### Option 2: Deploy to GitHub Pages
1. Fork this repository
2. Go to repository Settings → Pages
3. Select "Deploy from branch" and choose `main` branch
4. Your site will be live at `https://yourusername.github.io/personal-links/`

### Option 3: Deploy to Netlify
1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your `index.html` file
3. Get an instant live URL

### Option 4: Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Option 5: Traditional Web Hosting
1. Upload `index.html` to your web server
2. Access via your domain

## 🎨 Customization Guide

**All customization is done in `config.js` - no need to touch HTML or CSS!**

### 1. Personal Information

Open `config.js` and update:

```javascript
personal: {
    name: "Your Name",
    title: "Your Job Title | Your Skills | Your Passion",
    profileImage: "profile.jpg",  // Or leave empty to use an icon
    profileIcon: "fas fa-user-astronaut", // FontAwesome icon
}
```

**Profile Image Options:**
- Leave `profileImage: ""` to use the icon
- Add local file: `profileImage: "profile.jpg"`
- Add URL: `profileImage: "https://example.com/photo.jpg"`

### 2. Bio / Typing Animation

Add 2-4 sentences that will cycle through:

```javascript
bio: [
    "First sentence about yourself.",
    "Second sentence about your skills.",
    "Optional third sentence."
]
```

### 3. Social Links

Add, remove, or modify links:

```javascript
social: [
    {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile",
        username: "Connect professionally",
        icon: "fab fa-linkedin",
        color: "#0077b5",
        enabled: true  // Set to false to hide
    },
    // Add more links...
]
```

**Email with Copy-to-Clipboard:**
```javascript
{
    platform: "Email",
    url: "mailto:your@email.com",
    username: "your@email.com",
    icon: "fas fa-envelope",
    color: "#ff006e",
    copyToClipboard: true,  // Special: clicking copies to clipboard
    enabled: true
}
```

**Find More Icons:** [FontAwesome Icon Library](https://fontawesome.com/icons)

### 4. Projects

Showcase 3-6 projects:

```javascript
projects: [
    {
        title: "Project Name",
        description: "Brief description of the project and technologies used.",
        icon: "🚀",  // Emoji or FontAwesome
        link: "https://github.com/you/project",  // Optional
        enabled: true
    },
    // Add more projects...
]
```

### 5. Color Scheme

Uncomment and customize the theme section in `config.js`:

```javascript
theme: {
    primary: "#00d4ff",      // Cyan - main accent
    secondary: "#b024ff",    // Purple - secondary
    accent: "#ff006e",       // Pink - highlights
    text: "#e0e0e0",         // Light gray
    textDim: "#a0a0a0",      // Dimmed text
    bgDark: "#0a0a0f"        // Dark background
}
```

### 6. Feature Toggles

Enable or disable features:

```javascript
features: {
    particles: true,          // Particle animation
    typingAnimation: true,    // Auto-typing bio
    viewCounter: true,        // View counter
    konamiCode: true,        // Easter egg
    scrollReveal: true       // Scroll animations
}
```

## 📁 Project Structure

```
personal-links/
├── index.html              # Main page (don't edit - it's the template)
├── config.js              # YOUR personal config (gitignored ✓)
├── example-config.js      # Template config file
├── deploy.sh              # YOUR deployment script (gitignored ✓)
├── deploy.example.sh      # Template deployment script
├── DEPLOYMENT.md          # Server deployment guide
├── .gitignore            # Protects your personal info
└── README.md             # This file
```

**Important Files:**
- **`index.html`** - The template. Don't edit unless you know what you're doing.
- **`config.js`** - YOUR configuration file with personal info (not tracked by git)
- **`example-config.js`** - Template to copy from. This IS tracked by git.
- **`deploy.sh`** - YOUR deployment script with server details (not tracked by git)
- **`deploy.example.sh`** - Template deployment script. This IS tracked by git.

## 🔒 Privacy & Git

The `.gitignore` file automatically protects your personal information:

- ✅ `config.js` is **gitignored** (your personal data stays private)
- ✅ `deploy.sh` is **gitignored** (your server credentials stay private)
- ✅ `example-config.js` is tracked (so others can use the template)
- ✅ `deploy.example.sh` is tracked (so others can use the template)
- ✅ Profile images are gitignored

**This means you can:**
- Fork and share this template publicly
- Push updates without exposing your personal info OR server details
- Contribute improvements back to the original template
- Safely edit your `config.js` and `deploy.sh` without worrying about commits

## 📊 Analytics Integration

Add analytics to the `<head>` section of `index.html`:

### Google Analytics
```html
<!-- Add in <head> section of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Plausible Analytics
```html
<!-- Add in <head> section -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Simple Analytics
```html
<!-- Add in <head> section -->
<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
```

## 🎮 Easter Egg

The page includes a hidden Konami code easter egg! Try typing:
```
↑ ↑ ↓ ↓ ← → ← → B A
```
(Use arrow keys, then press B and A keys)

## 🎯 Performance Optimization

The page is already optimized, but for even better performance:

1. **Optimize your profile image**:
   - Use WebP format
   - Compress to under 100KB
   - Recommended size: 400x400px

2. **Host fonts locally** (optional):
   - Download fonts from Google Fonts
   - Replace CDN links with local files

3. **Minify the HTML** (for production):
   - Use [HTML Minifier](https://www.willpeavy.com/tools/minifier/)
   - Reduces file size by ~30%

## 🔧 Advanced Customization

### Adding More Social Platforms

In `config.js`, add to the `social` array:

```javascript
{
    platform: "YouTube",
    url: "https://youtube.com/@yourchannel",
    username: "Watch my videos",
    icon: "fab fa-youtube",
    color: "#FF0000",
    enabled: true
}
```

Popular platforms:
- YouTube: `fab fa-youtube` (#FF0000)
- Discord: `fab fa-discord` (#5865F2)
- Twitch: `fab fa-twitch` (#9146FF)
- Instagram: `fab fa-instagram` (#E4405F)
- Dev.to: `fab fa-dev` (#0A0A0A)
- Stack Overflow: `fab fa-stack-overflow` (#F58025)

[Browse all Font Awesome icons](https://fontawesome.com/icons)

### Performance Tuning

Edit `index.html` directly for these tweaks:

**Reduce particle count** for better mobile performance:
```javascript
// Find this line in index.html:
this.particleCount = 100;
// Change to:
this.particleCount = 50;
```

**Adjust typing speed:**
```javascript
// Find these lines in index.html:
const typingSpeed = 50;      // Lower = faster typing
const deletingSpeed = 30;    // Lower = faster deleting
const pauseTime = 2000;      // Time to pause at end (ms)
```

### Advanced Styling

While `config.js` handles colors, you can make deeper style changes in `index.html`:

- Fonts: Change Google Fonts link in `<head>`
- Layout: Modify CSS Grid/Flexbox properties
- Animations: Adjust `@keyframes` and animation timings
- Glassmorphism: Tweak `backdrop-filter` values

## 🐛 Troubleshooting

### Config not loading / Page is blank
- Make sure you copied `example-config.js` to `config.js`
- Check browser console (F12) for errors
- Ensure `config.js` is in the same folder as `index.html`
- Verify your `config.js` syntax is valid JavaScript

### Icons not showing
- Check your internet connection (Font Awesome loads from CDN)
- Verify icon names at [fontawesome.com/icons](https://fontawesome.com/icons)
- Or download Font Awesome and host locally

### Glassmorphism not working
- Ensure you're using a modern browser (Chrome 76+, Firefox 103+, Safari 9+)
- `backdrop-filter` requires HTTPS in some browsers
- Check if hardware acceleration is enabled

### Particles lagging on mobile
- Reduce particle count in `index.html` (see Advanced Customization)
- Or disable particles: Set `features.particles: false` in `config.js`

### Email copy not working
- Ensure `copyToClipboard: true` in your email social link
- Check browser clipboard permissions
- Use HTTPS (some browsers require it for clipboard access)

## 📱 Browser Support

- Chrome 76+ ✅
- Firefox 103+ ✅
- Safari 9+ ✅
- Edge 79+ ✅
- Opera 63+ ✅

## 📄 License

MIT License - feel free to use this for your own personal landing page!

## 🤝 Credits

Created with ❤️ by leveraging modern web technologies:
- Particle system inspired by particles.js
- Design inspired by modern UI/UX trends
- Icons by Font Awesome
- Fonts by Google Fonts

## 💡 Tips for Standing Out

1. **Add your personality**: Customize colors to match your personal brand
2. **Use a professional photo**: High-quality headshot makes a huge difference
3. **Write compelling bios**: Focus on what makes you unique
4. **Showcase diverse projects**: Highlight range of skills and interests
5. **Keep it updated**: Fresh content shows you're active
6. **Custom domain**: `yourname.com` looks more professional than `username.github.io`

## 🤝 Contributing

This is an open-source template! Contributions are welcome:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** (to `index.html`, `example-config.js`, or `README.md`)
4. **DON'T commit** your personal `config.js` (it's gitignored)
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

**Ideas for contributions:**
- New color themes
- Additional social platform integrations
- Performance improvements
- New animation effects
- Accessibility enhancements
- Better mobile responsiveness
- Documentation improvements

## 📜 License

MIT License - feel free to use this template for your personal landing page!

You can:
- ✅ Use commercially
- ✅ Modify as you wish
- ✅ Distribute
- ✅ Use privately

Just include the original license and copyright notice.

## 🙏 Acknowledgments

- Design inspired by modern glassmorphism trends
- Particle system concept from particles.js
- Icons by [Font Awesome](https://fontawesome.com)
- Fonts by [Google Fonts](https://fonts.google.com)

## 🚀 What's Next?

1. ⭐ **Star this repo** if you found it useful!
2. 🎨 **Customize** your `config.js` with your info
3. 🚢 **Deploy** to your favorite hosting platform
4. 📢 **Share** your landing page with the world!
5. 💬 **Tag me** if you use this template - I'd love to see it!

---

**Built with ❤️ by developers, for developers**

**Questions?** Open an issue • **Found a bug?** Submit a PR • **Love it?** Give it a star ⭐
