import React from "react";

const SubPricing = () => {
  return (
    <div className="md:mx-24 mx-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="rounded-lg shadow-sm">
        <div className="h-20 bg-gray-100 text-center  flex justify-center items-center text-gray-600 ">
          Free
        </div>
        <div className="flex justify-center items-center mt-8 gap-1">
          <div className="mb-6 font-extrabold text-2xl">$</div>
          <div className="text-3xl font-extrabold">0</div>
          <div className="text-gray-300">/ month</div>
        </div>
        <div className="text-center  text-gray-500">
          <p className="py-1 mt-1">Aida dere</p>
          <p className="py-1">Nec feugiat nisl</p>
          <p className="py-1">Nulla at volutpat dola</p>
          <p className="py-1">
            <del>Pharetra massa</del>
          </p>
          <p className="py-1">
            <del>Massa ultricies mi</del>
          </p>
          <div className="bg-gray-100 h-20 rounded-bottom mt-10 flex justify-center items-center">
            <button className="bg-[#5fcf80] text-white py-2 px-8 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-sm">
        <div className="h-20 bg-[#5fcf80] text-center  text-white flex justify-center items-center">
        Business
        </div>
        <div className="flex justify-center items-center mt-8 gap-1">
          <div className="mb-6 font-extrabold text-2xl">$</div>
          <div className="text-3xl font-extrabold">19 </div>
          <div className="text-gray-300">/ month</div>
        </div>
        <div className="text-center  text-gray-500">
          <p className="py-1 mt-1">Aida dere</p>
          <p className="py-1">Nec feugiat nisl</p>
          <p className="py-1">Nulla at volutpat dola</p>
          <p className="py-1">
            Pharetra massa
          </p>
          <p className="py-1">
            <del>Massa ultricies mi</del>
          </p>
          <div className="bg-gray-100 h-20 rounded-bottom mt-10 flex justify-center items-center">
            <button className="bg-[#5fcf80] text-white py-2 px-8 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-sm">
        <div className="h-20 bg-gray-100 text-center  flex justify-center items-center text-gray-600 ">
        Developer
        </div>
        <div className="flex justify-center items-center mt-8 gap-1">
          <div className="mb-6 font-extrabold text-2xl">$</div>
          <div className="text-3xl font-extrabold">29</div>
          <div className="text-gray-300">/ month</div>
        </div>
        <div className="text-center  text-gray-500">
          <p className="py-1 mt-1">Aida dere</p>
          <p className="py-1">Nec feugiat nisl</p>
          <p className="py-1">Nulla at volutpat dola</p>
          <p className="py-1">
           Pharetra massa
          </p>
          <p className="py-1">
           Massa ultricies mi
          </p>
          <div className="bg-gray-100 h-20 rounded-bottom mt-10 flex justify-center items-center">
            <button className="bg-[#5fcf80] text-white py-2 px-8 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-sm">
        <div className="h-20 bg-gray-100 text-center  flex justify-center items-center text-gray-600 ">
        Ultimate
        </div>
        <div className="flex justify-center items-center mt-8 gap-1">
          <div className="mb-6 font-extrabold text-2xl">$</div>
          <div className="text-3xl font-extrabold">49</div>
          <div className="text-gray-300">/ month</div>
        </div>
        <div className="text-center  text-gray-500">
          <p className="py-1 mt-1">Aida dere</p>
          <p className="py-1">Nec feugiat nisl</p>
          <p className="py-1">Nulla at volutpat dola</p>
          <p className="py-1">
            <del>Pharetra massa</del>
          </p>
          <p className="py-1">
            <del>Massa ultricies mi</del>
          </p>
          <div className="bg-gray-100 h-20 rounded-bottom mt-10 flex justify-center items-center">
            <button className="bg-[#5fcf80] text-white py-2 px-8 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SubPricing;
