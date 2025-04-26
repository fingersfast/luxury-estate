# LuxuryEstate Developer Guide

This document provides technical information for developers working on the LuxuryEstate project.

## Environment Setup

1. **Node.js**: Version 18+ recommended
2. **Recommended IDE**: VS Code with the following extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - PostCSS Language Support

## Development Workflow

### Running the App

```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Styling Guidelines

- We use Tailwind CSS for styling
- Custom variables are defined in `src/app/globals.css`
- Follow the existing component patterns for consistency
- Use responsive design for all components

### Component Architecture

The project follows a modular component approach:

1. **UI Components**: Reusable, stateless components
2. **Layout Components**: Page structure components like headers and footers
3. **Feature Components**: Domain-specific components
4. **Page Components**: Components that represent entire pages

### State Management

For this project, we primarily use:

- React's built-in state management (useState, useReducer)
- Context API for global state when necessary

### API Implementation (TODO)

When connecting to a backend:

- Create API services in `src/lib/api`
- Use React Query for data fetching and caching
- Implement proper error handling and loading states

### Adding New Features

To add a new feature:

1. Create necessary components in appropriate directories
2. Update or create new page components as needed
3. Add any required API integration
4. Update tests to cover new functionality

### Performance Optimization

- Use Next.js Image component for optimized images
- Implement proper code-splitting with dynamic imports
- Lazy load non-critical components
- Utilize React.memo for expensive components
- Set appropriate caching headers for static assets

### Accessibility Guidelines

- All interactive elements must be keyboard accessible
- Use semantic HTML elements
- Include proper ARIA attributes where needed
- Maintain sufficient color contrast (minimum 4.5:1)
- Add alt text to all images

## Deployment

The application is deployed on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with `vercel --prod`

## Future Enhancements

- Implement property search functionality
- Add user authentication
- Create property detail pages
- Add booking system integration
- Implement property comparison tool
