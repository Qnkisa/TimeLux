import React,{ useState,useLayoutEffect } from "react";
import {Link} from "react-router-dom"

export default function HomeBottom(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="home-bottom">
            <div className="home-bottom-articles-helper">
                <h3>Expert Watch Insights</h3>
                <div className="home-bottom-articles">
                    <Link to="/choose-your-watch">
                        <div className="home-bottom-article choose-your-watch-class">
                            <p>3 Tips for Choosing the Perfect Luxury Watch for Your Style</p>     
                            <div className="article-fill-left"></div>
                            <div className="article-fill-right"></div>
                        </div>
                    </Link>
                    <Link to="/watch-care">
                        <div className="home-bottom-article watch-care-class">
                            <p>The Ultimate Guide to Watch Care and Maintenance</p>
                            <div className="article-fill-left"></div>
                            <div className="article-fill-right"></div>
                        </div>
                    </Link>
                </div>
            </div>
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