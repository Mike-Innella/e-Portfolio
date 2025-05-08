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
        message: (
          <>
            <div className="modal__error--content">
              <i class="fa-solid fa-triangle-exclamation warning-icon"></i>
              <span>Please fill out all fields with valid information.</span>
              <i class="fa-solid fa-triangle-exclamation warning-icon"></i>
            </div>
          </>
        ),
      });
      return;
    }

    setIsSubmitting(true);

    // Step 1: Show loading modal
    setModal({
      visible: true,
      type: "loading",
      message: (
        <>
          <span>Please wait...</span>
        </>
      ),
    });

    // Step 2: Wait 2800ms before actually sending
    setTimeout(async () => {
      try {
        const success = await sendEmail(formData);

        if (success) {
          // Step 3: Show success modal
          setModal({
            visible: true,
            type: "success",
            message: <>"Message sent! I'll get back to you soon."</>,
          });

          setFormData({ user_name: "", user_email: "", message: "" });

          // Step 4: Wait 4800ms before closing modal
          setTimeout(() => {
            setModal({ visible: false, type: "", message: "" });
            setIsSubmitting(false);
          }, 4800);
        } else {
          setModal({
            visible: true,
            type: "error",
            message: "Failed to send message. Please try again later.",
          });
          setIsSubmitting(false);
        }
      } catch (error) {
        setModal({
          visible: true,
          type: "error",
          message: "An error occurred. Please try again later.",
        });
        setIsSubmitting(false);
      }
    }, 2800);
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
          // Step 5: Show the form after loading
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
