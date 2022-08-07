import { motion, AnimatePresence, useScroll } from "framer-motion";
import './App.scss';
import EndPage from "./Components/EndPage";
import Bio from "./Components/Bio";
import NameTitle from "./Components/NameTitle";
import Projects from "./Components/Projects";

const App = ({ }) => {
    return (
        <div className="containers">
            <motion.div className="pages waves">
                <NameTitle />
            </motion.div>
            <motion.div className="pages waves flip">
                <Projects />
            </motion.div>
            <motion.div className="pages biopage" id="bio">
                <Bio />
            </motion.div>
            <div className="pages peaks">

                <EndPage />
                
            </div>
        </div>
    );
}


export default App
