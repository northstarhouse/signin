# Check-In Dashboard Application

## Overview

This is a full-stack TypeScript application built for managing volunteer check-ins, guest registration, and employee time tracking at an organization. The application features a mobile-first React frontend with a Node.js/Express backend, using PostgreSQL for data storage and Google Sheets for data export/viewing.

## User Preferences

Preferred communication style: Simple, everyday language.
Organization name: North Star House

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Build Tool**: esbuild for server bundling

### Mobile-First Design
The application is designed as a mobile-first web app with a maximum width constraint, simulating a mobile app experience within a desktop browser.

## Key Components

### Database Schema (shared/schema.ts)
- **Volunteers**: User profiles with check-in status tracking and photo upload capability
- **Volunteer Logs**: Time tracking for volunteer activities
- **Guests**: Visitor registration with newsletter opt-in
- **Employees**: Staff profiles for time tracking
- **Employee Logs**: Clock-in/out records for employees

### API Routes (server/routes.ts)
- Volunteer management (CRUD, check-in/out, delete with confirmation)
- Guest registration and daily tracking
- Employee time clock functionality
- Dashboard statistics aggregation

### Frontend Pages
- **Home**: Dashboard with navigation to all features
- **Volunteer Check-in**: Interface for volunteer time tracking with photo display and management
- **Guest Registration**: Form for visitor registration
- **Employee Clock**: Time tracking for staff
- **Data Access**: Links to Google Sheets exports

### New Features Added
- **Photo Upload**: Volunteers can have profile photos uploaded via camera or file selection
- **Volunteer Management**: Add new volunteers with photos, delete volunteers with confirmation dialog
- **Enhanced UI**: Vibrant color scheme (blues, greens, purples) replacing neutral colors
- **Visual Indicators**: Photo avatars with check-in status rings, fallback to initials

### External Integrations
- **Google Sheets API**: Automated data export and viewing
- **Neon Database**: Serverless PostgreSQL hosting

## Data Flow

1. **User Interaction**: Mobile-optimized interface captures user input
2. **Client Validation**: Form validation using React Hook Form + Zod
3. **API Communication**: React Query manages server state and caching
4. **Server Processing**: Express routes handle business logic
5. **Database Operations**: Drizzle ORM provides type-safe database access
6. **Google Sheets Sync**: Background service exports data for external viewing

## External Dependencies

### Core Technologies
- React ecosystem (React, React DOM, React Query)
- Node.js runtime with Express framework
- PostgreSQL database with Drizzle ORM
- TypeScript for type safety across the stack

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography

### Development Tools
- Vite for frontend development and building
- tsx for TypeScript execution in development
- esbuild for optimized server bundling

### External Services
- Neon Database for managed PostgreSQL
- Google Sheets API for data visualization
- Replit platform integration

## Deployment Strategy

### Development Environment
- Frontend: Vite dev server with HMR
- Backend: tsx with auto-reload
- Database: Development connection to Neon

### Production Build
- Frontend: Vite production build to `dist/public`
- Backend: esbuild bundle to `dist/index.js`
- Static assets served by Express in production

### Environment Configuration
- Database URL for PostgreSQL connection
- Google Sheets API credentials
- Production/development environment detection

### Key Design Decisions

1. **Mobile-First Approach**: Constrained max-width design prioritizes mobile user experience
2. **Type Safety**: Full TypeScript coverage with shared schema between frontend and backend
3. **Modern Stack**: Latest React patterns with server state management via React Query
4. **Database Choice**: PostgreSQL with Drizzle ORM for type-safe database operations
5. **External Data Access**: Google Sheets integration for non-technical users to view data
6. **Component Library**: shadcn/ui for consistent, accessible component design
7. **Build Optimization**: Separate optimization strategies for frontend (Vite) and backend (esbuild)

The architecture prioritizes developer experience through type safety and modern tooling while maintaining a simple, focused user interface for the target mobile use case.