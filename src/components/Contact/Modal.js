// React Imports
import { useEffect } from "react";



export default function Modal({ showModal, setShowModal }) {

  // toggle modal visibility
  useEffect(() => {
    document.body.classList.toggle("active-modal", showModal);
  }, [showModal]);

  const handleCloseModal = () => setShowModal(false);



  return (
    showModal && (
      <div className="fixed top-0 right-0 bottom-0 left-0 z-50">

        {/* modal background overlay */}
        <div
          className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-gray-900/75 cursor-pointer"
          onClick={handleCloseModal}
        />

        {/* modal */}
        <div className="bg-gray-100 absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 p-7 leading-6 rounded max-w-[600px] min-w-[275px]">
          <h2 className="text-xl font-bold">Contact Form Submitted</h2>
          <div className="mt-7">
            <p>
              Thank you for sending your inquiry to{" "}
              <strong>hello@scottxbrown.com</strong>!
            </p>
            <p>You should receive a response within a few business days.</p>
          </div>
          <button
            className="absolute top-2.5 right-2.5 py-1 px-2 font-black uppercase"
            onClick={handleCloseModal}
          >
            X
          </button>
        </div>
      </div>
    )
  );
}