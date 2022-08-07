import { useEffect, useState, Suspense, Component, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, AnimatePresence } from "framer-motion";
import './App.scss';
import RandomAdj from "./Components/RandomAdj";
import TypedKr from "./Components/TypedKr";
import Today from "./Components/Today";
import waves from './bg-waves.svg';
import wavesfliped from './bg-waves-fliped.svg';



export default PreMain