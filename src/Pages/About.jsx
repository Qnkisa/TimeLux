import React,{useState,useRef,useEffect} from "react"

export default function About(){
    const text1Ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
            });
        },
        { threshold: 0.5 } 
        );

        observer.observe(text1Ref.current);

    
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page-container">
            <div className="about-page-top">
                <div className="about-page-top-helper"></div>
            </div>
            <div className="about-page-hero">
                <div className="about-page-hero-image">
                    <img src="/about-retailers.jpg" alt="" />
                </div>
                <div className="about-page-hero-content">
                    <h1>About TimeLux - Your Destination for High-End Luxury Watches</h1>
                    <h2>At TimeLux, we pride ourselves on being more than just another luxury watch retailer. We are passionate about helping our customers find the perfect timepiece to match their style and personality, and providing exceptional customer service every step of the way.</h2>
                </div>
            </div>
            <div className="about-page-bottom">
                <div className="about-page-bottom-div">
                    <div className="about-page-bottom-div-content about-page-bottom-div-content-1">
                        <div className="about-page-bottom-div-content-1-helper"></div>
                        <p ref={text1Ref}>We prioritize sustainability in our watches by using eco-friendly materials, working with like-minded suppliers, and minimizing waste in production.</p>
                    </div>
                </div>
                <div className="about-page-bottom-div">
                    <div className="about-page-bottom-div-content">
                        <p>Our Partners</p>
                    </div>
                    <div className="about-page-bottom-img">
                        <div className="about-page-bottom-img-div">
                            <a href="https://www.omegawatches.com/" target={"_blank"}>
                                <img src="/omega-logo-about.png" alt="" />
                            </a>
                        </div>
                        <div className="about-page-bottom-img-div">
                            <a href="https://www.patek.com/en/home" target={"_blank"}>
                                <img src="/patek-logo-about.png" alt="" />
                            </a>
                        </div>
                        <div className="about-page-bottom-img-div">
                            <a href="https://www.rolex.com/" target={"_blank"}>
                                <img src="/rolex-logo-about.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}