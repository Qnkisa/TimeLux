import React,{useState,useEffect,useRef} from 'react'
import WatchesData from '../data/WatchesData'
import {Link} from "react-router-dom"

export default function Omega(){
    const rolexWatches = WatchesData.filter(watch => watch.brand === "Omega");

    const thing1Ref = useRef();
    const thing2Ref = useRef();
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
        { threshold: 0.25 } 
        );

        observer.observe(thing1Ref.current);
        observer.observe(thing2Ref.current);
        observer.observe(thing3Ref.current);

    
        return () => observer.disconnect();
    }, []);

    return (
        <div className="brand-page">
            <h1>Omega</h1>
            <div className="brand-page-images">
                <img src="omega-page-1.jpg" alt="" ref={thing1Ref}/>
                <img src="omega-page-2.jpg" alt="" ref={thing2Ref} />
                <img src="omega-page-3.jpg" alt="" ref={thing3Ref} />
            </div>
            <div className="brand-page-description">
                <h2>About the Brand</h2>
                <p>Omega is a Swiss luxury watch brand that was founded in 1848 by Louis Brandt. The company quickly established itself as a leading watchmaker, known for its accuracy and precision. In 1932, Omega became the official timekeeper of the Olympic Games, which helped to further cement its reputation as a maker of high-quality sports watches. Over the years, Omega has introduced many innovations, such as the co-axial escapement and the Master Chronometer certification. Today, Omega is known for its association with James Bond and its iconic designs, such as the Speedmaster and the Seamaster.</p>
            </div>
            <div className="brand-page-watches">
                <p>What we offer</p>
                <div className="brand-page-watches-helper">
                {rolexWatches.map(watch => {
                    return (
                      <div className="watch-container" key={watch.id}>
                          <Link to={watch.page}>
                            <img src={watch.image} className="watch-image" alt="" />
                            <p>{watch.name}</p>
                          </Link>
                      </div>
                    )
                  })}
                </div>
            </div>
        </div>
    )
}