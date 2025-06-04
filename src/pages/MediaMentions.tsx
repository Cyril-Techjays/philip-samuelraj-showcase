
import Navigation from "@/components/Navigation";

const MediaMentions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Media Mentions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Featured insights and thought leadership across leading publications
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 md:mb-0">
                  "Techjays Interviews"
                </h3>
                <span className="text-gray-500 font-medium">Forbes</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                An in-depth interview discussing the evolution of technology leadership and strategic innovation in the digital age.
              </p>
              <span className="text-sm text-gray-400">December 2024</span>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 md:mb-0">
                  "Investment Strategies for Emerging Markets"
                </h3>
                <span className="text-gray-500 font-medium">TechCrunch</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Insights on identifying and nurturing high-potential startups in emerging technology sectors.
              </p>
              <span className="text-sm text-gray-400">November 2024</span>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 md:mb-0">
                  "Building Sustainable Tech Companies"
                </h3>
                <span className="text-gray-500 font-medium">Harvard Business Review</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                A comprehensive analysis of sustainable business practices in the technology industry.
              </p>
              <span className="text-sm text-gray-400">October 2024</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MediaMentions;
