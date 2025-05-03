// src/utils/validateForm.js

export const validateForm = ({ user_name, user_email, message }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    user_name.trim() !== "" &&
    message.trim() !== "" &&
    emailRegex.test(user_email)
  );
};
