// src/data/data.js
// -----------------------------------------------------------------------------
// THE PRODUCT CATALOGUE. This is the single source of truth for every
// product shown on the Products page (src/pages/Products.jsx), the
// ProductCard component, and the product detail page
// (src/pages/ProductDetail.jsx) - none of those files need to change when
// you add, edit, or remove a product; they all just read this array.
//
// EACH PRODUCT OBJECT LOOKS LIKE:
//   {
//     id: "0",                 // MUST be unique - used in the URL "/products/<id>"
//     name: "Product Name",
//     category: "Some Category",   // shown as a filter button on the Products page
//     description: "One or two sentence summary shown on cards/detail page.",
//     pack_sizes: ["1L", "5L", "20L"],  // shown as pill buttons on the detail page
//     usage: "...",
//     application: "...",
//     lifetime: "...",
//     performance: "...",      // optional
//     features: "...",
//     rating: 4.8,             // out of 5, shown as "⭐ 4.8/5"
//     image: imgSomeVariable,  // must match one of the imports below
//   }
//
// TO ADD A NEW PRODUCT:
//   1. Put its image file in src/assets/images/.
//   2. Add an `import myImg from "../assets/images/my-file.jpg";` line in
//      the import list below.
//   3. Copy an existing product object inside the `products` array and
//      edit its fields, giving it a new, unique `id`.
//
// NOTE FOR BEGINNERS: some entries below are wrapped in /* */ comments,
// which means they're temporarily disabled/hidden from the site - to bring
// one back, delete its surrounding /* and */ markers. A couple of entries
// also accidentally have two `category:` lines - JavaScript silently uses
// only the last one, so simply delete the line you don't want if you spot
// this while editing.

// IMPORT IMAGES

import img20w40 from "../assets/images/a20w40.jpg";
import img40 from "../assets/images/40.jpg";
import img85W140 from "../assets/images/a85W140.jpg";
import imga40 from "../assets/images/a40.jpg";
import imgAP3 from "../assets/images/AP_3.png";
import imgdrawmet from "../assets/images/drawmet.png";
import imgELASTO245 from "../assets/images/ELASTO_245.jpg";
import imgENKLO32 from "../assets/images/ENKLO_32.jpg";
import imgENKLO46 from "../assets/images/ENKLO_46.jpg";
import imgENKLO68 from "../assets/images/ENKLO_68.jpg";
import imgENKLOHLP1 from "../assets/images/ENKLO_HLP_1.jpg";
import imgENKLOHLP2 from "../assets/images/ENKLO_HLP_2.jpeg";
import imgEP90 from "../assets/images/EP_90.jpg";
import imgEP140 from "../assets/images/EP140.jpg";
import imgfuturx from "../assets/images/futurx.jpeg";
import imgGear80W90 from "../assets/images/Gear_Oil_80W_90.png";
import imgGearEP90 from "../assets/images/Gear_oil_EP_90.jpg";
import imgGearOil from "../assets/images/Gear_oil.jpg";
import imghdx from "../assets/images/hdx.jpg";
import imghycom from "../assets/images/hycom.jpg";
import imghytherm600 from "../assets/images/hytherm_600.jpg";
import imgkoolKUT70 from "../assets/images/koolKUT_70.jpg";
import imgkoolkut40 from "../assets/images/koolkut40.jpg";
import imgl40 from "../assets/images/l40.png";
import imgLITHONEP2 from "../assets/images/LITHON_EP_2.jpg";
import imgMETAQUENCH39 from "../assets/images/METAQUENCH_39.jpg";
import imgMETAQUENCH42 from "../assets/images/METAQUENCH_42.png";
import imgmilcypower from "../assets/images/milcy_power.png";
import imgmp3 from "../assets/images/mp3.png";
import imgN34 from "../assets/images/N34.jpg";
import imgPARTHANEP from "../assets/images/PARTHAN_EP.jpg";
import imgPLUTEK12 from "../assets/images/PLUTEK_1_2.png";
import imgracer from "../assets/images/racer.png";
import imgrustop from "../assets/images/rustop.png";
import imgSeetulN68 from "../assets/images/Seetul_N68.jpg";
import imgSEETUL from "../assets/images/SEETUL.png";
import imgtison from "../assets/images/tison.jpg";
import imgtransformOil from "../assets/images/transformOil.jpg";
import imgtrimfon23 from "../assets/images/trimfon_23.png";
import imgTRIMOFIN20 from "../assets/images/TRIMOFIN_20.png";
import imgX3 from "../assets/images/X3.png";

export const products = [
  {
    id: "0",
    name: "HP Milcy 20W 40",
    category: "Heavy Duty Diesel Engine Oils",
    description:
      "Premium multi-grade diesel engine oil providing excellent protection against wear and deposits.",
    pack_sizes: ["1L", "5L", "10L", "20L", "210L"],
    usage: "High-performance diesel engines in trucks and tractors.",
    application: "Turbocharged and naturally aspirated diesel engines.",
    lifetime: "15,000 - 20,000 km",
    performance: "Meets API CF-4 and IS: 13656-2014",
    features: "Excellent thermal stability and oxidation resistance.",
    rating: 4.8,
    image: img20w40,
  },

  // {
  //   id: "1",
  //   name: "Enklo 46 Premium",
  // category: "Industrial Oils",
  //   description:
  //     "High-performance hydraulic oil with superior anti-wear properties.",
  //   pack_sizes: ["20L", "210L"],
  //   usage: "Sophisticated industrial hydraulic systems.",
  //   application: "High-pressure pumps and injection molding machines.",
  //   lifetime: "2,000 to 4,000 operational hours",
  //   performance: "Meets DIN 51524 Part 2 (HLP)",
  //   features: "Excellent hydrolytic stability and air release.",
  //   rating: 4.7,
  //   image: imgENKLO46,
  // },

  // {
  //   id: "2",
  //   name: "Gear Oil 85W 140",
  //   description:
  //     "Heavy-duty multi-purpose gear lubricant for extreme pressure conditions.",
  //   pack_sizes: ["1L", "5L", "20L", "210L"],
  //   usage: "Transmissions and differential units of commercial vehicles.",
  //   application: "Hypoid and spiral bevel gears.",
  //   lifetime: "Up to 40,000 km",
  //   performance: "Meets API GL-5 and MIL-L-2105D",
  //   features: "Extreme pressure additives prevent gear scuffing.",
  //   rating: 4.6,
  //   image: imgGEAROIL85W140,
  // },

  {
    id: "3",
    name: "HP AP 3 Grease",
    category:"Automotive Greases",
    description:
      "All-purpose lithium-base grease with a high drop point.",
    pack_sizes: ["500g", "1kg", "5kg", "18kg", "180kg"],
    usage: "Automotive and industrial bearing lubrication.",
    application: "Wheel bearings, chassis, and universal joints.",
    lifetime: "Long-term heavy load protection",
    performance: "Meets NLGI 3 consistency standards",
    features: "High thermal stability and water resistance.",
    rating: 4.9,
    image: imgAP3,
  },

  {
    id: "4",
    name: "Elasto 245",
    category:"Rubber Process Oils",
    description:
      "Specialized rubber process oil used as a rubber extender.",
    pack_sizes: ["210L", "Bulk Tanker"],
    usage: "Manufacture of tires and rubber products.",
    application: "Rubber compounding and tire tread manufacturing.",
    lifetime: "Process specific",
    performance: "Low volatility and excellent color stability.",
    features: "High flash point for safe processing.",
    rating: 4.5,
    image: imgELASTO245,
  },

  {
    id: "5",
    name: "Enklo 32",
    category:"Industrial Oils",
    description:
      "Anti-wear hydraulic oils for moderate to severe conditions.",
    pack_sizes: ["20L", "210L"],
    usage: "Industrial hydraulic systems.",
    application: "Vane, gear, and axial piston pumps.",
    lifetime: "2,000+ hours",
    performance: "Meets IS: 10522-1983",
    features: "Good filterability and demulsibility.",
    rating: 4.4,
    image: imgENKLO32,
  },

  {
    id: "6",
    name: "Enklo 46",
    category:"Industrial Oils",
    description:
      "Anti-wear hydraulic oils for moderate to severe conditions.",
    pack_sizes: ["20L", "210L"],
    usage: "Industrial hydraulic systems.",
    application: "Vane, gear, and axial piston pumps.",
    lifetime: "2,000+ hours",
    performance: "Meets IS: 10522-1983",
    features: "Good filterability and demulsibility.",
    rating: 4.4,
    image: imgENKLO46,
  },

  {
    id: "7",
    name: "Enklo 68",
    category:"Industrial Oils",
    description:
      "Anti-wear hydraulic oils for moderate to severe conditions.",
    pack_sizes: ["20L", "210L"],
    usage: "Industrial hydraulic systems.",
    application: "Vane, gear, and axial piston pumps.",
    lifetime: "2,000+ hours",
    performance: "Meets IS: 10522-1983",
    features: "Good filterability and demulsibility.",
    rating: 4.4,
    image: imgENKLO68,
  },

  {
    id: "8",
    name: "Enklo HLP 1",
    category:"Industrial Oils",
    description:
      "Premium hydraulic oils with exceptional oxidation stability.",
    pack_sizes: ["20L", "210L"],
    usage: "Modern high-pressure hydraulic systems.",
    application: "Precision machinery and CNC hydraulic units.",
    lifetime: "3,000 - 5,000 hours",
    performance: "Meets DIN 51524 Part 2",
    features: "Superior corrosion protection and foam control.",
    rating: 4.7,
    image: imgENKLOHLP1,
  },

  {
    id: "9",
    name: "Enklo HLP 2",
    category:"Industrial Oils",
    description:
      "Premium hydraulic oils with exceptional oxidation stability.",
    pack_sizes: ["20L", "210L"],
    usage: "Modern high-pressure hydraulic systems.",
    application: "Precision machinery and CNC hydraulic units.",
    lifetime: "3,000 - 5,000 hours",
    performance: "Meets DIN 51524 Part 2",
    features: "Superior corrosion protection and foam control.",
    rating: 4.7,
    image: imgENKLOHLP2,
  },

  // {
  //   id: "10",
  //   name: "Gear Oil EP 140",
    //categorty:"Gear and Transmisson oils",
  //   description:
  //     "Extreme pressure gear oil for high load manual transmissions.",
  //   pack_sizes: ["1L", "5L", "20L", "210L"],
  //   usage: "Axles and manual gearboxes.",
  //   application: "Commercial vehicle axles.",
  //   lifetime: "30,000+ km",
  //   performance: "Meets API GL-4",
  //   features: "Protects against gear scuffing and rust.",
  //   rating: 4.5,
  //   image: imgGEAROIL85W140,
  // },

  // {
  //   id: "11",
  //   name: "Gear Oil 80W 90",
  //categorty:"Gear and Transmisson oils",
  //   description:
  //     "Multi-grade gear lubricant for smooth gear shifting.",
  //   pack_sizes: ["1L", "5L", "20L", "210L"],
  //   usage: "Passenger and commercial vehicle transmissions.",
  //   application: "Synchronized and non-synchronized gearboxes.",
  //   lifetime: "40,000 km",
  //   performance: "Meets API GL-4",
  //   features: "Consistent viscosity across temperatures.",
  //   rating: 4.8,
  //   image: imgGEAROIL80W90,
  // },

  {
    id: "12",
    name: "Lithon EP2",
    category:"Automotive Greases",
    description:
      "High-quality lithium soap-based multipurpose grease.",
    pack_sizes: ["1kg", "5kg", "18kg", "180kg"],
    usage: "Automotive wheel bearings and water pumps.",
    application: "Chassis and industrial equipment bearings.",
    lifetime: "Long-lasting lubrication film",
    performance: "NLGI 3 Grade consistency",
    features: "Resists water washout and oxidation.",
    rating: 4.9,
    image: imgLITHONEP2,
  },

  {
    id: "13",
    name: "Metaquench 39",
    category:"Quenching Oils",
    description:
      "Quenching oils for professional heat treatment of steel.",
    pack_sizes: ["210L"],
    usage: "Steel hardening and heat treatment.",
    application: "Open quench tanks.",
    lifetime: "Continuous use",
    performance: "Consistent cooling rates.",
    features: "Low sludge formation.",
    rating: 4.3,
    image: imgMETAQUENCH39,
  },

  {
    id: "14",
    name: "Metaquench 42",
    category:"Quenching Oils",
    description:
      "Quenching oils for professional heat treatment of steel.",
    pack_sizes: ["210L"],
    usage: "Steel hardening and heat treatment.",
    application: "Open quench tanks.",
    lifetime: "Continuous use",
    performance: "Consistent cooling rates.",
    features: "Low sludge formation.",
    rating: 4.3,
    image: imgMETAQUENCH42,
  },

  {
    id: "15",
    name: "Parthan EP",
    category:"Industrial Oils",
    description:
      "Industrial gear oil with high load-carrying capacity.",
    pack_sizes: ["20L", "210L"],
    usage: "Heavy industrial gear drives.",
    application: "Spur, helical, and bevel gears.",
    lifetime: "12 months",
    performance: "Meets DIN 51517 Part 3",
    features: "Excellent water separation.",
    rating: 4.6,
    image: imgPARTHANEP,
  },

  {
    id: "16",
    name: "Plutek 1 / 2",
    category:"Automotive Greases",
    description:
      "Lubricants for pneumatic tools and rock drills.",
    pack_sizes: ["20L", "210L"],
    usage: "Jackhammers and air tools.",
    application: "Pneumatic equipment.",
    lifetime: "Daily operation",
    performance: "Anti-wear additives.",
    features: "Prevents wear and fogging.",
    rating: 4.5,
    image: imgPLUTEK12,
  },

  {
    id: "17",
    name: "Seetul",
    category:"Industrial Oils",
    description:
      "Premium refrigeration compressor oils.",
    pack_sizes: ["20L", "210L"],
    usage: "Refrigeration compressors.",
    application: "Ammonia and Freon systems.",
    lifetime: "1,000+ hours",
    performance: "Meets IS: 4578-1989",
    features: "Chemically stable.",
    rating: 4.4,
    image: imgSEETUL,
  },

  {
    id: "18",
    name: "Trimofin 20",
    category:"Metal Working Fluids",
    description:
      "Neat cutting oil for machining metals.",
    pack_sizes: ["20L", "210L"],
    usage: "Metal machining.",
    application: "Automatic lathes.",
    lifetime: "Recirculated use",
    performance: "Excellent surface finish.",
    features: "Sulfur-free formula.",
    rating: 4.6,
    image: imgTRIMOFIN20,
  },

  {
    id: "19",
    name: "Drawmet",
    category:"Metal Drawing Compounds",
    description:
      "Metal drawing lubricants for superior finishes.",
    pack_sizes: ["20L", "210L"],
    usage: "Wire and tube drawing.",
    application: "Cold drawing operations.",
    lifetime: "High die life",
    performance: "High-pressure lubrication.",
    features: "Reduces friction.",
    rating: 4.5,
    image: imgdrawmet,
  },

  {
    id: "20",
    name: "Futurx",
    category:"Futurx",
    description:
      "Synthetic engine oil for modern passenger cars.",
    pack_sizes: ["1L", "3L", "5L"],
    usage: "Luxury passenger vehicles.",
    application: "BS-VI compliant engines.",
    lifetime: "15,000 - 20,000 km",
    performance: "Meets API SP",
    features: "Fuel economy benefits.",
    rating: 4.9,
    image: imgfuturx,
  },

  {
    id: "21",
    name: "HDX",
    category:"Heavy Duty Diesel Engine Oils",
    description:
      "Heavy-duty diesel engine oil.",
    pack_sizes: ["1L", "5L", "20L", "210L"],
    usage: "Commercial fleets.",
    application: "API CF/SF engines.",
    lifetime: "10,000 - 12,000 km",
    performance: "Meets IS: 13656-2014",
    features: "Reliable engine cleanliness.",
    rating: 4.2,
    image: imghdx ,
  },

  {
    id: "22",
    name: "HP Hytherm 600",
    category:"Thermic Fluids",
    description:
      "Premium thermic fluid for heat transfer systems.",
    pack_sizes: ["20L", "210L"],
    usage: "Industrial heating processes.",
    application: "Chemical and textile industries.",
    lifetime: "Extended service life",
    performance: "High thermal stability.",
    features: "Low volatility.",
    rating: 4.8,
    image: imghytherm600,
  },

  {
    id: "23",
    name: "HP Hycom",
    category:"Compressor oil",
    description:
      "High-quality compressor oils.",
    pack_sizes: ["20L", "210L"],
    usage: "Air compressors.",
    application: "Industrial compressors.",
    lifetime: "Long drain intervals",
    performance: "Meets DIN 51506 VDL",
    features: "Low carbon formation.",
    rating: 4.6,
    image: imghycom,
  },

  {
    id: "24",
    name: "HP Milcy Power",
    category:"Heavy Duty Diesel Engine Oils",
    description:
      "Premium multi-grade diesel engine oil.",
    pack_sizes: ["1L", "5L", "10L", "20L", "210L"],
    usage: "Turbocharged diesel engines.",
    application: "Heavy commercial vehicles.",
    lifetime: "Long drain intervals",
    performance: "Meets API CF-4",
    features: "Better fuel economy.",
    rating: 4.9,
    image: imgmilcypower,
  },

  {
    id: "25",
    name: "HP TransformOil",
    category:"Industrial Oils",
    description:
      "Electrical insulating transformer oil.",
    pack_sizes: ["210L", "Bulk Tanker"],
    usage: "Transformers and switchgears.",
    application: "Oil-filled transformers.",
    lifetime: "Long oxidation stability",
    performance: "Meets IS: 335-2018",
    features: "Excellent sludge control.",
    rating: 4.7,
    image: imgtransformOil,
  },

  {
    id: "26",
    name: "HP Rustop",
    category:"Rust Preventives",
    description:
      "Premium rust preventive oil.",
    pack_sizes: ["20L", "210L"],
    usage: "Metal surface protection.",
    application: "Steel tubes and components.",
    lifetime: "3 to 9 months protection",
    performance: "Water displacement properties.",
    features: "Easy solvent removal.",
    rating: 4.5,
    image: imgrustop,
  },

  {
    id: "27",
    name: "HP Racer",
    category:"BS VI Grades",
    description:
      "High-performance motorcycle engine oil.",
    pack_sizes: ["800ml", "1L", "50L", "210L"],
    usage: "4-stroke motorcycles.",
    application: "Hero, Honda, Bajaj, TVS, Yamaha bikes.",
    lifetime: "3,000 - 5,000 km",
    performance: "Meets API SL and JASO MA2",
    features: "Smooth clutch engagement.",
    rating: 4.8,
    image: imgracer,
  },
  {
    "id": "28",
    "name": "HP Gear Oil EP 90",
      category:"Gear and Transmisson oils",
    "description": "A multipurpose gear oil containing extreme pressure additives for moderate service conditions, ensuring smooth transmission performance.",
    "pack_sizes": ["1L", "5L", "20L", "26L", "210L"],
    "usage": "Manual transmissions of automobiles and moderate-duty industrial gear systems.",
    "application": "Automobile manual gearboxes requiring extreme pressure (EP) oils and industrial machinery under high loads.",
    "lifetime": "Ensures longer trouble-free operation with extended service intervals depending on usage conditions.",
    "performance": "Meets API GL-4, MIL-L-2105, and IS: 1118:1992 specifications.",
    "features": "Excellent thermal and chemical stability, superior protection against rust and corrosion, and high resistance to wear.",
    "rating": 4.7,
    "image": imgEP90
  },
  {
    "id": "29",
    "name": "HP Seetul N 68",
    category:"Industrial Oils",
    "description": "High-quality refrigeration compressor oil formulated from deep hydro-finished lube base stocks for superior chemical stability.",
    "pack_sizes": ["20L", "210L"],
    "usage": "Reciprocating and rotary refrigeration compressors in cold storage and refrigeration plants.",
    "application": "Industrial refrigeration systems using ammonia (R-717) or carbon dioxide (R-744) as refrigerants.",
    "lifetime": "Highly stable formulation designed for continuous industrial operation with low moisture content.",
    "performance": "Meets ISO VG 68 viscosity grade standards for refrigeration compressor oils.",
    "features": "Very low pour point, excellent dryness, and ready solubility in liquified refrigerants; not recommended for Freon refrigerants.",
    "rating": 4.6,
    "image": imgSeetulN68
  },
  {
    "id": "30",
    "name": "HP Tisona",
    category:"Automotive Greases",
    "description": "A high-quality agricultural spray oil specifically designed to control pests and diseases on fruit trees and plantation crops.",
    "pack_sizes": ["5L", "20L", "210L"],
    "usage": "Agricultural sector for crop protection.",
    "application": "Used as an emulsifiable oil spray for controlling scales in apples and mites in tea and other plantation crops.",
    "lifetime": "Provides a protective film on the plant surface; reapplication required based on pest cycles.",
    "performance": "Meets IS: 588-1963 standards for agricultural spray oils.",
    "features": "Excellent emulsifiability with water and safe for plants when used as per recommended dosages.",
    "rating": 4.5,
    "image": imgtison
  },
  {
    "id": "31",
    "name": "HP Trimofin 23 / 25",
    category:"Metal Working Fluids",
    "description": "Premium neat cutting oils with varying levels of extreme pressure additives for different machining severities.",
    "pack_sizes": ["20L", "210L"],
    "usage": "Heavy-duty machining operations on ferrous metals.",
    "application": "Trimofin 23 is used for gear hobbing and high-speed machining, while Trimofin 25 is ideal for severe operations like broaching.",
    "lifetime": "Maintains high lubrication efficiency throughout long production runs.",
    "performance": "Formulated with active sulfur and chlorinated additives for superior surface finish.",
    "features": "Excellent cooling and lubrication properties that enhance tool life and reduce friction.",
    "rating": 4.7,
    "image": imgtrimfon23
  },
  {
    "id": "32",
    "name": "HP Multipurpose Grease 3",
    category:"Automotive Greases",
    "description": "A high-quality lithium-base grease characterized by high drop point and excellent oxidation stability.",
    "pack_sizes": ["1kg", "2kg", "5kg", "18kg", "180kg"],
    "usage": "General purpose lubrication for automotive and industrial equipment.",
    "application": "Suitable for all types of plain and anti-friction bearings, as well as chassis and water pump lubrication.",
    "lifetime": "Extended regreasing intervals due to high structural stability.",
    "performance": "Meets IS: 7623-1993 (Regular Type) specifications and NLGI 3 grade.",
    "features": "Excellent water resistance, rust prevention, and ability to withstand high operating temperatures.",
    "rating": 4.8,
    "image": imgmp3  }
];
// parthan ep  futurx hdx hytherm 600 rustop