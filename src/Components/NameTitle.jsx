import { motion } from "framer-motion";
import '../App.scss';
import TypedKr from "./TypedKr";

const NameTitle = () => {
    return (
        <div className="name">
            <p className="cursor"><TypedKr /></p>
            <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="cd">
                <b>Creative</b> <a className="kr">Developer,</a>
            </motion.p>
            <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 5 }} transition={{ delay: 2.5 }} className="cd ">
                <a className="kr">Student</a>
            </motion.p>
        </div>
    )
}
export default NameTitle