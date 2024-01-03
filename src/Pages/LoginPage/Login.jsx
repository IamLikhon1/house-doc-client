import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import SignInAndLoginImage from "../../SharedComponents/SignInAndLoginImage/SignInAndLoginImage";
import SocialSignIn from "../../SharedComponents/SocialSignIn/SocialSignIn";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    reset();
   console.log(email, password);

  };
  return (
    <div>
      <div className="grid lg:grid-cols-12 ">

        {/* Image */}
        <div className="col-span-6">
            <SignInAndLoginImage/>
        </div>
        {/* Image */}

        {/* form */}
        <div className="col-span-6 lg:px-10 pt-20 pb-14 lg:mx-28 px-2 mx-1 rounded-lg border-2 lg:mt-28 lg:mb-96">
          {/* title */}
          <div>
            <h2
              className="text-3xl font-bold text-center mb-10">Sign In to Doc House</h2>
          </div>
          {/* input */}
          <div className="mt-5 lg:mt-8">

            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Email */}
              <label htmlFor="Email Address" className="font-semibold">Email Address</label> <br />
              <input {...register("email", { required: true })} type="text" name="email" className="mt-2 lg:ml-1 mb-5 w-full px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="your@example.com"
              />

              <br />

              {/* Password */}
              <label htmlFor="Password" className="font-semibold flex justify-between">
                <span>Password </span>
                <button className="text-[#F7A582] underline text-sm cursor-pointer lg:ml-64 ">Forget Password? </button>

              </label>
              <input {...register("password", { required: true })} type="password" name="password" className=" mt-2 lg:ml-1 w-full  px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3]" placeholder="Enter 6 Character and more " />

              {/* button */}
              <div>
                <input type="submit" value='LOGIN' className="mt-8 w-full  px-5 py-3 rounded-md border-2 bg-[#F7A582] text-white cursor-pointer font-medium" />
              </div>
            </form>

            {/* social Login */}
            <div>
              <p className="my-5 font-semibold text-center">OR Login With</p>

              <SocialSignIn />
            </div>
          </div>
          <p className="text-[#6C6B6B] text-base mt-4 text-center">Please register at first. Go to <Link to='/register' className="font-semibold text-lg text-[#F7A582]">SIGN UP</Link></p>
        </div>
        {/* form */}

      </div>
    </div>
  )
}

export default Login