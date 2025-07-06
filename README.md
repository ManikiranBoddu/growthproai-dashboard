# 🚀 GrowthProAI - Mini Local Business Dashboard

A modern, full-stack business analytics dashboard that helps small businesses understand their online presence, SEO performance, and customer engagement metrics. Built with React, Node.js, and enhanced with interactive data visualizations.

## ✨ Features

### 🎯 Core Features
- **Responsive Business Dashboard** - Clean, mobile-first design
- **Real-time Analytics** - Simulated Google Business metrics
- **AI-Powered Content Generation** - SEO headlines and marketing copy
- **Interactive Data Visualizations** - Charts and graphs for better insights
- **Multi-tab Navigation** - Overview, Analytics, Content, and Reviews
- **Dark/Light Mode** - Toggle between themes for better user experience

### 📊 Advanced Analytics
- **Visitor Trends** - Weekly visitor pattern analysis
- **Review Sentiment Analysis** - Pie chart breakdown of review sentiment
- **Performance Metrics** - Phone calls, website clicks, and directions
- **Competitor Insights** - Market position and ranking data
- **Peak Hours Analysis** - Identify busy periods for optimization

### 🎨 UI/UX Enhancements
- **Modern Gradient Design** - Beautiful color schemes and animations
- **Interactive Components** - Hover effects and smooth transitions
- **Loading States** - Spinners and skeleton screens
- **Form Validation** - Real-time input validation
- **Responsive Layout** - Works on all device sizes

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **Recharts** - Interactive chart library
- **Lucide React** - Beautiful icon library
- **Vite/Create React App** - Fast build tool

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **JSON** - Data exchange format

### Development Tools
- **npm/yarn** - Package management
- **Git** - Version control
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🚀 Quick Start

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/growthpro-dashboard.git
   cd growthpro-dashboard
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the Backend Server**
   ```bash
   cd ../backend
   npm start
   # Server runs on http://localhost:5000
   ```

5. **Start the Frontend Development Server**
   ```bash
   cd ../frontend
   npm start
   # Frontend runs on http://localhost:3000
   ```

## 📁 Project Structure

```
growthpro-dashboard/
├── 📁 backend/
│   ├── 📄 package.json          # Backend dependencies
│   ├── 📄 server.js             # Express server configuration
│   └── 📄 .gitignore            # Git ignore rules
├── 📁 frontend/
│   ├── 📄 package.json          # Frontend dependencies
│   ├── 📄 tailwind.config.js    # Tailwind configuration
│   ├── 📁 public/
│   │   └── 📄 index.html        # HTML template
│   └── 📁 src/
│       ├── 📄 App.js            # Main application component
│       ├── 📄 index.js          # React entry point
│       ├── 📄 index.css         # Global styles
│       └── 📁 components/
│           ├── 📄 Dashboard.js       # Main dashboard component
│           ├── 📄 BusinessForm.js    # Business information form
│           ├── 📄 BusinessCard.js    # Business metrics display
│           └── 📄 EnhancedDashboard.js # Advanced dashboard with charts
├── 📄 README.md                 # This file
└── 📄 .gitignore               # Git ignore rules
```

## 🔗 API Documentation

### Base URL
```
http://localhost:5000
```

## 🎯 Usage Guide

### Basic Usage

1. **Enter Business Information**
   - Fill in business name, location, and category
   - Click "Analyze My Business"

2. **View Dashboard**
   - Overview tab shows key metrics
   - Analytics tab displays charts and graphs
   - Content tab manages SEO headlines
   - Reviews tab shows customer feedback

3. **Generate Content**
   - Click "Generate New Headline" for fresh SEO content
   - Use different business categories for varied results

### Advanced Features

- **Dark Mode**: Toggle using the moon/sun icon in the header
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Interactive Charts**: Hover over data points for detailed information
- **Real-time Updates**: Data refreshes automatically
