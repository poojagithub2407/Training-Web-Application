import { CiUser, CiHeart } from "react-icons/ci";

const courses = [
     {
          id: 1,
          title: "Web Development",
          price: "$169",
          category: "Web Design",
          description:
               "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
          image: "https://themewagon.github.io/Mentor/assets/img/course-1.jpg",
          trainer: {
               name: "Antonio",
               image: "https://themewagon.github.io/Mentor/assets/img/trainers/trainer-1-2.jpg",
          },
          stats: { users: 50, likes: 65 },
     },
     {
          id: 2,
          title: "Marketing",
          price: "$250",
          category: "Search Engine Optimization",
          description:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
          image: "https://themewagon.github.io/Mentor/assets/img/course-2.jpg",
          trainer: {
               name: "Lana",
               image: "https://themewagon.github.io/Mentor/assets/img/trainers/trainer-2-2.jpg",
          },
          stats: { users: 25, likes: 42 },
     },
     {
          id: 3,
          title: "Content",
          price: "$180",
          category: "CopyWriting",
          description:
               "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
          image: "https://themewagon.github.io/Mentor/assets/img/course-3.jpg",
          trainer: {
               name: "Antonio",
               image: "https://themewagon.github.io/Mentor/assets/img/trainers/trainer-3-2.jpg",
          },
          stats: { users: 20, likes: 85 },
     },
];

const MainCourses = () => {
     return (
          <div className="md:mx-24 mx-4 my-12">
            {/* Header */}
            <div className="flex gap-2 items-center mb-2">
              <h1 className="text-sm md:text-md text-gray-400 font-semibold">COURSES</h1>
              <div className="border-t-2 w-20 md:w-28 mt-1 border-[#5fcf80]"></div>
            </div>
      
            <h1 className="text-2xl md:text-3xl font-bold mb-8">POPULAR COURSES</h1>
      
            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="w-full border rounded overflow-hidden shadow-sm hover:shadow-md transition">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      
                  <div className="flex justify-between items-center py-4 px-3">
                    <button className="px-4 py-1 text-white text-sm rounded bg-[#5fcf80]">
                      {course.title}
                    </button>
                    <p className="text-gray-500 text-base font-semibold">{course.price}</p>
                  </div>
      
                  <p className="px-3 text-sm font-semibold text-gray-400 mt-1">{course.category}</p>
      
                  <p className="mx-3 py-2 text-sm text-gray-500 border-b">
                    {course.description}
                  </p>
      
                  <div className="flex justify-between items-center py-4 px-3">
                    {/* Trainer */}
                    <div className="flex items-center gap-2">
                      <img
                        src={course.trainer.image}
                        className="w-10 h-10 rounded-full object-cover"
                        alt={course.trainer.name}
                      />
                      <span className="text-sm">{course.trainer.name}</span>
                    </div>
      
                    {/* Stats */}
                    <div className="flex gap-4 items-center text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <CiUser className="text-lg" />
                        <span>{course.stats.users}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CiHeart className="text-lg text-red-500" />
                        <span>{course.stats.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
};

export default MainCourses;
