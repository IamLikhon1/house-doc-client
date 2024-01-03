import { FaQuoteLeft } from "react-icons/fa";
function SingleTestimonialSlider({ item }) {
    const { name, title, pic, des } = item;
    return (
        <div className="border-2 border-[#E6E6E6] py-8 lg:py-10 px-10 rounded-lg cursor-pointer mx-1">

                <div className="flex">
                    {/* userInfo */}
                <div className="flex gap-5 ">
                    {/* pic */}
                    <img className="w-[55px] h-[55px] mx-auto border border-[#F7A582] rounded-full" src={pic} alt="" />
                    {/* name and job title */}
                    <div>
                        <h4 className="text-[#3B3A3A] text-xl font-semibold">{name}</h4>
                        <h4 className="text-[#6C6B6B] text-base mt-1">{title}</h4>
                    </div>
                </div>
                {/* Quotation */}
                <div className="relative">
                <FaQuoteLeft className="text-[#F7A582] text-4xl lg:text-5xl absolute left-12 lg:left-60" />
                </div>
                </div>

                {/* description */}
                <div className="text-start text-[#6C6B6B] mt-5">
                    <h3>{des}</h3>
                </div>


          

        </div>
    )
}

export default SingleTestimonialSlider