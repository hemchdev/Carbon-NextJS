# Next.js Carbon Design System - Project Based Learning

A modern web application built with **Next.js 15** and **IBM Carbon Design System**, following the official IBM Carbon tutorial implementation step by step.

## Project Overview

This project demonstrates the integration of IBM's Carbon Design System with Next.js, creating a responsive and accessible web application. The implementation follows the official [Carbon Design System React Tutorial](https://carbondesignsystem.com/tutorial/react/overview) documentation and best practices.

## Implementation Progress

### Step 1: Installing Carbon - COMPLETED
- Next.js 15 project initialization with Create Next App
- Carbon Design System (@carbon/react) installation
- Sass configuration and Carbon styles import
- UI Shell implementation with Header components
- Navigation setup with Next.js routing
- Carbon Button component integration
- Dark theme header (g100) configuration
- Basic project structure and global styles

### Step 2: Building Pages - COMPLETED
- Landing page grid implementation with Carbon Grid system
- Repository page creation with DataTable structure
- Carbon components integration:
  - Breadcrumb navigation
  - Tabs component with multiple panels
  - Grid and Column responsive layout
  - Static DataTable with headers and rows
- SCSS styling with Carbon design tokens
- Responsive design using Carbon breakpoints
- Carbon spacing tokens implementation (`$spacing-05`, etc.)
- Type styling with Carbon typography tokens
- Page navigation and routing between home and repos

### Step 3: Using APIs - COMPLETED
- GitHub API integration with Octokit
- Dynamic data fetching for repository information
- Loading states with DataTableSkeleton
- Pagination implementation
- Error handling and state management

### Step 4: Creating Components - COMPLETED
- Custom InfoSection and InfoCard components
- Carbon pictograms integration
- Responsive component design
- Accessibility considerations

### Step 5: Deploying the Project - COMPLETED
- Production build optimization

## Tech Stack

- **Framework**: Next.js 15.1.3
- **UI Library**: IBM Carbon Design System v11 (@carbon/react)
- **Styling**: SCSS with Carbon Design Tokens
- **Language**: TypeScript/JavaScript
- **Package Manager**: npm
- **Icons**: @carbon/icons-react

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hemchdev/Carbon-NextJS.git
   cd next-carbon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features 

### Implemented Components
- **UI Shell Header**: Complete navigation with Carbon HeaderContainer, HeaderName, HeaderNavigation
- **Landing Page Grid**: Responsive 16-column CSS Grid layout
- **Breadcrumb Navigation**: Accessible breadcrumb with proper ARIA labels
- **Tabs Component**: Multi-panel tabs with About, Design, Develop sections
- **Repository Page**: DataTable structure ready for API integration
- **Responsive Design**: Mobile-first approach with Carbon breakpoints (sm, md, lg)

### Design Implementation
- **Carbon Design Tokens**: Proper spacing (`$spacing-05`, `$spacing-07`), typography (`productive-heading-05`)
- **Theme Integration**: Dark header theme (g100) with light content
- **Grid System**: 16-column CSS Grid with proper responsive behavior
- **Color Palette**: Carbon color tokens (`$layer-01`, `$gray-20`)

## Carbon Design System Integration

This project utilizes:
- **@carbon/react**: Pre-built accessible React components
- **Carbon Design Tokens**: Consistent spacing, colors, and typography
- **Carbon Grid System**: Responsive 16-column CSS Grid
- **Carbon SCSS**: Modular styling with mixins and functions
- **Carbon Icons**: Icon library for UI elements

## Tutorial Progress

Following the official Carbon React Tutorial:
- **Step 1**: Installing Carbon - Project setup, Carbon installation, UI Shell
- **Step 2**: Building pages - Grid implementation, components integration, responsive design
- **Step 3**: Using APIs - GitHub API integration (Next)
- **Step 4**: Creating components - Custom components with pictograms
- **Step 5**: Deploying the project - Production optimization

## Useful Links

- [IBM Carbon Design System](https://carbondesignsystem.com/)
- [Carbon React Tutorial](https://carbondesignsystem.com/tutorial/react/overview)
- [Carbon Components React](https://react.carbondesignsystem.com/)
- [Carbon Design Tokens](https://carbondesignsystem.com/elements/color/tokens)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Note**: This project follows the official [IBM Carbon Design System React Tutorial](https://carbondesignsystem.com/tutorial/react/overview). Each step builds upon the previous implementation, ensuring best practices and design consistency according to IBM's design guidelines.

**Current Status**: Ready to proceed with Step 3 - API integration and dynamic data fetching.
