import React from "react";

import Calendar from "../assets/images/home-page/calendar 1.png"

import "./Main.css";
export default function Main(data, zero=0) {
    return ( 
        <div className="main">
        <div className="main-result">
            <h3>Showing <span className="span">{zero, data.data.totalItems}</span> Result(s)</h3>
        </div>
        <div className="main-calendar">
            <a href="#link"><img src={Calendar} alt="calendar" className="main-calendar__img" />
                <p>Order by newest</p>
            </a>
        </div>
        </div>
    );
}