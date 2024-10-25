import React from "react";
import "../assets/styles/search.css";

import ottawa from "../assets/imgs/ottawa.jpg";
import dubai from "../assets/imgs/dubaijpg.jpg";
import europa from "../assets/imgs/europa.jpg";
import moscow from "../assets/imgs/moscow.jpg";
import china from "../assets/imgs/china.jpg";
import usa from "../assets/imgs/usa.jpg";
import planeUp from "../assets/imgs/planeUp_icon.svg";
import planeDown from "../assets/imgs/planeDown_icon.svg";


const Search = () => {
    return (
        <div>
            <main>
                <div className="wrapper">

                    <div className="canadaZone" id="CanadaZ">
                        <h1>Flights within Canada</h1>

                        <div className="flights">
                            <div className="photoFlights">
                                <img src={ottawa} alt="ottawa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>08:35</h1>
                                    <p className="collor">Ottawa</p>
                                    <p>09 October 2022, Sat.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 3 hours 00 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>11:35</h1>
                                    <p className="collor">Toronto</p>
                                    <p>09 October 2022, Sat.</p>
                                </div>
                            </div>

                            <a href="booking.html">
                                <div className="button">
                                    <p>10.000 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={ottawa} alt="ottawa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>12:20</h1>
                                    <p className="collor">Toronto</p>
                                    <p>11 October 2022, Mon.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 5 hours 20 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>17:40</h1>
                                    <p className="collor">Quebec</p>
                                    <p>11 October 2022, Mon.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>12.000 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={ottawa} alt="ottawa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>22:10</h1>
                                    <p className="collor">Ottawa</p>
                                    <p>14 October 2022, Thur.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 1 hours 00 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>23:20</h1>
                                    <p className="collor">Montreal</p>
                                    <p>14 October 2022, Thur.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>9.700 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={ottawa} alt="ottawa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>02:40</h1>
                                    <p className="collor">Quebec</p>
                                    <p>15 October 2022, Fri.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 2 hours 40 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>04:20</h1>
                                    <p className="collor">Toronto</p>
                                    <p>15 October 2022, Fri.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>11.200 р.</p>
                                </div>
                            </a>

                        </div>

                    </div>

                    <div className="uaeZone" id="UaeZ">

                        <h1>Flights to Dubai</h1>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={dubai} alt="dubai"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>14:00</h1>
                                    <p className="collor">Toronto</p>
                                    <p>09 October 2022, Sat.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt=""/>
                                    <p>On the way: 15 hours 10 minutes</p>
                                    <img src={planeDown} alt=""/>
                                </div>
                                <div className="city">
                                    <h1>06:10</h1>
                                    <p className="collor">Al-Ain</p>
                                    <p>10 October 2022, вс.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>43.600 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={dubai} alt="dubai"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>10:25</h1>
                                    <p className="collor">Quebec</p>
                                    <p>14 October 2022, Thur.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt=""/>
                                    <p>On the way: 14 hours 40 minutes</p>
                                    <img src={planeDown} alt=""/>
                                </div>
                                <div className="city">
                                    <h1>02:10</h1>
                                    <p className="collor">Abu Dhabi</p>
                                    <p>15 October 2022, Fri.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>40.200 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={dubai} alt="dubai"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>02:10</h1>
                                    <p className="collor">Abu Dhabi</p>
                                    <p>09 October 2022, Sat.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt=""/>
                                    <p>On the way: 17 hours 20 minutes</p>
                                    <img src={planeDown} alt=""/>
                                </div>
                                <div className="city">
                                    <h1>19:30</h1>
                                    <p className="collor">Montreal</p>
                                    <p>09 October 2022, Sat.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>47.600 р.</p>
                                </div>
                            </a>

                        </div>

                    </div>

                    <div className="europZone" id="EurZ">

                        <h1>Flights to Europe</h1>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={europa} alt="europa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>04:25</h1>
                                    <p className="collor">Toronto</p>
                                    <p>09 October 2022, Sat.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 10 hours 20 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>15:45</h1>
                                    <p className="collor">France</p>
                                    <p>09 October 2022, Sat.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>52.600 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={europa} alt="europa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>11:20</h1>
                                    <p className="collor">Ottawa</p>
                                    <p>14 October 2022, Thur.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 11 hours 30 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>22:35</h1>
                                    <p className="collor">Switzerland</p>
                                    <p>09 October 2022, Sat.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>60.800 р..</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={europa} alt="europa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>13:15</h1>
                                    <p className="collor">Quebec</p>
                                    <p>09 October 2022, Sat.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 15 hours 10 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>05:25</h1>
                                    <p className="collor">Croatia</p>
                                    <p>10 October 2022, вс.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>83.000 р.</p>
                                </div>
                            </a>

                        </div>

                    </div>

                    <div className="russiaZone" id="RussZ">

                        <h1>Flights to Russia</h1>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={moscow} alt="moscow"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>10:25</h1>
                                    <p className="collor">Toronto</p>
                                    <p>14 October 2022, Thur.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 14 hours 40 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>02:10</h1>
                                    <p className="collor">Moscow</p>
                                    <p>15 October 2022, Fri.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>40.200 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={moscow} alt="moscow"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>10:25</h1>
                                    <p className="collor">Quebec</p>
                                    <p>14 October 2022, Thur.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 14 hours 40 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>02:10</h1>
                                    <p className="collor">Saint Petersburg</p>
                                    <p>15 October 2022, Fri.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>40.200 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={moscow} alt="moscow"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>10:25</h1>
                                    <p className="collor">Montreal</p>
                                    <p>14 October 2022, Thur.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 14 hours 40 minutes</p>
                                    <img src={planeDown} alt="planeDown"/>
                                </div>
                                <div className="city">
                                    <h1>02:10</h1>
                                    <p className="collor">Novosibirsk</p>
                                    <p>15 October 2022, Fri.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>40.200 р.</p>
                                </div>
                            </a>

                        </div>

                    </div>

                    <div className="chinaZone" id="ChinaZ">

                        <h1>Flights to China</h1>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={china} alt="china"/>
                            </div>
                            <div className="name">
                                <h2>-No flights to China found at the moment.</h2>
                            </div>

                        </div>

                    </div>

                    <div className="americaZone" id="AmerZ">

                        <h1>Flights to America</h1>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={usa} alt="usa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>6:05</h1>
                                    <p className="collor">Toronto</p>
                                    <p>14 October 2022, Thur.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 5 hours 40 minutes</p>
                                    <img src={planeDown} alt=""/>
                                </div>
                                <div className="city">
                                    <h1>11:45</h1>
                                    <p className="collor">Los Angeles</p>
                                    <p>14 October 2022, Fri.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>15.200 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={usa} alt="usa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>3:50</h1>
                                    <p className="collor">Quebec</p>
                                    <p>10 October 2022, Thur.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 8 hours 30 minutes</p>
                                    <img src={planeDown} alt=""/>
                                </div>
                                <div className="city">
                                    <h1>18:20</h1>
                                    <p className="collor">San Francisco</p>
                                    <p>10 October 2022, Fri.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>21.200 р.</p>
                                </div>
                            </a>

                        </div>

                        <div className="flights">

                            <div className="photoFlights">
                                <img src={usa} alt="usa"/>
                            </div>
                            <div className="name">
                                <div className="city">
                                    <h1>15:00</h1>
                                    <p className="collor">Montreal</p>
                                    <p>18 October 2022, Thur.</p>
                                </div>
                                <div className="timeInfo">
                                    <img src={planeUp} alt="planeUp"/>
                                    <p>On the way: 9 hours 30 minutes</p>
                                    <img src={planeDown} alt=""/>
                                </div>
                                <div className="city">
                                    <h1>3:30</h1>
                                    <p className="collor">Las Vegas</p>
                                    <p>19 October 2022, Fri.</p>
                                </div>
                            </div>

                            <a href="/booking.html">
                                <div className="button">
                                    <p>19.200 р.</p>
                                </div>
                            </a>

                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}

export default Search