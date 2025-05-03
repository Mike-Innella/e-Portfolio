import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  try {
    // Use runtime config if available, fall back to environment variables
    const serviceId = window.ENV?.EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = window.ENV?.EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = window.ENV?.EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    
    // Check if required keys are available
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing");
      return false;
    }
    
    await emailjs.send(
      serviceId,
      templateId,
      formData,
      publicKey
    );
    return true;
  } catch (error) {
    console.error("Email send failed", error);
    return false;
  }
};
