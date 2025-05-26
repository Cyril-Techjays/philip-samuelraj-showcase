
import Navigation from "@/components/Navigation";

const InvestmentPortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Investment Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic investments in emerging technologies and high-growth ventures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-gray-900">Investment Focus Areas</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Startups</h3>
                  <p className="text-gray-600">Early-stage investments in disruptive technology companies.</p>
                </div>
                
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
                  <p className="text-gray-600">Strategic investments in artificial intelligence solutions.</p>
                </div>
                
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Tech</h3>
                  <p className="text-gray-600">Green technology and sustainable innovation investments.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Portfolio Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-900 font-medium">Active Investments</span>
                  <span className="text-2xl font-bold text-gray-900">25+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-900 font-medium">Industries</span>
                  <span className="text-2xl font-bold text-gray-900">8</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-900 font-medium">Geographic Reach</span>
                  <span className="text-2xl font-bold text-gray-900">Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentPortfolio;
