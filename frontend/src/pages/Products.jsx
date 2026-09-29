// src/pages/Products.jsx
// -----------------------------------------------------------------------------
// The "/products" page: a searchable, filterable grid of every product
// defined in src/data/data.js. Each product is rendered with ProductCard-
// style markup and links to its own detail page (src/pages/ProductDetail.jsx)
// at "/products/:id".
//
// TO ADD/EDIT PRODUCTS: this page never needs to change - just edit the
// `products` array in src/data/data.js. Categories shown in the sidebar are
// generated automatically from each product's `category` field.

import React, { useState, useRef } from "react";
import Lubricants from "../assets/Lubricants_products.jpg";
import { products } from "../data/data"; // the full product catalogue
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";

export default function Products() {
  const navigate = useNavigate();

  // Reference to the products grid, used to smooth-scroll to it when a
  // category button is tapped on mobile (where the grid may be off-screen).
  const productsSectionRef = useRef(null);

  // Current text typed into the search box.
  const [searchTerm, setSearchTerm] = useState("");
  // Currently selected category filter ("All" shows every product).
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Build the list of category buttons from the product data itself, so
  // adding a new category in data.js automatically adds a new filter
  // button here - no need to edit this file. `new Set(...)` removes
  // duplicate category names.
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // The list of products actually shown on screen: everything whose name
  // matches the search box AND whose category matches the selected filter
  // (or every category, if "All" is selected).
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Runs when a category button (sidebar or mobile scroller) is clicked:
  // updates the filter, then smoothly scrolls the product grid into view.
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Smooth Scroll
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll to the top of the page whenever this page first loads.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="px-4 py-12 text-center bg-gray-100">
        <h1 className="mx-auto text-center text-4xl md:text-6xl font-extrabold text-[#1a4782] mt-2 mb-5 tracking-tight 
    hover:animate-zoomIn underline">
          Wide Range of Products Available
        </h1>

        <img
          src={Lubricants}
          alt="Lubricants"
          className="mx-auto rounded-2xl bg-gray-200 object-cover shadow-lg  w-full"
        />
      </div>

      {/* Main Section */}
      <div className="bg-gray-50 min-h-screen px-4 py-8">

        {/* Search Bar */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white"
            />

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Layout */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* Mobile Categories */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`whitespace-nowrap px-5 py-3 rounded-full font-medium transition-all duration-300
                  ${
                    selectedCategory === category
                      ? "bg-[#0B1F3A] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-64 bg-white rounded-2xl shadow-md p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6">
              Categories
            </h2>

            <div className="flex flex-col gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium
                  ${
                    selectedCategory === category
                      ? "bg-[#0B1F3A] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          {/* Products Section */}
          <div className="flex-1" ref={productsSectionRef}>

            {/* Heading */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Products
              </h2>

              {/* <p className="text-gray-500">
                {filteredProducts.length} Products
              </p> */}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >

                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 md:h-56 aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-4">

                    {/* Product Name */}
                    <h1 className="text-sm md:text-lg text-[#0B1F3A] font-bold truncate mb-3 text-wrap">
                      {product.name}
                    </h1>

                    {/* View Details */}
                    <button
                      onClick={() =>
                        navigate(`/products/${product.id}`)
                      }
                      className="w-full bg-[#0B1F3A] text-white py-2 md:py-3 rounded-xl font-bold hover:bg-[#1a4782] transition duration-300 text-sm md:text-base"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}

            </div>

            {/* No Products */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-500">
                  No products found
                </h2>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}