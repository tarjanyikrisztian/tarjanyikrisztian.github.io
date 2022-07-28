//import { useSpring, animated, config } from "react-spring";
import React from 'react'
//import { useEffect, useState } from "react";
import './App.scss'

/*function wave({ d, color }) {
    return (
        <path
            fill = {color}
            d={d}
        />
    );
}*/



function App() {
    /*const [visible, setVisible] = useState(false);
    setInterval(() => {
        this.setVisible = !this.visible;
    }, 1000)*/
    return (
        <div className="container">
            <div className="pages">
                <div className='waves'>
                    <div className="name">
                        <p><b className="kr">Krisztián</b> Tarjányi <span>|</span>
                        </p>
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
                    <div className="card">HAVE A NICE DAY</div>
                    <div className="card">CONTACT</div>
                </section>
            </div>
        </div>
    );
}



export default App
