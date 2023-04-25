// React Imports
import { useRef } from "react";
// EmailJS Imports
import emailjs from "@emailjs/browser";
// Style Imports
import styles from "./Contact.module.css";



export default function ContactForm({setShowModal}) {

  const form = useRef();

  // handle SEND button
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sal06dm",
        "template_9ncakv3",
        form.current,
        "IBCPvo5z_s92Qao1v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
    setShowModal(true);
    e.target.reset();
  };



  return (
    <form
      className="flex flex-col items-center lg:p-6"
      ref={form}
      onSubmit={sendEmail}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-60 lg:w-96 mb-4 p-2 border border-black rounded font-sans outline-none focus:placeholder:text-black"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-60 lg:w-96 mb-4 p-2 border border-black rounded font-sans outline-none focus:placeholder:text-black"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        required
        className="w-60 lg:w-96 mb-4 p-2 border border-black rounded font-sans outline-none focus:placeholder:text-black"
      />
      <button
        type="submit"
        className={`py-[.20rem] lg:py-[.40rem] px-2 lg:px-4 flex font-bold -skew-x-[38deg] bg-main bg-clip-text text-transparent border-2 group ${styles.contactButton}`}
      >
        <span
          className={`uppercase text-xl font-semibold skew-x-[38deg] bg-main bg-clip-text text-transparent group-hover:text-white ${styles.contactButtonContent}`}
        >
          send
        </span>
      </button>
    </form>
  );
}
