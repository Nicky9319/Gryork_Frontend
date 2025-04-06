import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#268044] text-white py-16 px-[10%] flex flex-col h-[850px] justify-between">
      {/* First Row: Menu and Trust & Safety */}
      <div className="flex flex-wrap mb-5">
        {/* Left Column - Company Menu */}
        <div className="w-full md:w-[30%] mb-6 md:mb-0">
          <h2 className="text-4xl font-bold text-[#CFF063] mb-8">Company</h2>
          <ul className="list-none space-y-6">
            {[
              "Home",
              "Product",
              "Gryork explained",
              "Dispute resolution",
              "About us",
              "Help & support",
            ].map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="text-white text-2xl hover:text-gray-200 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Column - Trust & Safety Content */}
        <div className="w-full md:w-[70%]">
          <h2 className="text-4xl font-bold text-[#CFF063] mb-8">Trust & safety</h2>
          <p className="text-3xl font-bold mb-8 text-white">You're Always Secure</p>
          <p className="text-2xl leading-relaxed mb-8 text-white">
            At <span className="font-bold">GRYORK</span>, we are committed to
            building a safe and secure tech infrastructure that prioritizes your
            privacy and data protection at every level.
          </p>
          <p className="text-2xl leading-relaxed mb-8 text-white">
            Our cutting-edge security measures ensure that your information
            remains confidential and protected at all times.
          </p>
          <p className="text-2xl leading-relaxed text-white">
            Soon, we will be officially recognized by top government agencies
            for our industry-leading safety and security standards—giving you
            even more confidence in the platform you trust.
          </p>
        </div>
      </div>

      {/* Second Row: Social and Logo */}
      <div className="flex flex-wrap mt-32">
        {/* Social Column */}
        <div className="w-full md:w-[50%] mb-6 md:mb-0">
          <h2 className="text-4xl font-bold text-[#CFF063] mb-8">Social</h2>
          <div className="flex gap-6 mt-4">
            <a
              href="#"
              className="bg-[#CFF063] text-[#268044] w-14 h-14 rounded-full flex justify-center items-center"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="#"
              className="bg-[#CFF063] text-[#268044] w-14 h-14 rounded-full flex justify-center items-center"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              className="bg-[#CFF063] text-[#268044] w-14 h-14 rounded-full flex justify-center items-center"
            >
              <FaLinkedinIn size={28} />
            </a>
          </div>
        </div>

        {/* Logo Column */}
        <div className="w-full md:w-[50%] flex justify-end items-center text-right">
          <div className="text-[120px] font-bold text-[#CFF063]">GRYORK</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
