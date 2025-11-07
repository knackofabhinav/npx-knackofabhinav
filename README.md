# 📇 CLI Business Card

> A beautiful, interactive business card for your terminal

A modern, eye-catching CLI business card that displays your professional information with a QR code, styled box, and interactive options. Perfect for developers who want to stand out!

## ✨ Features

- 🎨 **Beautiful Design**: Styled with colorful boxes, emojis, and a clean layout
- 📱 **QR Code**: Displays a QR code that links to your website
- 🎯 **Interactive Menu**: Offers actions like sending emails or scheduling meetings
- 🚀 **Zero Installation**: Run instantly with `npx`
- 💫 **Loading Animation**: Professional spinner while loading options
- 📧 **Pre-filled Email Template**: Opens Gmail with a pre-formatted message
- 🗓 **Meeting Scheduler**: Direct link to Calendly for easy scheduling

## 🚀 Quick Start

Run the card directly with npx (no installation needed):

```bash
npx knackofabhinav
```

## 📦 Installation (Optional)

If you want to install it globally:

```bash
npm install -g knackofabhinav
```

Then run it anytime with:

```bash
knackofabhinav
```

## 🎯 What You'll See

When you run the command, you'll see:

1. **Personal Information Card** with:
   - A QR code linking to the website
   - Name and job title
   - Bio/tagline
   - Social media links (Twitter, GitHub, LinkedIn)
   - Website URL
   - How to run the card again

2. **Interactive Menu** with options to:
   - 📧 Send an email (opens Gmail with a pre-filled template)
   - 🗓 Schedule a meeting (opens Calendly)
   - 👋 Exit

## 🛠️ Technologies Used

- **[boxen](https://github.com/sindresorhus/boxen)** - Create beautiful boxes in the terminal
- **[chalk](https://github.com/chalk/chalk)** - Colorful terminal output
- **[inquirer](https://github.com/SBoudrias/Inquirer.js)** - Interactive command-line prompts
- **[ora](https://github.com/sindresorhus/ora)** - Elegant terminal spinners
- **[qrcode-terminal](https://github.com/gtanner/qrcode-terminal)** - Generate QR codes in the terminal
- **[open](https://github.com/sindresorhus/open)** - Open URLs in the default browser
- **[clear](https://github.com/bahamas10/node-clear)** - Clear the terminal screen

## 🎨 Customization

Want to create your own CLI business card? Here's how:

### 1. Clone or Fork This Repository

```bash
git clone https://github.com/knackofabhinav/npx-knackofabhinav.git
cd npx-knackofabhinav
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Customize Your Information

Edit `card.js` and update the `data` object with your information:

```javascript
const data = {
    name: chalk.bold.green("Your Name"),
    work: `${chalk.white("Your Title at")} ${chalk.hex("#2b82b2").bold("Company")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("your-handle"),
    github: chalk.gray("https://github.com/") + chalk.green("your-username"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("your-profile"),
    web: chalk.cyan("https://yourwebsite.com"),
    npx: chalk.red("npx") + " " + chalk.white("your-package-name"),
    // ... update other fields
};
```

### 4. Update package.json

Change the package name, author, and other details:

```json
{
  "name": "your-package-name",
  "description": "A personal card for Your Name",
  "author": "Your Name",
  // ... other fields
}
```

### 5. Test Locally

```bash
node card.js
```

### 6. Publish to npm

```bash
npm login
npm publish
```

Now anyone can run `npx your-package-name` to see your card!

## 📋 Code Structure

```
npx-knackofabhinav/
├── card.js          # Main application file
├── package.json     # Project configuration and dependencies
├── package-lock.json
└── README.md        # Documentation
```

### Key Components in card.js:

- **Data Object** (lines 66-84): Contains all personal information
- **QR Code Generation** (lines 86-92): Creates a QR code from your website URL
- **Card Layout** (lines 94-119): Designs the boxed card with all information
- **Interactive Menu** (lines 20-64): Defines the action options
- **Email Helper** (lines 149-155): Creates pre-filled Gmail compose URLs

## 🎭 Styling Customization

You can customize colors and styles by modifying the chalk methods:

```javascript
// Available chalk colors
chalk.black, chalk.red, chalk.green, chalk.yellow
chalk.blue, chalk.magenta, chalk.cyan, chalk.white

// Modifiers
chalk.bold, chalk.italic, chalk.underline

// Background colors
chalk.bgRed, chalk.bgGreen, etc.

// Hex colors
chalk.hex('#FF5733')
```

## 🔧 Configuration Options

### Boxen Options (lines 110-118)

```javascript
{
    margin: 1,              // Space around the box
    float: 'center',        // Alignment (left, center, right)
    padding: 1,             // Space inside the box
    borderStyle: "round",   // Box style (round, single, double, etc.)
    borderColor: "cyan",    // Border color
    borderWidth: 2,         // Border thickness
    textAlignment: 'center' // Text alignment inside
}
```

### Ora Spinner Options (lines 130-133)

```javascript
{
  text: 'Loading options...',  // Loading text
  spinner: 'dots'              // Spinner type (dots, line, star, etc.)
}
```

## 🐛 Troubleshooting

### Command Not Found
If `npx` doesn't work, make sure you have Node.js and npm installed:
```bash
node --version
npm --version
```

### QR Code Not Displaying
Some terminals may have issues rendering QR codes. Try a different terminal or adjust the QR code settings in the code.

### Links Not Opening
The `open` package should work on most systems, but if links don't open automatically, you can manually copy and paste the URLs shown in the card.

## 📝 License

ISC

## 👤 Author

**Abhinav Patel**

- Website: [knackofabhinav.com](https://knackofabhinav.com)
- Twitter: [@knackofabhinav](https://twitter.com/knackofabhinav)
- GitHub: [@knackofabhinav](https://github.com/knackofabhinav)
- LinkedIn: [knackofabhinav](https://linkedin.com/in/knackofabhinav)

## 🌟 Inspiration

This project was inspired by the creative developer community that builds fun and unique ways to share their professional information. CLI business cards are a great way to stand out and show your technical skills!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/knackofabhinav/npx-knackofabhinav/issues).

## 💖 Show Your Support

Give a ⭐️ if this project helped or inspired you!

---

Made with ❤️ and JavaScript
