import React from "react";
import Image from "next/image";

const Hero = ({ type, src, heading, description, showButton }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Conditional Rendering for Media */}
      {type === "video" ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={src}
          autoPlay
          loop
          muted
        />
      ) : (
        <>
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={src}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
        </>
      )}

      {/* Overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-65 flex flex-col ${
          type === "video"
            ? "items-center justify-end"
            : "items-start justify-end"
        } text-center text-white p-4`}
      >
        <h1
          className={`text-4xl md:text-5xl font-semibold mb-4 ${
            type === "image" ? "text-left" : ""
          }`}
        >
          {heading}
        </h1>
        {type === "video" && (
          <>
            <p className="text-lg md:text-2xl mb-8">{description}</p>
            {showButton && (
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition duration-300">
                Get Started
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
