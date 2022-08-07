import React from 'react'
import { motion } from "framer-motion";
import '../App.scss';
const Projects = () => {
    return (
        <motion.div className='proj'
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            Projects
        </motion.div>
    )
}
export default Projects
