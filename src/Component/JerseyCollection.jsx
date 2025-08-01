import React, { useState } from "react";

// Dropdown item component
function DropdownItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left py-2 px-4 flex justify-between items-center text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <p className="px-6 py-2 text-gray-700 bg-gray-100 transition-all duration-300">
          {content}
        </p>
      )}
    </div>
  );
}

// Main component
export default function JerseyCollection() {
  return (
    <div className=" w-full md:w-11/12 justify-center  mx-auto p-8 flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <p className="uppercase text-xs mb-2 tracking-wide text-gray-500">
          Collection
        </p>
        <h2 className="text-xl md:text-4xl font-semibold leading-tight mb-6">
          Welcome to Thayyils Sports – where your game shines.<br />
          Discover our premium jerseys and wear your passion!
        </h2>
        <div className="mt-6 space-y-2">
          <DropdownItem
            title="Football Jersey’s"
            content="Explore our exclusive collection of football jerseys with premium quality and design."
          />
          <DropdownItem
            title="Embroidery collection"
            content="Check out our unique embroidery collection that brings art and texture to your sportswear."
          />
          <DropdownItem
            title="Retro jerseys"
            content="Step back in time with our retro jerseys that celebrate classic football heritage."
          />
        </div>
      </div>
      {/* Right Section: Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="">
            <img
          src="https://media.istockphoto.com/photos/play-beautiful-picture-id522201885?k=20&m=522201885&s=612x612&w=0&h=MfzJs9ooWE-8JLJWBFvcWgXkoDVHQkQUhoGnDCjJoiE="
          alt="Premium football jerseys"
          className="w-full h-auto object-cover rounded-lg shadow"
        />
        </div>
      </div>
    </div>
  );
}
