# Firefly Energy - Distributor Intelligence Platform

[![CI](https://github.com/your-username/firefly-energy/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/firefly-energy/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB.svg)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791.svg)](https://www.postgresql.org/)

AI-powered distributor and sales intelligence platform for Firefly Energy's carbon foam battery technology. Manage multi-channel distribution and accelerate market penetration across Marine, RV, Trucking, and Solar markets.

## ⚡ Key Features

- 🤖 **AI-Powered Assistant** - Real-time chat with OpenAI GPT-5 trained on Firefly product data
- 📊 **Smart Analytics** - Interactive dashboards with sales trends and channel breakdowns
- 💰 **Dynamic Pricing** - Automated volume discounts and margin calculations
- 🎯 **Lead Management** - Intelligent prospect tracking with PostgreSQL persistence
- 🗺️ **Territory Mapping** - Visual distributor coverage and expansion planning
- 📈 **ROI Comparisons** - Data-driven battery technology analysis
- 🔄 **Real-time Updates** - Live activity feeds and pipeline status

## 🎯 Goal

Achieve 500+ battery placements monthly through intelligent lead qualification, product recommendations, and distributor support tools.

## ✨ Features

### Core Tools
- **Dashboard** - Real-time KPI metrics, sales charts, and channel breakdown analytics
- **AI Assistant** - OpenAI-powered chatbot for instant product expertise and technical questions
- **Product Finder** - Smart product recommendations based on application requirements
- **Pricing Calculator** - Dynamic pricing with margin and discount tiers

### Analytics & Intelligence
- **ROI Comparison** - Side-by-side battery technology comparison (Firefly MCF vs AGM vs Lithium)
- **Advanced Analysis** - Interactive charts for cycle life, efficiency, and cost-per-cycle analysis
- **Distribution Pipeline** - Kanban-style tracking (Prospecting → Qualified → Negotiation → Closed)
- **Territory Map** - Visual coverage of active distributors and expansion zones
- **Lead Qualification** - Capture and prioritize distributor prospects

### Resources
- **Resources Library** - Training materials, technical docs, sales presentations, and distributor guides
- **Quick Actions Panel** - One-click access to all major platform functions
- **Recent Activity Feed** - Real-time updates on leads, orders, and distributor activities

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript 5.6 + Vite 5
- **Backend**: Express.js + Node.js 20
- **Database**: PostgreSQL (Neon Serverless) with Drizzle ORM
- **UI Components**: shadcn/ui + Radix UI + Tailwind CSS 4
- **Charts**: Recharts for data visualization
- **AI**: OpenAI GPT-5 for intelligent chat assistant
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query v5
- **Deployment**: Replit (with CI/CD via GitHub Actions)

## 📋 Prerequisites

- Node.js 18+ or 20+
- OpenAI API key

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
SESSION_SECRET=your_session_secret_here
DATABASE_URL=your_postgresql_connection_string
```

**Required Environment Variables:**
- `OPENAI_API_KEY` - Your OpenAI API key for AI Assistant functionality (get from [platform.openai.com](https://platform.openai.com/api-keys))
- `SESSION_SECRET` - Secret key for session management (use a random string)
- `DATABASE_URL` - PostgreSQL connection string (auto-provisioned on Replit)

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   └── App.tsx        # Main application component
│   └── index.html
├── server/                # Backend Express server
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Storage interface
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
│   └── schema.ts          # Data models and Zod schemas
└── package.json
```

## 🎨 Design System

- **Primary Color**: Dark with teal accent (#14b8a6 / HSL: 174 72% 56%)
- **Typography**: Inter for UI, JetBrains Mono for code/numbers
- **Theme**: Dark mode by default with light mode support
- **Design Philosophy**: Material Design + Clean Tech Aesthetic

## 🔑 Key Components

### Dashboard (`/`)
- KPI metrics (Monthly Placements, Goal Progress, Revenue, Active Distributors)
- Sales trends chart
- Channel distribution breakdown
- Quick actions panel
- Recent activity feed

### AI Assistant (`/ai-assistant`)
- **Real-time AI Chat** powered by OpenAI GPT-5
- Comprehensive Firefly product knowledge from technical documentation
- **Streaming responses** for natural conversation flow
- Expert guidance on:
  - Battery specifications and performance metrics
  - Pricing calculations and volume discounts
  - Technical comparisons (Firefly MCF vs VRLA AGM vs Lithium)
  - Application-specific recommendations
  - Distributor program details and incentives

### Product Finder (`/product-finder`)
- Application-based battery recommendations
- Technical specifications display
- Key benefits highlighting

### Pricing Calculator (`/pricing`)
- Volume-based discount tiers
- Wholesale pricing (500+ units)
- Margin calculations

### Pipeline (`/pipeline`)
- Distributor prospect tracking
- Territory coverage map
- Lead stage visualization

### Resources (`/resources`)
- Technical documentation
- Training materials
- Sales enablement tools

## 🚢 Deployment

The application is configured for Replit deployment:

1. Ensure all environment variables are set
2. Click "Deploy" in Replit to publish
3. Application will be available at `<your-repl>.replit.app`

## 📊 Target Markets

- **Marine & Offshore** - 40% of distribution
- **RV (Recreational Vehicles)** - 25% of distribution
- **Energy Backup (Solar)** - 25% of distribution
- **Trucking & Commercial Fleet** - 10% of distribution

## 🔐 Security Notes

- Never commit `.env` files or API keys to version control
- Use environment variables for all sensitive data
- Session secrets should be strong and unique

## 📝 Development Guidelines

- Follow the existing component patterns in `client/src/components`
- Use Tailwind CSS utility classes for styling
- Implement proper TypeScript types from `shared/schema.ts`
- Add `data-testid` attributes for interactive elements
- Follow the shadcn/ui component conventions

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Proprietary - Firefly Energy

## 🆘 Support

For questions or issues, contact the Firefly Energy development team.

---

**Built for Firefly Energy's Carbon Foam Battery Technology**
