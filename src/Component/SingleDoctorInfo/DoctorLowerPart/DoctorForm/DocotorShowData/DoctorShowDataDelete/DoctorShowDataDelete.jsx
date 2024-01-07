
function DoctorShowDataDelete() {
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <button className='px-9 py-3 rounded-md border-2 border-[#F7A582] text-[#F7A582] font-semibold mt-4 hover:bg-[#F7A582] hover:text-white duration-500'>Delete The Massage</button>
            </div>
        </dialog>
    )
}

export default DoctorShowDataDelete
