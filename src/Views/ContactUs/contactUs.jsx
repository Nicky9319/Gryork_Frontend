import { useState, useRef } from 'react';
import {
  Building,
  User,
  FileText,
  ChevronRight,
} from 'lucide-react';

/** 1. Central config for all roles/options */
const roles = [
  {
    key: "I'm Contractor",
    label: "I'm Contractor",
    subtitle: 'Join as a contractor',
    continueText: 'Continue as Contractor',
    fields: [
      { type: 'input',    name: 'name',             label: 'Name',              icon: <User size={18} />,     placeholder: 'Enter your name' },
      { type: 'input',    name: 'company',          label: 'Company Name',      icon: <Building size={18} />, placeholder: 'Enter your company name' },
      { type: 'input',    name: 'emailOrMobileBumber',  label: 'Email Or Mobile Number', icon: <FileText size={18} />, placeholder: 'Enter email or number' },
      { type: 'textarea', name: 'feedback',         label: 'Feedback',          icon: <FileText size={18} />, placeholder: 'Enter your feedback' },
    ],
    submitText: 'Submit Contractor Info',
  },
  {
    key: "I'm a Worker",
    label: "I'm a Worker",
    subtitle: 'Join as a worker',
    continueText: 'Continue as Worker',
    fields: [
      { type: 'input',    name: 'name',             label: 'Name',              icon: <User size={18} />,     placeholder: 'Enter your name' },
      { type: 'input',    name: 'company',          label: 'Company Name',      icon: <Building size={18} />, placeholder: 'Enter your company name' },
      { type: 'input',    name: 'emailOrMobileBumber',  label: 'Email Or Mobile Number', icon: <FileText size={18} />, placeholder: 'Enter email or number' },
      { type: 'textarea', name: 'feedback',         label: 'Feedback',          icon: <FileText size={18} />, placeholder: 'Enter your feedback' },
    ],
    submitText: 'Submit Worker Info',
  },
  {
    key: 'Other',
    label: 'Other',
    subtitle: 'Other roles',
    continueText: 'Continue',
    fields: [
      { type: 'input',       name: 'name',             label: 'Name',              icon: <User size={18} />,     placeholder: 'Enter your name' },
      { type: 'multiselect', name: 'options',          label: 'Select Roles',      icon: <FileText size={18} />, options: ['Reference', 'Online', 'Others..'] },
      { type: 'input',    name: 'emailOrMobileBumber',  label: 'Email Or Mobile Number', icon: <FileText size={18} />, placeholder: 'Enter email or number' },
      { type: 'textarea',    name: 'feedback',         label: 'Feedback',          icon: <FileText size={18} />, placeholder: 'Enter your feedback' },
    ],
    submitText: 'Submit Info',
  },
];

/** 2. Renders a single option card */
function OptionCard({ role, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(role.key)}
      className={`
        flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200
        ${isSelected
          ? 'border-green-600 bg-green-50 shadow-md'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'}
      `}
    >
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <Building className="text-green-600 mr-2" size={20} />
          <span className="text-gray-800 font-medium">{role.label}</span>
        </div>
        <p className="text-gray-500 text-sm">{role.subtitle}</p>
      </div>
      <div className="w-5 h-5 rounded-full border border-green-600 flex items-center justify-center">
        {isSelected && <div className="w-3 h-3 rounded-full bg-green-600" />}
      </div>
    </div>
  );
}

/** 3a. Renders a single text input with icon */
function InputField({ field }) {
  return (
    <div className="form-field mb-5">
      <label className="text-black text-sm font-medium mb-2 block">
        {field.label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600">
          {field.icon}
        </div>
        <input
          name={field.name}
          type="text"
          placeholder={field.placeholder}
          className="w-full py-3 px-10 rounded-lg text-sm border border-gray-200 bg-white
                     focus:border-lime-300 focus:shadow-md transition-all duration-200"
        />
      </div>
    </div>
  );
}

/** 3b. Renders an auto‑growing textarea with icon and initial 4 rows */
function TextAreaField({ field }) {
  const ref = useRef(null);

  const autoGrow = () => {
    const ta = ref.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  };

  return (
    <div className="form-field mb-5">
      <label className="text-black text-sm font-medium mb-2 block">
        {field.label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-2 text-green-600">
          {field.icon}
        </div>
        <textarea
          ref={ref}
          name={field.name}
          placeholder={field.placeholder}
          rows={4}
          onInput={autoGrow}
          className="w-full py-3 pl-10 pr-3 rounded-lg text-sm border border-gray-200 bg-white
                     focus:border-lime-300 focus:shadow-md transition-all duration-200 resize-none overflow-hidden"
        />
      </div>
    </div>
  );
}

/** 3c. Renders a multi-select checkbox group stacked vertically */
function MultiSelectField({ field }) {
  const [roleCInput, setRoleCInput] = useState('');
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedRoles.includes(option)) {
      setSelectedRoles(selectedRoles.filter((role) => role !== option));
    } else {
      setSelectedRoles([...selectedRoles, option]);
    }
  };

  return (
    <div className="form-field mb-5">
      <label className="text-black text-sm font-medium mb-2 block">
        {field.label}
      </label>
      <div className="pl-2 flex flex-col">
        {field.options.map(option => (
          <label key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              name={field.name}
              value={option}
              className="form-checkbox h-4 w-4 text-green-600 transition duration-150"
              checked={selectedRoles.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <span className="ml-2 text-gray-700 text-sm">{option}</span>
          </label>
        ))}
        {selectedRoles.includes('Others..') && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Specify Others.."
              className="w-full py-2 px-3 rounded-lg text-sm border border-gray-200 bg-white focus:border-lime-300 focus:shadow-md transition-all duration-200"
              value={roleCInput}
              onChange={(e) => setRoleCInput(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/** 4. Container with decorative styling */
function FormCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto relative overflow-hidden">
      <div className="absolute w-full h-2 bg-[#268044] top-0 left-0" />
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center justify-center">
            <span className="inline-block w-1 h-6 bg-green-600 mr-3 rounded" />
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}

/** 5. Main component tying everything together */
export default function ContactUs() {
  const [selectedKey, setSelectedKey] = useState('');
  const [showFields, setShowFields]   = useState(false);
  const role = roles.find(r => r.key === selectedKey);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Join Our Network</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select your role and provide details to get started.
          </p>
        </div>

        <FormCard title="Select Your Role">
          {/* Option cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {roles.map(r => (
              <OptionCard
                key={r.key}
                role={r}
                isSelected={r.key === selectedKey}
                onSelect={k => { setSelectedKey(k); setShowFields(false); }}
              />
            ))}
          </div>

          {/* Continue button */}
          {role && !showFields && (
            <div className="continue-button-container max-w-md mx-auto">
              <button
                onClick={() => setShowFields(true)}
                className="w-full bg-green-600 text-white rounded-lg py-4 px-6 text-base font-medium flex items-center justify-center shadow-md hover:bg-green-700 transition-all duration-200 relative overflow-hidden"
              >
                {role.continueText}
                <ChevronRight size={20} className="ml-2" />
                <div className="btn-highlight absolute w-8 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 -left-8 transform skew-x-[-20deg] transition-all duration-500" />
              </button>
            </div>
          )}

          {/* Dynamic form */}
          {role && showFields && (
            <div className="form-fields-container max-w-2xl mx-auto mt-6 flex flex-col gap-6">
              {role.fields.map(field => {
                switch (field.type) {
                  case 'input':
                    return <InputField key={field.name} field={field} />;
                  case 'textarea':
                    return <TextAreaField key={field.name} field={field} />;
                  case 'multiselect':
                    return <MultiSelectField key={field.name} field={field} />;
                  default:
                    return null;
                }
              })}
              <button className="w-full bg-green-600 text-white rounded-lg py-4 px-6 text-base font-medium shadow-md hover:bg-green-700 transition-all duration-200 relative overflow-hidden">
                <div className="btn-highlight absolute w-8 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 -left-8 transform skew-x-[-20deg] transition-all duration-500" />
                {role.submitText}
              </button>
            </div>
          )}
        </FormCard>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes shine {
          0%   { left: -30px; }
          100% { left: 130%; }
        }
        .continue-button-container {
          animation: fadeIn 0.3s ease-out;
        }
        .form-fields-container {
          animation: slideDown 0.3s ease-out;
        }
        .form-field {
          animation: fadeIn 0.4s ease-out;
          animation-fill-mode: both;
        }
        button {
          animation: fadeIn 0.4s ease-out;
          animation-fill-mode: both;
        }
        button:hover .btn-highlight {
          opacity: 1;
          animation: shine 1.2s infinite;
        }
      `}</style>
    </div>
  );
}
