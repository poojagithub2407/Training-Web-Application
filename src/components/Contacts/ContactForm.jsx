import React from "react";
import { BsGeoAlt, BsTelephone, BsEnvelopeFill } from "react-icons/bs";
const ContactForm = () => {
     return (
          <div className="md:mx-28   mx-4 md:my-16   grid grid-cols-1 md:grid-cols-2 md:-space-x-32">
               <div className="md:my-8 my-10">
                    <div className="flex gap-3 my-5">
                         <div className="flex justify-center items-center w-12 h-12 text-white rounded-full bg-[#5fcf80]">
                              <BsGeoAlt />
                         </div>
                         <div>
                              <p className="font-bold text-xl">Address</p>
                              <p className="text-gray-500">A108 Adam Street, New York, NY 535022</p>
                         </div>
                    </div>
                    <div className="flex gap-3">
                         <div className="flex justify-center items-center w-12 h-12 text-white rounded-full bg-[#5fcf80]">
                              <BsTelephone />
                         </div>
                         <div>
                              <p className="font-bold text-xl">Call Us</p>
                              <p className="text-gray-500">+1 5589 55488 55</p>
                         </div>
                    </div>
                    <div className="flex gap-3 my-5">
                         <div className="flex justify-center items-center w-12 h-12 text-white rounded-full bg-[#5fcf80]">
                              {" "}
                              <BsEnvelopeFill />
                         </div>
                         <div>
                              <p className="font-bold text-xl">Email Us</p>
                              <p className="text-gray-500">info@example.com</p>
                         </div>
                    </div>
               </div>
               <div className="md:my-8 my-10 ">
                    <div className="flex flex-col md:flex-row gap-4 py-5 ">
                         <input 
                         type='text'
                         placeholder="Your Name"
                         className="border md:w-96 w-full p-2 text-gray-400 focus:outline-[#5fcf80]" />
                         <input 
                         type='email'
                         placeholder="Your Email"
                         className="border md:w-96 w-full p-2 focus:outline-[#5fcf80]" />

                    </div>
                    <div className="py-5">
                         <input
                         type="text"
                         placeholder="Subject"
                          className="w-full border p-2 focus:outline-[#5fcf80]" />
                    </div>
                    <div>
                         <textarea
                         placeholder="Message"
                              rows={4}
                              className="w-full p-2 border focus:outline-[#5fcf80]" />
                    </div>
                    <div className="flex item-center justify-center my-4">
                         <button className="text-white bg-[#5fcf80] py-2 px-6 rounded-full">Send Message</button>
                    </div>

               </div>

          </div>
     );
};

export default ContactForm;
