import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  try {
    // Prioritize environment variables first
    const serviceId =
      process.env.REACT_APP_EMAILJS_SERVICE_ID ||
      window.ENV?.EMAILJS_SERVICE_ID;
    const templateId =
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
      window.ENV?.EMAILJS_TEMPLATE_ID;
    const publicKey =
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
      window.ENV?.EMAILJS_PUBLIC_KEY;

    // Debug log — remove in production
    console.log("EmailJS config:", { serviceId, templateId, publicKey });

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing.");
      return false;
    }

    await emailjs.send(serviceId, templateId, formData, publicKey);
    return true;
  } catch (error) {
    console.error("Email send failed:", error?.text || error?.message || error);
    return false;
  }
};
