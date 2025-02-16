import "./components.css";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); 
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Your inquiry has been sent successfully!");
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Failed to send the inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact">
      <div className="contact-area">
        <div className="contact-container">
          <h1 className="header-form">Contact Me</h1>
          <div className="contact-me">
            <p>
              Have a project in mind? Let’s connect music with your vision.
              Contact me for inquiries with your specific production needs.
            </p>
          </div>
        </div>
        <div className="form-box">
          <form className="form-content" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
            <button className="submit-button" type="submit" disabled={isSubmitted}>
              {isSubmitted ? "Submitted" : "Submit"}
            </button>
          </form>
        </div>
      </div>
      {status && (
        <div className="submit-container">
          <p className={isSubmitted ? "success-message" : "error-message"}>{status}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
