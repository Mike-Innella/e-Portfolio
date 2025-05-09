import { Helmet } from "react-helmet-async";
import ContactForm from "../components/Contact";

const Contact = () => {
  return (
    <div className="page contact">
      <Helmet>
        <title>Contact | Mike Innella - Front-End Developer</title>
        <meta name="description" content="Get in touch with Mike Innella for front-end development opportunities, project inquiries, or collaboration requests." />
      </Helmet>
      <ContactForm />
    </div>
  );
};

export default Contact;
