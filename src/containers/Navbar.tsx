import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/Cg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/Rx";

const Navbar = () => {
  return (
    <>
      <div className="border-accent border-b-[0.5px] flex flex-row gap-4 px-4 py-1 justify-between dark:bg-background bg-white">
        {/* Hamburger Nav Links Start */}
        <div className="flex flex-row items-center gap-4 px-2 transition-none duration-300 md:hidden rounded-xl hover:bg-neutral-800">
          <RxHamburgerMenu></RxHamburgerMenu>
        </div>
        {/* Hamburger Nav Links End */}
        {/* Nav Links Start */}
        <div className="flex flex-row gap-4 max-md:hidden">
          <Link to={"/dashboard"}>
            <div className="p-2 px-4 transition-none duration-300 rounded-xl hover:bg-neutral-800">
              Home
            </div>
          </Link>
          <Link to={"/listings"}>
            <div className="p-2 px-4 transition-none duration-300 rounded-xl hover:bg-neutral-800">
              Listings
            </div>
          </Link>
          <Link to={"/applications"}>
            <div className="p-2 px-4 transition-none duration-300 rounded-xl hover:bg-neutral-800">
              Applications
            </div>
          </Link>
          <Link to={"/queries"}>
            <div className="p-2 px-4 transition-none duration-300 rounded-xl hover:bg-neutral-800">
              Queries
            </div>
          </Link>
        </div>
        {/* Nav Links End */}
        {/* Resume Link Start */}
        <div className="flex flex-row items-center gap-2">
          <Link to={"/resumes"}>
			<div className="flex flex-row-reverse items-center px-2 align-middle transition-all duration-300 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-black border-[0.5px] border-accent p-2 bg-secondary">
			  <span className="inline-flex items-center align-middle ">
				My Resumes
			  </span>
			</div>
		  </Link>
        {/* Resume Link End */}
		{/* Profile Link Start */}
          <Link to={"/profile"}>
			<div className="flex flex-row-reverse items-center px-2 align-middle transition-all duration-300 rounded-lg cursor-pointer hover:bg-neutral-800">
			  <span className="inline-flex items-center pl-2 align-middle">
				Rahul <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
			  </span>
			  <CgProfile></CgProfile>
			</div>
		  </Link>
		{/* Profile Link End */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
