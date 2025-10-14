# Firefly Energy - Distributor Intelligence Platform

## Project Overview

AI-powered distributor and sales intelligence platform for Firefly Energy to manage multi-channel distribution of their MCF carbon foam battery technology across Marine, RV, Trucking, and Solar markets.

**Primary Goal**: Achieve 500+ battery placements monthly through intelligent lead qualification, product recommendations, and distributor support tools.

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter
- **State Management**: TanStack Query (React Query v5)
- **UI Components**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React + React Icons

### Backend
- **Server**: Express.js
- **Runtime**: Node.js 20
- **Storage**: In-memory (MemStorage)
- **AI**: OpenAI API integration
- **Session Management**: express-session

### Development
- **Language**: TypeScript
- **Package Manager**: npm
- **Dev Server**: tsx (TypeScript executor)

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/            # shadcn base components
│   │   │   └── examples/      # Component usage examples
│   │   ├── pages/             # Route pages
│   │   ├── lib/               # Utilities (queryClient, etc.)
│   │   ├── App.tsx            # Main app with routing
│   │   └── main.tsx           # React entry point
│   └── index.html
├── server/
│   ├── index.ts               # Express server entry
│   ├── routes.ts              # API routes
│   ├── storage.ts             # Storage interface & MemStorage
│   └── vite.ts                # Vite integration
├── shared/
│   └── schema.ts              # Shared data models & Zod schemas
├── design_guidelines.md       # Design system documentation
├── README.md                  # Project documentation
├── DEPLOYMENT.md              # Deployment guide
├── CONTRIBUTING.md            # Contribution guidelines
├── CHANGELOG.md               # Version history
└── .env.example               # Environment variables template
```

## Features Implemented

### Dashboard (`/`)
- KPI metrics cards (Monthly Placements, Goal Progress, Revenue, Active Distributors)
- Sales trend line chart (6-month history)
- Channel distribution pie chart (Marine 40%, RV 25%, Energy Backup 25%, Other 10%)
- Quick actions panel (6 action shortcuts)
- Recent activity feed (leads, orders, distributors, quotes)

### AI Assistant (`/ai-assistant`)
- OpenAI-powered chat interface
- Product expertise and technical support
- Context-aware responses
- Message history with user/assistant distinction

### Product Finder (`/product-finder`)
- Application-based recommendations (Marine, RV, Trucking, Solar)
- Technical specifications display
- Key benefits highlighting
- Smart product matching

### Pricing Calculator (`/pricing`)
- Volume-based discount tiers:
  - 1-49 units: 18% discount
  - 50-99 units: 22% discount
  - 100+ units: 25% discount
  - 500+ units: Wholesale pricing
- Real-time calculation
- Margin breakdown
- Drop shipping info for bulk orders

### ROI Comparison (`/roi`)
- Side-by-side comparison: Firefly MCF vs VRLA AGM vs Lithium
- Metrics: Cycle life, efficiency, temperature range, safety, maintenance, cost per cycle
- Visual indicators for advantages
- Total cost of ownership analysis

### Advanced Analysis (`/comparison`)
- Tabbed interface (Cycle Life, Efficiency, Cost Analysis)
- Interactive bar charts
- Cost per cycle comparison
- Detailed technical analysis

### Distribution Pipeline (`/pipeline`)
- Kanban-style pipeline with 4 stages:
  - Prospecting (8 leads)
  - Qualified (5 leads)
  - Negotiation (3 leads)
  - Closed (12 distributors)
- Lead cards with company, location, volume, priority
- Territory coverage map
- Geographic expansion planning (Florida, Texas, California active; Northeast, Midwest, Pacific NW planned)

### Lead Qualification (`/leads`)
- Prospect capture form
- Automated priority assignment (High: 200+ units/mo, Medium: 100-199, Low: <100)
- Segment categorization (Marine, RV, Trucking, Solar)
- Success confirmation with next action

### Resources Library (`/resources`)
- 6 resource categories:
  - Product specification sheets
  - Installation guides
  - Sales presentations
  - Demo videos
  - Distributor onboarding
  - ROI calculator templates
- Downloadable materials
- Category badges and type indicators

### Settings (`/settings`)
- Account information management
- User preferences

## Design System

### Color Palette
- **Primary**: Dark theme with teal accent
- **Accent**: `#14b8a6` (HSL: 174 72% 56%)
- **Background**: Dark mode default
- **Charts**: Multi-color palette (chart-1 through chart-5)

### Typography
- **UI Font**: Inter (400, 500, 600, 700)
- **Mono Font**: JetBrains Mono (500) for numbers and code
- **Headings**: Bold, tracking-tight
- **Body**: Regular weight, readable sizing

### Components
- All components use shadcn/ui patterns
- Consistent spacing and padding
- Dark mode with light mode support
- Responsive design (mobile, tablet, desktop)
- Hover elevate effects using utility classes

## Environment Variables

### Required
```
OPENAI_API_KEY=<your-openai-key>
SESSION_SECRET=<random-secret-string>
```

### Optional
```
NODE_ENV=development|production
PORT=5000
```

## API Routes

All routes are defined in `server/routes.ts`:
- Currently using in-memory storage (MemStorage)
- Ready for database integration when needed
- RESTful design pattern

## Navigation Structure

### Sidebar Organization
1. **Tools Section**
   - Dashboard
   - AI Assistant
   - Product Finder
   - Pricing Calculator

2. **Analytics Section**
   - ROI Comparison
   - Advanced Analysis
   - Pipeline
   - Lead Qualification

3. **Library Section**
   - Resources

4. **Footer**
   - Settings

## Key User Flows

1. **Lead Capture**: Leads → Fill form → Auto-prioritization → Pipeline
2. **Product Recommendation**: Product Finder → Select application → Get recommendation
3. **Pricing Quote**: Pricing Calculator → Enter quantity → View discounts & margins
4. **Competitive Analysis**: ROI or Comparison → View charts → Share insights
5. **Resource Access**: Resources → Browse library → Download materials

## Development Commands

```bash
# Install dependencies
npm install

# Run dev server (starts on port 5000)
npm run dev

# Type checking
npm run typecheck

# Build for production
npm run build

# Start production server
npm start
```

## Recent Changes

### Latest Updates (v1.0.0)
- Added Quick Actions panel to dashboard
- Created Recent Activity feed
- Implemented Advanced Comparison with tabbed charts
- Built Distribution Pipeline with Kanban view
- Added Territory Map for coverage tracking
- Created Resources Library
- Organized sidebar into Tools/Analytics/Library sections
- Enhanced all components with proper data-testid attributes
- Improved dark mode consistency
- Added comprehensive repository documentation (README, DEPLOYMENT, CONTRIBUTING, CHANGELOG)

## Known Limitations & Future Enhancements

### Current Limitations
- In-memory storage (data resets on server restart)
- Demo AI responses (not fully integrated with OpenAI yet)
- No user authentication
- No database persistence

### Planned Features
- PostgreSQL database integration
- Real OpenAI integration for AI Assistant
- User authentication & authorization
- Email notifications for leads
- Advanced analytics and reporting
- Export functionality
- Multi-user collaboration
- CRM integration
- Mobile app version

## Git Repository

- Repository is connected and pushed
- Comprehensive .gitignore in place
- Documentation files added:
  - README.md
  - DEPLOYMENT.md
  - CONTRIBUTING.md
  - CHANGELOG.md
  - .env.example

## Notes for Developers

1. **Styling**: Always use Tailwind utilities, follow design_guidelines.md
2. **Components**: Prefer shadcn/ui components over custom implementations
3. **Types**: Define all data models in shared/schema.ts
4. **Testing**: Add data-testid to all interactive elements
5. **Dark Mode**: Always include dark mode variants
6. **Storage**: Update IStorage interface when adding new data operations

## Deployment

Platform is ready for deployment on:
- Replit (primary)
- Vercel
- Railway
- Docker

See DEPLOYMENT.md for detailed instructions.
