import React,{useState} from "react"
import {Link} from "react-router-dom"

export default function Footer(){

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

        const handleSubmit = (event) => {
            event.preventDefault();

            const emailInput = event.target.querySelector('input[type="email"]');
            if (emailInput.validity.valid) {
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000);
            }
        };

    return(
        <footer>
            {showSuccessMessage && (
                <div className="form-success-message">Thank you for signing up for our newsletter!</div>
            )}
            <div className="footer-top">
                <h5>Follow us</h5>
                <div className="footer-socials-links">
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-pinterest"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                </div>
            </div>
            <div className="footer-middle">
                <ul>
                    <li>
                        <Link to="/" className="website-logo-link">
                            <img src="/website-logo.jpg" alt="" />
                        </Link>
                        <p>We provide branded watches on great prices. We have the perfect watch to meet your needs.</p>
                        <div className="footer-socials">
                            <div className="footer-social">
                                <ion-icon name="call-outline"></ion-icon>
                                <a href="tel:123456789">(123) -456-789</a>
                            </div>
                            <div className="footer-social">
                                <ion-icon name="mail-outline"></ion-icon>
                                <a href="mailto:timelux@gmail.com?subject=New%20Message">timelux@gmail.com</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h6>Watches</h6>
                        <div className="footer-links">
                            <Link to="/rolex">Rolex</Link>
                            <Link to="/patek">Patek Philippe</Link>
                            <Link to="/omega">Omega</Link>
                        </div>
                    </li>
                    <li>
                        <h6>Working hours</h6>
                        <p>Mon - Fri: 9:00AM - 9:00PM</p>
                        <p>Sat: 9:00AM - 4:00PM</p>
                        <p>Sun: Closed</p>
                    </li>
                    <li>
                        <h6>Subscription</h6>
                        <p>Subscribe your Email address for latest news & updates.</p>
                        <form onSubmit={handleSubmit}>
                            <input type="email" placeholder="Email..." required />
                            <button type="submit">Submit</button>
                        </form>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>by <a href="https://github.com/Qnkisa" target={"_blank"}>Yanislav Angelov</a></p>
            </div>
        </footer>
    )
}