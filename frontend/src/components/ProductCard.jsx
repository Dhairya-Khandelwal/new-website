// src/components/ProductCard.jsx
// -----------------------------------------------------------------------------
// A small card used on the Products page (src/pages/Products.jsx) to show a
// summary of a single product from src/data/data.js. Clicking "View Details"
// takes the user to that product's full page (src/pages/ProductDetail.jsx),
// matched by `product.id` in the URL (see the "/products/:id" route in
// src/App.jsx).
//
// This component expects a `product` object with the shape defined in
// src/data/data.js (id, name, image, description, pack_sizes, usage,
// application, lifetime, features, rating).

import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
      {/* Product photo */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="font-semibold mt-3 text-lg">{product.name}</h2>
      <p className="text-sm text-gray-500 line-clamp-2 mt-1">
        {product.description}
      </p>

      {/* Quick facts about the product, pulled straight from data.js */}
      <li className="mt-4 text-gray-600">{product.pack_sizes.join(", ")}</li>
      <li className="mt-4 text-gray-600">{product.usage}</li>
      <li className="mt-4 text-gray-600">{product.application}</li>
      <li className="mt-4 text-gray-600">{product.lifetime}</li>
      <li className="mt-4 text-gray-600">{product.features}</li>
      <li className="mt-4 text-gray-600">{product.rating}/5</li>

      {/* Link to this product's full detail page, e.g. /#/products/12 */}
      <Link
        to={`/products/${product.id}`}
        className="inline-block mt-4 text-[#1a4782] font-medium hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}
