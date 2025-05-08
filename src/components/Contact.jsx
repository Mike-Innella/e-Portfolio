import React, { useState, useEffect } from "react";
import { sendEmail } from "../services/emailService";
import { validateForm } from "../utils/validateForm";
import ContactSkeleton from "../UI/Skeleton-Loaders/ContactSkeleton";
import Modal from "../UI/Contact-Form/modal";
import "../styles/components/ContactModal/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState({
    visible: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      setModal({
        visible: true,
        type: "error",
        message: "Please fill out all fields with valid information.",
      });
      return;
    }

    setIsSubmitting(true);
    setModal({
      visible: true,
      type: "loading",
      message: "Sending your message...",
    });

    try {
      const success = await sendEmail(formData);

      if (success) {
        setModal({
          visible: true,
          type: "success",
          message: "Message sent! I'll get back to you soon.",
        });
        setFormData({ user_name: "", user_email: "", message: "" });
      } else {
        setModal({
          visible: true,
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setModal({
        visible: true,
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setModal((prev) => ({ ...prev, visible: false }));
      }, 3000);
    }
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, visible: false }));
  };

  return (
    <section id="contact" className="contact" aria-busy={isLoading}>
      <div className="contact__container">
        <h2 className="contact__heading">Contact Me</h2>

        {isLoading ? (
          <ContactSkeleton />
        ) : (
          <>
            <form className="contact__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Name"
                className="contact__input"
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Email"
                className="contact__input"
                disabled={isSubmitting}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="contact__textarea"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="contact__button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>

      {/* 🔹 Modal for all status types */}
      {modal.visible && (
        <Modal type={modal.type} message={modal.message} onClose={closeModal} />
      )}
    </section>
  );
};

export default Contact;
