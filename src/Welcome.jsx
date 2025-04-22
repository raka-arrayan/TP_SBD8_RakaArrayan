import network from './assets/Network.png';

export default function Welcome() {
  return (
    <section
      id = 'home'className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
      style={{ backgroundImage: `url(${network})` }}
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to</h1>
        <h2 className="text-2xl md:text-4xl font-semibold">Website Network Laboratory</h2>
        <h3 className="text-xl md:text-3xl mt-2">Universitas Indonesia</h3>
      </div>
    </section>
  );
}
