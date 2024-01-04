import doctorImg from '../../assets/LoginAvatar.png'
import PlusSign from '../../assets/LoginPlusImage.png'
import capful from '../../assets/capsul.png'
function SignInAndLoginImage() {
    return (
        <div className='bg-[#07332F] h-full'>
            <div>
                <img src={PlusSign} alt="" className='relative lg:left-80 w-[450px]' />
                <img className='h-fit w-[550px] lg:w-[550px] relative lg:left-24 px-2' src={doctorImg} alt="" />
                <img src={capful} className='relative left-3 lg:left-16 rotate-45' alt="" />
            </div>
        </div>
    )
}

export default SignInAndLoginImage
