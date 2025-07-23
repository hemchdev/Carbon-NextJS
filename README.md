# Carbon Next.js Application

A modern web application built with Next.js and IBM Carbon Design System, following the official IBM Carbon Design documentation tutorial.

## 🚀 Overview

This project demonstrates the integration of IBM's Carbon Design System with Next.js, creating a professional and accessible web application. The implementation follows the step-by-step tutorial from the official IBM Carbon Design documentation.

## 📋 Project Status

### ✅ Completed Steps
- **Step 1**: Project setup and Carbon Design System integration
  - Next.js application scaffolding
  - Carbon React components installation
  - SCSS/Sass configuration
  - Basic header component implementation

### 🔄 In Progress
- **Step 2-5**: Advanced component implementation and page development

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.3
- **UI Library**: IBM Carbon Design System (@carbon/react 1.33.0)
- **Icons**: @carbon/icons-react 11.63.0
- **Styling**: Sass 1.63.6
- **React**: 19.1.0

## 📁 Project Structure

```
next-carbon/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Content.jsx
│       │   └── Header/
│       │       ├── page.jsx
│       │       └── _carbon-header.scss
│       ├── home/
│       │   ├── page.jsx
│       │   └── _landing-page.scss
│       ├── repos/
│       │   ├── page.jsx
│       │   └── _repo-page.scss
│       ├── layout.js
│       ├── page.js
│       ├── providers.js
│       └── globals.scss
├── public/
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hemchdev/Carbon-NextJS.git
cd next-carbon
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🎨 Features

### Current Implementation
- **Responsive Header**: Carbon Design System header with navigation
- **Component Architecture**: Modular component structure
- **SCSS Integration**: Custom styling with Carbon tokens
- **Icon Integration**: Carbon icon library implementation

### Planned Features (Steps 2-5)
- Landing page with Carbon components
- Repository listing page
- Data tables and interactive components
- Advanced navigation and routing
- Responsive design patterns

## 📚 Carbon Design System Integration

This project follows the official IBM Carbon Design System tutorial, implementing:

- Carbon React components
- Carbon design tokens and theming
- Carbon icons and iconography
- Accessibility best practices
- Responsive design patterns

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📖 Documentation References

- [IBM Carbon Design System](https://carbondesignsystem.com/)
- [Carbon React Components](https://react.carbondesignsystem.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Carbon Design System Tutorial](https://carbondesignsystem.com/tutorial/react/overview)

## 🤝 Contributing

This project follows the IBM Carbon Design System tutorial structure. Contributions should align with Carbon Design principles and Next.js best practices.

## 📄 License

This project is private and follows the tutorial implementation guidelines from IBM Carbon Design System.

## 🔗 Useful Links

- [Carbon Design System](https://carbondesignsystem.com/)
- [Carbon Components React](https://github.com/carbon-design-system/carbon)
- [Next.js](https://nextjs.org/)
- [IBM Design Language](https://www.ibm.com/design/language/)
