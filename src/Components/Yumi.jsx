import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import '../App.scss';

const Yumi = () => {
  function mapRange(value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
  }

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mouseMove = e => {
      setMousePos({
        x: mapRange(e.clientX, 0, 2000, -20, 20),
        y: mapRange(e.clientY, 0, 1000, -12, 12)
      })
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  return (
    <>
      <motion.svg
        className="eye"
        initial={{ y: -20}}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, repeatDelay: .5 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 200"
        style={{
          enableBackground: "new 0 0 300 200",
          position: 'absolute',
        }}
        xmlSpace="preserve"
      >
        <radialGradient
          id="a"
          cx={150}
          cy={100}
          r={110}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#3c5a00",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#c90",
            }}
          />
        </radialGradient>
        {/*EYEBGCOLOR */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9, }}
          transition={{ delay: 2.5 }}
          d="M150 20.5C67.8 22.8 15.3 100 15.3 100s52.5 77.2 134.7 79.5c82.2-2.3 134.7-79.5 134.7-79.5S232.2 22.8 150 20.5z"
          style={{
            fill: "url(#a)",
          }}
        />
        {/*pupil */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ x: mousePos.x, y: mousePos.y, opacity: 1 }}

          d="M150 35s-25 18.1-25 65 25 65 25 65 25-18.1 25-65-25-65-25-65z"
          style={{
            stroke: "#000",
            strokeWidth: 4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
        />
        {/*EYELINE */}
        <motion.path
          initial={{ pathLength: 0, stroke: "#fff" }}
          animate={{ opacity: 1, pathLength: 1, stroke: "#000" }}
          transition={{ duration: 2, delay: .5 }}
          d="M150.1,179.6c82.2-2.3,134.7-79.5,134.7-79.5s-52.5-77.2-134.7-79.5c-82.2,2.3-134.7,79.5-134.7,79.5
			S67.9,177.3,150.1,179.6z"
          style={{
            fill: "none",
            //stroke: "#000",
            strokeWidth: 20,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
        />
      </motion.svg>
    </>
  )
}

export default Yumi