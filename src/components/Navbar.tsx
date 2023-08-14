import { useState } from "react";

const Navbar = () => {
  const navLinks = ["Home", "About", "Contact", "Blog", "Careers"];
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white ">
      <div className="flex items-center justify-between max-w-[1500px] mx-auto px-6 lg:px-3">
        <div className="flex-1 py-5">
          <img
            src="./images/logo.svg"
            alt=""
            className=" w-[160px] md:w-[180px]"
          />
        </div>
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((links) => (
            <p className="py-8 px-1 text-lg text-[#9698a6]" key={links}>
              {links}
            </p>
          ))}
        </div>

        <button
          className="flex lg:hidden"
          onClick={() => {
            setShowMenu((current) => !current);
          }}>
          <img
            src="/images/icon-hamburger.svg"
            alt="menu button"
            className="w-[30px]"
          />
        </button>

        <div className="flex-1 hidden lg:flex justify-end hover:brightness-110 ">
          <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] py-3 px-8 text-white font-semibold text-lg rounded-full">
            Request Invite
          </button>
        </div>

        {showMenu && (
          <div className="absolute w-full min-h-screen p-6 bg-black/75 top-[100%] left-[50%] translate-x-[-50%] ">
            <div className="bg-white rounded-lg p-4 flex flex-col gap-2">
              {navLinks.map((links) => (
                <p
                  className="p-1 text-center text-lg text-[#2d314d]"
                  key={links}>
                  {links}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
