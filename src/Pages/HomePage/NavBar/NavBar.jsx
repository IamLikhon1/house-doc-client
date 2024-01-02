import { useState } from "react";
import logo from '../../../assets/Logo.png'
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [progress, setProgress] = useState(0)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#07332F] p-1">
      {/* <TopLoaderAnimation progress={progress}setProgress={setProgress}/> */}
      <div className="mx-auto sm:pl-6 lg:pl-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center ">

              <img src={logo} className="w-[130px] lg:w-[180px] lg:pl-2" alt="" />

            </div>

            <div className="hidden md:block ml-96">
              <div className="space-x-8 ml-96">
                <a
                  // onClick={() => setProgress(100)}
                  href="/"
                  className="text-white  px-3 py-2 rounded-md text-lg font-medium duration-500"
                >
                  Home
                </a>
                <a
                  // onClick={() => setProgress(100)}
                  href="#about"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium duration-500 "
                >
                  About
                </a>
                <a
                  // onClick={() => setProgress(100)}
                  href="#skills"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium duration-500"
                >
                  Skills
                </a>
                <a
                  // onClick={() => setProgress(100)}
                  href="#Project"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium duration-500"
                >
                  Project
                </a>
                <a
                  // onClick={() => setProgress(100)}
                  href="#contact"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium duration-500"
                >
                  Contact
                </a>
              </div>

            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-400 focus:outline-none focus:bg-orange-400 focus:text-white transition duration-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* smaller device */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white  block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white  block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              href="#project"
              className="text-white  block px-3 py-2 rounded-md text-base font-medium"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-white  block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar