import Navbar from "../Utility/Navbar/Navbar";
import PageHeader from "../Utility/Modules/PageHeader";
import { contactPageHeader } from "./contactData";
import "./contact.css";
import ContactForm from "./ContactForm";
import FAQs from "./FAQs";

function Contact() {
  return (
    <div className="page">
      <Navbar />
      <PageHeader
        h1={contactPageHeader.h1}
        p={contactPageHeader.p}
        display={contactPageHeader.display}
      />
      <ContactForm />
      <FAQs />

    </div>
  );
}

export default Contact;
