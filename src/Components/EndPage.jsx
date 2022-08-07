import { motion } from "framer-motion";
import '../App.scss';
import RandomAdj from "./RandomAdj";
import Today from "./Today";
import Contact from "./Contact";

const EndPage = () => {
    return (
        <section className="gridLayout">
                    <div className="card day">
                        <p>
                            Be creative, explore &<br />
                            Have a <span><RandomAdj /></span> <Today />!
                        </p>
                    </div>
                    <div className="card contact"><Contact /></div>
                </section>
    )
}
export default EndPage