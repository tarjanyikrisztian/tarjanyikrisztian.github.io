import { useEffect, useState, Suspense, Component } from "react";
import './App.scss';
import RandomAdj from "./Components/RandomAdj";
import TypedKr from "./Components/TypedKr";
import Today from "./Components/Today";



const App = () => {
    

    return (
        <div className="containers">
            <div className="pages">
                <div className="waves">
                    <div className="name">
                        <p className="cursor"><TypedKr /></p>
                        <p className="cd cdin1"><b>Creative</b> <a className="kr">Developer</a></p>
                        <p className="cd cdin2"><a className="kr">Student</a></p>
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
                    <div className="card">
                        <p>
                            Be creative, explore &<br />
                            Have a <span><RandomAdj /></span> <Today />!
                        </p>
                    </div>
                    <div className="card">contact</div>
                </section>
            </div>
        </div>
    );
}



export default App
