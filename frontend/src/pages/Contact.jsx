// src/pages/Contact.jsx
// -----------------------------------------------------------------------------
// The "/contact" page: a Google Map embed, a contact/quote-request form,
// and static contact details (phone, email, social links, address).
//
// HOW THE FORM WORKS (IMPORTANT - READ THIS BEFORE HOSTING):
//   This form does NOT use the Node/Express server in backend/server. It
//   submits directly to FormSubmit (https://formsubmit.co), a free
//   third-party service that emails form submissions to an address you
//   configure - no backend server needed. This is exactly why the site can
//   be hosted as pure static files on GitHub Pages / Cloudflare Pages.
//
//   - By default, submissions are emailed to the address in `contactEmail`
//     below. To change where they go, either edit `contactEmail` directly,
//     or (recommended) set a VITE_CONTACT_EMAIL environment variable at
//     build time so you don't have to edit code.
//   - The first time you use a new destination email with FormSubmit, they
//     will send that inbox a one-time confirmation link - it must be
//     clicked before real form submissions will start arriving.
//   - If you'd rather run your own email server (e.g. using the
//     Node/Nodemailer code in backend/server), set VITE_FORMSPREE_URL to
//     point at your own server's endpoint instead.

import { useState } from "react";
import call from "../assets/call.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.webp";
import mail from "../assets/mail.png";
import whatsapp from "../assets/whatsapp.png";
import axios from "axios"; // used to send the form data over HTTP
import {useEffect} from "react";
export default function Contact() {
 useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Holds the current value of every field in the form.
 const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  address: "",
  message: "",
});
// The dropdown list of products a customer can select an inquiry about.
// To add/remove a product from this dropdown, edit this array (this list
// is intentionally separate from the full catalogue in src/data/data.js).
const products = [
  "ENKLO 32",
  "ENKLO 46",
  "ENKLO 68",
  "ENKLO 100",
  "ENKLO 121",
  "ENKLO 150",
  "ENKLO 176",
  "ENKLO 220",
  "ENKLO 320",
  "ENKLO 460",
  "ENKLO HLP 22",
  "ENKLO HLP 32",
  "ENKLO HLP 46",
  "WAYLUBE 68",
  "WAYLUBE N68",
  "PARTHAN EP 68",
  "PARTHAN EP 100",
  "PARTHAN EP 150",
  "HP GEAR OIL XP 80 W 90",
  "HYTAK 0",
  "HYTAK 1",
  "SEETUL 15",
  "SEETUL 22",
  "HP RACER 4",
  "HP SN 150",
  "HP SN 500",
  "SPINTEK 5",
  "SPINTEK 12",
  "SPINTEK 15",
  "SPINTEK 22",
  "Other"
];

  // Where FormSubmit sends the emails, and the endpoint the form actually
  // posts to. Both can be overridden without touching code by setting
  // VITE_CONTACT_EMAIL / VITE_FORMSPREE_URL as environment variables when
  // building the site (e.g. in a .env file, or in your host's dashboard).
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "sanskritikhandelwal029@gmail.com";
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_URL || `https://formsubmit.co/ajax/${contactEmail}`;

  // Updates the matching field in `form` state whenever the user types.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Runs when the form is submitted: sends the form data to FormSubmit,
  // shows a success/failure alert, and resets the form on success.
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(FORMSPREE_ENDPOINT, {
      ...form,
      _captcha: "false", // disables FormSubmit's captcha step
    }, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const successMessage = response.data?.message || "Message sent successfully";
    alert(successMessage);

    setForm({
      name: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      address: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert(`Failed to send message. Please try again or email ${contactEmail} directly.`);
  }
};
  return (
    <>
   
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
        {/* Google Map */}
        <div className="w-full h-[400px] md:h-auto rounded-2xl overflow-hidden shadow-lg bg-white">
          <h1 className="text-2xl font-bold mb-4 m-2">Our Location</h1>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5168727408586!2d80.8620831144718!3d24.571352162836167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847efa4bf0455f%3A0xf7df454e162ab1de!2sVikas%20Automobiles%2C%20Satna%20(HP%20LUBE%20DISTRIBUTOR)!5e0!3m2!1sen!2sin!4v1652856740678!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
             {/* <label htmlFor="Name" className="text-lg w-full font-bold mt-6">Your Name:</label> */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
 {/* <label htmlFor="Email  " className="text-lg w-full font-bold mt-6">Your Email:</label> */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
             {/* <label htmlFor="phone" className="text-lg w-full font-bold mt-6">Your Phone:</label> */}
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
<select
  name="product"
  value={form.product}
  onChange={handleChange}
  className="w-full border rounded-lg p-2"
>
  <option value="">Select Product</option>

  {products.map((product, index) => (
    <option key={index} value={product}>
      {product}
    </option>
  ))}
</select>

<select
  name="quantity"
  value={form.quantity}
  onChange={handleChange}
  className="w-full border rounded-lg p-2"
>
  <option value="">Quantity</option>

  {[...Array(50)].map((_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ))}
</select>
           
          {/* An old draft of the product/quantity dropdowns (using individually
             hard-coded <option> tags instead of the .map() calls above) used to
             be kept here as commented-out code. It has been removed to keep this
             file readable - the live dropdowns above (products.map / [...Array(50)])
             already provide the same options. */}
          {/* <label htmlFor="Address" className="text-lg w-full font-bold mt-6">Delivery Address:</label> */}
          <textarea
              name="address"
              placeholder="Delivery Address"
              rows={5}
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            ></textarea>
           {/* <label htmlFor="Message" className="text-lg w-full font-bold mt-6">Your Message:</label> */}
           <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Get in touch with us for any inquiries, product information, or support. Our team is here to assist you with all your lubrication needs. Feel free to reach out via phone, email, or by filling out the contact form. We look forward to hearing from you and providing you with the best service possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Our Contact Information</h3>
              <p className="mb-2">Email: hpclcfasatna@gmail.com</p>
              <p className="mb-2">Address: Vikas Automobiles, Infront of Bajaj Finance Gahara Nala, Near Yadav Dharmkanta, Rewa Road, Satna, Madhya Pradesh 485001</p>
              <div className="flex items-center gap-3">
                <img src={call} alt="Call Us" className="h-6 w-6" />
                <a href="tel:+919827003016" target="_blank" rel="noopener noreferrer">
                  <p className="text-blue-500 hover:text-blue-700 ">Phone: 9827003016</p>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Our Email</h3>
              <div className="flex items-center gap-3">
                <img src={mail} alt="email us" className="h-6 w-6" />
                 <a href="mailto:hpclcfasatna@gmail.com" target="_blank" rel="noopener noreferrer">
                <p className="text-blue-500 hover:text-blue-700 ">Email: hpclcfasatna@gmail.com</p>
              </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Connect with us on Instagram</h3>
              <div className="flex items-center gap-3">
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
                <a href="https://www.instagram.com/hpclcfasatna/" target="_blank" rel="noopener noreferrer">
                  <p className="text-purple-500 hover:text-purple-700 ">hpclcfasatna</p>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Connect with us on Twitter</h3>
              <div className="flex items-center gap-3">
                <img src={twitter} alt="Twitter" className="h-6 w-6" />
                <a href="https://twitter.com/cfa_hp_satna" target="_blank" rel="noopener noreferrer">
                  <p className="text-blue-500 hover:text-blue-700 ">cfa_hp_satna</p>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Connect with us on Whatsapp</h3>
              <div className="flex items-center gap-3">
                <img src={whatsapp} alt="whatsapp" className="h-6 w-6" />
<a href="https://wa.me/919827003016" target="_blank" rel="noopener noreferrer">
                  <p className="text-green-500 hover:text-green-700 ">9827003016</p>
                </a>
              </div>
            </div>
           
          </div>
           
        </div>
        <div className="w-full h-50 bg-white rounded-2xl shadow-lg p-6 md:col-span-2">
              <p className="text-center py-2 font-bold text-lg">Our Address</p>
              <p className="text-center py-2">Vikas Automobiles, Near Yadav Dharmkanta, Rewa Road, Satna, Madhya Pradesh 485001</p>
             <p> <a href="tel:+919827003016" className="text-blue-500 hover:text-blue-700">
                Call us : 9827003016
              </a></p>
            <p className="items-center">  <a href="http://maps.google.com/?q=Vikas Automobiles, Near Yadav Dharmkanta, Rewa Road, Satna, Madhya Pradesh 485001" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-center py-2 ">View on Map</a></p>
            </div>

      </div>
     </div>
     
    </>
  );
}
