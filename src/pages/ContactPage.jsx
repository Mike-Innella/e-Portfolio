import { Helmet } from "react-helmet-async";
import ContactForm from "../components/Contact";
import FloatingIcons from "../UI/Animations/FloatingIcons";

const Contact = () => {
  return (
    <div className="page contact" style={{ position: "relative", zIndex: 2 }}>
      <Helmet>
        <title>Contact | Mike Innella - Front-End Developer</title>
        <meta
          name="description"
          content="Get in touch with Mike Innella for front-end development opportunities, project inquiries, or collaboration requests."
        />
      </Helmet>

      <FloatingIcons />
      <ContactForm />
    </div>
  );
};

export default Contact;
