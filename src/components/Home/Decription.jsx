import { BsClipboardDataFill, BsGem, BsInboxes } from "react-icons/bs";

const Decription = () => {
     return (
          <div className="md:mx-24  my-8">
               <div className="flex  flex-col md:flex-row gap-y-6 justify-center">
                    <div className="md:w-96  mx-4 h-auto bg-[#5fcf80] text-white px-6 py-8">
                         <h1 className=" font-bold text-4xl">Why Choose Our Products?</h1>
                         <p className="py-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                              aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur
                              quia eos. Autem tempore quibusdam vel necessitatibus optio ad
                              corporis.
                         </p>
                         <div className="flex justify-center items-center my-2 ">
                              <button className="bg-[#5fcf80] px-12 py-2 rounded-full hover:text-[#5fcf80] hover:bg-white bg-opacity-70 border">
                                   Learn More
                              </button>
                         </div>
                    </div>
                    <div className="md:w-72 mx-4 h-auto border  border-gray-200 px-12 flex flex-col items-center">
                         <div className="w-16 h-16 mt-12 bg-gray-50  hover:bg-[#5fcf80]  rounded-full flex items-center justify-center">
                              <BsClipboardDataFill className="text-[#5fcf80] text-lg hover:text-white" />
                         </div>

                         <div className="text-xl font-bold text-center my-8">
                              Corporis voluptates officia eiusmod
                         </div>
                         <div className="text-gray-400 text-center">
                              Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
                              nisi ut aliquip
                         </div>
                    </div>
                    <div className="md:w-72 mx-4 h-auto border  border-gray-200 px-12 flex flex-col items-center hover:text-white">
                         <div className="w-16 h-16 mt-12 bg-gray-50  hover:bg-[#5fcf80]   rounded-full flex items-center justify-center">
                              <BsGem className="text-[#5fcf80] text-lg " />
                         </div>

                         <div className="text-xl font-bold text-center my-8">
                              Ullamco laboris ladore pan
                         </div>
                         <div className="text-gray-400 text-center">
                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt


                         </div>
                    </div>
                    <div className="md:w-72 mx-4  h-auto border  border-gray-200 px-12 flex flex-col items-center">
                         <div className="w-16 h-16 mt-12 bg-gray-50  hover:bg-[#5fcf80]  rounded-full flex items-center justify-center">
                              <BsInboxes className="text-[#5fcf80] text-lg hover:text-white" />
                         </div>

                         <div className="text-xl font-bold text-center my-8">
                              Labore consequatur incidid dolore
                         </div>
                         <div className="text-gray-400 text-center">
                              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt


                         </div>
                    </div>{" "}
               </div>
          </div>
     );
};

export default Decription;
