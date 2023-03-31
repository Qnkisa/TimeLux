import React,{useState,useEffect,useRef} from 'react'
import WatchesData from '../data/WatchesData'
import {Link} from "react-router-dom"

export default function Rolex(){
    const rolexWatches = WatchesData.filter(watch => watch.brand === "Rolex");

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
            <h1>Rolex</h1>
            <div className="brand-page-images">
                <img src="rolex-page-1.jpg" alt="" ref={thing1Ref}/>
                <img src="rolex-page-2.jpg" alt="" ref={thing2Ref} />
                <img src="rolex-page-3.jpg" alt="" ref={thing3Ref} />
            </div>
            <div className="brand-page-description">
                <h2>About the Brand</h2>
                <p>Rolex was established in 1905 in London by Hans Wilsdorf and Alfred Davis as Wilsdorf and Davis. They imported Swiss movements to create watches. In 1908, they registered the Rolex trademark and moved to Geneva. Rolex has since become a leader in luxury watches with innovative features such as waterproof cases, self-winding movements, and date displays. It's now known for its iconic designs, quality craftsmanship, and association with sports and adventure.</p>
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