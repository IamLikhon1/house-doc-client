import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-16 ml-8">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 min-h-full bg-base-200 ">
                    {/* Sidebar content here */}
                    <li><Link className=" mt-8 px-3 py-2 rounded-md text-lg font-semibold"   to='/dashboard/overview'>Dashboard Overview</Link></li>

                    <li><Link className=" mt-5 px-3 py-2 rounded-md text-lg font-semibold"   to='/dashboard/allDoctor'>All Doctor</Link></li>
                    <li><Link className=" mt-5 px-3 py-2 rounded-md text-lg font-semibold" to='/dashboard/allServices'>All Services</Link></li>
                    <li><Link className=" mt-5 px-3 py-2 rounded-md text-lg font-semibold" to='/dashboard/addDoctors'>Add Doctor</Link></li>

                    <li><Link className=" mt-5 px-3 py-2 rounded-md text-lg font-semibold" to='/dashboard/addServices'>Add Services</Link></li>
                    <div className="divider"></div>
                    <li><Link className=" mt-5 px-3 py-2 rounded-md text-lg font-semibold" to='/'><FaHome></FaHome> Home</Link></li>
                </ul>


            </div>
        </div>
    );
};

export default DashBoard;