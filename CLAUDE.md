# TypeScript Barrel Files Code Lab

## Project Overview
This is a guided code lab teaching learners how to structure TypeScript applications using barrel files and module re-exports. The lab demonstrates refactoring complex import paths into clean, maintainable code structure.

## Learning Objectives
1. Create index files to group and export TypeScript modules
2. Re-export constants, classes, and functions for simplified access  
3. Organize project structure using barrel patterns for scalability

## Project Structure
```
src/
├── components/           # UI components (messy imports initially)
├── services/            # API and business logic services
├── utils/              # Utility functions and constants
├── types/              # TypeScript type definitions
├── config/             # Configuration files
└── main.ts             # Application entry point
```

## Branch Structure
- `step-1`: Initial messy project with complex import paths
- `step-2`: Introduction to basic barrel files (utils/index.ts)
- `step-3`: Expanding barrel pattern to services and types
- `step-4`: Complete barrel implementation with nested exports
- `solution`: Final clean implementation with all barrel files

## Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Type checking
npm run typecheck

# Linting
npm run lint

# Build
npm run build
```

## Testing Strategy
Using Vitest to validate:
- Import path complexity reduction
- Proper barrel file exports
- Maintained functionality across refactors
- TypeScript compilation success

## Key Concepts Demonstrated
- Index file creation and management
- Module re-exports (`export * from`, `export { ... } from`)
- Nested barrel patterns
- Import path optimization
- Project scalability through organized exports