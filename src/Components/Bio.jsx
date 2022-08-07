import { motion } from "framer-motion";
import '../App.scss';

const Bio = () => {
    return (
        <motion.div className="bio"
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
            <motion.p
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: .5 }}>
                Hi I'm Krisztián! I am from Hungary and currently I'm studying at the University of Pécs.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: .5 }}>
                My major is Computer Science, but graphic design is close to my heart, especially the area of visualizations.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: .5 }}>
                As I am still a student I'm trying to find my place in the world of programming, but I really like to work on front-end, back-end,
                UI/UX design, data visualisation and right now I'm trying to get my foot into game development as well.
                But you can find a common ground in all of my intrests, to make something that pleases the eye.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: .5 }}>
                I always loved to make art in any shape or form and that's where my intrest stems from.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: .5 }}>
                My main intrests are cooking, gaming, tattooing, working out and caring for my soulmate. My soulmate is none other than my cat.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: .5 }}>
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
    )
}
export default Bio