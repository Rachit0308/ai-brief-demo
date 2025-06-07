# AI Project Brief Demo

A proof of concept application that demonstrates an AI-powered project brief generation and team matching system.

## Features

- Interactive AI chat interface for project intake
- Automated project brief generation
- Team member matching based on project requirements
- Modern, responsive UI built with Material UI
- Real-time chat streaming simulation

## Tech Stack

- React with TypeScript
- Material UI for components
- React Router for navigation
- React Query for data management
- Zustand for state management

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-brief-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── theme.ts       # Material UI theme configuration
  ├── routes.tsx     # Application routes
  └── App.tsx        # Root component
```

## Demo Flow

1. **Chat Interface** (`/`)
   - Interact with the AI assistant
   - Answer questions about your project
   - Upload relevant documents

2. **Brief Preview** (`/brief`)
   - Review generated project brief
   - Edit and customize details
   - Approve the brief

3. **Team Matching** (`/team`)
   - View suggested team members
   - Review match scores and skills
   - Confirm team selection

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper type definitions
- Follow Material UI component patterns

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
