import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TbCoin } from "react-icons/tb";

function DoctorHeaderPart({ loader }) {
    const { picture, name, location, degree, star, specializationOne, specializationTwo,fee } = loader;
    return (
        <div className="border px-8 py-8 mt-16 mx-2 rounded-lg bg-white">
            <div className="lg:flex gap-10 items-center">
                {/* pic */}
                <div>
                    <img className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-lg" src={picture} alt="" />
                </div>
                {/* information */}
                <div className="space-y-4 mt-5 lg:mt-0 text-start">
                    <h2 className="text-[#0A0808] text-4xl font-bold">{name}</h2>
                    <p className="text-[#6C6B6B] text-lg">{degree}</p>

                    <div className="flex text-[#F2871D] text-xl gap-1 items-center">
                        {
                            star?.map((index) => (
                                <p key={index + 1}><FaStar /> </p>
                            ))
                        }
                        <span className="text-[#6C6B6B]"> (45) </span>
                    </div>
                    {/* fee */}
                    
                    <div className="flex gap-3 items-center text-[#6C6B6B] mt-4">
                        <TbCoin className="text-3xl" />
                        <p className="text-lg">${fee}</p>
                    </div>
                    
                    {/* location */}
                    <div className="flex gap-3 items-center text-[#6C6B6B] ">
                        <CiLocationOn className="text-3xl" />
                        <p>{location} - <span className="text-[#F7A582] font-semibold">Get Directions</span></p>
                    </div>
                    {/* gary box */}
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
                        <div className="w-[80px] h-[80px] bg-[#F3F3F3] rounded-lg border">
                        </div>
                        <div className="w-[80px] h-[80px] bg-[#F3F3F3] rounded-lg border">
                        </div>
                        <div className="w-[80px] h-[80px] bg-[#F3F3F3] rounded-lg border">
                        </div>
                        <div className="w-[80px] h-[80px] bg-[#F3F3F3] rounded-lg border">
                        </div>
                        <div className="w-[80px] h-[80px] bg-[#F3F3F3] rounded-lg border">
                        </div>
                    </div>

                    {/* specialization */}

                    <div className="lg:flex lg:gap-5 text-[#6C6B6B] items-center text-center font-semibold">
                        <p className="border border-[#6C6B6B] w-[155px]  py-2 rounded-md">{specializationOne}</p>
                        <p className="border border-[#6C6B6B] w-[155px]  py-2 rounded-md mt-3 lg:mt-0">{specializationTwo}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DoctorHeaderPart