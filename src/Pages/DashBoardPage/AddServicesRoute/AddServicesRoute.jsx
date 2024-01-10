import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddServicesRoute = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {


        const service_name = data.service_name;
        const picture = data.picture;
        const available_day = data.available_day;
        const fee = parseFloat(data.fee);
        const time = data.time;
        const allDataStore = { service_name, picture, available_day, fee, time };

        fetch('http://localhost:5000/postServicesData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(allDataStore)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully',
                        text: 'You ADD A New Service',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })
        reset()
    }
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center lg:text-start mb-5 mt-8 lg:mt-0">Add A New Service</h2>
            <div>
                {/* form */}
                <form className="lg:px-8" onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid lg:grid-cols-2 gap-5 px-2  py-5" >
                        {/* service_name */}
                        <div>
                            <label htmlFor="service_name" className="font-semibold">Service Name</label> <br />
                            <input {...register("service_name", { required: true })} type="text" name="service_name" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Service Name"
                            />
                        </div>

                        {/* location */}
                        <div>
                            <label htmlFor="Service Time " className="font-semibold">Service Time like- (2:00 PM - 4:00 PM)*</label> <br />
                            <input {...register("time", { required: true })} type="text" name="time" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Service Time (2:00 PM - 4:00 PM)"
                            />
                        </div>
                        {/* available_day */}
                        <div>
                            <label htmlFor="available_day" className="font-semibold">Available_Day / Week</label> <br />
                            <input {...register("available_day", { required: true })} type="text" name="available_day" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Available_Day"
                            />
                        </div>
                        {/* fee */}
                        <div>
                            <label htmlFor="fee" className="font-semibold">Doctor Fees</label> <br />
                            <input {...register("fee", { required: true })} type="text" name="fee" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Enter Fees"
                            />
                        </div>

                        {/* Service Picture*/}
                        <div>
                            <label htmlFor="Doctor Picture" className="font-semibold">Service Picture</label> <br />
                            <input {...register("picture", { required: true })} type="file" name="picture" className="mt-2 mb-5 w-full  px-4 py-2 rounded-md border-2 focus:outline-none" placeholder="Write About Doctor"
                            />
                        </div>
                    </div>


                    {/* button */}
                    <div>
                        <input type="submit" value='ADD' className="mt-3 mb-10 w-full  px-5 py-3 rounded-md border-2 bg-[#07332F] text-white cursor-pointer font-medium" />
                    </div>

                </form>
                {/* form */}
            </div>
        </div>
    );
};

export default AddServicesRoute;