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


 


    return(
        <div className="home-products">
            <div className="home-description">
                <h1>Access the World of Luxury with TimeLux</h1>
                <h2>TimeLux is the ultimate destination for luxury and branded watches. Our collection features the most iconic names in the industry - Rolex, Patek Philippe, and Omega. Each timepiece is hand-selected to ensure that our customers receive only the highest quality and most authentic watches. Our commitment to excellence is reflected in every aspect of our business.</h2>
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