import React, { useState } from "react";

export default function Contact() {
  
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message:""
    });
  
    const [formError, setFormError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.message
      ) {
        if (validateEmail(formData.email)) {
          console.log(formData);
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 4000);
          setFormError(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
          });
        } else {
          setFormError(true);
          setTimeout(() => {
            setFormError(false);
          }, 4000);
        }
      } else {
        setFormError(true);
        setTimeout(() => {
          setFormError(false);
        }, 4000);
      }
    };
  
    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

  return (
    <div className="contact-container">
        <div className="contact-container-top">
          <h1>Contact Us</h1>
        </div>
        {formError && (
            <div className="contact-form-error">Please enter a valid message.</div>
        )}
        {showSuccessMessage && (
            <div className="contact-form-success">Thank you for your submission. We will get back to you soon!</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="contact-container-div">
            <input
              type="text"
              placeholder="First Name..."
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Last Name..."
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea name="message" value={formData.message} placeholder="Message..." onChange={handleInputChange} cols="30" rows="10"></textarea>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}