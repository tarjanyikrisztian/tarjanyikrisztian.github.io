import { motion } from "framer-motion";
import '../App.scss';
const Projects = () => {



    return (
        <motion.div className="pages flip" id="projects">
            <div>
                {/*<p style={{ margin: "1vw" }}>&lt;Projects /&gt;</p>*/}
                <motion.section className='proj'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <div className="MyProject1 MyPr">
                        <div className="preview">v</div>
                        <section><p>Pathfinding Algorithms Visualization</p></section>
                        <section className="ViewCode">
                            <a className="view">Live Demo</a><a className="code">Code</a></section>
                    </div>
                    <div className="MyProject2 MyPr">
                        <div className="preview">v</div>
                        <section><p>This Portfolio Site</p></section>
                        <section className="ViewCode">
                            <a className="view">Live Demo</a><a className="code">Code</a></section>
                    </div>
                    <div className="MyProject3 MyPr">
                        <div className="preview">v</div>
                        <section><p>2D Bullet Hell, Hack & Slash Platformer Game</p></section>
                        <section className="ViewCode">
                            <a className="view inp">In Progress</a><a className="code">Code</a></section>
                    </div>
                    <div className="MyProject4 MyPr">
                        <div className="preview">v</div>
                        <section><p>GitHub</p></section>
                        <section><a className="code rep" href="https://github.com/tarjanyikrisztian?tab=repositories" target="_blank">Repositories</a></section>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    )
}
export default Projects
