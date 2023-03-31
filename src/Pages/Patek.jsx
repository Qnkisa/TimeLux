import React,{useState,useEffect,useRef} from 'react'
import WatchesData from '../data/WatchesData'
import {Link} from "react-router-dom"

export default function Patek(){
    const rolexWatches = WatchesData.filter(watch => watch.brand === "Patek Philippe");

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
            <h1>Patek Philippe</h1>
            <div className="brand-page-images">
                <img src="patek-page-1.jpg" alt="" ref={thing1Ref}/>
                <img src="patek-page-2.jpg" alt="" ref={thing2Ref} />
                <img src="patek-page-3.jpg" alt="" ref={thing3Ref} />
            </div>
            <div className="brand-page-description">
                <h2>About the Brand</h2>
                <p>Patek Philippe is a Swiss luxury watch brand that was founded in 1839 by Antoni Patek and Adrien Philippe. The company has a long and prestigious history, having been commissioned to create watches for royalty and other high-profile individuals. Patek Philippe is known for its technical innovations, such as the perpetual calendar and the split-seconds chronograph, as well as its classic and elegant designs. The brand is highly regarded in the watchmaking industry and is considered one of the most prestigious and exclusive luxury watch brands in the world.</p>
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