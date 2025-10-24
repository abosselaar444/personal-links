// Personal Landing Page Configuration Template
//
// SETUP INSTRUCTIONS:
// 1. Copy this file and rename it to "config.js"
// 2. Update all the values below with your personal information
// 3. Save and open index.html in your browser
//
// NOTE: config.js is gitignored by default to keep your personal info private

const CONFIG = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Your Job Title | Your Passion | Your Expertise",

        // Profile Image - Options:
        // 1. Leave empty ("") to use the icon below
        // 2. Add a local file path: "profile.jpg"
        // 3. Add a URL: "https://example.com/your-photo.jpg"
        profileImage: "",

        // Font Awesome icon (only used if profileImage is empty)
        // Browse icons at: https://fontawesome.com/icons
        profileIcon: "fas fa-user-astronaut",
    },

    // Bio text for typing animation
    // Add 2-4 sentences that will cycle through the typing animation
    bio: [
        "Write your first bio sentence here - make it engaging!",
        "Add a second sentence about your skills or interests.",
        "Optional third sentence about what you're passionate about."
    ],

    // Social Links
    // Set enabled: false to hide any link
    social: [
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/your-profile",
            username: "Connect professionally",
            icon: "fab fa-linkedin",
            color: "#0077b5",
            enabled: true
        },
        {
            platform: "GitHub",
            url: "https://github.com/yourusername",
            username: "Explore my code",
            icon: "fab fa-github",
            color: "#6e5494",
            enabled: true
        },
        {
            platform: "Email",
            url: "mailto:your.email@example.com", // Not used for display
            username: "your.email@example.com", // Displayed and copied
            icon: "fas fa-envelope",
            color: "#ff006e",
            copyToClipboard: true, // Special: clicking copies to clipboard
            enabled: true
        },
        // Add more social links below - here are some examples:
        {
            platform: "Twitter",
            url: "https://twitter.com/yourusername",
            username: "@yourusername",
            icon: "fab fa-twitter",
            color: "#1DA1F2",
            enabled: false // Set to true to show
        },
        {
            platform: "Portfolio",
            url: "https://yourwebsite.com",
            username: "Visit my portfolio",
            icon: "fas fa-globe",
            color: "#00d4ff",
            enabled: false
        },
        {
            platform: "Medium",
            url: "https://medium.com/@yourusername",
            username: "Read my articles",
            icon: "fab fa-medium",
            color: "#00ab6c",
            enabled: false
        }
    ],

    // Projects - Showcase your best work
    // Add 3-6 projects for the best visual layout
    projects: [
        {
            title: "Project Name",
            description: "Brief description of your project, the technologies used, and the impact it had. Keep it concise but compelling.",
            icon: "🚀", // Use emoji or change in CSS
            link: "", // Optional: Add URL to open when clicked
            enabled: true
        },
        {
            title: "Another Project",
            description: "Describe what makes this project interesting. Focus on the problem it solves and your role in creating it.",
            icon: "💡",
            link: "",
            enabled: true
        },
        {
            title: "Third Project",
            description: "Highlight the key technologies, methodologies, or creative solutions you implemented in this project.",
            icon: "⚡",
            link: "",
            enabled: true
        },
        {
            title: "Fourth Project",
            description: "Show the breadth of your skills with diverse projects. This could be a side project, contribution, or professional work.",
            icon: "🎯",
            link: "",
            enabled: true
        }
    ],

    // Theme Colors (OPTIONAL)
    // Uncomment and customize to change the color scheme
    // Current defaults: Neon blue/purple/pink on dark background
    /*
    theme: {
        primary: "#00d4ff",      // Cyan - main accent color
        secondary: "#b024ff",    // Purple - secondary accent
        accent: "#ff006e",       // Pink - highlight color
        text: "#e0e0e0",         // Light gray - main text
        textDim: "#a0a0a0",      // Dimmed gray - secondary text
        bgDark: "#0a0a0f"        // Very dark blue - background
    },
    */

    // Feature Toggles
    // Enable or disable specific features
    features: {
        particles: true,          // Animated particle background
        typingAnimation: true,    // Auto-typing bio text
        viewCounter: true,        // Page view counter in footer
        konamiCode: true,        // Secret easter egg (↑↑↓↓←→←→BA)
        scrollReveal: true       // Elements fade in on scroll
    },

    // Footer Configuration
    footer: {
        text: "Crafted with {icon} and code.",  // {icon} will be replaced with the icon below
        icon: "fas fa-heart",                    // Font Awesome icon
        year: "auto"  // "auto" = current year, or specify like "2024"
    }
};

// Make config available globally
window.CONFIG = CONFIG;
