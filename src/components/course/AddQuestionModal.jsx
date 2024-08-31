import React, { useState } from "react";

const AddQuestionModal = () => {
    const [query, setQuery] = useState("");
    console.log(Boolean(query));
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="primary-btn"
                onClick={() =>
                    document.getElementById("addQuestion").showModal()
                }
            >
                Add question
            </button>
            <dialog id="addQuestion" className="modal">
                <div className="modal-box p-0  h-[70vh] xm:h-[50vh] rounded-lg flex flex-col justify-between absolute bottom-0 w-[100%] xm:relative">
                    <div>
                        <h2 className="sm:text-lg  text-base font-bold text-dark_violet border-b-[1px] p-4">
                            Write Question
                        </h2>

                        <div className="p-4 ">
                            <textarea
                                name="query"
                                id="query"
                                placeholder="write your query"
                                rows={3}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full border-[1px] p-2 resize-none rounded-lg focus:border-primary outline-none"
                            ></textarea>
                        </div>
                    </div>

                    <div className="modal-action p-4 mt-0 border-t-[1px]">
                        <form
                            method="dialog"
                            className="flex items-center justify-end gap-4"
                        >
                            {/* if there is a button in form, it will close the modal */}

                            <button className="outline-btn">Close</button>
                            <button
                                disabled={!Boolean(query)}
                                className={`px-4 py-2 rounded-md text-white font-medium text-sm ${
                                    query ? "bg-primary" : "bg-disable_btn"
                                }`}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default AddQuestionModal;
