export const validateForm = ({ name, email, message }) =>
  name && email && message && email.includes('@');
