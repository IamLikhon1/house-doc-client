import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddDoctorsRoute = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const degree = data.degree;
        const location = data.location;
        const available_day = data.available_day;
        const fee = parseInt(data.fee);
        const experience = data.experience + ' ' + 'years';
        const specializationOne = data.specializationOne;
        const specializationTwo = data.specializationTwo;
        const about_me = data.about_me;
        const picture = data.picture;
        const allDataStore = { name, degree, location, available_day, fee, experience, specializationOne, specializationTwo, about_me, picture };
        fetch('https://house-doc-server-production.up.railway.app/postDoctorData', {
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
                        text: 'You ADD A New Doctor',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })
        reset()

    };
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center lg:text-start mb-5 mt-8 lg:mt-0">Add A New Doctor</h2>

            <div>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid lg:grid-cols-2 gap-5 px-2 lg:px-10 py-5" >
                        {/* name */}
                        <div>
                            <label htmlFor="Doctor Name" className="font-semibold">Doctor Name</label> <br />
                            <input {...register("name", { required: true })} type="text" name="name" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Doctor Name"
                            />
                        </div>

                        {/* degree */}
                        <div>
                            <label htmlFor="Doctor Degree" className="font-semibold">Doctor Degree</label> <br />
                            <input {...register("degree", { required: true })} type="text" name="degree" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Doctor Degree"
                            />
                        </div>
                        {/* location */}
                        <div>
                            <label htmlFor="Doctor location" className="font-semibold">Doctor Location</label> <br />
                            <input {...register("location", { required: true })} type="text" name="location" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Doctor Location"
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
                        {/* Experience */}
                        <div>
                            <label htmlFor="Doctor Experience" className="font-semibold">Doctor Experience</label> <br />
                            <input {...register("experience", { required: true })} type="text" name="experience" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Doctor Experience"
                            />
                        </div>
                        {/* specializationOne */}
                        <div>
                            <label htmlFor="Doctor specialization One" className="font-semibold">Doctor specialization One</label> <br />
                            <input {...register("specializationOne", { required: true })} type="text" name="specializationOne" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Doctor Specialization One"
                            />
                        </div>
                        {/* specializationTwo */}
                        <div>
                            <label htmlFor="Doctor specialization Two" className="font-semibold">Doctor specialization Two</label> <br />
                            <input {...register("specializationTwo", { required: true })} type="text" name="specializationTwo" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Doctor Specialization Two"
                            />
                        </div>

                        {/* About Doctor Self */}
                        <div>
                            <label htmlFor="Write About Doctor" className="font-semibold">Write Description About Doctor</label> <br />
                            <textarea {...register("about_me", { required: true })} type="text" name="about_me" className="mt-2 mb-5 w-full  px-4 py-4 rounded-md border-2 focus:outline-none" placeholder="Write About Doctor"
                            />
                        </div>

                        {/* Doctor Picture*/}
                        <div>
                            <label htmlFor="Doctor Picture" className="font-semibold">Doctor Picture</label> <br />
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

export default AddDoctorsRoute;