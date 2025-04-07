import React from "react";
import {
     BsTwitterX,
     BsFacebook,
     BsInstagram,
     BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
     return (
          <div className="w-full h-auto bg-gray-100 my-16">
               <div className="md:mx-24 mx-4 my-8 ">
                    <div className="grid grid-cols-1 md:grid-cols-4 justify-between py-12">
                         <div className="md:mr-32"> {/* Increased margin-right for more space */}
                              <h1 className="cursor-pointer text-2xl font-bold">Mentor</h1>
                              <div className="text-gray-600">
                                   <p className="mt-2">A108 Adam Street</p>
                                   <p>New York, NY 535022</p>
                                   <p className="mt-2"><strong>Phone:</strong> +1 5589 55488 55</p>
                                   <p><strong>Email:</strong> info@example.com</p>
                                   <div className="flex justify-start text-gray-400 py-4 gap-3">
                                        <BsTwitterX className="w-8 h-8 p-1 rounded-full border hover:text-[#5fcf80] cursor-pointer" />
                                        <BsFacebook className="w-8 h-8 p-1 rounded-full border hover:text-[#5fcf80] cursor-pointer" />
                                        <BsInstagram className="w-8 h-8 p-1 rounded-full border hover:text-[#5fcf80] cursor-pointer" />
                                        <BsLinkedin className="w-8 h-8 p-1 rounded-full border hover:text-[#5fcf80] cursor-pointer" />
                                   </div>
                              </div>
                         </div>
                         <div>
                              <h1 className="text-lg font-semibold my-3">Useful Links</h1>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">Home</p>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">About us</p>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">Services</p>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">Terms Service</p>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">Privacy policy</p>
                         </div>
                         <div>
                              <h1 className="text-lg font-semibold my-3 ">Our Services</h1>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">Web Design</p>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">Web Development</p>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">Product Management</p>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">Marketing</p>
                              <p className="text-gray-600 py-1 hover:text-[#5fcf80] cursor-pointer">Graphic Design</p>
                         </div>
                         <div className="">
                              <h1 className="text-lg font-semibold my-3 ">Ours Newsletters</h1>
                              <p className="my-4">Subscribe to our newsletter and receive the latest news about <br /> our products and services!</p>
                              <div className="relative">
                                   <input type="text" className="rounded-full border border-gray-200 py-2 px-10" />
                                   <button className="absolute transform -translate-x-10 py-2 px-6 text-white bg-[#5fcf80] rounded-full">
                                        Subscribe
                                   </button>
                              </div>

                         </div>

                    </div>
                    <div className="flex justify-center items-center flex-col bg-slate-100 py-6 px-4 text-gray-600 text-center text-sm md:text-base">
  <p className="py-1">
    © Copyright <strong>Mentor</strong> All Rights Reserved
  </p>
  <p>
    Designed by <span className="text-[#5fcf80]">BootstrapMade</span> | Distributed by <span className="text-[#5fcf80]">ThemeWagon</span>
  </p>
</div>

               </div>


          </div>


     );
};

export default Footer;
