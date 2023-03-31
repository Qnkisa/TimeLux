import React,{useState,useEffect,useRef} from "react"
import WatchesData from "../data/WatchesData"
import "intersection-observer"
import {Link} from "react-router-dom"

export default function HomeProducts(){
  const randomWatches = [];
  while (randomWatches.length < 6) {
    const randomIndex = Math.floor(Math.random() * WatchesData.length);
    if (!randomWatches.includes(WatchesData[randomIndex])) {
      randomWatches.push(WatchesData[randomIndex]);
    }
  }

  const heading1Ref = useRef();
  const heading2Ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("intersected");
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(heading1Ref.current);
    observer.observe(heading2Ref.current);

   
    return () => observer.disconnect();
  }, []);


 


    return(
        <div className="home-products">
            <div className="home-description">
                <h1 ref={heading1Ref}>Access the World of Luxury with TimeLux</h1>
                <h2 ref={heading2Ref}>TimeLux is the ultimate destination for luxury and branded watches. Our collection features the most iconic names in the industry - Rolex, Patek Philippe, and Omega. Each timepiece is hand-selected to ensure that our customers receive only the highest quality and most authentic watches. Our commitment to excellence is reflected in every aspect of our business.</h2>
            </div>
            <div className="home-watches">
                <p>A few of our favourites</p>
                <div
                      className="watches-container"
                >
                  {randomWatches.map(watch => {
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