import { useForm } from "react-hook-form";
import './ContactFrom.Css'
import toast from "react-hot-toast";
function ContactFromLeftSide() {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (data) => {
        const name = data.email;
        const email = data.email;
        const number = data.number;
        const doctorName = data.doctor;
        const date = data.date;
        const time = data.time;
        reset();
        const allDetails={name, email, number, doctorName, date, time}
        console.log(allDetails);
       toast.success( "Your All Details was Collected We Will Inform You Sooon" );


    };
    return (
        <div className="">
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid lg:grid-cols-2 gap-5">
                    <input {...register("name", { required: true})} type="text" name="name" className="mt-1 lg:ml-1 mb-3  px-5 py-4 rounded-md  focus:outline-none Custom-BG-Color" placeholder="Name"
                    required
                    />
                    <input {...register("email", { required: true })} type="text" name="email" className="mt-1 lg:ml-1 mb-3  px-5 py-4 rounded-md  focus:outline-none Custom-BG-Color" placeholder="Email"
                    required
                    />
                    <input {...register("number", { required: true })} type="text" name="number" className="mt-1 lg:ml-1 mb-3  px-5 py-4 rounded-md  focus:outline-none Custom-BG-Color" placeholder="Mobile Number"
                    required
                    />
                    <input {...register("doctor", { required: true })} type="text" name="doctor" className="mt-1 lg:ml-1 mb-3  px-5 py-4 rounded-md  focus:outline-none Custom-BG-Color" placeholder="Doctor Name"
                    required
                    />
                    <input {...register("date", { required: true })} type="date" name="date" className="mt-1 lg:ml-1 mb-3  px-5 py-4 rounded-md  focus:outline-none Custom-BG-Color" placeholder="Date"
                    required
                    />
                    <input {...register("time", { required: true })} type="time" name="time" className="mt-1 lg:ml-1 mb-3  px-5 py-4 rounded-md  focus:outline-none Custom-BG-Color" placeholder="Time"
                    required
                    />
                </div>
                <div>
                    <button className="w-full py-4 mt-3 bg-[#F7A582] rounded-lg ">Book Now</button>
                </div>
            </form>
            {/* form */}
        </div>
    )
}

export default ContactFromLeftSide