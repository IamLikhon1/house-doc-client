import { LuClock3 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneForwarded } from "react-icons/md";
function InformationSection() {
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-0 mx-2">
                {/* opening hour */}
                <div className="flex gap-5 bg-[#07332F] text-white h-[150px]  justify-center rounded-lg lg:mx-3">
                    {/* react-icon */}
                    <div className="text-5xl mt-8">
                        <LuClock3 />
                    </div>
                    {/* text */}
                    <div className="mt-8">
                        <h4 className="text-2xl">Opening Hours</h4>
                        <p className="text-xl mt-1">Open 9.00 am to 5.00pm <br /> Everyday</p>
                    </div>

                </div>
                {/* Location */}
                <div className="flex gap-5 bg-[#F7A582] text-white h-[150px]  justify-center rounded-lg lg:mx-3">
                    {/* react-icon */}
                    <div className="text-5xl mt-8">
                        <IoLocationOutline />
                    </div>
                    {/* text */}
                    <div className="mt-8">
                        <h4 className="text-2xl">Our Locations</h4>
                        <p className="text-xl mt-1">Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</p>
                    </div>

                </div>
                {/* contact number */}
                <div className="flex gap-5 bg-[#07332F] text-white h-[150px]  justify-center rounded-lg lg:mx-3">
                    {/* react-icon */}
                    <div className="text-5xl mt-8">
                        <MdOutlinePhoneForwarded />
                    </div>
                    {/* text */}
                    <div className="mt-8">
                        <h4 className="text-2xl">Contact Us</h4>
                        <p className="text-xl mt-1">
                            +88 01750 00 00 00 <br />
                            +88 01750 00 00 00</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default InformationSection