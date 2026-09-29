// src/pages/Home.jsx
// -----------------------------------------------------------------------------
// The landing page ("/" route, see src/App.jsx), built from several
// self-contained <section> blocks stacked vertically: Hero banner, "Why
// Choose Us", featured Products, Customer logos, (a commented-out
// Testimonials block below - re-enable it by removing the /* */ around it
// and filling in real quotes if you'd like to use it), Location/map, and
// Achievements. Each section is independent, so you can reorder, remove,
// or duplicate a <section>...</section> block without affecting the others.
//
// To change site imagery, edit the `import ... from "../assets/..."` lines
// below and swap in a different file from src/assets/.

import home from "../assets/homepage.png"; // currently unused, kept in case you want to add another hero image
import { useNavigate } from "react-router-dom"; // lets buttons below send users to another page/route
import { motion } from "framer-motion";
import logo1 from "../assets/logo_1.jpg";
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

import award1 from "../assets/awards1.jpeg";
import award4 from "../assets/awards4.jpeg";
import award9 from "../assets/awards9.jpeg";
import award from "../assets/bg02.jpeg";
// Product Images
import grease from "../assets/images/AP_3.png";
import engineoil from "../assets/images/Gear_oil_EP_90.jpg";
import hydraulic from "../assets/images/ENKLO_32.jpg";
import { useEffect } from "react";
export default function Home() {
  // Scroll to the top of the page whenever Home first renders (e.g. after
  // navigating here from another page, so the user doesn't land mid-page).
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Used by the "View All Products" / "Contact Us" / "View All Achievements"
  // buttons below to programmatically change pages on click.
  const navigate = useNavigate();

  // Sample testimonial quotes for the (currently disabled) Testimonials
  // section further down this file. Edit these, then remove the /* */
  // comment markers around the "TESTIMONIALS" <section> below to show it.
  const testimonials = [
    {
      name: "ACC Cement",
      text: "Reliable supply and excellent lubricant quality for our plant operations.",
    },
    {
      name: "KJS Cement",
      text: "Professional service and timely delivery every single time.",
    },
    {
      name: "JCB",
      text: "Outstanding product performance with great technical support.",
    },
  ];

  return (
    <div className="px-4 md:px-6 py-6 space-y-6 font-poppins">
      {/* HERO SECTION */}
      <section className="bg-[#0B1F3A] text-white p-6 md:p-10 rounded-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              High Performance Industrial And Automotive Lubricants for Every Industry
            </h1>

            <p className="mt-4 text-lg text-gray-200">
              Trusted by industries across India with {" "}
              <span className="text-[#FFD700] font-bold">
                25 years of experience
              </span>
            </p>

            <p className="mt-4 text-gray-300">
              (SATNA, REWA, MAIHAR, PANNA, CHATTARPUR, TIKAMGARH)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="
    bg-[#FFD700]
    hover:bg-yellow-400
    text-black
    px-6 py-3
    rounded-lg
    font-semibold
    w-full md:w-auto
    shadow-lg
  "
  onClick={() => navigate("/products")}
>
  View All Products
</motion.button>
      

                <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="
    bg-[#FFD700]
    hover:bg-yellow-400
    text-black
    px-6 py-3
    rounded-lg
    font-semibold
    w-full md:w-auto
    shadow-lg
  "
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </motion.button>
            </div>
          </div>

          <div>
            <img
              src={logo1}
              alt="Industrial Lubricants"
              className="rounded-md w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 p-6 md:p-10 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Why Choose Us?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5  hover:scale-105
    hover:-translate-y-1
    hover:shadow-xl rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p>
              Wide range of high-quality lubricants for industrial and
              automotive applications.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md transition-all duration-300 ease-in-out
    hover:scale-105
    hover:-translate-y-1
    hover:shadow-xl
    active:scale-95">
            <h3 className="font-bold text-lg mb-2">25 Years Experience</h3>
            <p>
              Serving industries with trusted lubrication solutions for over two
              decades.
            </p>
          </div>

          <div className="bg-white  hover:scale-105 hover:-translate-y-1 hover:shadow-xl p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">Timely Delivery</h3>
            <p>
              Fast and reliable supply chain with outstanding customer support.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="bg-gray-100 p-6 md:p-10 rounded-xl space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center underline">
          Our Products
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out
    hover:scale-105
    hover:-translate-y-1
    hover:shadow-xl
    active:scale-95">
            <img
              src={engineoil}
              alt="Engine Oil"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">Industrial Engine Oil</h3>
              <p className="mt-2 text-gray-600">
                High-performance oils for industrial machinery and heavy
                equipment.
              </p>
            </div>
            
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out
    hover:scale-105
    hover:-translate-y-1
    hover:shadow-xl
    active:scale-95">
            <img
              src={hydraulic}
              alt="Hydraulic Oil"
              className="h-56 w-full object-cover "
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">Hydraulic Oil</h3>
              <p className="mt-2 text-gray-600">
                Smooth and efficient hydraulic system performance for all
                industries.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out
    hover:scale-105
    hover:-translate-y-1
    hover:shadow-xl
    active:scale-95">
            <img
              src={grease}
              alt="Industrial Grease"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl">Industrial Grease</h3>
              <p className="mt-2 text-gray-600">
                Durable lubrication solutions for bearings and heavy-duty
                machinery.
              </p>
            </div>
            
          </div>
        </div>
     <button
  className="
    bg-[#FFD700]
    hover:bg-yellow-400
    text-black
    px-6 py-3
    rounded-lg
    font-semibold
    w-full md:w-auto
    transition-all duration-300 ease-in-out
    hover:scale-105
    hover:-translate-y-1
    hover:shadow-xl
    active:scale-95
  "
  onClick={() => navigate("/products")}
>
  View All Products
</button>
      </section>

      {/* CUSTOMERS */}
      <section className="bg-gray-100 p-6 md:p-10 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center underline">
          Our Valuable Customers
        </h2>

        <p className="text-center text-lg mb-8">
          Trusted by leading industries across India
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          <img src={acccement} alt="ACC Cement" className="mx-auto" />
          <img src={Adani} alt="Adani" className="mx-auto" />
          <img src={birla} alt="Birla" className="mx-auto" />
          <img src={jcb} alt="JCB" className="mx-auto" />
          <img src={kjs} alt="KJS" className="mx-auto" />
          <img src={mpbirla} alt="MP Birla" className="mx-auto" />
          <img src={ultratech} alt="Ultratech" className="mx-auto" />
          <img src={dalmia} alt="Dalmia" className="mx-auto" />
          <img src={EssarPower} alt="Essar Power" className="mx-auto" />
          <img src={jaypee} alt="Jaypee" className="mx-auto" /> 
          <img src={prism} alt="Prism" className="mx-auto" />
        </div>
      </section>
          

      {/* TESTIMONIALS */}
      {/* <section className="bg-[#0B1F3A] text-white p-6 md:p-10 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-lg"
            >
              <p className="italic">"{item.text}"</p>

              <h3 className="font-bold mt-4 text-[#0B1F3A]">- {item.name}</h3>
            </div>
          ))}
        </div>
      </section> */}

      {/* LOCATION */}
      <section className="bg-gray-100 p-6 md:p-10 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
          Our Location
        </h2>

        <p className="mt-2 text-lg md:text-xl font-bold">
          Vikas Automobiles, Infront of Bajaj Finance Gahara Nala,
Near Yadav Dharmkanta, Rewa Road,
Satna, Madhya Pradesh - 485001
        </p>

        <p className="mt-4 text-lg">
          Contact:
          <a
            href="tel:+919827003016"
            className="text-blue-600 font-semibold ml-2"
          >
            +91 9827003016
          </a>
        </p>

        <div className="mt-6 overflow-hidden rounded-xl">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5168727408586!2d80.8620831144718!3d24.571352162836167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847efa4bf0455f%3A0xf7df454e162ab1de!2sVikas%20Automobiles%2C%20Satna%20(HP%20LUBE%20DISTRIBUTOR)!5e0!3m2!1sen!2sin!4v1652856740678!5m2!1sen!2sin"
            className="w-full h-[300px] md:h-[450px] border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-gray-100 p-6 md:p-10 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 underline text-center">
          Our Achievements
        </h2>

        <p className="text-center text-lg mb-8">
          Recognized for excellence and outstanding performance
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <img src={award1} alt="Award 1" className="rounded-xl shadow-md w-full h-full sm:col-span-1" />

          <img src={award} alt="Award 9" className="rounded-xl shadow-md w-full h-full sm:col-span-2" />

          <img src={award4} alt="Award 4" className="rounded-xl shadow-md w-full h-full sm:col-span-1" />
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-[#FFD700] hover:bg-yellow-400 transition text-black px-6 py-3 rounded-lg font-semibold"
            onClick={() => navigate("/achievements")}
          >
            View All Achievements
          </button>
        </div>
      </section>
    </div>
  );
}
