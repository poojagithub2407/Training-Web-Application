const SubMain = () => {
     return (
       <div className="w-full bg-gray-50 py-12 my-12">
         <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
           {/* Stat 1 */}
           <div className="text-center">
             <div className="text-5xl font-bold text-[#5fcf80] py-2">1232</div>
             <div className="text-gray-500">Students</div>
           </div>
   
           {/* Stat 2 */}
           <div className="text-center">
             <div className="text-5xl font-bold text-[#5fcf80] py-2">64</div>
             <div className="text-gray-500">Courses</div>
           </div>
   
           {/* Stat 3 */}
           <div className="text-center">
             <div className="text-5xl font-bold text-[#5fcf80] py-2">42</div>
             <div className="text-gray-500">Events</div>
           </div>
   
           {/* Stat 4 */}
           <div className="text-center">
             <div className="text-5xl font-bold text-[#5fcf80] py-2">24</div>
             <div className="text-gray-500">Trainers</div>
           </div>
         </div>
       </div>
     );
   };
   
   export default SubMain;
   