import React,{useState} from "react";
import { useParams } from "react-router-dom";
import WatchesData from "../data/WatchesData";

function ContactARetailer() {
  const { watchId } = useParams();
  const watch = WatchesData.find((watch) => watch.id === parseInt(watchId));

  if (!watch) {
    return <div>Watch not found</div>;
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    requestPurpose:"",
    newsletter:false
  });

  const [formError, setFormError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.country &&
      formData.requestPurpose
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
          country: "",
          requestPurpose: "",
          newsletter: false
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
      <div className="contact-container-top contact-a-botique-container-top">
        <h1>Contact A Retailer</h1>
      </div>
      {formError && (
        <div className="contact-form-error">Please enter a valid message.</div>
      )}
      {showSuccessMessage && (
        <div className="contact-form-success">Thank you for your submission. We will get back to you soon!</div>
      )}
      <div className="contact-botique-helper">
        <form onSubmit={handleSubmit}>
            <div className="contact-container-div">
              <input type="text" name="firstName" placeholder="First Name..." value={formData.firstName} onChange={handleInputChange}/>
              <input type="text" name="lastName" placeholder="Last Name..." value={formData.lastName} onChange={handleInputChange}/>
            </div>
            <input type="email" name="email" placeholder="Email..." value={formData.email} onChange={handleInputChange}/>
            <input type="text" name="country" placeholder="Country..."  value={formData.country} onChange={handleInputChange}/>
            <select name="requestPurpose"  value={formData.requestPurpose} onChange={handleInputChange}>
              <option value="">-- Purpose of the request --</option>
              <option value="Product Availability">Product Availability</option>
              <option value="Product Information">Product Information</option>
              <option value="Product Other">Other</option>
            </select>
            <div className="newsletter-agreement">
              <label htmlFor="newsletter-sign-up" className="checkbox-container">I agree that TimeLux sends me its newsletter via email and consent that TimeLux processes my personal data for this purpose.
                <input type="checkbox" name="newsletter-sign-up" id="newsletter-sign-up"  value={formData.newsletter} onChange={handleInputChange}/>
                <span className="checkmark"></span>
              </label>
            </div>
          <button type="submit">Submit</button>
        </form>
        <div className="watch-container-contact">
          <img src={watch.image} alt={watch.name} />
          <h2>{watch.name}</h2>
          <p>Price: {watch.price}</p>
          <p>Material: {watch.material}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactARetailer;