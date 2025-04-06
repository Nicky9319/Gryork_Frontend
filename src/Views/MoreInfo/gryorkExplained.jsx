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
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-green-700 text-2xl font-bold mb-2">GRYORK explained</h2>
      <p className="text-gray-600 mb-8">
        GRYORK is an AI-powered technology platform transforming the infrastructure industry with smart, seamless solutions. Here's how we make it happen.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="flex gap-4 items-start p-4">
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
