import React, { useState, useRef, useEffect } from 'react';
import FeatureItem from "./components/featureItem";
import { ClipboardCheck, CreditCard, LineChart, Users, FileBox, Settings, Bell } from "lucide-react";

const Supervisor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full py-10 space-y-10">
            <FeatureItem
                icon={ClipboardCheck}
                title="Smart attendance management"
                reverse={false}
            />
            <FeatureItem
                icon={CreditCard}
                title="Seamless bulk payments"
                reverse={true}
            />
            <FeatureItem
                icon={Bell}
                title="Real-time bill tracker"
                reverse={false}
            />
            <FeatureItem
                icon={LineChart}
                title="AI-powered growth insight"
                reverse={true}
            />
            <FeatureItem
                icon={Users}
                title="Instant team communication"
                reverse={false}
            />
            <FeatureItem
                icon={FileBox}
                title="Secure digital document hub"
                reverse={true}
            />
            <FeatureItem
                icon={Settings}
                title="AI-powered features"
                reverse={false}
            />

            <br /><br />

            <div className="w-full text-center mt-16">
                <p className="text-[60px] font-medium text-gray-700 mb-4">Explore more about SuperVisor</p>
                <button
                    className="bg-[#268044] hover:bg-green-800 transition-colors text-white text-[25px] px-6 py-2 rounded-[23px] px-20 mb-20"
                    onClick={toggleDropdown}
                >
                    {isOpen ? "show less" : "learn more"}
                </button>
            </div>

            <div
                className="overflow-hidden transition-all duration-500 ease-in-out mb-20"
                style={{ height: height, opacity: height ? '1' : '0', marginTop: height ? '2rem' : '0' }}
            >
                <div ref={contentRef} className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-12 w-full max-w-[1440px] mx-auto rounded-3xl shadow-2xl font-sans text-gray-800">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 leading-tight">
                        SuperVisor by <span className="text-blue-600">Gryork</span> – Smart Management Platform
                    </h1>

                    <ul className="space-y-10">
                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                Gryork's SuperVisor offers a comprehensive management solution for contractors and businesses,
                                streamlining operations and enhancing productivity through AI-powered tools.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Smart Attendance Management</span> – Digitally track and manage worker attendance with automated reports and insights.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Seamless Bulk Payments</span> – Process multiple payments at once, saving time and reducing administrative overhead.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Real-time Bill Tracker</span> – Instantly view and manage bill statuses, ensuring financial clarity and improved cash flow management.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">AI-powered Growth Insights</span> – Leverage data analytics to identify trends, opportunities, and areas for improvement in your business.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Instant Team Communication</span> – Keep your entire team connected with built-in messaging and notification systems.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Secure Digital Document Hub</span> – Store, organize, and access important documents in one centralized, secure location.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                With continuous AI-driven improvements and new features on the horizon, SuperVisor evolves with your business needs!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>




            <div
                className="overflow-hidden transition-all duration-500 ease-in-out mb-20"
                style={{ height: height, opacity: height ? '1' : '0', marginTop: height ? '2rem' : '0' }}
            >
                <div ref={contentRef} className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-12 w-full max-w-[1440px] mx-auto rounded-3xl shadow-2xl font-sans text-gray-800">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 leading-tight">
                        SuperVisor by <span className="text-blue-600">Gryork</span> – Smart Management Platform
                    </h1>

                    <div className="text-xl leading-relaxed max-w-5xl mx-auto text-center text-gray-700 mb-12">
                        <p>
                            <span className="font-semibold text-gray-900">
                                "Work smarter with GRYORK – featuring SUPERVISOR, the AI-powered tool designed for subcontractors that replaces paperwork,
                                automates tasks, and brings your entire workflow to your fingertips!"
                            </span>
                        </p>
                    </div>

                    <ul className="space-y-10 max-w-5xl mx-auto">
                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                Gryork's SuperVisor offers a comprehensive management solution for contractors and businesses,
                                streamlining operations and enhancing productivity through AI-powered tools.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Smart Attendance Management</span> – Digitally track and manage worker attendance with automated reports and insights.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Seamless Bulk Payments</span> – Process multiple payments at once, saving time and reducing administrative overhead.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Real-time Bill Tracker</span> – Instantly view and manage bill statuses, ensuring financial clarity and improved cash flow management.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">AI Growth Insights</span> – Get AI-driven monitoring of your workers' progress and development.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Instant Team Communication</span> – Broadcast messages and create a seamless channel between contractors and workers for efficient collaboration.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                <span className="font-semibold text-yellow-600">Secure Digital Document Hub</span> – Store and access all essential documents in one secure location.
                            </p>
                        </li>

                        <li className="flex items-start gap-5">
                            <span className="text-green-500 text-3xl pt-1">•</span>
                            <p className="text-xl leading-relaxed">
                                With continuous AI-driven improvements and new features on the horizon, SuperVisor evolves with your business needs!
                                <br />
                                <span className="italic text-gray-600">And this is just the beginning—stay tuned for more powerful updates!</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Supervisor;