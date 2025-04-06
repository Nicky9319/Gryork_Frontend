import React from "react";
import Section from "./components/Section";
import Item from "./components/Item";

const Grylink = () => {
  return (
    <div className="bg-white text-gray-800 p-16 w-full h-full">
      <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mb-8 cursor-pointer">
        <span className="text-xl">←</span>
      </div>

      <div className="bg-gradient-to-r from-lime-300 to-green-600 text-gray-900 rounded-lg overflow-hidden mb-12 flex flex-col md:flex-row">
        <div className="flex-1 p-8 bg-lime-300">
          <h2 className="text-2xl font-semibold mb-4">What is GRYLINK?</h2>
          <p className="text-lg leading-relaxed">
            GRYLINK is an AI-powered SaaS platform that helps companies in the
            infrastructure space manage contractor data and streamline Credit
            on Working Capital (CWC) approvals.
          </p>
        </div>
        <div className="flex-1 p-8 bg-green-600 text-white">
          <h2 className="text-2xl font-semibold mb-4">Why GRYLINK?</h2>
          <ul className="list-none space-y-4 text-lg">
            <li>Faster CWC processing</li>
            <li>Reduced manual work</li>
            <li>Smarter, data-backed decisions</li>
            <li>Easy to integrate and scale</li>
          </ul>
        </div>
      </div>

      <Section
        title="Digital Contractor Onboarding"
        icon="📋"
        items={[
          "Centralize and manage all contractor records — bills, project history, and performance — in one place.",
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Item
          icon="📝"
          title="Smart CWC Requests"
          description="Contractors can request credit through a simple digital form, sent directly to the company."
        />
        <Item
          icon="⚙️"
          title="AI-Based Evaluation"
          description="GRYLINK auto-analyzes past data and presents key insights to help companies make faster, data-driven decisions."
        />
      </div>
    </div>
  );
};

export default Grylink;