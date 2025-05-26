
import Navigation from "@/components/Navigation";

const Hobbies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hobbies & Interests
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Exploring passion projects and personal interests beyond the boardroom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-xl mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Photography</h3>
                <p className="text-gray-600 leading-relaxed">
                  Capturing moments and perspectives through the lens, focusing on urban landscapes and architectural details.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-xl mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Chess</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic thinking and pattern recognition through competitive chess playing and tournament participation.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-xl mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Travel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Exploring different cultures and business ecosystems across global markets and emerging economies.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-xl mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Reading</h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous learning through biographies, business strategy books, and emerging technology research.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-xl mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Mentoring</h3>
                <p className="text-gray-600 leading-relaxed">
                  Guiding young entrepreneurs and sharing insights on leadership, innovation, and business development.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-xl mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cooking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experimenting with international cuisines and exploring the intersection of creativity and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hobbies;
