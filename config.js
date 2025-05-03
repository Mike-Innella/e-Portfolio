// IMPORTANT: This file contains sensitive API keys and should NEVER be committed to version control
// It is already added to .gitignore to prevent accidental commits
// For deployment, you need to manually add this file to your server or use environment variables

window.ENV = {
  // Copy your keys from .env file
  OPENAI_API_KEY: "your_openai_api_key_here",
  EMAILJS_SERVICE_ID: "your_emailjs_service_id_here",
  EMAILJS_TEMPLATE_ID: "your_emailjs_template_id_here",
  EMAILJS_PUBLIC_KEY: "your_emailjs_public_key_here"
};

// SECURITY WARNING: 
// This file exposes your API keys in the client-side code
// For production, consider using a backend proxy or serverless functions
// to make API calls without exposing your keys
