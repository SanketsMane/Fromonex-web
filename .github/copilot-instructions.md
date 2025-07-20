# Copilot Instructions for Formonex React Website

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern React website for Formonex, an IT company providing services in software development, web development, digital marketing, data analytics, custom ERP/CRM solutions, cloud integration, and AI automation.

## Tech Stack
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation
- Framer Motion for animations
- Lucide React for icons
- React Hook Form for form handling
- Zod for validation

## Design System
- Use Tailwind CSS utility classes
- Follow the custom color palette defined in tailwind.config.js
- Use Inter font for body text and Poppins for headings
- Implement dark/light mode toggle using the ThemeContext
- Follow responsive design principles (mobile-first)

## Component Guidelines
- Use TypeScript interfaces for props
- Follow functional component pattern with hooks
- Use Framer Motion for page transitions and scroll animations
- Implement accessibility best practices
- Use the custom CSS classes defined in index.css (.btn-primary, .btn-secondary, .card, etc.)

## File Structure
- Components in `/src/components/`
- Pages in `/src/pages/`
- Data/content in `/src/data/`
- Context providers in `/src/context/`
- Custom hooks in `/src/hooks/`
- Static assets in `/public/images/`

## Code Style
- Use meaningful variable and function names
- Follow React best practices
- Implement proper error handling
- Use semantic HTML elements
- Ensure mobile responsiveness
- Optimize for performance

## Theme Implementation
- Use the ThemeContext for dark/light mode
- Apply theme classes using Tailwind's dark: prefix
- Persist theme preference in localStorage
- Ensure proper contrast ratios for accessibility

## Animation Guidelines
- Use Framer Motion for smooth transitions
- Implement scroll-triggered animations with viewport detection
- Keep animations subtle and purposeful
- Ensure animations respect user preferences (prefers-reduced-motion)

## Content Management
- Extract content from original website assets
- Store structured data in TypeScript files in `/src/data/`
- Use the existing company information, services, testimonials, and client data
- Maintain consistency with the original Formonex branding and messaging
