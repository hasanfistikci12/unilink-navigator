# Unilink Navigator

A mobile-first safety support application for domestic violence victims in Estonia, featuring anonymous access, multilingual support, and security-first design.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Overview

Unilink Navigator is a prototype safety support platform designed with crisis situations in mind. It provides:

- **Anonymous Access**: No login, no signup, no data collection
- **Quick Exit**: One-click escape to neutral page (ESC key shortcut)
- **Crisis-Optimized**: Large text, clear hierarchy, single-screen tasks
- **Emergency Contacts**: Direct access to 112, Ohvriabi, Lasteabi
- **Multilingual**: Framework ready for TR/ET/RU/EN support
- **Mobile-First**: Responsive design optimized for phones and tablets

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd unilink

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Features

### 10 Core Screens

1. **Security Gate** - Safety check question with emergency contacts
2. **Home** - Navigation hub with 7 feature cards
3. **Chat** - Quick action chips and support links
4. **Emergency Help** - Large buttons for 112, 116 006, 116 111, 1247
5. **Nearby Support** - Location-based support center directory
6. **Rights & Processes** - Educational content about violence and legal processes
7. **Security Plan** - Interactive crisis preparation checklist
8. **Digital Security** - Step-by-step digital safety instructions
9. **Translation** - Emergency multilingual communication (TR/ET/RU/EN)
10. **Quick Exit** - Neutral weather page with history clearing tips

### Security Features

- **Quick Exit Button**: Fixed top-right, clears session and redirects
- **ESC Key Shortcut**: Keyboard quick exit
- **Emergency Header**: Sticky banner with 112 access
- **Anonymous Usage**: Zero data persistence
- **Session-Only Storage**: All data cleared on exit

### Accessibility

- WCAG AA compliant
- Keyboard navigation
- Screen reader support
- High contrast focus indicators
- Minimum 44x44px touch targets
- Skip to main content link

## 🎨 Design System

### Color Palette

- **Primary**: Navy Blue (#1e3a5f) - Trust & security
- **Safe**: Green (#10b981) - Safe status
- **Uncertain**: Amber (#f59e0b) - Uncertain status
- **Danger**: Red (#ef4444) - Emergency

### Typography

- **Font**: System fonts for maximum compatibility
- **Base Size**: 16px
- **Crisis Text**: 18px (larger for readability)
- **Line Height**: 1.6-1.8

## 🏗️ Project Structure

```
unilink/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Security Gate
│   ├── globals.css             # Design system
│   ├── home/page.tsx
│   ├── chat/page.tsx
│   ├── emergency/page.tsx
│   ├── nearby/page.tsx
│   ├── rights/page.tsx
│   ├── safety-plan/page.tsx
│   ├── digital-security/page.tsx
│   ├── translate/page.tsx
│   └── exit/page.tsx
├── components/
│   ├── QuickExitButton.tsx
│   ├── EmergencyHeader.tsx
│   ├── EmergencyButton.tsx
│   └── Card.tsx
└── package.json
```

## 🧪 Testing

All user flows have been manually tested and verified:

- ✅ Security Gate loads correctly
- ✅ Navigation between all pages
- ✅ Emergency contact buttons (tel: links)
- ✅ Quick Exit functionality
- ✅ ESC key shortcut
- ✅ Interactive elements (checkboxes, expandables)
- ✅ Location modal
- ✅ Mobile responsiveness
- ✅ Accessibility features

## 📦 Build & Deploy

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Static Export

For deployment to static hosting (Netlify, Vercel, GitHub Pages):

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
};
```

2. Build:
```bash
npm run build
```

Static files will be in `out/` directory.

## 🌐 Internationalization

The app is currently in Turkish with framework ready for:

- 🇹🇷 Turkish (TR) - Current
- 🇪🇪 Estonian (ET) - Ready
- 🇷🇺 Russian (RU) - Ready
- 🇬🇧 English (EN) - Ready

Translation files can be added in future iterations using next-intl or similar.

## 🔒 Privacy & Security

- **No Authentication**: Zero login/signup requirements
- **No Data Collection**: No analytics, no tracking
- **Session-Only**: All data cleared on exit
- **Quick Exit**: One-click escape with history clearing tips
- **Secure by Default**: No cookies, no local storage persistence

## 🛠️ Technology Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Vanilla CSS (no frameworks)
- **Deployment**: Static export ready
- **Browser Support**: Modern browsers (Safari, Chrome, Firefox, Edge)

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

This is a prototype project. For production use, consider:

1. Real data integration (Palunabi API, government databases)
2. Full internationalization implementation
3. Translation API integration
4. PWA features (offline mode)
5. User testing with target audience
6. Security audit
7. Performance optimization

## 📞 Emergency Contacts (Estonia)

- **112** - Police / Ambulance / Fire (24/7)
- **116 006** - Victim Support Hotline (24/7, ET/RU/EN)
- **116 111** - Child Helpline (24/7, phone + online)
- **1247** - Government Information Line

## 🙏 Acknowledgments

- Designed for victims of domestic violence in Estonia
- Based on official Estonian support resources
- Inspired by Palunabi victim support guide
- Built with accessibility and safety as top priorities

---

**⚠️ Important**: This is a prototype. For real emergencies, always call 112.
