// src/pages/About.jsx
// -----------------------------------------------------------------------------
// The "/about" page: company story, "Why Choose Us" cards, and a grid of
// channel-partner logos. It's built the same way as Home.jsx - a stack of
// independent sections, each safe to reorder/remove/duplicate on its own.
// Most of the imports below are just image files from src/assets/, used
// further down as <img src={...} />.

import React from "react";
import Aboutbg from "../assets/Aboutbg.png"; // currently unused, kept in case you want an extra background image
import bg from "../assets/about_bg.jpg";
import h1 from "../assets/office.jpg";
import h2 from "../assets/h2.jpg"; // currently unused, kept in case you want a second office photo
import acccement from "../assets/AccCement.jpg";
import Adani from "../assets/Adani_power_logo.png";
import birla from "../assets/AdityaBirlaCement.jpg";
import EssarPower from "../assets/EssarPower.png";
import mpbirla from "../assets/M.P_Birla_Group_logo.jpg";
import kjs from "../assets/kjs.png";
import jcb from "../assets/jcb.jpg";

import ultratech from "../assets/ultratech.png";
import dalmia from "../assets/dalmia.jpg";
import jaypee from "../assets/jaypee.png";
import prism from "../assets/prism.png";
import award from "../assets/bg02.jpeg";

import { useEffect } from "react";

export default function About() {
  // Scroll to the top of the page whenever this page first loads.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
    <div className="px-4 py-6 text-center bg-gray-50 min-h-screen">
  <div className="max-w-8xl mx-auto">
    <h1 className="mx-auto text-center text-4xl md:text-6xl font-extrabold text-[#1a4782] mt-2 mb-5 tracking-tight 
    hover:animate-zoomIn underline
  ">
      About Us
    </h1>

  {/* Hero image */}
  <img
    src={bg}
    alt="High-quality Lubricants"
    className="
      relative
      w-full
      max-w-8xl
      object-cover
      rounded-2xl
      shadow-2xl
      transition-all
      duration-500
      group-hover:scale-[1.02]
    "
  />
  </div>
</div>
      <div className=" mx-auto min-w-full items-center text-xl rounded shadow-lg">
        <div className=" flex flex-col items-center justify-center p-4 m-4">
          <p className="font-extrabold text-4xl text-blue-900 tracking-tight underline ">
            Vikas Automobiles
          </p>
          <p className="text-xl text-gray-600 p-4 ">
            VIKAS AUTOMOBILES, SATNA
          </p>
          <p className="font-bold text-xl text-gray-800 ">
            HPCL LUBES C&F AGENT & DISTRIBUTOR
          </p>
          <p className="text-lg font-medium text-gray-700 ">
            (SATNA,REWA, SIDHI, SINGRAULI, PANNA, CHATTARPUR, TIKAMGARH)
          </p>
        </div>
      </div>
<section className="bg-gray-50 p-6 md:p-10 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Why Choose Us?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p>
              Wide range of high-quality lubricants for industrial and
              automotive applications.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">25 Years Experience</h3>
            <p>
              Serving industries with trusted lubrication solutions for over two
              decades.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">Timely Delivery</h3>
            <p>
              Fast and reliable supply chain with outstanding customer support.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">100+ Products Available</h3>
            <p>
             100+ products in stock, ready to meet your lubrication needs with prompt delivery.
            </p>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
          {/* Google Map */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <img src={h1} alt="head1" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h1  className="font-extrabold text-4xl text-blue-900 tracking-tight underline">  Welcome to 
              <br/>Vikas Automobiles</h1>
            <p className="text-lg font-medium text-gray-700 mt-4">
              Your trusted distributor and C&F agent
              for HPCL Lubricants serving businesses across <span className="font-bold">Satna, Rewa, Sidhi,
              Singrauli, Panna, Chhatarpur, and Tikamgarh.</span>
              <br/>
              <br/></p>
            <p className="text-lg font-medium text-gray-700 mt-4">
              With years of <span className="font-bold"> 25 years of
              industry experience</span> and a strong commitment to quality, we provide
              reliable lubricant solutions for industrial, automotive, and
              commercial applications.</p>
              <p className="text-lg font-medium text-gray-700 mt-4">    
               Located in Satna, Madhya Pradesh, we
              specialize in supplying a wide range of HPCL industrial and
              automotive lubricants designed to deliver superior performance,
              efficiency, and engine protection.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-lg font-medium text-gray-700 mt-4">  Our products are trusted by
              leading industries and organizations, helping machines and
              vehicles operate smoothly even under demanding conditions. At
              Vikas Automobiles, customer satisfaction is at the heart of
              everything we do. We focus on timely delivery, genuine products,
              competitive pricing, and dependable service to build long-term
              relationships with our clients. Our growing network of valued
              customers includes major industrial and infrastructure companies
              across the region. Backed by the strength and reliability of
              Hindustan Petroleum Corporation Limited, we continue to support
              industries, transport businesses, construction companies, and
              commercial enterprises with high-quality lubrication solutions
              tailored to their operational needs.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <img src={award} alt="award" />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 rounded-xl shadow-lg py-10 px-4">
  <div className="max-w-7xl mx-auto text-center">
    
    {/* Heading */}
    <p
      className="
        font-bold
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        text-gray-800
        mb-10
      "
    >
      Our Channel Partner
    </p>

    {/* Logos */}
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-6
        items-center
        justify-items-center
      "
    >
      <img
        src={acccement}
        alt="acccement"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={Adani}
        alt="adani"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={birla}
        alt="birla"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={jcb}
        alt="jcb"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={kjs}
        alt="kjs"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={mpbirla}
        alt="mpbirla"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={jaypee}
        alt="jaypee"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={prism}
        alt="prism"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={dalmia}
        alt="dalmia"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={ultratech}
        alt="ultratech"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={EssarPower}
        alt="essarpower"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
    </div>
  </div>
</div>
    </>
  );
}

// NOTE FOR BEGINNERS: earlier draft versions of this page (using placeholder
// stock photos and Lorem-ipsum-style text) used to be kept here as commented-
// out code. They've been removed to keep this file easy to read - if you
// need a totally different layout for this page, it's usually simpler to
// start fresh from the JSX above than to resurrect an old draft.
