import { motion } from "framer-motion";
import SBDLogo from "./assets/SBDLogo.svg";
import Navbar from "./navbar";
import DMJ from "./dmj";
import OS from "./os";
import FOOTER from "./footer";
import WELCOME from "./Welcome";
import ABOUT from "./About";
import ACTIVITY from "./Activity";
import ASISSTANT from "./Assistant";

export default function App() {
  return (
    <div>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <WELCOME />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <ABOUT />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <ACTIVITY />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <ASISSTANT />
      </motion.div>

      <div className="bg-black w-full py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Course
        </h1>
      </div>
      <div
        id="sbd"
        className="min h-screen bg-black text-white flex flex-col justify-center items-center"
      >
        <div className="flex flex-col md:flex-row items-center">
          <img src={SBDLogo} alt="sbd-logo" className="h-66 w-64" />
          <div>
            <h1 className="text-2xl  md:text-4xl font-bold text-white text-left ml-4">
              Netlab SBD
            </h1>
            <div className="bg-gray-900 rounded-lg p-4 m-4">
              <p className="text-md md:text-lg text-white max-w-4xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate neque beatae molestias adipisci, perferendis
                architecto optio blanditiis! Rerum
              </p>
              <p className="text-md md:text-lg text-white max-w-4xl">
                porro esse quis recusandae eveniet consequatur doloribus cum
                harum, fuga facere odio! Dolores voluptatibus, animi quos
                voluptatum officiis doloremque aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <DMJ />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <OS />
      </motion.div>
      <FOOTER />
    </div>
  );
}
