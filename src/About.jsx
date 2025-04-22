import Netlab from "./assets/learnnetlab.png";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Netlab}
            alt="Netlab"
            className="rounded-xl shadow-lg w-full h-auto max-w-md object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-1xl font-sans mb-4">About us</h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Network Laboratory
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            <Typewriter
              words={[
                "We're kicking off at the Network Laboratory, and the excitement is in the air! Gear up, stay curious, and get ready to turn theory into practice.",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
