import { motion } from "framer-motion";
import '../App.scss';

const Bio = () => {
    return (
        <motion.div className="pages biopage" id="bio">
            
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 1080"
                style={{
                    enableBackground: "new 0 0 960 540",
                    position: 'absolute',
                    top: 0
                }}
                xmlSpace="preserve">
                <motion.path
                    d="M1120.6-.5c-42.6 89.2-69.9 258.2-24 262.2 62.7 5.3 197.9 60.3 260.6 66.9 62.5 6.6 125.3-17.4 187.8-15.9 62.7 1.5 124.9 28.3 187.5 39 62.5 10.7 125.3 5.4 156.7 2.6l31.4-2.6V-.5h-800z"
                    style={{ fill: "#1cabbf", }}
                />
                <motion.path
                    d="M365.7-.5v101.2c27.2-1.6 162.1 71.4 295 88 32 4 129.8-2.9 157-19 21-12.4 36.4 3 99.6 50 49.1 36.5 109.5 54.9 170.6 51 25.5-1.6 50.9-5.3 76.3-10.1 63.1-12.1 125.8-31.7 188.9-41.7 63-9.8 126.2-9.8 189.2 5 63.1 14.8 125.8 44.5 188.9 40.4 63-3.9 126.2-41.7 157.8-60.5l31.6-18.9V-.5H365.7z"
                    style={{ fill: "#198c9f", }}
                />
                <motion.path
                    d="m568.3-.5-.7 102.2 33.3 15.3c32.3 14.6 96.9 43.9 161.2 62.9 64.4 19 128.4 27.6 192.9 25.5 64.3-1.9 128.9-14.6 193.2-27.7 64.4-13.3 128.4-27 192.9-20.5 64.3 6.7 128.9 33.6 193.2 41.3 64.5 7.8 128.4-3.6 192.9-12.6 64.3-9 128.9-15.2 161.2-18.4l32.3-3.1V-.5H568.3z"
                    style={{ fill: "#166f7f", }}
                />
                <motion.path
                    d="M605.7-.5v96.3l31.4-3.6c31.4-3.5 94.2-10.7 156.8-18.2 62.7-7.4 124.9-15 187.6-15 62.5 0 125.4 7.6 187.9 23.1 62.7 15.3 124.9 38.5 187.6 47.2 62.5 8.9 125.4 3.3 187.9-3 62.7-6.3 124.9-13.5 187.6-10.7 62.5 2.8 125.4 15.3 156.8 21.8l31.4 6.3V-.5h-1315z"
                    style={{ fill: "#125360", }}
                />
                <motion.path
                    d="M.7-.5v115.2l45.8-3.1c45.9-3.4 137.6-9.7 228.9-8.2 91.5 1.7 182.4 11.4 273.9 1.2 91.3-9.9 183-39.8 274.3-56.7C915.1 31 1006 27.1 1097.5 35.8c91.3 8.9 183 30.7 274.4 32.6 91.5 2.2 182.4-15.7 273.9-14.5 91.3 1.2 183 21.5 228.9 31.4l45.9 10.1V-.5H.7z"
                    style={{ fill: "#0d3943", }}
                />
            </motion.svg>
            <motion.div className="bio"
            
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>
                    
                <motion.p
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .5 }}
                    className="m-size">
                    Hi I'm Krisztián! I am from Hungary and currently I'm studying programming at the University of Pécs.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .5 }}>
                    My major is Computer Science, but graphic design is also close to my heart.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .5 }}>
                    As I am still a student I'm trying to find my place in the world of programming, but I really like to work on front-end, back-end,
                    UI/UX design, data visualisation and right now I'm trying to get my foot into game development projects as well.
                    But you can find a common ground in all of these, to make something that pleases the eye.
                    I always loved to make art in any shape or form and that's where my love for art stems from.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .5 }}>
                    My main intrests are cooking, gaming, tattooing, working out and caring for my soulmate. My soulmate is none other than my cat.
                    Her name is Yumi and ever since I've got her we have been very close to each other.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: .5 }}>
                    Well that would be me in short.Thank you for reading it trough! :)
                </motion.p>
            </motion.div>
        </motion.div>
    )
}
export default Bio