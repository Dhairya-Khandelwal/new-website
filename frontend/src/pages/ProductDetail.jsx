// src/pages/ProductDetail.jsx
// -----------------------------------------------------------------------------
// The "/products/:id" page - shows full information about a single product.
// Which product to show is determined by the ":id" part of the URL (e.g.
// visiting "/#/products/12" makes `useParams()` return { id: "12" }), which
// is then looked up in the `products` array from src/data/data.js.
//
// If you navigate here with an id that doesn't exist in data.js, the page
// simply renders "Product not found" below.

import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { products } from "../data/data";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetail() {
  // Read the ":id" segment from the current URL.
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the matching product from the full catalogue.
  const product = products.find((p) => p.id === id);

  // Scroll to the top of the page whenever a new product is opened (so
  // clicking "View Details" from partway down the Products page doesn't
  // land the user in the middle of this page).
  //
  // IMPORTANT: this must run before the "product not found" check below -
  // React requires every Hook (useState, useEffect, etc.) to run on every
  // render in the same order, so a Hook can never come after an early
  // `return`. (The original version of this file had this bug - the
  // useEffect below used to be placed after the `if (!product) return ...`
  // line, which could cause React errors.)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Guard clause: if no product matches this id, stop here and show a
  // simple fallback message instead of crashing on `product.name` etc.
  if (!product) return <p>Product not found</p>;

  return (
    <div className="px-8 py-6 mt-5 mb-5 max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg">
      {/* Breadcrumb trail: Home / Products / <product name> */}
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
        <span
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-blue-500"
        >
          Home
        </span>

        <span>/</span>

        <span
          onClick={() => navigate("/products")}
          className="cursor-pointer hover:text-blue-500"
        >
          Products
        </span>

        <span>/</span>

        <span className="text-black font-semibold">
          {product.name}
        </span>
      </div>

      <h1 className="text-3xl font-bold mt-6 mb-4">Product Details</h1>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[500px] rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-6 mb-4">{product.name}</h1>

      {/* Available pack sizes, rendered as a row of (non-interactive) pill
          buttons - one per entry in product.pack_sizes. */}
      <div className="flex flex-wrap gap-4 mt-4 hover-bg-blue-500">
        {product.pack_sizes.map((size, index) => (
          <button
            key={index}
            className="relative bg-[#0B1F3A] text-white py-2 px-6 rounded-lg 
                   transition-all duration-300
                   hover:scale-105 active:scale-95
                   after:content-[''] after:absolute after:-inset-1 after:rounded-lg 
                   after:border-2 after:border-[#1a4782] after:opacity-0 
                   hover:after:opacity-100 hover:after:-inset-2 after:transition-all"
          >
            {size}
          </button>
        ))}
      </div>

      <p className="mt-4 text-gray-700 text-xl">
        <strong>Description: </strong>
        {product.description}
      </p>

      {/* Extra product details, all pulled straight from data.js. */}
      <ul className="mt-6 space-y-3 text-gray-600 text-lg">
        <li><strong>Usage:</strong> {product.usage}</li>
        <li><strong>Application:</strong> {product.application}</li>
        <li><strong>Lifetime:</strong> {product.lifetime}</li>
        <li><strong>Performance:</strong> {product.performance}</li>
        <li><strong>Features:</strong> {product.features}</li>
        <li><strong>Rating:</strong> ⭐ {product.rating}/5</li>
      </ul>

      {/* Desktop "Contact for Quote" button. */}
      <button
        onClick={() => navigate("/contact")}
        className="mt-6 mb-4 bg-[#0B1F3A] text-white px-6 py-5 rounded-lg"
      >
        Contact for Quote
      </button>

      {/* Sticky mobile-only "Contact for Quote" bar, fixed to the bottom of
          the screen so it's always reachable without scrolling back up. */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 md:hidden z-50">
        <button
          onClick={() => navigate("/contact")}
          className="w-full bg-[#0B1F3A] text-white py-4 rounded-xl text-lg font-bold"
        >
          Contact for Quote
        </button>
      </div>

      {/* Opens WhatsApp with a pre-filled message asking about this
          specific product. Update the phone number here if it changes. */}
      <a
        href={`https://wa.me/919827003016?text=Hello, I want details about ${product.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 mt-4 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition"
      >
        <FaWhatsapp size={24} />
        WhatsApp Inquiry
      </a>
    </div>
  );
}
