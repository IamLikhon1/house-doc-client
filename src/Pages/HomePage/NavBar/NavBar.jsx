import { useContext, useState } from "react";
import logo from '../../../assets/Logo.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import TopLoaderComponent from "../../../SharedComponents/TopLoaderComponent/TopLoaderComponent";
function NavBar() {
  const { user, logOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0)

  const handleLogOut = () => {
    logOutUser()
      .then(() => { })

      .catch(error => {
        console.log(error)
      })
    toast.success('You Logout successfully')
  }
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#07332F] p-1 container mx-auto">
      <TopLoaderComponent progress={progress}setProgress={setProgress}/>
      <div className="mx-auto sm:pl-6 lg:pl-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* logo */}
            <div>

              <Link to='/'> <img src={logo} className="w-[130px] lg:w-[180px] lg:pl-2 cursor-pointer" alt="website Logo" /></Link>

            </div>

            <div className="hidden lg:block lg:ml-96">
              <div className="space-x-6 lg:ml-72">
                <Link
                  onClick={() => setProgress(100)}
                  to="/"
                  className="text-white  px-3 py-2 rounded-md text-lg font-medium hover:text-[#F7A582] focus:text-[#F7A582] duration-500"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setProgress(100)}
                  to="/Appointment"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium hover:text-[#F7A582] focus:text-[#F7A582] duration-500 "
                >
                  Appointment
                </Link>
                <Link
                  onClick={() => setProgress(100)}
                  to="/Doctors"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium hover:text-[#F7A582] focus:text-[#F7A582]  duration-500"
                >
                  Doctors
                </Link>
                <Link
                  onClick={() => setProgress(100)}
                  to='/Services'
                  className="text-white px-3 py-2 rounded-md text-lg font-medium hover:text-[#F7A582] focus:text-[#F7A582]  duration-500"
                >
                  Services
                </Link>
                {/* profile */}

                {
                  user ? <div 
                  onClick={() => setProgress(100)}
                  className="cursor-pointer dropdown dropdown-hover dropdown-end">
                    {user?.photoURL ? <img src={user?.photoURL} className="w-[50%] h-[50%] rounded-full relative top-4" alt="" /> : <button
                      onClick={handleLogOut}
                      className="text-white px-10 py-2 rounded-lg text-lg font-semibold bg-[#F7A582] hover:bg-[#F7A582]  duration-500 cursor-pointer"
                    >
                      Log Out
                    </button>}

                    {user.email == import.meta.env.VITE_Admin ? <ul tabIndex={0} className="mt-3 dropdown-content z-10 menu p-2 shadow bg-base-200 rounded-box w-52 text-black">

                      <Link to='/dashboard/overview'> <li className="flex items-center justify-center my-2 text-base font-semibold hover:bg-gray-300 py-2 rounded-md">DashBoard</li>

                      </Link>
                      <li className="flex items-center justify-center">

                        <button
                          onClick={handleLogOut}
                          className="text-white px-10 py-2 rounded-lg text-lg font-semibold bg-[#07332F] hover:bg-[#07332F]  duration-500 cursor-pointer"
                        >
                          Log Out
                        </button>

                      </li>
                    </ul> : " "}
                  </div> : <Link
                    to='/login'
                    className="text-white px-3 py-2 rounded-md text-lg font-medium hover:text-[#F7A582] focus:text-[#F7A582]  duration-500"
                  >
                    Login
                  </Link>
                }
                {/* profile */}


              </div>

            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-800 focus:outline-none focus:bg-green-800  focus:text-white"
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
        <div className="lg:hidden mb-28 lg:mb-0">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <Link
              to="/"
              onClick={() => setProgress(100)}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-[#F7A582] focus:text-[#F7A582]  duration-500 "
            >
              Home
            </Link>
            <Link
              onClick={() => setProgress(100)}
              to="/Appointment"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-[#F7A582] focus:text-[#F7A582]  duration-500"
            >
              Appointment
            </Link>
            <Link
              onClick={() => setProgress(100)}
              to="/Doctors"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-[#F7A582] focus:text-[#F7A582]  duration-500"
            >
              Doctors
            </Link>
            <Link
              onClick={() => setProgress(100)}
              to='/Services'
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-[#F7A582] focus:text-[#F7A582]  duration-500"
            >
              Services
            </Link>
            {user ? <button
              onClick={handleLogOut}
              className="text-white block px-3 py-2 rounded-md text-base font-medium bg-[#F7A582]" >Log Out</button> : <Link
                to='/login'
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-[#F7A582] focus:text-[#F7A582]  duration-500"
              >
              Login
            </Link>}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar