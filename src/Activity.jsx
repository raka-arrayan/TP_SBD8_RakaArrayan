export default function Activity() {
  return (
    <section id="activity" className="bg-black text-white py-12 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Activity</h1>
        <p className="text-lg md:text-xl mb-10">
          Some of the activities carried out by the Network Laboratory.
        </p>
        <div className="grid grid-cols-1 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">NetDevelopment</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo risus in magna ultrices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">NetTraining</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo risus in magna ultrices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">OpenRecruitment</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo risus in magna ultrices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
