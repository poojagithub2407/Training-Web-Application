import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Main = () => {
     return (
          <div className="md:mx-28 mx-4 transform w-auto -translate-y-16">
               <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
                    {/* Image Section */}
                    <div className="order-1 md:order-2">
                         <img
                              src="https://themewagon.github.io/Mentor/assets/img/about.jpg"
                              className="md:h-[72vh]  md:w-full object-cover"
                              alt="About"
                         />
                    </div>

                    {/* Text Section */}
                    <div className="order-2 md:order-1 max-w-lg">
                         <h1 className="text-2xl font-bold">
                              Voluptatem dignissimos provident quasi corporis
                         </h1>
                         <em className="mt-4 block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         </em>

                         <div className="mt-6 space-y-4 text-lg">
                              <div className="flex gap-3">
                                   <CiCircleCheck className="text-2xl text-[#5fcf80]" />
                                   <span>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                   </span>
                              </div>
                              <div className="flex gap-3">
                                   <CiCircleCheck className="text-2xl text-[#5fcf80]" />
                                   <span>
                                        Duis aute irure dolor in reprehenderit in voluptate velit.
                                   </span>
                              </div>
                              <div className="flex gap-3">
                                   <CiCircleCheck className="text-2xl text-[#5fcf80]" />
                                   <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate trideta
                                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                   </p>
                              </div>
                         </div>

                         <button className="flex items-center gap-2 px-12 py-2 bg-[#5fcf80] text-white mt-4 rounded-full font-medium">
                              Read More <FaArrowRight />
                         </button>
                    </div>
               </div>
          </div>

     );
};

export default Main;
