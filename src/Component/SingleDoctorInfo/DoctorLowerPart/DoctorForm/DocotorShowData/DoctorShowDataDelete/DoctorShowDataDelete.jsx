import { useState } from "react";
import toast from "react-hot-toast"

function DoctorShowDataDelete({ item, refetch }) {
    const [inputUser, setInputUser] = useState('');

    const { _id } = item
    const handleDelete = (id) => {
        fetch(`https://house-doc-server-production.up.railway.app/deleteReview/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Your Review has been deleted')
                }
                refetch()
            })

    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputUser(value);
    };
    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-base mt-2 text-[#3B3A3A] ">If you want to Delete this Review please Type below :-  <span className="text-[#F7A582] font-semibold">Delete</span></h2>
                    {/* input */}
                    <input onChange={handleInputChange} type="text" name="text" className="mt-4 lg:ml-1 mb-4  px-5 py-3 rounded-md border-2 focus:outline-none bg-[#F3F3F3] lg:w-[80%]" placeholder="Type 'Delete' word"
                    />


                    <button  disabled={inputUser !== 'Delete'}  onClick={() => handleDelete(_id)} className="px-10 py-4 rounded-lg border-2 bg-[#F7A582] text-white cursor-pointer" >Delete This Review</button>
                </div>
            </dialog>

        </>
    )
}

export default DoctorShowDataDelete
