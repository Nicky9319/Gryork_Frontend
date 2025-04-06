import FeatureItem from "./components/featureItem";
import { CheckCircle, Percent, Banknote, Smartphone, Shield, FileText, Send } from "lucide-react";

import TopicHighlightCard from "./components/topicHighlightCard";

const CWC = () => {
  return (
    <div className="w-full py-10 space-y-10">


      {/* <TopicHighlightCard /> */}


      <FeatureItem
        icon={Send}
        title="AI-powered Credit Approval"
        reverse={false}
      />
      <FeatureItem
        icon={FileText}
        title="Direct payments to workers"
        reverse={true}
      />
      <FeatureItem
        icon={CheckCircle}
        title="Auto Deduction & Guaranteed repayments"
        reverse={false}
      />
      <FeatureItem
        icon={Shield}
        title="Smart Interest Optimisation"
        reverse={true}
      />
      <FeatureItem
        icon={Percent}
        title="NBFC & Bank collaboration"
        reverse={false}
      />
      <FeatureItem
        icon={Banknote}
        title="Fully digital loan journey"
        reverse={true}
      />
      <FeatureItem
        icon={Smartphone}
        title="Faster, Smarter Financing with AI"
        reverse={false}
      />

      <br /><br />

      <div className="w-full text-center mt-16">
        <p className="text-[40px] font-medium text-gray-700 mb-4">Explore more about CWC</p>
        <button className="bg-green-700 text-white text-sm px-6 py-2 rounded-full">learn more</button>
      </div>
    </div>
  );
};

export default CWC;
