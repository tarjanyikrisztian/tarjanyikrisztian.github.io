import './App.scss';
import EndPage from "./Components/EndPage";
import Bio from "./Components/Bio";
import NameTitle from "./Components/NameTitle";
import Projects from "./Components/Projects";
import { PacmanLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const App = ({}) => {
    const [load, setLoad] = useState(true);
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
                <NameTitle />
                <Projects />
                <Bio />
                <EndPage />
            </div >

        );
    }
}


export default App
