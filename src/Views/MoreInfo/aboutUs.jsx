import React from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const solutions = [
  {
    title: "CWC bill payment",
    description: "On-time worker payouts ensure financial stability.",
  },
  {
    title: "Smart labor matching",
    description: "Helps subcontractors find the right talent fast.",
  },
  {
    title: "Transparent systems",
    description: "Enable fair pricing and better negotiations.",
  },
  {
    title: "AI-powered platform",
    description: "Built for modern workforce management.",
  },
  {
    title: "Streamlined operations",
    description: "Reduce friction, errors, and delays.",
  },
];

const problems = [
  {
    title: "Delayed Payments",
    description: "Subcontractors struggle to pay workers on time.",
  },
  {
    title: "Skilled Labor Shortage",
    description: "Hiring skilled labor when needed is difficult.",
  },
  {
    title: "Unfair Rates",
    description: "Fair rates are hard to secure without strong connections.",
  },
  {
    title: "Industry Challenges",
    description: "Low wages, job insecurity, and a shortage of skilled workers.",
  },
  {
    title: "Undervalued Sector",
    description: "Construction is often overlooked and undervalued.",
  },
];

const AboutUsSection = () => {
  return (
    <div className="w-full px-6 py-12 text-gray-800 pl-10 pr-10">
      <h2 className="text-6xl font-semibold text-green-600 mb-12">About us</h2>

      <div className="flex flex-col lg:flex-row items-start">
        {/* Left Section: Problems */}
        <div className="w-full lg:w-1/2 border-r border-gray-500 pb-10">
          <h3 className="text-[40px] font-semibold mb-6">🛠️ Problem</h3>
          <div className="space-y-6 w-[95%] ml-0">
            {problems.map((problem, index) => (
              <Card key={index} className="shadow-md transform transition-transform hover:scale-102">
                <CardContent>
                  <h4 className="text-[30px] font-semibold text-gray-800 mb-2">{problem.title}</h4>
                  <p className="text-gray-600 text-[20px]">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Section: Solutions */}
        <div className="w-full lg:w-1/2 border-l border-gray-500 pb-10">
          <h3 className="text-[40px] font-semibold mb-6 ml-[3%] ">💡 GRYORK Solution</h3>
          <div className="space-y-6 w-[93y%] ml-[5%] ">
            {solutions.map((solution, index) => (
              <Card key={index} className="shadow-md transform transition-transform hover:scale-102">
                <CardContent>
                  <h4 className="text-[30px] font-semibold text-gray-800 mb-2">{solution.title}</h4>
                  <p className="text-gray-600 text-[20px]">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
