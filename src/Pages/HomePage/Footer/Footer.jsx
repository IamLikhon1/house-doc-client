import footerLogo from '../../../assets/FooterLogo.png'
function Footer() {
  return (
    <div className='bg-[#F3F3F3] pt-16 pb-5 mt-10'>
      {/* parent div */}
      <div className='max-w-7xl mx-auto grid lg:grid-cols-4 gap-5 text-center lg:text-start '>
        {/* logo */}
        <div>
          <div className='flex gap-5 items-center'>
            <img className="pl-3 lg:pl-0" src={footerLogo} alt="" />
            <h2 className='text-4xl font-semibold'>
              <span className='text-[#F7A582]'>Doc</span>
              <span className='text-[#07332F] pl-1'>House</span>
            </h2>
          </div>
          <p className='text-start text-[#3B3A3A] mt-5 pl-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
          {/* btn */}
          <div>
            <button className='px-9 py-3 rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-4 hover:bg-[#F7A582] hover:text-white duration-500'>Appointment</button>
          </div>
        </div>
        {/* Quick Links */}
        <div className='lg:ml-16 mt-8 lg:mt-0'>
          <h2 className='text-3xl font-bold'>Quick Links</h2>
          <p className='text-[#6C6B6B] mt-8 hover:underline cursor-pointer'>About Us</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'> Service</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'> Doctors</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>  Departments</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>Online Payment</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>Contact Us</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>My Account</p>
        </div>
        {/* Doc House Services*/}
        <div>
          <h2 className='text-3xl font-bold'>Doc House Services</h2>
          <p className='text-[#6C6B6B] mt-8 hover:underline cursor-pointer'>Pediatric Clinic</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'> Diagnosis Clinic</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'> Cardiac Clinic</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>  Laboratory Analysis</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>Gynecological Clinic</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>Personal Counseling</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'> Dental Clinic</p>
        </div>
        {/* Working Hours */}
        <div>
          <h2 className='text-3xl font-bold'>Working Hours</h2>
          <p className='text-[#6C6B6B] mt-8 hover:underline cursor-pointer'>Monday - 10 am to 7 pm</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'> Tuesday - 10 am to 7 pm</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'> Wednesday - 10 am to 7 pm</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>  Thursday - 10 am to 7 pm</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>Friday - 10 am to 7 pm
          </p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>Saturday - 10 am to 7 pm</p>
          <p className='text-[#6C6B6B] my-2 hover:underline cursor-pointer'>My Sunday - 10 am to 7 pm
          </p>
        </div>
      </div>
      <div className='mt-10 text-center'>
        <hr className='border border-[#CECECE] w-1/2 mx-auto' />
        <p className='mt-5 text-[#6C6B6B]'>Copyright © 2022 - All right reserved by Doc House Ltd</p>
      </div>

    </div>
  )
}

export default Footer