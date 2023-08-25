import Navbar from "../Utility/Navbar/Navbar";
import Footer from "../Utility/Footer/Footer";
import PageHeader from "../Utility/Modules/PageHeader";
import { contactPageHeader } from "./contactData";
import "./contact.css";
import ContactForm from "./ContactForm";

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

      <Footer />
    </div>
  );
}

export default Contact;
