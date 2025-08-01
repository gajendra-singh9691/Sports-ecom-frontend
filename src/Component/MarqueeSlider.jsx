import React from "react";
import "./slider.css"; // Import the custom CSS for keyframes

const promoItems = [
  "100% QUALITY FOOTBALL PRODUCTS",
  "LIMITED EDITION RELEASES",
  "DISCOUNTS ON YOUR FIRST ORDERS",
  "DISCOVER SUSTAINABLE BESTSELLERS",
];

function MarqueeSlider() {
  return (
    <div className="overflow-hidden bg-black my-8 py-2">
      <div
        className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
        style={{ minWidth: "max-content" }}
      >
        {/* Repeat items twice for seamless loop */}
        {[...promoItems, ...promoItems].map((text, idx) => (
          <span key={idx} className="mx-8 font-bold text-white text-sm sm:text-md md:text-xl flex items-center">
            <span className="mr-2">⚡</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeSlider;
