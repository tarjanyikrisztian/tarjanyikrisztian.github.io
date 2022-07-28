//import { useSpring, animated, config } from "react-spring";
import { useEffect, useState } from "react";
import './App.scss';
import './adj';
function today(){
    
}


function App() {
    //let adjectives = adj;
    let adjectives = [
        "a happy",
        "a peaceful",
        "a wonderful",
        "an inspirational",
        "a bright",
        "an exciting",
        "a joyful",
        "a blissful",
        "a delightful",
        "a cheerful",
        "a thrilled",
        "a sunny",
        "a jolly",
        "a calm",
        "an electrifying",
        "a lovely",
        "a rejuvenating",
        "an euphoric",
        "a glorious",
        "a jubilant",
        "a relaxing",
        "a beautiful",
        "an awesome",
        "an enchanting",
        "an enthralling",
        "a splendid",
        "a pleasant",
        "a marvelous"
    ];
    let rnd = Math.floor((Math.random() * adjectives.length));
    /*setInterval(function(){   
        rnd = Math.floor((Math.random() * adjectives.length)); 
     }, 5000);*/
    
    let day = new Date().getDay()
    let today = "";
    if (day == 1) today = "monday";
    else if (day == 2) today = "tuesday";
    else if (day == 3) today = "wednesday";
    else if (day == 4) today = "thursday";
    else if (day == 5) today = "friday";
    else if (day == 6) today = "saturday";
    else today = "sunday";

    return (
        <div className="containers">
            <div className="pages">
                <div className="waves">
                    <div className="name">
                        <p><b className="kr">Krisztián</b> Tarjányi<span>|</span></p>
                        <p className="cd"><i><b>Creative</b> Developer</i></p>
                        <p className="cd"><i>Student</i></p>
                    </div>
                </div>
            </div>
            <div className="pages">
                <div className='waves flip'>
                    <div className="bio">BIO</div>
                </div>
            </div>
            <div className="pages">
                <section className="gridLayout">
                    <div className="card"><p>Be creative, explore &<br />Have {adjectives[rnd]} {today}!</p></div>
                    <div className="card">CONTACT</div>
                </section>
            </div>
        </div>
    );
}

export default App
