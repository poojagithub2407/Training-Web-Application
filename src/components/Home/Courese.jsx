import React from 'react'
import { courses } from '../../contant'

const Courese = () => {
  return (
    <div className="md:mx-24 mx-4 my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border border-gray-300 hover:border-[#5fcf80] hover:text-[#5fcf80] px-8 py-6 flex items-center gap-4 cursor-pointer transition duration-300"
          >
            <div className="text-4xl">{course.icon}</div>
            <div className="mt-1 text-lg">{course.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courese;
