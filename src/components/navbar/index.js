import { Link } from "react-router-dom";
import { RiCodeSSlashFill, RiHome3Fill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { MdPermContactCalendar } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed  sm:w-1/3 sm:right-1/3 w-full bottom-4 sm:border-b-0 border-b-0  rounded-full  z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30  border-gray-200 ">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-12">
          <div className="flex space-x-10 sm:space-x-7 text-gray-900 flex-1  justify-center mr-auto">
            <Link to="/">
              <RiHome3Fill
                className="text-3xl hover:text-blue-700 active:text-blue-700  transition duration-100 ease-in-out"
                data-bs-toggle="tooltip"
                title="Home"
              />
            </Link>
            <Link to="/about">
              <SiAboutdotme
                className="text-3xl hover:text-blue-700 active:text-blue-700 transition duration-100 ease-in-out"
                data-bs-toggle="tooltip"
                title="About"
              />
            </Link>
            <Link to="/projects">
              <RiCodeSSlashFill
                className="text-3xl hover:text-blue-700 active:text-blue-700  transition duration-100 ease-in-out"
                data-bs-toggle="tooltip"
                title="Project"
              />
            </Link>
            <Link to="/contact">
              <MdPermContactCalendar
                className="text-3xl hover:text-blue-700 active:text-blue-700  transition duration-100 ease-in-out"
                data-bs-toggle="tooltip"
                title="Contact"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
