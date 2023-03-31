import React,{useState,useEffect,useRef} from "react"
import {Link} from "react-router-dom"
import "intersection-observer"

export default function WatchCare(){
    const thing1Ref = useRef();
    const thing2Ref = useRef();

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
        observer.observe(thing2Ref.current);
    
        return () => observer.disconnect();
    }, []);

    return (
        <div className="blog-page-container">
            <div className="blog-headings">
                <h1>The Ultimate Guide to Watch Care and Maintenance</h1>
                <h2>The importance of regular care</h2>
            </div>
            <div className="blog-page-div blog-page-div-small" ref={thing1Ref}>
                <p>Regular Servicing</p>
                <div className="blog-page-div-helper">
                    <div className="blog-page-div-image">
                        <img src="/watchmaker-watch.jpg" alt="" />
                    </div>
                    <div className="blog-page-div-content">
                        <p>Before you start shopping for a luxury watch, it's essential to identify your style. Are you more inclined towards classic, traditional styles or do you prefer more modern and trendy designs? Consider your wardrobe and the occasions you're likely to wear the watch to, and think about the colors and materials that best complement your style.</p>
                    </div>
                </div>
            </div>
            <div className="blog-page-div blog-page-bg-div blog-page-bg-3-div">
                <p>Cleaning your watch</p>
            </div>
            <div className="blog-page-div blog-page-bg-div blog-page-bg-2-div">
                <div className="blog-page-bg-div-helper"></div>
                <div className="blog-page-bg-div-content">
                    <p>Cleaning your luxury watch regularly is essential to prevent dirt, dust, and grime from accumulating on the watch's surface. You can use a soft, lint-free cloth to clean the watch. Avoid using water or soap to clean your luxury watch, as it can damage the watch's internal components.</p>
                </div>
            </div>
            <div className="blog-page-div blog-page-div-small" ref={thing2Ref}>
                <p>Avoid Exposure to Extreme Temperatures</p>
                <div className="blog-page-div-helper">
                    <div className="blog-page-div-content">
                        <p>Luxury watches are sensitive to extreme temperatures, and exposure to heat or cold can damage the watch's internal components. Avoid leaving your watch in direct sunlight or extreme cold weather.</p>
                    </div>
                    <div className="blog-page-div-image">
                        <img src="/blog-2-image-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}