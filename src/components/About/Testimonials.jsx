import React, { useEffect, useState } from "react";
import { Users } from "../../contant";
import { BsStarFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chunk users into slides: 2 per slide (desktop), 1 per slide (mobile)
  const chunkSize = isMobile ? 1 : 2;
  const arrangedUsers = [];

  for (let i = 0; i < Users.length; i += chunkSize) {
    arrangedUsers.push(Users.slice(i, i + chunkSize));
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % arrangedUsers.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [arrangedUsers.length]);

  return (
    <div className="mx-4 md:mx-28 my-12">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h1 className="text-gray-500 text-md">TESTIMONIALS</h1>
        <div className="border-t-2 w-24 md:w-32 mt-3 border-[#5fcf80]"></div>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        WHAT ARE THEY SAYING
      </h1>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${arrangedUsers.length * 100}%`,
            transform: `translateX(-${index * (100 / arrangedUsers.length)}%)`,
          }}
        >
          {arrangedUsers.map((group, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-x-12 w-full px-2 md:px-0"
            >
              {group.map((user) => (
                <div
                  key={user.id}
                  className="border border-gray-300 p-6 md:p-8 rounded-lg w-full md:w-[480px] shadow-lg bg-white"
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <img
                      src={user.imageUrl}
                      alt={user.name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-lg font-semibold">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.job}</p>
                      <div className="text-yellow-400 flex justify-center md:justify-start gap-1 my-2">
                        {[...Array(4)].map((_, i) => (
                          <BsStarFill key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-700">
                    <p className="flex items-center gap-2">
                      <FaQuoteLeft className="text-[#93e7ac]" />
                      <em>{user.decription}</em>
                      <FaQuoteRight className="text-[#93e7ac]" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {arrangedUsers.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === i ? "bg-[#5fcf80] scale-110" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
