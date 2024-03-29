import { useQuery } from "@tanstack/react-query"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';
import SingleTestimonialSlider from "./SingleTestimonialSlider";
import Loader from "../../../SharedComponents/Loader/Loader";

function TestimonialSection() {
    const { isLoading, data } = useQuery({
        queryKey: ['testimonialData'],
        queryFn: () =>
            fetch('https://house-doc-server-production.up.railway.app/getTestimonialData').then((res) =>
                res.json()
            ),
    })
    if (isLoading) return <Loader/>
    // console.log(data);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-10 px-1">
                <h2 className="text-3xl lg:text-4xl text-[#0A0808] font-semibold">What Our Patients Says</h2>
                <p className="lg:w-1/2 mx-auto mt-3 text-[#3B3A3A] font-medium">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="lg:mx-10">
            <Swiper
                slidesPerView={2}
               
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    620: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    }
                    ,
                    840: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    }
                }}
            >

                {
                    data?.map(item => (
                        <SwiperSlide key={item.id}>
                            <SingleTestimonialSlider item={item} ></SingleTestimonialSlider>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            </div>

        </div>
    )
}

export default TestimonialSection