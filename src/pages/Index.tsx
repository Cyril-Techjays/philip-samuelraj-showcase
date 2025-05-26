
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative">
            {/* Marquee Text */}
            <div className="overflow-hidden whitespace-nowrap mb-8">
              <div className="animate-marquee inline-block text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-900 tracking-tight">
                Philip Samuelraj — Philip Samuelraj — Philip Samuelraj — 
              </div>
            </div>

            {/* Right Side Text */}
            <div className="absolute top-0 right-0 text-right">
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 leading-relaxed">
                <div>Innovator</div>
                <div className="text-gray-500">|</div>
                <div>Investor</div>
                <div className="text-gray-500">|</div>
                <div>Leader</div>
              </div>
            </div>

            {/* CEO Title */}
            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4">
                Chief Executive Officer
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Driving innovation and growth through strategic leadership, 
                technology investments, and transformative business solutions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
