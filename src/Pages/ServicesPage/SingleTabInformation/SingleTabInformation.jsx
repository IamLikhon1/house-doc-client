
function SingleTabInformation({ img, title }) {
    return (
        <div className="text-center lg:text-start mx-1 lg:mx-0">
            <img src={img} className="lg:w-[580px] mt-10 rounded-lg " alt="" />
            <h1 className="text-[#0A0808] text-4xl font-bold mt-10">{title}</h1>
            <div className="text-[#3B3A3A] text-base mt-10 mx-2 lg:mx-0">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>

                <p className="mt-4 lg:mt-6">Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            {/* btn */}
            <div>
                <button className='px-8 py-3 rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-8 hover:bg-[#F7A582] hover:text-white duration-500'>More Details</button>
            </div>

        </div>
    )
}

export default SingleTabInformation