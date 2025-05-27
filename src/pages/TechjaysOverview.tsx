import Navigation from "@/components/Navigation";
import WorldAnimation from "@/components/WorldAnimation";
const TechjaysOverview = () => {
  return <div className="min-h-screen" style={{
    background: `
          radial-gradient(ellipse at 30% 20%, rgba(147, 51, 234, 0.08) 0%, transparent 40%),
          radial-gradient(ellipse at 70% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 40%),
          radial-gradient(ellipse at 50% 50%, rgba(236, 72, 153, 0.04) 0%, transparent 60%),
          linear-gradient(to bottom right, #f9fafb, #f3f4f6)
        `
  }}>
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-7xl px-0 mx-[51px] py-0">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Techjays Overview
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading technological innovation and digital transformation across the globe
            </p>
          </div>
        </div>
        
        {/* World Animation Section positioned directly under the intro text */}
        <WorldAnimation />

        {/* Grid Section moved below the GSAP map */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovation Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Driving cutting-edge technology solutions and fostering a culture of innovation across global markets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Developing long-term strategies for sustainable growth and market leadership worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Team Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                Building and leading high-performing teams across global markets and diverse cultures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Presence</h3>
              <p className="text-gray-600 leading-relaxed">
                Establishing strong partnerships and operations across USA, Canada, UK, UAE, India, Bangladesh, and Australia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Leveraging artificial intelligence to revolutionize business processes and create intelligent solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Future Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneering next-generation technologies and preparing for the digital transformation of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default TechjaysOverview;