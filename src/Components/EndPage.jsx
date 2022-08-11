import { motion } from "framer-motion";
import '../App.scss';
import RandomAdj from "./RandomAdj";
import Today from "./Today";
import Contact from "./Contact";

const EndPage = () => {
    return (
        <motion.div className="pages peaks">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 960 540"
                style={{
                    enableBackground: "new 0 0 960 540",
                    position: 'absolute',
                    bottom: 0
                }}
                xmlSpace="preserve">
                <path
                    d="m0 146 80 48.4 80-32.9 80-1.8 80 21 80 9.1 80 35.6 80-27.4 80 31.9 80-68.4 80 44.7 80-7.3 80-9.1V541H0V146z"
                    style={{ fill: "#202041", }}
                />
                <path
                    d="m0 182.5 80 48.4 80-40.1 80 14.6 80 27.4 80-17.4 80-14.6 80 52.9 80-27.4 80 27.4 80-19.2 80-45.6 80 56.5V541H0V182.5z"
                    style={{ fill: "#32244b", }}
                />
                <path
                    d="m0 259.1 80-11.8 80-20.1 80 51.1 80-11.8 80-24.6 80-15.5 80 45.6 80-57.5 80 41.9 80-31.9 80 34.7 80-50.2v332H0V259.1z"
                    style={{ fill: "#472753", }}
                />
                <path
                    d="M0 272.8 80 250l80 35.6 80-17.4 80-10.9 80 18.3 80 15.5 80-14.6 80-12.8 80 1.8 80 10.9 80-2.8 80 1.8V541H0V272.8z"
                    style={{ fill: "#5c2958", }}
                />
                <path
                    d="m0 276.4 80-4.6 80 37.4 80-20.1 80-2.8 80 46.5 80-60.2 80 21 80-6.4 80 8.2 80 12.8 80-10.9 80-25.5V541H0V276.4z"
                    style={{ fill: "#712a5a", }}
                />
                <path
                    d="m0 323 80-6.4 80 4.6 80 .9 80 34.7 80-26.4 80 27.4 80-10 80 2.8 80-24.6 80 15.5 80-17.4 80-18.3V541H0V323z"
                    style={{ fill: "#862c5a", }}
                />
                <path
                    d="m0 349.4 80 .9 80 14.6 80 19.2 80-34.7 80 11.8 80 .9 80 9.1 80-5.5 80 16.4 80-22.8 80-9.1 80 15.5V541H0V349.4z"
                    style={{ fill: "#9a2f56", }}
                />
                <path
                    d="m0 404.1 80-10 80-2.8 80-4.6 80 6.4 80 10 80-36.5 80 21 80-22.8 80 16.4 80 13.7 80 5.5 80-26.4v167H0V404.1z"
                    style={{ fill: "#ab344f", }}
                />
                <path
                    d="M0 408.7 80 427l80-16.4 80-10 80-4.6 80 10 80-7.3 80 1.8 80-.9 80 32.9 80-17.4 80-18.3 80 13.7V541H0V408.7z"
                    style={{ fill: "#ba3d47", }}
                />
                <path
                    d="m0 446.1 80 3.7 80-13.7 80 8.2 80 4.6 80-3.7 80-14.6 80 25.5 80-15.5 80 4.6 80-15.5 80 27.4 80-3.7V541H0v-94.9z"
                    style={{ fill: "#c6493c", }}
                />
                <path
                    d="m0 460.7 80 9.1 80 2.8 80 7.3 80 5.5 80-10.9 80 7.3 80-15.5 80 18.3 80-24.6 80 24.6 80-17.4 80 13.7V541H0v-80.3z"
                    style={{ fill: "#ce582f", }}
                />
                <path
                    d="m0 507.2 80-14.6 80 2.8 80 .9 80-1.8 80 13.7 80-17.4 80 2.8 80 9.1 80-9.1 80 12.8 80-3.7 80 6.4V541H0v-33.8z"
                    style={{ fill: "#d2691e", }}
                />
            </motion.svg>
            <section className="gridLayout">
                <div className="card day">
                    <p>
                        Be creative, explore &<br />
                        Have a <span><RandomAdj /></span> <Today />!
                    </p>
                </div>
                <div className="card contact"><Contact /></div>
            </section>
        </motion.div >
    )
}
export default EndPage