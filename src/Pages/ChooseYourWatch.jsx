import React,{useState,useEffect,useRef} from "react"
import {Link} from "react-router-dom"
import "intersection-observer"

export default function ChooseYourWatch(){
    const thing1Ref = useRef();
    const thing3Ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }else{
                entry.target.classList.remove("active");
            }
            });
        },
        { threshold: 0.5 } 
        );

        observer.observe(thing1Ref.current);
        observer.observe(thing3Ref.current);
    
        return () => observer.disconnect();
    }, []);



    return (
        <div className="blog-page-container">
            <div className="blog-headings">
                <h1>3 tips for choosing the perfect luxury watch for your style</h1>
                <h2>Luxury watches add elegance to outfits; picking the perfect one is difficult.</h2>
            </div>
            <div className="blog-page-div blog-page-div-small" ref={thing1Ref}>
                <p>Identify Your Style</p>
                <div className="blog-page-div-helper">
                    <div className="blog-page-div-image">
                        <img src="/blog-1-image-1.webp" alt="" />
                    </div>
                    <div className="blog-page-div-content">
                        <p>Before you start shopping for a luxury watch, it's essential to identify your style. Are you more inclined towards classic, traditional styles or do you prefer more modern and trendy designs? Consider your wardrobe and the occasions you're likely to wear the watch to, and think about the colors and materials that best complement your style.</p>
                    </div>
                </div>
            </div>
            <div className="blog-page-div blog-page-bg-div">
                <div className="blog-page-bg-div-helper"></div>
                <p>Research Different Brands</p>
                <div className="blog-page-bg-div-content">
                    <p>There are many luxury watch brands on the market, and each offers unique features and designs. Research different brands and their collections to find a watch that fits your style and budget. Some popular luxury watch brands include Rolex, Patek Philippe and Omega</p>
                    <div className="blog-page-anchor">
                        <Link to="/#home-bottom-brands">View Our Offers</Link>
                    </div>
                </div>
            </div>
            <div className="blog-page-div blog-page-div-small" ref={thing3Ref}>
                <p>Consider The Resale Value</p>
                <div className="blog-page-div-helper">
                    <div className="blog-page-div-content">
                        <p>Luxury watches can hold their value well, so it's important to consider the resale value of the watch you're considering. Look for watches that have a strong resale value, especially if you're planning on selling or trading it in the future.</p>
                    </div>
                    <div className="blog-page-div-image">
                        <img src="/blog-1-image-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}