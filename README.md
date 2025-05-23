# Mike Innella's e-Portfolio

A professional portfolio website showcasing Mike Innella's projects, skills, and contact information. Features an AI assistant powered by OpenAI's API.

## Features

- Interactive UI with React
- Contact form using EmailJS
- Responsive design for all devices

## Technology Stack

- React
- EmailJS for contact functionality
- GitHub Pages for deployment

## Setup and Installation

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

- Webapp is not for install, demo purposes only.

## Environment Variables

This project requires the following environment variables:

- `REACT_APP_EMAILJS_SERVICE_ID`: EmailJS service ID
- `REACT_APP_EMAILJS_TEMPLATE_ID`: EmailJS template ID
- `REACT_APP_EMAILJS_PUBLIC_KEY`: EmailJS public key

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Update the `homepage` field in `package.json` if needed
2. Run `npm run deploy` to build and deploy

#### Handling Environment Variables with GitHub Pages

Since GitHub Pages is a static hosting service, environment variables aren't processed server-side. For secure deployment:

1. Create a `public/config.js` file based on `public/config.example.js` with your API keys
2. Add this file to `.gitignore` to prevent committing secrets
3. Before deployment, manually upload this file to your server or use GitHub Actions secrets

Example `config.js`:
```javascript
window.ENV = {
  EMAILJS_SERVICE_ID: "your_emailjs_service_id_here",
  EMAILJS_TEMPLATE_ID: "your_emailjs_template_id_here",
  EMAILJS_PUBLIC_KEY: "your_emailjs_public_key_here"
};
```

### Vercel/Netlify Deployment

1. Connect your GitHub repository
2. Configure environment variables in the platform settings
3. Deploy using the platform's CI/CD pipeline

## Security Considerations

- Never commit API keys to version control
- Use environment variables for all sensitive information
- Consider implementing rate limiting for API calls
- The AI assistant has a local fallback system for when API calls fail

## Fallback Mechanism

The application includes a robust fallback system:

- If the EmailJS configuration is missing, the contact form will display an appropriate error message

## Development Notes

- The project uses Create React App
- For local development, the `.env` file is used
- For production, the runtime `config.js` file is used when available
