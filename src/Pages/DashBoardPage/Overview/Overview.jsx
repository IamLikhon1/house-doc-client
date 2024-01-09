import { TbUser } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { FaRegFileLines } from "react-icons/fa6";
const Overview = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3  lg:mt-20">
                {/* doctor card */}
                <div className="border rounded-lg pt-10 pb-5 pl-5  mx-10">
                  <div className="flex items-center gap-5">
                  <div className="px-4 py-4 bg-red-100 rounded-md"> 
                   <h4 className="text-5xl text-[#FF0034]"><TbUser /></h4>
                   </div>
                   <div className="text-6xl text-[#6C6B6B]">145</div>
                  </div>
                   <hr className="border-2 border-[#FF0034] mt-5 mr-4" />
                   <p className="text-[#3B3A3A] text-xl mt-3 font-semibold">Doctor</p>
                </div>

                {/* services */}
                <div className="border rounded-lg pt-10 pb-5 pl-5  mx-10">
                  <div className="flex items-center gap-5">
                  <div className="px-4 py-4 bg-green-100 rounded-md"> 
                   <h4 className="text-5xl text-[#7BB13C]"><GrServices /></h4>
                   </div>
                   <div className="text-6xl text-[#6C6B6B]">145</div>
                  </div>
                   <hr className="border-2 border-[#7BB13C] mt-5 mr-4" />
                   <p className="text-[#3B3A3A] text-xl mt-3 font-semibold">Services</p>
                </div>


                {/* Appointment */}
                <div className="border rounded-lg pt-10 pb-5 pl-5  mx-10">
                  <div className="flex items-center gap-5">
                  <div className="px-4 py-4 bg-yellow-100 rounded-md"> 
                   <h4 className="text-5xl text-[#FFBC34]"><FaRegFileLines /></h4>
                   </div>
                   <div className="text-6xl text-[#6C6B6B] ">145</div>
                  </div>
                   <hr className="border-2 border-[#FFBc34] mt-5 mr-4" />
                   <p className="text-[#3B3A3A] text-xl mt-3 font-semibold">Appointment</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;