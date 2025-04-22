import Netlab from './assets/learnnetlab.png';

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="w-full h-screen bg-black flex items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl">
          This laboratory is not only for teaching and learning activities but also for building trust in each other
        </h1>
      </div>

      <div className="w-full bg-white text-black py-10 px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={Netlab} alt="Netlab" className="w-80 rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-2xl font-bold mb-2 text-right">History</h2>
          <p className="text-lg text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci non elit ornare tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
}
