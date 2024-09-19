import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Space_Grotesk } from "@next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12">
      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 ">
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src={"/assets/images/logo.png"}
            width={120}
            height={40}
            alt="Logo"
          />
          <p className={"text-sm " + space_grotesk.className}>
            Join us for a unique journey, where the future meets the present in
            extraordinary ways.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="w-6 h-6 hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg  mb-4 tracking-widest">Quick Links</h4>
          <ul className={"space-y-3 text-sm " + space_grotesk.className}>
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-gray-400">
                Events
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg  mb-4 tracking-widest">Resources</h4>
          <ul className={"space-y-3 text-sm " + space_grotesk.className}>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg  mb-4 tracking-widest">Contact Us</h4>
          <div className={space_grotesk.className}>
            <p className="text-sm">
              1234 SpiderVerse Ave <br />
              New York, NY 10001
            </p>
            <p className="mt-3">
              <a href="tel:+123456789" className="hover:text-gray-400">
                +1 (234) 567-8901
              </a>
            </p>
            <p>
              <a
                href="mailto:info@spiderverse.com"
                className="hover:text-gray-400"
              >
                info@spiderverse.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-center items-center border-t border-gray-700 mt-12 py-4 text-center text-sm">
        <p className={"mr-5 " + space_grotesk.className}>See y'all on 28th September</p>
        <Image
          src={"/assets/images/spider-web.png"}
          width={20}
          height={20}
        ></Image>
      </div>
    </footer>
  );
};

export default Footer;
