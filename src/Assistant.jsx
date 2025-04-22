export default function Assistant() {
  return (
    <section id="assistant" className="bg-black text-white min-h-screen flex flex-col justify-center py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Laboratory Assistant</h1>
          <p className="text-lg md:text-xl text-gray-300">
            List of Research Assistants & Laboratory Practicums
          </p>
        </div>

        {/* Avatar Grid 4 Cols 1 Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-md">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Assistant 1"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">Assistant Name 1</h2>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-md">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Assistant 2"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">Assistant Name 2</h2>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-md">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Assistant 3"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">Assistant Name 3</h2>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-md">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Assistant 4"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">Assistant Name 4</h2>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}
