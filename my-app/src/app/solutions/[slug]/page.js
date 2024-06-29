'use client'

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Simulating fetching data based on slug
const items = [
  { title: "Financial & Cryptocurrency", image: "images/DSC_8477.JPG", description: "Detailed description for Financial & Cryptocurrency.", slug: "financial-cryptocurrency" },
  { title: "Retail", image: "images/Grocery_Store 3000x2000px WU branded 02.jpg", description: "Detailed description for Retail.", slug: "retail" },
  { title: "HealthCare", image: "images/healthcare.png", description: "Detailed description for HealthCare.", slug: "healthcare" },
  { title: "Hospitality", image: "images/Hospitality.jpg", description: "Detailed description for Hospitality.", slug: "hospitality" },
  { title: "Gaming", image: "images/vr-kiosk.webp", description: "Detailed description for Gaming.", slug: "gaming" },
  { title: "Government", image: "images/government.png", description: "Detailed description for Government.", slug: "government" },
  { title: "Self Storage", image: "images/StoreLocal-Kiosk.jpeg", description: "Detailed description for Self Storage.", slug: "self-storage" },
  { title: "Transportation & Tourism", image: "images/insurance.png", description: "Detailed description for Transportation & Tourism.", slug: "transportation-tourism" },
  { title: "And Many more Customizable", image: "/path/to/image3.jpg", description: "Detailed description for Customizable.", slug: "customizable" },
];

const SolutionDetail = () => {
  const { slug } = useParams();

  const item = items.find(item => item.slug === slug);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mt-10 relative h-96 w-full mb-8">
        <Image
          src={`/${item.image}`}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
      <p className="text-lg">{item.description}</p>
    </div>
  );
};

export default SolutionDetail;
