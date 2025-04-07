import React, { useState, useRef, useEffect } from 'react';
import FeatureItem from "./components/featureItem";
import { ClipboardCheck, CreditCard, LineChart, Users, FileBox, Settings, Bell } from "lucide-react";
import { CheckCircle, Percent, Banknote, Smartphone, Shield, FileText, Send } from "lucide-react";
import { motion } from "framer-motion";

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

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            <div className="w-full py-10 space-y-10 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
                {/* Hero Section with Animation */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"
                >
                    <div className="relative">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative">
                            Supervisor By Gryork
                        </h1>
                    </div>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Our AI-powered financing solution designed specifically for contractors and infrastructure projects
                    </p>
                    <motion.div
                        className="mt-8 h-1 w-32 bg-gradient-to-r from-green-400 to-[#268044] mx-auto rounded-full"
                        animate={{
                            width: ["0%", "32%", "24%", "32%"],
                            opacity: [0, 1]
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    ></motion.div>
                </motion.div>

                {/* Key Benefits Section with Staggered Animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 mb-12"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10 relative inline-block mx-auto"
                    >
                        <span className="relative z-10">Key Benefits</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 -z-10 rounded-lg"></span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-8 px-2">
                        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
                            <FeatureItem
                                icon={ClipboardCheck}
                                title="Smart attendance management"
                                description=""
                                reverse={false}
                                color="#268044"
                                hoverColor="#1a6330"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
                            <FeatureItem
                                icon={CreditCard}
                                title="Seamless Buld Payments"
                                description=""
                                reverse={true}
                                color="#206e3a"
                                hoverColor="#175229"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
                            <FeatureItem
                                icon={Bell}
                                title="Real Time bill checker"
                                description=""
                                reverse={false}
                                color="#2d9350"
                                hoverColor="#227a3e"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
                            <FeatureItem
                                icon={LineChart}
                                title="AI Powered Growth Insights"
                                description=""
                                reverse={true}
                                color="#268044"
                                hoverColor="#1a6330"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
                            <FeatureItem
                                icon={Users}
                                title="Instant Team Communication"
                                description=""
                                reverse={false}
                                color="#206e3a"
                                hoverColor="#175229"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="transform transition duration-300 hover:scale-105">
                            <FeatureItem
                                icon={FileBox}
                                title="Secure Digital Document Hub"
                                description=""
                                reverse={true}
                                color="#2d9350"
                                hoverColor="#227a3e"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="md:col-span-2 transform transition duration-300 hover:scale-105">
                            <FeatureItem
                                icon={Settings}
                                title="More AI-Powered Features"
                                description="Coming Soon !"
                                reverse={false}
                                color="#268044"
                                hoverColor="#1a6330"
                                highlight={true}
                            />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full text-center mt-12 bg-gradient-to-b from-gray-50 to-gray-100 py-14 shadow-inner relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNjgwNDQiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUtN2g0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS03IDExaDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTctMTFoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0tNyA5aDJ2MWgtMnYtMXptNC0xMWgydjFoLTJ2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-75"></div>
                    <div className="relative z-10">
                        <p className="text-3xl md:text-5xl font-medium text-gray-700 mb-6 drop-shadow-sm">
                            Explore more about <span className="text-[#268044]">Supervisor</span>
                        </p>
                        <motion.button
                            className="bg-[#268044] hover:bg-green-800 transition-all duration-300 text-white text-xl md:text-2xl px-12 md:px-16 py-3 rounded-[23px] shadow-lg hover:shadow-xl"
                            onClick={toggleDropdown}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isOpen ? "Show Less" : "Learn More"}
                        </motion.button>
                    </div>
                </motion.div>


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
        </>
    );
};

export default Supervisor;