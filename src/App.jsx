import './App.scss';
import EndPage from "./Components/EndPage";
import Bio from "./Components/Bio";
import NameTitle from "./Components/NameTitle";
import Projects from "./Components/Projects";
import { PacmanLoader } from 'react-spinners';
import { useCallback, useLayoutEffect, useRef, useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const App = ({}) => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const [load, setLoad] = useState(false);//ALAPBOL TRUE LEGYEN
    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 4000)
    })
    if (load) {
        return (              
            <motion.div className="loading">
            <motion.div initial={{ x:"-25vw" }}animate={{ x:"25vw" }} transition={{duration:4.5}}>
                <PacmanLoader color={"#1CABBF"} size={50} loading={load} />
            </motion.div>
            </motion.div>
        );
    }
    else {
        return (
            <div className="containers">
                <Particles id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: {
                            value: 200,
                            
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "edge",
                            stroke: {
                                width: 0,
                                color: "#ffffff"
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0,
                                sync: false
                            }
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 4,
                                size_min: 0.3,
                                sync: false
                            }
                        },
                        move: {
                            enable: true,
                            speed: 1.5,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble"
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 100,
                                size: 50,
                                duration: 2,
                                opacity: 0,
                                speed: 3
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    retina_detect: true
                }} />
                <NameTitle />
                <Projects/>
                <Bio />
                <EndPage />
            </div >

        );
    }
}


export default App
