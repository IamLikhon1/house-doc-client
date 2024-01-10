import { FaStar } from "react-icons/fa";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { TbCoin } from "react-icons/tb";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

function DoctorsCard({ item }) {
    const { user } = useContext(AuthContext)
    const { name, picture, degree, available_day, location, fee, star, _id } = item;
    return (
        <div className="mt-5 rounded-lg border-2 pt-4 cursor-pointer hover:shadow-md duration-300 h-[550px]">
            <div>
                <img src={picture} className="rounded-lg w-[90%] h-[200px] mx-auto hover:scale-105 overflow-x-hidden duration-700" alt="" />
                <div className="pl-8">
                    <h2 className="text-xl font-bold text-[#3B3A3A] mt-5">{name}</h2>
                    <p className="text-[#6C6B6B] mt-1">BTB- {degree}</p>

                    {/* icon star */}
                    <div className="flex text-[#F2871D] text-xl mt-4 gap-1">
                        {
                            star?.map((one, index) => (
                                <p key={index + 1}><FaStar /></p>
                            ))
                        }
                    </div>

                    <hr className='border border-[#F3F3F3] w-[250px] mt-6' />
                    {/* location */}
                    <div className="flex gap-3 items-center text-[#6C6B6B] mt-4">
                        <CiLocationOn className="text-2xl" />
                        <p>{location}</p>
                    </div>
                    {/* Available */}
                    <div className="flex gap-3 items-center text-[#6C6B6B] mt-4">
                        <CiCalendar className="text-2xl" />
                        <p>Available On {available_day}</p>
                    </div>
                    {/* Fee */}
                    <div className="flex gap-3 items-center text-[#6C6B6B] mt-4">
                        <TbCoin className="text-2xl" />
                        <p>${fee}</p>
                    </div>
                </div>
                {/* btn */}
                {user ? <div className="mx-2">
                    <Link to={`/doctor/${_id}`}> <button className='w-full mr-10 py-3 rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-3 hover:bg-[#F7A582] hover:text-white duration-500'>View Profile</button></Link>
                </div> : <Link to='/login'><button className='w-full mr-10 py-3 rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-3 hover:bg-[#F7A582] hover:text-white duration-500'>View Profile</button></Link>}
            </div>
        </div>
    )
}

export default DoctorsCard