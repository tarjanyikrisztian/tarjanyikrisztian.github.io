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
          x: mapRange(e.clientX, 0, 2000, -10, 10),
          y: mapRange(e.clientY, 0, 1000, -5, 5),
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
        initial={{ y: "-27vh" }}
        animate={{ y: "-26vh" }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, repeatDelay: .5 }}
        id="R\xE9teg_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 300 200"
        style={{
          enableBackground: "new 0 0 300 200",
          position: "absolute",
        }}
        xmlSpace="preserve"
      >
        <style>
          {
            ".st2,.st3{stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st2{fill:none;stroke-width:8}.st3{stroke-width:8}"
          }
        </style>
        <radialGradient
          id="SVGID_1_"
          cx={218.169}
          cy={95.095}
          r={42.562}
          gradientTransform="rotate(-171.004 150.961 106.76)"
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
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65, }}
          transition={{ delay: 2 }}
          d="M78 138c31.4 4.1 56-22.1 56-22.1s-15.3-32.5-46.4-38.3c-31.4-4.1-56 22.1-56 22.1S46.9 132.2 78 138z"
          style={{
            fill: "url(#SVGID_1_)",
          }}
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "#fff" }}
          animate={{ opacity: 1, pathLength: 1, stroke: "#000" }}
          transition={{ duration: 2 }}
          className="st2"
          d="M78 138c31.4 4.1 56-22.1 56-22.1s-15.3-32.5-46.4-38.3c-31.4-4.1-56 22.1-56 22.1S46.9 132.2 78 138z"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ x: mousePos.x, y: mousePos.y, opacity: 1 }}
          className="st3"
          d="M82.7 82.7s-9.6 7-9.6 25 9.6 25 9.6 25 9.6-7 9.6-25-9.6-25-9.6-25z"
        />
        <radialGradient
          id="SVGID_00000121253673191838016900000002521498980436890040_"
          cx={85.388}
          cy={92.927}
          r={42.562}
          gradientTransform="rotate(171.004 151.173 105.76)"
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
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65, }}
          transition={{ delay: 2 }}
          style={{
            fill: "url(#SVGID_00000121253673191838016900000002521498980436890040_)",
          }}
          d="M222.9 138.4c31.1-5.8 46.4-38.3 46.4-38.3s-24.6-26.2-56-22.1c-31.1 5.8-46.4 38.3-46.4 38.3s24.7 26.1 56 22.1z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "#fff" }}
          animate={{ opacity: 1, pathLength: 1, stroke: "#000" }}
          transition={{ duration: 2 }}
          className="st2"
          d="M222.9,138.4L222.9,138.4C191.6,142.4 166.9,116.3 166.9,116.3C166.9,116.3 182.20000000000002,83.8 213.3,78C244.70000000000002,73.9 269.3,100.10000000000001 269.3,100.10000000000001C269.3,100.10000000000001 254,132.6 222.9,138.4"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ x: mousePos.x, y: mousePos.y, opacity: 1 }}
          className="st3"
          d="M218.7 82.7s-9.6 7-9.6 25 9.6 25 9.6 25 9.6-7 9.6-25-9.6-25-9.6-25z"
        />
      </motion.svg>
      {/*<motion.svg
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
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9, }}
          transition={{ delay: 2.5 }}
          d="M150 20.5C67.8 22.8 15.3 100 15.3 100s52.5 77.2 134.7 79.5c82.2-2.3 134.7-79.5 134.7-79.5S232.2 22.8 150 20.5z"
          style={{
            fill: "url(#a)",
          }}
        />
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
      </motion.svg>*/}
    </>
  )
}

export default Yumi