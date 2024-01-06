import { Link } from 'react-router-dom'
import BigCapful from '../../assets/SubBannerOne.png'
import smallCapful from '../../assets/capsul.png'
function SubBanner({ title, subTitle }) {
    return (
        <div className='bg-[#07332F] h-[400px]'>
            <div className='text-[#F3F3F3] pt-40 text-center lg:text-start lg:pl-36'>
                <div className=' lg:flex lg:justify-between'>
                    <div>
                        <p><Link to='/'>Home /</Link>      <span className='font-semibold'>{title}</span></p>
                        <h2 className='text-5xl mt-2'>{subTitle}</h2>
                        <img src={BigCapful} className='hidden lg:block relative bottom-12 right-16' alt="" />
                    </div>

                    <div>
                        <img src={smallCapful} className='hidden lg:block rotate-45 relative right-16' alt="" />
                    </div>
                </div>
            </div>
            {/* small device img */}
            <div className='relative'>
                <img src={BigCapful} className='block lg:hidden absolute bottom-28' alt="" />
                <img src={smallCapful} className=' block lg:hidden absolute left-60 rotate-45' alt="" />
            </div>


        </div>
    )
}

export default SubBanner