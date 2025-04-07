const Header = () => {
     return (
          <div className="mt-24 relative h-screen">
               {/* Background Image */}
               <img
                    src="https://themewagon.github.io/Mentor/assets/img/hero-bg.jpg"
                    alt="bg-img"
                    className="w-full h-[80vh] object-cover"
               />

               {/* Content Over Image */}
               <div className="absolute top-1/4 left-4 sm:left-10 md:left-28 text-white px-2 sm:px-4 md:px-0 max-w-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold py-1">
                         Learning Today,
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold py-1">
                         Leading Tomorrow
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl font-medium py-2">
                         We are a team of talented designers making websites with Bootstrap
                    </p>
                    <button className="mt-6 py-2 px-6 rounded-full border-2 border-white hover:bg-[#5fcf80] hover:border-transparent transition duration-300">
                         Get Started
                    </button>
               </div>
          </div>
     );
};

export default Header;
