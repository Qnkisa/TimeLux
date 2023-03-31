import React,{useState} from "react"
import Carousel from "../components/Carousel"
import HomeProducts from "../components/HomeProducts"
import HomeBottom from "../components/HomeBottom"

export default function Home(){
    return (
        <div className="home-container">
            <Carousel/>
            <HomeProducts/>
            <HomeBottom/>
        </div>
    )
}