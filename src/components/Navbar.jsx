import { NavLink, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import { BiX } from 'react-icons/bi';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Trainers", path: "/trainers" },
    { name: "Events", path: "/events" },
    { name: "Pricing", path: "/pricing" },
    { name: "Dropdown", path: "/dropdown" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-7 shadow-md z-50">
      <div className="container md:px-28 flex justify-between items-center">
        <h1 className="md:text-3xl text-2xl font-bold text-[#5fcf80]">MENTOR</h1>
        <ul className="flex md:space-x-10 space-x-2 items-center">
          {navItems.map((item) => (
            <li key={item.path} className="hidden md:block">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-[#5fcf80] font-bold" : "hover:text-[#5fcf80]"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={() => navigate('/getStart')}
              className="bg-[#5fcf80] md:px-10 px-6 text-white rounded-full hover:bg-opacity-50 md:py-2 py-1"
            >
              Get Started
            </button>
          </li>
          <li className="md:hidden relative text-2xl mt-1">
            {isOpen
              ? <BiX onClick={() => setOpen(false)} />
              : <BsList   onClick={() => setOpen(true)} />}
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40">
        <div className="w-80 bg-white h-auto mx-5 my-10 shadow-xl p-6">
        <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-[#5fcf80] font-bold" : "hover:text-[#5fcf80]"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
