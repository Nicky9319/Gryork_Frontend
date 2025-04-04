import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-lime-500 text-gray-800 py-16 px-[10%] flex flex-col">
      {/* First Row: Menu and Trust & Safety */}
      <div className="flex flex-wrap mb-10">
        {/* Left Column - Company Menu */}
        <div className="w-full md:w-[30%] mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white mb-5">Company</h2>
          <ul className="list-none">
            {[
              "Home",
              "Product",
              "Solutions",
              "Gryork explained",
              "Dispute resolution",
              "About us",
              "Help & support",
              "Contact us",
            ].map((item, index) => (
              <li key={index} className="mb-4">
                <a
                  href="#"
                  className="text-gray-800 text-lg hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Column - Trust & Safety Content */}
        <div className="w-full md:w-[70%]">
          <h2 className="text-2xl font-bold text-white mb-5">Trust & safety</h2>
          <p className="text-xl font-bold mb-5">You're Always Secure</p>
          <p className="text-lg leading-relaxed mb-6">
            At <span className="font-bold">GRYORK</span>, we are committed to
            building a safe and secure tech infrastructure that prioritizes your
            privacy and data protection at every level.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our cutting-edge security measures ensure that your information
            remains confidential and protected at all times.
          </p>
          <p className="text-lg leading-relaxed">
            Soon, we will be officially recognized by top government agencies
            for our industry-leading safety and security standards—giving you
            even more confidence in the platform you trust.
          </p>
        </div>
      </div>

      {/* Second Row: Social and Logo */}
      <div className="flex flex-wrap">
        {/* Social Column */}
        <div className="w-full md:w-[50%] mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white mb-5">Social</h2>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="bg-gray-800 text-white w-10 h-10 rounded-full flex justify-center items-center"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-800 text-white w-10 h-10 rounded-full flex justify-center items-center"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-800 text-white w-10 h-10 rounded-full flex justify-center items-center"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Logo Column */}
        <div className="w-full md:w-[50%] flex justify-end items-center text-right">
          <div className="text-[60px] font-bold text-white">GRYORK</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
