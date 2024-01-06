import { Link } from 'react-router-dom'
import bannerImg from '../../../assets/banner.png'
import capfulImg from '../../../assets/capsul.png'
import upcapfulImg from '../../../assets/UpCapful.png'
function Banner() {
    return (
        <div className="bg-[#07332F]">
            <div className='grid lg:grid-cols-2 gap-2 items-center pt-10 pb-10 lg:pb-20'>
                {/* left-side text */}
                <div className='text-white lg:pl-24 text-center lg:text-start'>
                    <h1 className='text-4xl lg:text-7xl font-medium'>Your Best Medical <br /> Help Center</h1>
                    <p className='lg:text-lg my-5 px-5 lg:px-0'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s standard.</p>
                   <Link to="/Services"> <button className='px-6 py-3 mt-2 rounded-md bg-[#F7A582] font-semibold'>All Services</button></Link>
                    {/* capfulImg show only large device */}
                    <div className='relative hidden lg:block left-64'>
                        <img className='absolute left-96' src={capfulImg} alt="" />
                    </div>
                    {/* up capful img only large device */}
                    <div className='relative hidden lg:block '>
                        <Link to='/'>
                            <img className='absolute bottom-80 -left-36' src={upcapfulImg} alt="" />
                        </Link>
                    </div>
                </div>
                {/* right-side-image */}
                <div className='pr-5'>
                    <img className='px-5 mx-auto' src={bannerImg} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Banner