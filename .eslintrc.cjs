//module.exports = {
 // root: true,
 // env: { browser: true, es2020: true },
  //extends: [
   // 'eslint:recommended',
   // 'plugin:react/recommended',
   // 'plugin:react/jsx-runtime',
   // 'plugin:react-hooks/recommended',
  //],
  //ignorePatterns: ['dist', '.eslintrc.cjs'],
  //parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  //settings: { react: { version: '18.2' } },
  //plugins: ['react-refresh'],
  //rules: {
   // 'react-refresh/only-export-components': [
     // 'warn',
      //{ allowConstantExport: true },
   // ],
 // },
//}


// Import necessary hooks and components
import { useState, useEffect } from 'react';
import { BsInstagram, BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';

// Import contact details and PDF file
import contactDetails from '../utils/contactDetails';
import pdf from './src/assets/maxwell-cv';

// Define the Contact component responsible for the contact form and details
function Contact() {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Initialize state to track form submission status
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form field changes
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Log form data to the console
    console.log('Form data:', formData);

    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Set form submission status to true
    setFormSubmitted(true);
  };

  // Use the useEffect hook to automatically clear the success message after 2 seconds
  useEffect(() => {
    if (formSubmitted) {
      const timeout = setTimeout(() => {
        setFormSubmitted(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [formSubmitted]);

  // Render the contact form, success message, and contact details
  return (
    <section id="about" className="container py-5">
      <div className="container row gap-4 ">
        <div className="pt-2 ">
          <h2 className="display-5 fw-bold text-center text-lg-start">
            Get in touch
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {formSubmitted ? (
          <div className="alert alert-success mt-3" role="alert">
            Your message has been submitted successfully!
          </div>
        ) : (
          <div className="py-5" />
        )}
        <div className="row">
          {contactDetails.map((contact, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <a
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="link-secondary text-decoration-none scale d-block icon-scale"
              >
                {contact.platform === 'Instagram' && <BsInstagram />}
                {contact.platform === 'LinkedIn' && <BsLinkedin />}
                {contact.platform === 'GitHub' && <BsGithub />}
                {contact.platform === 'Email' && <BsEnvelope />}
                <span className="ms-2">
                  {contact.platform}
                  {contact.platform === 'Email' && (
                    <span>: {contact.link.slice(7)}</span>
                  )}
                </span>
              </a>
            </div>
          ))}{' '}
        </div>
        <div className="pt-3">
          <p>
            Click the link below to download the PDF:{' '}
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;