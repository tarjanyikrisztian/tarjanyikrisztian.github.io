import { motion, AnimatePresence, useScroll } from "framer-motion";
import './App.scss';
import EndPage from "./Components/EndPage";
import Bio from "./Components/Bio";
import NameTitle from "./Components/NameTitle";
import Projects from "./Components/Projects";

const App = ({ }) => {
    return (
        <div className="containers">
            
            <NameTitle />

            <Projects />

            <Bio />

            <EndPage />

        </div>
    );
}


export default App
