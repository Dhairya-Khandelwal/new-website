// src/pages/Achievements.jsx
// -----------------------------------------------------------------------------
// The "/achievements" page: a simple photo gallery of award/certificate
// images from src/assets/. To add a new award photo:
//   1. Drop the image file into src/assets/.
//   2. Add an `import` line for it below (next to the other award imports).
//   3. Add a matching <img src={...} alt="..." className="m-2 col-span-1" />
//      line in the grid further down.
// To remove one, just delete its import line and its <img> line.

import React from 'react'
import award1 from "../assets/awards1.jpeg"; // currently unused, kept for future use
import award2 from "../assets/awards2.jpeg"; // currently unused, kept for future use
import award3 from "../assets/awards3.jpeg"; // currently unused, kept for future use
import award4 from "../assets/awards4.jpeg";
import award5 from "../assets/awards5.jpeg";
import award6 from "../assets/awards6.jpeg";
import award7 from "../assets/awards7.jpeg";
import award8 from "../assets/awards8.jpeg";
import award9 from "../assets/awards9.jpeg";
import awards10 from "../assets/awards10.jpeg";
import award11 from "../assets/award11.jpeg";
import award12 from "../assets/award12.jpeg";
import bgo1 from "../assets/bgo1.jpeg";
import bg02 from "../assets/bg02.jpeg";
import bgo3 from "../assets/bgo3.jpeg";
import news from "../assets/new.jpg";
import { useEffect } from 'react';

export default function Achievements() {
  // Scroll to the top of the page whenever this page first loads.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className=" mx-auto min-w-full items-center text-xl bg-gray-50 rounded shadow-lg">
        <div className=" flex flex-col items-center justify-center p-4 m-4">
          <p
            className="
    text-4xl
    font-extrabold
    text-blue-900
    tracking-tight
    hover:animate-zoomIn underline
  "
          >
            Our Achievements
          </p>
          <p className="text-xl text-gray-600 p-4 ">
            We are proud of our accomplishments and milestones that reflect our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Photo grid - one <img> per award/certificate. award1-3 are
            imported above but not shown here; add them to this grid if you
            want them displayed. */}
        <div className=" overflow-hidden rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          <img src={award5} alt="Award 5" className="m-2 col-span-1" />
          <img src={award6} alt="Award 6" className="m-2 col-span-1" />
          <img src={award7} alt="Award 7" className="m-2 col-span-1" />
          <img src={award8} alt="Award 8" className="m-2 col-span-1" />
          <img src={award9} alt="Award 9" className="m-2 col-span-1" />
          <img src={bgo1} alt="Award 14" className="m-2 col-span-1" />
          <img src={bg02} alt="Award 15" className="m-2 col-span-1" />
          <img src={bgo3} alt="Award 16" className="m-2 col-span-1" />
          <img src={award11} alt="Award 11" className="m-2 col-span-1" />
          <img src={award12} alt="Award 12" className="m-2 col-span-1" />
          <img src={news} alt="New Award" className="m-2 col-span-1" />
          <img src={award4} alt="Award 4" className="m-2 col-span-1" />
          <img src={awards10} alt="Award 10" className="m-2 col-span-1" />
        </div>
      </div>
    </>
  )
}
