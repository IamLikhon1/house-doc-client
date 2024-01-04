import { IoLocationOutline } from "react-icons/io5"
import { MdOutlinePhoneForwarded } from "react-icons/md"
import ContactFromLeftSide from "./ContactFromLeftSide/ContactFromLeftSide"

function ContactUS() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-5 bg-[#07332F] text-[#FFF] mt-12 rounded-lg mx-2 items-center px-10 lg:px-16 py-10">

                {/* text */}
                <div className="w-full">
                    <div>
                        <h2 className="text-4xl font-semibold text-center lg:text-start">Contact With Us</h2>
                        <p className="text-base lg:pr-10 mt-8 text-center lg:text-start">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    </div>
                    {/* icons-phone */}
                    <div className="flex items-center gap-5 mt-7">
                        <p className="text-4xl"> <MdOutlinePhoneForwarded /></p>
                        <p className="text-lg">+88 01750 14 14 14</p>
                    </div>
                    {/* icons-location */}
                    <div className="flex items-center gap-5 mt-5">
                        <p className="text-4xl "> <IoLocationOutline /></p>
                        <p className="text-lg">Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                </div>
                {/* form */}
                <div className="mt-5 lg:mt-0">
                    <ContactFromLeftSide />
                </div>

            </div>

        </div>
    )
}

export default ContactUS