import React from "react";

const EventCourses = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Course 1 */}
        <div className="flex flex-col lg:w-1/2">
          <img
            src="https://themewagon.github.io/Mentor/assets/img/events-item-1.jpg"
            className="w-full rounded-t"
            alt="Web Design"
          />
          <div className="text-center border bg-white mt-[-48px] mx-4 sm:mx-8 hover:border-t-4 hover:border-t-[#5fcf80] shadow-xl flex flex-col">
            <h1 className="py-4 font-bold text-lg hover:text-[#5fcf80] cursor-pointer">
              Introduction to Web Design
            </h1>
            <p>
              <em>Sunday, September 26th at 7:00 pm</em>
            </p>
            <p className="py-4 px-6 text-start text-gray-500 flex-grow">
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>

        {/* Course 2 */}
        <div className="flex flex-col lg:w-1/2">
          <img
            src="https://themewagon.github.io/Mentor/assets/img/events-item-2.jpg"
            className="w-full rounded-t"
            alt="Marketing Strategies"
          />
          <div className="text-center border bg-white mt-[-48px] mx-4 sm:mx-8 hover:border-t-4 hover:border-t-[#5fcf80] shadow-xl flex flex-col">
            <h1 className="py-4 font-bold text-lg hover:text-[#5fcf80] cursor-pointer">
              Marketing Strategies
            </h1>
            <p>
              <em>Sunday, November 15th at 7:00 pm</em>
            </p>
            <p className="py-4 px-6 text-start text-gray-500 flex-grow">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCourses;
