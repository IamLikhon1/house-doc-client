import { useQuery } from "@tanstack/react-query";
import { FaRegFileLines } from "react-icons/fa6";
import Loader from "../../../SharedComponents/Loader/Loader";

const GetAllAppointmentData = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['getUserSentData'],
        queryFn: () =>
            fetch('https://house-doc-server-production.up.railway.app/getAllUserSentData').then((res) =>
                res.json()
            ),
    })
    if (isLoading) return <Loader/>
    return (
        <div className="border rounded-lg pt-10 pb-5 pl-5  mx-8 cursor-pointer hover:shadow-md duration-300">
        <div className="flex items-center gap-5">
        <div className="px-4 py-4 bg-yellow-100 rounded-md"> 
         <h4 className="text-5xl text-[#FFBC34]"><FaRegFileLines /></h4>
         </div>
         <div className="text-6xl text-[#6C6B6B] ">{data.length}</div>
        </div>
         <hr className="border-2 border-[#FFBc34] mt-5 mr-4" />
         <p className="text-[#3B3A3A] text-xl mt-3 font-semibold">Appointment</p>
      </div>
    );
};

export default GetAllAppointmentData;