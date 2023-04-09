export default function Modal({ showModal, setShowModal }) {

  const toggleModal = () => setShowModal(!showModal);

  if (showModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }


  return (
    <>
      {showModal && (
        <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0">
          <div
            className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 bg-gray-900/75 cursor-pointer"
            onClick={toggleModal}
          />
          <div className="bg-gray-100 absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2 p-7 leading-6 rounded max-w-[600px] min-w-[275px]">
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
              onClick={toggleModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}