import { useEffect, useState, Suspense, Component, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, AnimatePresence } from "framer-motion";
import './App.scss';
import RandomAdj from "./Components/RandomAdj";
import TypedKr from "./Components/TypedKr";
import Today from "./Components/Today";
import waves from './bg-waves.svg';
import wavesfliped from './bg-waves-fliped.svg';

const App = ({ }) => {
    const [ccoin, setCcoin] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [clickedout, setClickedout] = useState(false);
    const coinClick = () => {
        setClicked(true);
        const timer = setTimeout(() => {
            setClickedout(true);
            const timer2 = setTimeout(() => {
                setCcoin(true);
            }, 800);
            return () => clearTimeout(timer2);
        }, 500);
        return () => clearTimeout(timer);
    }
    const variants_1 = {
        rotate: { rotateY: 360, transition: { repeat: Infinity, duration: 3 } },
        end: { rotate: 0, y: '25vh', opacity: 0 }
    };
    const variants_2 = {
        in: { scaleY: 1, transition: { duration: .5 }, backgroundColor: "#000" },
        out: { y: .1, backgroundColor: "#fff", transition: { duration: .5 } }
    };
    if (!ccoin) {
        return (
            <AnimatePresence>
                <motion.div className="premain"
                    initial={{ scaleY: 0, backgroundColor: "#fff" }}
                    variants={variants_2}
                    animate={clickedout ? 'out' : 'in'}
                    transition={{ duration: .3 }}
                >
                    <div className="coin-drop">
                        <div className="insert-coin">INSERT COIN<br/><span>TO ENTER THE PORTFOLIO</span></div>
                        <div className="coin-div"><motion.div
                            whileHover={{ scale: 1.1 }}
                            variants={variants_1}
                            animate={clicked ? 'end' : 'rotate'}
                            className="coin" onClick={coinClick} /></div>
                        <div className="shadow-div"><div className="coin-drop-shadow" /></div>
                    </div>
                </motion.div>
            </AnimatePresence>
        );
    } else {
        return (
                <motion.div className="containers"
                initial={{ scaleY: .1}}
                animate={{ scaleY: 1}}
                transition={{ duration: .25 }}>
                    <motion.div className="pages waves">
                        <div className="name">
                            <p className="cursor"><TypedKr /></p>
                            <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="cd">
                                <b>Creative</b> <a className="kr">Developer</a>
                            </motion.p>
                            <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="cd ">
                                <a className="kr">Student</a>
                            </motion.p>
                        </div>
                    </motion.div>
                    <motion.div className="pages waves flip" id="bio">
                        <div className="bio">BIO</div>
                    </motion.div>
                    <div className="pages">
                        <section className="gridLayout">
                            <div className="card day">
                                <p>
                                    Be creative, explore &<br />
                                    Have a <span><RandomAdj /></span> <Today />!
                                </p>
                            </div>
                            <div className="card contact">CONTACT</div>
                        </section>
                    </div>
                </motion.div>
        );
    }
}


/*<div className="containers">
            <motion.div className="pages waves">
                <div className="name">
                    <p className="cursor"><TypedKr /></p>
                    <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="cd">
                        <b>Creative</b> <a className="kr">Developer</a>
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="cd ">
                        <a className="kr">Student</a>
                    </motion.p>
                </div>
            </motion.div>
            <motion.div className="pages waves flip" id="bio">
                <div className="bio">BIO</div>
            </motion.div>
            <div className="pages">
                <section className="gridLayout">
                    <div className="card day">
                        <p>
                            Be creative, explore &<br />
                            Have a <span><RandomAdj /></span> <Today />!
                        </p>
                    </div>
                    <div className="card contact">CONTACT</div>
                </section>
            </div>
        </div>*/


export default App
