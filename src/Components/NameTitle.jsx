import { motion } from "framer-motion";
import '../App.scss';
import TypedKr from "./TypedKr";

const NameTitle = () => {
    const svgAnimate={
        off:{opacity: 0, y: -100,},
        on:{opacity: 1, y: 0}
    }
    return (
        <motion.div className="pages waves">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1080"
                style={{
                    enableBackground: "new 0 0 960 540",
                    position: 'absolute',
                    bottom: 0
                }}
                xmlSpace="preserve"
            >
                <path
                    d="M800 1080.1c42.6-89.2 69.9-258.2 24-262.2-62.7-5.3-197.9-60.3-260.6-66.9-62.5-6.6-125.3 17.4-187.8 15.9-62.6-1.5-124.9-28.3-187.5-39-62.5-10.7-125.3-5.4-156.7-2.6L0 727.9v352.2h800z"
                    style={{
                        fill: "#fa7268",
                    }}
                />
                <path
                    d="M1555 1080.1V978.9c-27.2 1.6-162.1-71.4-295-88-32-4-129.8 2.9-157 19-21 12.4-36.4-3-99.6-50-49.1-36.5-109.5-54.9-170.6-51-25.5 1.6-50.9 5.3-76.3 10.1-63.1 12.1-125.8 31.7-188.9 41.7-63 9.8-126.2 9.8-189.2-5-63.1-14.8-125.8-44.5-188.9-40.4-63 3.9-126.2 41.7-157.8 60.5L0 894.6V1080h1555z"
                    style={{
                        fill: "#ef5f67",
                    }}
                />
                <path
                    d="m1352.3 1080.1.7-102.2-33.3-15.3c-32.3-14.6-96.9-43.9-161.2-62.9-64.4-19-128.4-27.6-192.9-25.5-64.3 1.9-128.9 14.6-193.2 27.7-64.5 13.3-128.4 27-192.9 20.5-64.3-6.7-128.9-33.6-193.2-41.3-64.5-7.8-128.4 3.6-192.9 12.6-64.3 9-128.9 15.2-161.2 18.4L0 915.2v164.9h1352.3z"
                    style={{
                        fill: "#e34c67",
                    }}
                />
                <path
                    d="M1315 1080.1v-96.3l-31.4 3.6c-31.4 3.5-94.2 10.7-156.8 18.2-62.7 7.4-124.9 15-187.6 15-62.5 0-125.4-7.6-187.9-23.1-62.7-15.3-124.9-38.5-187.6-47.2-62.5-8.9-125.4-3.3-187.9 3-62.7 6.3-124.9 13.5-187.6 10.7-62.5-2.8-125.4-15.3-156.8-21.8L0 935.9v144.2h1315z"
                    style={{
                        fill: "#d53867",
                    }}
                />
                <path
                    d="M1920 1080.1V964.9l-45.8 3.1c-45.9 3.4-137.6 9.7-228.9 8.2-91.5-1.7-182.4-11.4-273.9-1.2-91.3 9.9-183 39.8-274.3 56.7-91.5 16.9-182.4 20.8-273.9 12.1-91.3-8.9-183-30.7-274.4-32.6-91.5-2.2-182.4 15.7-273.9 14.5-91.3-1.2-183-21.5-228.9-31.4L0 984.2v95.9h1920z"
                    style={{
                        fill: "#c62368",
                    }}
                />
            </svg>
            <div className="name">
                <p className="cursor"><TypedKr /></p>
                <motion.p initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="cd">
                    <b>Creative</b> <a className="kr">Developer,</a>
                </motion.p>
                <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 5 }} transition={{ delay: 2.5 }} className="cd ">
                    <a className="kr">Student</a>
                </motion.p>
            </div>
        </motion.div>
    )
}
export default NameTitle