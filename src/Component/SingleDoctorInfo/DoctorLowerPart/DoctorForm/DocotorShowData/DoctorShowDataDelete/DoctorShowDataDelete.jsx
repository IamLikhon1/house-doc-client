import toast from "react-hot-toast"

function DoctorShowDataDelete({ item, refetch }) {
    const { _id } = item
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteReview/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Your Review has been deleted')
                }
                refetch()
            })

    }
    return (
        <>
             <dialog id="my_modal_1" className="modal">
                    <div className="modal-box text-center">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h2 className="text-xl mt-2 text-[#3B3A3A] font-semibold">Do you want to Delete this Review</h2>
                        <button onClick={() => handleDelete(_id)} className="mt-5  px-10 py-4 rounded-lg border-2 bg-[#F7A582] text-white cursor-pointer" >Delete This Review</button>
                    </div>
                </dialog>
            
        </>
    )
}

export default DoctorShowDataDelete
