import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BookModal = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (data) => {
        const name = data.name
        const service_name = data.service
        const number = data.number
        const email = data.email;
        const allInfo = { name, service_name, number, email }

        fetch('https://house-doc-server-production.up.railway.app/postUserServiceData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Your Appointment set successfully')
                }
            })
        reset()

    };
    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box text-center">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h2 className="text-xl text-[#07332F] my-3 font-semibold">Book For Appointment</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* name */}

                    <input {...register("name", { required: true })} type="text" name="name" className="mt-5 lg:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Full Name"
                    />

                    <br />

                    {/* serviceName */}

                    <input {...register("service", { required: true })} type="text" name="service" className="mt-2 lg:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Service Name"
                    />

                    <br />

                    {/* Number */}

                    <input {...register("number", { required: true })} type="text" name="number" className="mt-2 lg:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Phone Number"
                    />

                    <br />

                    {/* Email */}

                    <input {...register("email", { required: true })} type="email" name="email" className=" mt-2 lg:ml-1 w-full  px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Email" />

                    {/* button */}
                    <div>
                        <input type="submit" value='Book' className="mt-8 w-full  px-5 py-3 rounded-md border-2 bg-[#07332F] text-white cursor-pointer font-medium" />
                    </div>
                </form>
            </div>
        </dialog>

    );
};

export default BookModal;