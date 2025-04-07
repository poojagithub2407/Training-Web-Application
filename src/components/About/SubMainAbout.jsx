import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

const SubMainAbout = () => {
  return (
    <div className="md:mx-28 mx-4 transform w-auto -translate-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
        {/* Text Section */}
        <div className="order-2 md:order-1 max-w-lg">
          <h1 className="text-2xl font-bold">
            Voluptatem dignissimos provident quasi corporis
          </h1>
          <em className="mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </em>
          <div className="mt-6">
            <div className="flex gap-3 mt-4 text-lg">
              <CiCircleCheck className="text-2xl  font-semibold text-[#5fcf80]" />
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>

            <div className="flex gap-3 mt-4 text-lg">
              <CiCircleCheck className="text-2xl  font-semibold text-[#5fcf80]" />
              <span>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </span>
            </div>

            <div className="flex gap-3 mt-4 text-lg">
              <CiCircleCheck className="text-5xl  font-semibold text-[#5fcf80]" />
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2">
          <img
            src="https://themewagon.github.io/Mentor/assets/img/about-2.jpg"
            className="md:h-[72vh]  md:w-full object-cover"
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default SubMainAbout;
