import React,{ useState,useLayoutEffect } from "react";
import {Link} from "react-router-dom"

export default function HomeBottom(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="home-bottom">
            <div className="home-bottom-brands" id="home-bottom-brands">
                <Link to="/omega">
                    <div className="home-bottom-brands-div">
                        <img src="/omega-logo-home.png" alt="" />
                    </div>
                </Link>
                <Link to="/patek">
                    <div className="home-bottom-brands-div">
                        <img src="/patek-logo-home.png" alt="" />
                    </div>
                </Link>
                <Link to="/rolex">
                    <div className="home-bottom-brands-div">
                        <img src="/rolex-logo-home.png" alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}