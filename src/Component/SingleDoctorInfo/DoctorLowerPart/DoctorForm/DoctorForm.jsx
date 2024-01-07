import { useForm } from "react-hook-form";

function DoctorForm({ loader }) {
  const { name } = loader;
  const {
    register,
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const review = data.review;
    const allInfo = { name, email, review }
    reset()
    console.log(allInfo);


  };
  return (
    <div className="mt-8 text-[#3B3A3A]">
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Reviews show */}
        <div>
          <h2 className="text-2xl font-bold">Reviews</h2>
          {/* show review data */}
          <div>

          </div>
        </div>
        {/* Review Form */}
        <div className="mt-8 lg:mt-0">
          <h2 className="text-2xl">Please give the review about our  <span className="font-bold"> {name}</span></h2>
          <p className="mt-3 font-semibold mb-10">Your email address will not be published. Required fields are marked *</p>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* name */}
            <label htmlFor="Name" className="font-semibold ">Name *</label> <br />
            <input {...register("name", { required: true })} type="text" name="name" className="mt-2 lg:ml-1 mb-5 w-full px-5 py-3  outline-none  border-b-2 border-b-[#646672]"
            />

            <br />

            {/* Email */}
            <label htmlFor="Email Address" className="font-semibold ">Email Address *</label> <br />
            <input {...register("email", { required: true })} type="text" name="email" className="mt-2 lg:ml-1 mb-5 w-full px-5 py-3  outline-none  border-b-2 border-b-[#646672]"
            />

            <br />

            {/* review */}
            <label htmlFor="Review" className="font-semibold">
              <span>Your Review * </span>

            </label>
            <textarea {...register("review", { required: true })} type="text" name="review" className="mt-2 lg:ml-1 mb-5 w-full px-5 py-3   outline-none  border-b-2 border-b-[#646672]" />
            <p> <input type="checkbox" /> I agree that my submitted data is being collected and stored. *</p>
            {/* button */}
            <div>
              <input type="submit" value='Submit' className="mt-7 w-[40%] lg:w-[30%]  px-6 py-4 rounded-full border-2 bg-[#F7A582] text-white cursor-pointer font-medium" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DoctorForm