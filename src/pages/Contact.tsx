
import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect for business opportunities, partnerships, or thought leadership discussions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're looking to discuss investment opportunities, 
                  seek strategic advice, or explore potential partnerships, 
                  I'm always interested in connecting with like-minded innovators and leaders.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Inquiries</h3>
                  <p className="text-gray-600">philip.samuelraj@techjays.com</p>
                </div>
                
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Speaking Engagements</h3>
                  <p className="text-gray-600">Available for conferences, panels, and keynote presentations</p>
                </div>
                
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Media & Press</h3>
                  <p className="text-gray-600">media@techjays.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Location</span>
                  <span className="text-gray-900 font-medium">India</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Time Zone</span>
                  <span className="text-gray-900 font-medium">IST (GMT+5:30)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Languages</span>
                  <span className="text-gray-900 font-medium">English, Hindi</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Response Time</span>
                  <span className="text-gray-900 font-medium">24-48 hours</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">
                  For urgent matters, please include "URGENT" in your subject line. 
                  All inquiries are handled with complete confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
