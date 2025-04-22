import SBDLogo from "./assets/SBDLogo.svg";
import Navbar from "./navbar";
import DMJ from "./dmj";
import OS from "./os";
import FOOTER from "./footer";
import WELCOME from "./Welcome";
import ABOUT from "./About";
import ACTIVITY from "./Activity";
import ASISSTANT from "./Assistant"

export default function App() {
  return (
    <div>
      <Navbar />
      <WELCOME />
      <ABOUT />
      <ACTIVITY />
      <ASISSTANT/>
      <div className="bg-customBlack w-full py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Course
        </h1>
      </div>
      <div id="sbd" className="min h-screen bg-customBlack text-white flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center">
          <img src={SBDLogo} alt="sbd-logo" className="h-66 w-64" />
          <div>
            <h1
              className="text-2xl  md:text-4xl font-bold text-white text-left ml-4"
            >
              Netlab SBD
            </h1>
            <div className="bg-black rounded-lg p-4 m-4">
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
      <DMJ />
      <OS />
      <FOOTER />
    </div>
  );
}
