
import Navigation from "@/components/Navigation";
import WorldAnimation from "@/components/WorldAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechjaysOverview = () => {
  const companyDetails = [
    {
      title: "Founded",
      content: "2020, Menlo Park, California"
    },
    {
      title: "Mission",
      content: "Build the world's best AI products, apps, and solutions"
    },
    {
      title: "Global Reach",
      content: "Delivered 150+ projects across 7 countries"
    },
    {
      title: "Client Trust",
      content: "65+ satisfied clients served across 15+ industries"
    },
    {
      title: "Team Strength",
      content: "170+ skilled professionals"
    },
    {
      title: "Strategic Partnerships",
      content: "Google Cloud, AWS, IBM"
    },
    {
      title: "Certifications",
      content: "ISO 27001, ISO 9001"
    },
    {
      title: "Industry Coverage",
      content: "Deep domain knowledge across healthcare, finance, retail, logistics, and more"
    },
    {
      title: "Value Proposition",
      content: "Combining cutting-edge technology with industry insight to deliver real business impact"
    },
    {
      title: "Client Approach",
      content: "Agile, transparent, and centered on long-term success"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
        
        <WorldAnimation />

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyDetails.map((detail, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {detail.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {detail.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechjaysOverview;
