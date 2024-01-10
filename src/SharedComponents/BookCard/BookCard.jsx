import { TbCoin } from "react-icons/tb";
import BookModal from "./BookModal/BookModal";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const BookCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const { service_name, picture, available_day, fee, time } = item;
    return (
        <div className="text-[#3B3A3A] border shadow hover:shadow-lg duration-300 cursor-pointer py-5 px-2 rounded-md">
            <div className="space-y-3 text-center">
                <img src={picture} className="w-[80px] h-[80px] mx-auto rounded-full" alt="" />
                <h2 className="text-2xl font-semibold">{service_name}</h2>
                <p className="text-[#000] text-base">{available_day}</p>
                <p className="text-[#000] text-base">{time}</p>
                {/* Fee */}
                <div className="flex gap-3 items-center text-[#6C6B6B]  justify-center">
                    <TbCoin className="text-3xl" />
                    <p className="text-[#000] text-lg">${fee}</p>
                </div>
            </div>

            <div>
                {user ? <button onClick={() => document.getElementById('my_modal_2').showModal()} className="mt-8 w-full  px-5 py-3 rounded-md border-2 bg-[#F7A582] text-white cursor-pointer font-medium">Book Appointment</button> : <Link to='/login'><button onClick={() => document.getElementById('my_modal_2').showModal()} className="mt-8 w-full  px-5 py-3 rounded-md border-2 bg-[#F7A582] text-white cursor-pointer font-medium">Book Appointment</button></Link>}

                <BookModal />
            </div>
        </div>
    );
};

export default BookCard;