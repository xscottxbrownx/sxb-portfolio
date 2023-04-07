// Style Imports
// import styles from "./Modal.module.css";

export default function Modal({showModal, setShowModal}) {

  const toggleModal = () => setShowModal(!showModal);

  if (showModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {showModal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Contact Form Submitted</h2>
            <div className="modal-content-paragraph">
              <p>Thank you for sending your inquiry to <strong>hello@scottxbrown.com</strong>!</p>
              <p>You should receive a response within a few business days.</p>
            </div> 
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}