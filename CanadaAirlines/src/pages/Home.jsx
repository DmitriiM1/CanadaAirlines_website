import React from "react";
import "../assets/styles/home.css"
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import ottawa from "../assets/imgs/ottawa.jpg"
import dubai from "../assets/imgs/dubaijpg.jpg"
import europa from "../assets/imgs/europa.jpg"
import moscow from "../assets/imgs/moscow.jpg"
import china from "../assets/imgs/china.jpg"
import america from "../assets/imgs/america.jpg"

const Home = () => {
    return (
        <div>
            <section className="sec1">

                <div className="block">
                    <img src={ottawa} alt="ottawa" />
                    <div className="infoBlock">
                        <h1>To Canada</h1>
                        <h2>from 10.000 ₽</h2>
                        <a href="search.html">
                            <div className="button">
                                Look at
                            </div>
                        </a>
                    </div>
                </div>

                <div className="block">
                    <img src={dubai} alt="dubai" />
                    <div className="infoBlock">
                        <h1>To UAE</h1>
                        <h2>from 50.000 ₽</h2>
                        <a href="search.html#UaeZ">
                            <div className="button">
                                Look at
                            </div>
                        </a>
                    </div>
                </div>

                <div className="block">
                    <img src={europa} alt="europa" />
                    <div className="infoBlock">
                        <h1>To Europe</h1>
                        <h2>from 60.000 ₽</h2>
                        <a href="search.html#EurZ">
                            <div className="button">
                                Look at
                            </div>
                        </a>
                    </div>
                </div>

                <div className="block">
                    <img src={moscow} alt="moscow" />
                    <div className="infoBlock">
                        <h1>To Russia</h1>
                        <h2>from 40.000 ₽</h2>
                        <a href="search.html#RussZ">
                            <div className="button">
                                Look at
                            </div>
                        </a>
                    </div>
                </div>

                <div className="block">
                    <img src={china} alt="china" />
                    <div className="infoBlock">
                        <h1>To China</h1>
                        <h2>from 50.000 ₽</h2>
                        <a href="search.html#ChinaZ">
                            <div className="button">
                                Look at
                            </div>
                        </a>
                    </div>
                </div>

                <div className="block">
                    <img src={america} alt="america" />
                    <div className="infoBlock">
                        <h1>To America</h1>
                        <h2>from 10.000 ₽</h2>
                        <a href="search.html#AmerZ">
                            <div className="button">
                                Look at
                            </div>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home