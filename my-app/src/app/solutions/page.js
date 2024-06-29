import React from 'react';
import Link from 'next/link';
import Hero from "../components/Hero";

function Solutions() {
  const description1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis leo vel fringilla est. Cum sociis natoque penatibus et.";
  const items = [
    { title: "Financial & Cryptocurrency", image: "images/DSC_8477.JPG", description: description1, slug: "financial-cryptocurrency" },
    { title: "Retail", image: "images/Grocery_Store 3000x2000px WU branded 02.jpg", description: description1, slug: "retail" },
    { title: "HealthCare", image: "images/healthcare.png", description: description1, slug: "healthcare" },
    { title: "Hospitality", image: "images/Hospitality.jpg", description: description1, slug: "hospitality" },
    { title: "Gaming", image: "images/vr-kiosk.webp", description: description1, slug: "gaming" },
    { title: "Government", image: "images/government.png", description: description1, slug: "government" },
    { title: "Self Storage", image: "images/StoreLocal-Kiosk.jpeg", description: description1, slug: "self-storage" },
    { title: "Transportation & Tourism", image: "images/insurance.png", description: description1, slug: "transportation-tourism" },
    { title: "Want to know more?", description: "Kiosk offers a wide range of self-service applications that apply to multiple markets.", slug: "contact", special: true },
  ];

  return (
    <div>
      <Hero 
        type="image"
        src="/images/solutions.jpg"
        heading="Your Heading Here" 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 sm:gap-5 sm:p-12 md:gap-7 md:p-16 lg:gap-9 lg:p-20">
        {items.map((item, index) => (
          item.special ? (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group flex flex-col justify-center gap-5 items-center p-8  text-center"
              style={{ minHeight: '530px' }}
            >
              <h3 className="text-2xl font-bold ">{item.title}</h3>
              <p className=" text-lg">{item.description}</p>
              <Link href="/contact">
                <button className="mt-4 bg-red-500 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition duration-300">
                  Talk to us
                </button>
              </Link>
            </div>
          ) : (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg overflow-hidden group"
              style={{ minHeight: '530px' }}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent" style={{ backdropFilter: 'blur(0.3px)' }}></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-lg font-semibold text-white text-shadow-md">{item.title}</h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-80 p-8 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white text-center">
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                  <hr />
                  <p className="my-4 text-lg font-extralight">{item.description}</p>
                  <Link href={`/solutions/${item.slug}`}>
                    <button className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Solutions;
