# ALX Listing App Deployed

A modern Airbnb clone built with Next.js, TypeScript, and TailwindCSS. This project creates a scalable foundation for a property listing platform with reusable components and clean architecture.

## Project Goals

The ALX Listing App aims to:

- Create a responsive and user-friendly property listing interface
- Implement modern web development practices with TypeScript
- Build reusable and modular components for scalability
- Establish a clean, maintainable codebase structure
- Provide an excellent user experience for property browsing and booking

## Project Structure

``` text
alx-listing-app/
├── components/           # Reusable UI components
│   └── common/          # Common components used across the app
│       ├── Card.tsx     # Property card component
│       └── Button.tsx   # Reusable button component
├── interfaces/          # TypeScript type definitions
│   └── index.ts        # Main interfaces (CardProps, ButtonProps, etc.)
├── constants/           # Application constants and configuration
│   └── index.ts        # API endpoints, UI constants, validation rules
├── pages/              # Next.js pages (Pages Router)
│   ├── _app.tsx        # App wrapper component
│   └── index.tsx       # Home page
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS imports and global styles
├── public/             # Static assets
│   └── assets/         # Images, icons, and other assets
│       ├── placeholder-image.svg
│       ├── star-icon.svg
│       └── README.md
└── README.md           # Project documentation
```

### Directory Purposes

- **`components/`**: Contains all reusable UI components organized by category. The `common/` subdirectory holds components used throughout the application.

- **`interfaces/`**: TypeScript interface definitions that ensure type safety and code consistency across the project.

- **`constants/`**: Centralized location for application constants, API configurations, and validation rules to maintain consistency.

- **`public/assets/`**: Static assets including images, icons, and other media files organized for easy access and maintenance.

## Tech Stack

- **Next.js 15+**: React framework with Pages Router for server-side rendering and optimal performance
- **TypeScript**: Type-safe JavaScript for better development experience and code reliability
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **ESLint**: Code linting for maintaining code quality and consistency

## Getting Started

### Prerequisites

- Node.js 16+ installed on your local machine
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd alx-listing-app
```

2.Install dependencies:

```bash
npm install
```

3.Run the development server:

```bash
npm run dev
```

4.Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `npm run dev`: Starts the development server with Turbopack
- `npm run build`: Builds the application for production
- `npm start`: Runs the built application in production mode
- `npm run lint`: Runs ESLint to check code quality

## Features

### Current Implementation

- ✅ Modern Next.js setup with TypeScript and TailwindCSS
- ✅ Clean project structure following best practices
- ✅ Reusable Card component for property listings
- ✅ Flexible Button component with multiple variants
- ✅ TypeScript interfaces for type safety
- ✅ Centralized constants and configuration
- ✅ Asset management system

### Upcoming Features

- 🔄 Property listing page with search and filtering
- 🔄 Property detail views
- 🔄 User authentication and profiles
- 🔄 Booking system
- 🔄 Reviews and ratings
- 🔄 Host dashboard

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of the ALX Software Engineering program.

---

**Note**: This project is built as part of the ALX curriculum for learning modern web development practices with Next.js, TypeScript, and TailwindCSS.
