import React from "react";
// Updated import path for Card and CardContent
import { Card, CardContent } from "../../components/ui/card";

import { CheckCircle, Users, Truck, DollarSign, ShieldCheck, Briefcase, Link2 } from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "AI–Driven workforce management",
    description: "Streamline operations with intelligent tools that simplify hiring, deployment, and tracking.",
  },
  {
    icon: <Truck className="w-6 h-6 text-green-600" />,
    title: "On–Demand hiring",
    description: "Access skilled labor exactly when you need it – faster, smarter, and hassle-free.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: "Timely & Transparent payments",
    description: "Ensure every worker is paid on time with fair and transparent payment systems.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "Fair wage assurance",
    description: "We advocate for equitable pay, eliminating the issue of low wages in the sector.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-green-600" />,
    title: "Job security for workers",
    description: "We’re building trust and stability with consistent opportunities and structured workflows.",
  },
  {
    icon: <Link2 className="w-6 h-6 text-green-600" />,
    title: "Solving the skilled labour shortage",
    description: "Connecting contractors with verified, skilled professionals to bridge the talent gap.",
  },
];

export default function GryorkExplanation() {
  return (
    <div className="w-full pl-10 pr-6 pt-15 pb-25">
      <h2 className="text-green-700 text-6xl font-bold mb-2 pb-5">GRYORK Explained</h2>
      <p className="text-gray-600 text-[22px] mb-8 pl-3 mb-15">
        GRYORK is an AI-powered technology platform transforming the infrastructure industry with smart, seamless solutions. Here's how we make it happen.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pr-10">
        {features.map((feature, index) => (
          <Card key={index} className="shadow-md transform transition-transform hover:scale-102">
            <CardContent className="flex gap-4 items-start">
              <div className="flex flex-col justify-center items-start">
              <div className="flex items-center gap-4 mb-3">
                {React.cloneElement(feature.icon, { className: "w-10 h-10 text-green-600" })}
                <h3 className="text-[30px] font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <div className="mb-5">
                <p className="text-[15px] text-gray-600 ml-13">{feature.description}</p>
              </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
