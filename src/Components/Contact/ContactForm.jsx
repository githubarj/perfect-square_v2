import { contactInfo } from "./contactData";
import "./contact.css";
import ContactInfo from "../Utility/Modules/ContactInfo";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


function ContactForm() {
  const contactDetails = contactInfo.map((item) => {
    return <ContactInfo key={item.id} {...item} />;
  }); 

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_y9j6qq2",
          "template_674cekj",
          form.current,
          "yeT6mDoMNVA7sdQmZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset()
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return (
    <div className="contact-form-container">
      <div className="contact-form-main">
        <div className="contact-form-content">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form-section"
          >
            <div className="form-row">
              <div className="form-column">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first_name" required />
              </div>

              <div className="form-column">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last_name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-column">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-column">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
            </div>
            <div className="form-column">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-footer">
              <div className="form-footer-terms">
                <input type="checkbox" name="terms" required />
                <label className="footer-label">
                  I agree with the terms of usage and privacy policy.
                </label>
              </div>
              <button type="submit" value= "Send" >Submit</button>
            </div>
          </form>
        </div>
        <div className="contact-form-box">
          <img src="/images/Box.png" alt="" />
        </div>
      </div>
      <div className="contact-form-info">{contactDetails}</div>
    </div>
  );
}

export default ContactForm;
