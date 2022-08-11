import { useCallback, useLayoutEffect, useRef, useState, useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import '../App.scss';
import TypedKr from "./TypedKr";
import Yumi from "./Yumi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const NameTitle = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    
    return (
        <motion.div className="pages waves" >
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
                        line_linked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 1.5,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: true,
                                rotateX: 600,
                                rotateY: 600
                            }
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
            <Yumi />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1080"
                style={{
                    enableBackground: "new 0 0 960 540",
                    position: 'absolute',
                    bottom: 0
                }}
                xmlSpace="preserve">
                <motion.path
                    d="M824.9 1081.4c25.9-87.9 34.8-191.8-1.1-195-62.7-5.3-197.9-60.3-260.6-66.9-62.5-6.6-125.3 17.4-187.8 15.9-62.6-1.5-124.9-28.3-187.5-39-62.5-10.7-125.3-5.4-156.7-2.6l-31.4 2.6v285h825.1z"
                    style={{ fill: "#1cabbf", }}
                />
                <path
                    d="m1546.6 1081.4-4.5-21.4c-27.2 1.6-149.4-84-282.3-100.6-32-4-147.4-23-174.6-6.9-21 12.4-18.8 22.9-82-24.1-49.1-36.5-109.5-54.9-170.6-51-25.5 1.6-50.9 5.3-76.3 10.1-63.1 12.1-125.8 31.7-188.9 41.7-63 9.8-126.2 9.8-189.2-5-63.1-14.8-125.8-44.5-188.9-40.4-63 3.9-126.2 41.7-157.8 60.5L-.2 963.1v118.3h1546.8z"
                    style={{ fill: "#198c9f", }}
                />
                <path
                    d="m1361.6 1081.4 14.6-54.9-56.7-26.8c-32.3-14.6-96.9-43.9-161.2-62.9-64.4-19-128.4-27.6-192.9-25.5-64.3 1.9-128.9 14.6-193.2 27.7-64.5 13.3-128.4 27-192.9 20.5-64.3-6.7-128.9-33.6-193.2-41.3-64.5-7.8-128.4 3.6-192.9 12.6-64.3 9-128.9 15.2-161.2 18.4l-32.2 3.1v129.1h1361.8z"
                    style={{ fill: "#166f7f", }}
                />
                <path
                    d="m1326.7 1023.1-41 4.6c-31.4 3.5-95.3 9.5-157.9 17-62.7 7.4-126 4.9-188.7 4.9-62.5 0-125.4-7.6-187.9-23.1-62.7-15.3-124.9-38.5-187.6-47.2-62.5-8.9-125.4-3.3-187.9 3-62.7 6.3-124.9 13.5-187.6 10.7-62.5-2.8-125.4-15.3-156.8-21.8l-31.4-6.3v115.9h1318.9l7.9-57.7z"
                    style={{ fill: "#125360", }}
                />
                <path
                    d="m1920.1 1016.2-45.9 2c-46 2.3-137.8 6.5-229 2.8-91.4-3.8-182.1-15.7-273.8-7.6-91.5 7.8-183.9 35.5-275.6 50.2-91.9 14.7-182.8 16.5-274.1 5.7-91.1-11-182.2-35-273.6-39-91.4-4.3-182.7 11.4-274.2 8.1-91.2-3.3-182.4-25.8-228.1-36.8L.2 990.4l-.1 90.3 1920.1-.3-.1-64.2z"
                    style={{ fill: "#0d3943", }}
                />
            </svg>
            <div className="name">
                <p className="cursor"><TypedKr /></p>
                <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }} className="cd">
                    <b>Creative</b> <a className="kr" href='#projects'>Developer,</a>
                </motion.p>
                <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 5 }} transition={{ delay: 3.2 }} className="cd ">
                    <a className="kr">Student</a>
                </motion.p>
            </div>
        </motion.div>
    )
}
export default NameTitle