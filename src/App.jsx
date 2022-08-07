import { useEffect, useState, Suspense, Component, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, AnimatePresence, useScroll } from "framer-motion";
import './App.scss';
import RandomAdj from "./Components/RandomAdj";
import TypedKr from "./Components/TypedKr";
import Today from "./Components/Today";
import Contact from "./Components/Contact";

const App = ({ }) => {
    return (
        <div className="containers">
            <motion.div className="pages waves">
                <div className="name">
                    <p className="cursor"><TypedKr /></p>
                    <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="cd">
                        <b>Creative</b> <a className="kr">Developer</a>
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 5 }} transition={{ delay: 2.5 }} className="cd ">
                        <a className="kr">Student</a>
                    </motion.p>
                </div>
            </motion.div>
            <motion.div className="pages waves flip" id="bio">
                <motion.div className="bio"
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .5 }}>
                        Hi I'm Krisztián! I am from Hungary and currently I'm studying at the University of Pécs.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .5 }}>
                        My major is Computer Science, but graphic design is close to my heart, especially the area of visualizations.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .5 }}>
                        As I am still a student I'm trying to find my place in the world of programming, but I really like to work on front-end, back-end,
                        UI/UX design, data visualisation and right now I'm trying to get my foot into game development as well.
                        But you can find a common ground in all of my intrests, to make something that pleases the eye.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .5 }}>
                        I always loved to make art in any shape or form and that's where my intrest stems from.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .5 }}>
                        My main intrests are cooking, gaming, tattooing, working out and caring for my soulmate. My soulmate is none other than my cat.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .5 }}>
                        Her name is Yumi and ever since I've got her we have been very close to each other.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: .5 }}>
                        Well that would be me in short.Thank you for reading it trough! :)
                    </motion.p>
                </motion.div>
            </motion.div>
            <div className="pages">
                <section className="gridLayout">
                    <div className="card day">
                        <p>
                            Be creative, explore &<br />
                            Have a <span><RandomAdj /></span> <Today />!
                        </p>
                    </div>
                    <div className="card contact"><Contact /></div>
                </section>
            </div>
        </div>
    );
}


export default App
