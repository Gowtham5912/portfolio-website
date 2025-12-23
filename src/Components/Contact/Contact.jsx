import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Web3Forms access key
    formData.append("access_key", "63c37a23-6234-4f79-84d5-4f4493763d0c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      // Show success or error message
      alert(res.message);

      // ✅ Clear input fields after successful submit
      if (res.success) {
        form.reset();
      }

    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send
            me a message about anything you want me to work on. You can contact
            anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>gowthamdvgowda2026@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="phone" />
              <p>+91 7892012242</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
