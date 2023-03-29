import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-[300px] text-[#b3b3b3] flex justify-center">
      <hr />
      <div className="text-center p-5 ">
        <h4 className="text-left">
          Questions? Call
          <a href="tel:+0800-509-417" className="underline pl-1 cursor-pointer">
            0800-509-417
          </a>
        </h4>
        <div className="text-left flex flex-col justify-center pt-3  underline w-[300px] md:pt-4 md:justify-between md:flex-row md:w-[700px] lg:w-[900px] cursor-pointer">
          <ul>
            <li>FAQ</li>
            <li>Account</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
          </ul>
          <ul>
            <li>Gift Card Terms</li>
            <li>Media Center</li>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Investor Relations</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
