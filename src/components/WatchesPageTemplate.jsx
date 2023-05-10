import React,{useState,useEffect,useRef} from "react"
import {Link} from "react-router-dom"

export default function WatchesPageTemplate(props){
    const gradientStyle = {
        backgroundImage: props.watchLinearGradient
      }

    /*const text1Ref = useRef();
    const text2Ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }else{
                entry.target.classList.remove("active")
            }
            });
        },
        { threshold: 0.75 } 
        );

        observer.observe(text1Ref.current);
        observer.observe(text2Ref.current)

    
        return () => observer.disconnect();
    }, []);*/

    return(
        <div className="watch-page">
            <div className="watch-page-top">
                <div className="watch-page-top-image">
                    <img src={props.heroImage} alt="" />
                </div>
                <div className="watch-page-top-content">
                    <h1>{props.watchNameHero}</h1>
                    <p>{props.watchMaterialHero}</p>
                    <span>{props.watchPriceHero}</span>
                    <Link to={props.retailerLink}>Contact a Retailer</Link>
                </div>
            </div>
            <div className="watch-page-special" style={gradientStyle}>
                <div className="watch-page-special-content">
                    <h2>{props.watchMotoHeading}</h2>
                    <p>{props.watchMotoText}</p>
                </div>
            </div>
            <div className="watch-page-warranty">
                <div className="watch-page-warranty-content">
                    <h3>5-year warranty</h3>
                    <p>All TimeLux watches are delivered with a 5-year warranty that covers the repair of any material or manufacturing defects. Please refer to the operating instructions for specific information about the warranty conditions and restrictions.</p>
                </div>
                <div className="watch-page-warranty-image">
                    <img src="/warranty-badge.jpg" alt="" />
                </div>
            </div>
            <div className="watch-page-other-models">
                <h4>Other Models</h4>
                <div className="watch-page-watches-container">
                    <div className="watch-container" key={props.watchOneId}>
                        <Link to={props.watchOneLink}>
                            <img src={props.watchOneImage} className="watch-image" alt="" />
                            <p>{props.watchOneName}</p>
                        </Link>
                    </div>
                    <div className="watch-container" key={props.watchTwoId}>
                        <Link to={props.watchTwoLink}>
                            <img src={props.watchTwoImage} className="watch-image" alt="" />
                            <p>{props.watchTwoName}</p>
                        </Link>
                    </div>
                    <div className="watch-container" key={props.watchThreeId}>
                        <Link to={props.watchThreeLink}>
                            <img src={props.watchThreeImage} className="watch-image" alt="" />
                            <p>{props.watchThreeName}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}