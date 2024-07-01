'use client'
import React from "react";
import Hero from "../components/Hero";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Right from "../icons/Right";
import SmartKioskSection from '../components/SmartKioskSection';

function Product() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
          <Hero type="image" src="/images/ourProduct.JPG" heading="What We Offer" />

      <div className="relative h-screen w-full overflow-hidden flex items-center justify-end">
        {/* Left side content */}
        <div className="w-1/2 flex flex-col items-start justify-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Heading Here</h1>
          <p className="text-lg md:text-2xl mb-8">A little description goes here. It should be concise and engaging.</p>
        </div>

        {/* Right side image */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <img src="images/Office_model.png" alt="Description of image" className="object-cover max-w-full max-h-full" style={{ maxWidth: '70%', maxHeight: '70%' }} />
        </div>
      </div>
      <div className="relative  flex flex-col items-center justify-start" style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
      <div className="relative w-full max-w-screen-lg mx-auto p-4">
        {/* Second Navbar */}
        <div className="flex justify-center shadow-inner bg-white rounded-lg">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-semibold ${activeTab === 'overview' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('specifications')}
            className={`px-6 py-3 font-semibold ${activeTab === 'specifications' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
          >
            Specifications
          </button>
        </div>
        {/* Content based on active tab */}
        <div className="mt-8 p-4 text-center text-gray-700">
          {activeTab === 'overview' ? (
            <div className="container mx-auto my-10  flex items-center justify-center">
      <div className="w-full md:w-1/3 flex flex-col text-left items-start">
        <p className="mb-7 text-lg font-bold">Why Smartest Kiosk?</p>
        <div className="relative w-full h-96 mb-4">
          <Image 
            src={'/images/Vending_model.png'} 
            layout="fill" 
            objectFit="contain" 
            alt="Vending Model" 
            className="object-left"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 md:pl-8 text-left">
        <p className="mb-4">          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum justo in metus tincidunt, vel fermentum turpis convallis. Quisque sit amet consectetur magna.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum justo in metus tincidunt, vel fermentum turpis convallis. Quisque sit amet consectetur magna.
        </p>
        <p className="">
          Praesent bibendum turpis sit amet nulla volutpat, a tincidunt erat facilisis. Curabitur vehicula, lorem in commodo lobortis, ipsum arcu scelerisque nisl, eu faucibus risus arcu sed nulla.
        </p>
        <p className="mb-4">
          Aenean consectetur justo eu elit fermentum, vitae laoreet mi porttitor. Integer vitae ligula eget risus dapibus volutpat. Suspendisse potenti. Integer fermentum erat non turpis dictum efficitur.
        </p>
        <p>          Aenean consectetur justo eu elit fermentum, vitae laoreet mi porttitor. Integer vitae ligula eget risus dapibus volutpat. Suspendisse potenti. Integer fermentum erat non turpis dictum efficitur.

          Aenean consectetur justo eu elit fermentum, vitae laoreet mi porttitor. Integer vitae ligula eget risus dapibus volutpat. Suspendisse potenti. Integer fermentum erat non turpis dictum efficitur.
        </p>
      </div>
    </div>
          ) : (
            <div className="container mx-auto my-10 flex items-center justify-center">
      <div className="w-full md:w-1/3 flex flex-col text-left items-start">
        <div className="relative w-full h-96 mb-4">
          <Image 
            src={'/images/Specs.jpg'} 
            layout="fill" 
            objectFit="contain" 
            alt="Vending Model" 
            className="object-left mix-blend-darken"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 md:pl-8 text-left">
        <div className="flex flex-wrap">
          <ul className="w-full md:w-1/2 pl-5 space-y-2">
            <li className="list-none">
              <strong>Payment Components:</strong> 
              <ul className="pl-5 space-y-1 custom-list">
                <li>Credit Card Reader</li>
                <li>Contactless Payment Module</li>
                <li>Cash Acceptor</li>
              </ul>
            </li>
            <li className="list-none">
              <strong>Printers:</strong>
              <ul className="pl-5 space-y-1 custom-list">
                <li>Receipt Printer</li>
                <li>Card Printer</li>
              </ul>
            </li>
            <li className="list-none">
              <strong>Screens:</strong>
              <ul className="pl-5 space-y-1 custom-list">
                <li>Primary Display Screen</li>
                <li>Secondary Display Screen</li>
                <li>Touch Screen Interface</li>
              </ul>
            </li>
          </ul>
          <ul className="w-full md:w-1/2 pl-5 space-y-2">
            <li className="list-none">
              <strong>Connectivity:</strong>
              <ul className="pl-5 space-y-1 custom-list">
                <li>Wi-Fi</li>
                <li>Ethernet Port</li>
                <li>Bluetooth</li>
              </ul>
            </li>
            <li className="list-none">
              <strong>Security Features:</strong>
              <ul className="pl-5 space-y-1 custom-list">
                <li>Camera Surveillance</li>
                <li>Alarm System</li>
                <li>Secure Locking Mechanism</li>
              </ul>
            </li>
            <li className="list-none">
              <strong>Other Features:</strong>
              <ul className="pl-5 space-y-1 custom-list">
                <li>Barcode Scanner</li>
                <li>RFID Reader</li>
                <li>Voice Assistance</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>     )}
        </div>
      </div>
    </div>
    
    <SmartKioskSection />
    </>
  );
}

export default Product;
