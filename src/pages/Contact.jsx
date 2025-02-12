import Buttons from "../comman/buttons/Buttons";
import { MdEmail, MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { contactImg } from "../comman/constant/assets";
import { useState } from "react";

function Contact() {
  // let name = "Kailas";
  // let email = "kailas@gmail.com";
  // let msgText = "lorem ipsum"

  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [msg, setMsg] = useState(" ");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMsg(event.target[2].value);
    console.log(name, email, msg);
  };

  return (
    <div className="container">
      <div className="mt-50">
        <h1 className="page-heading">CONTACT US</h1>
        <p className="para-w-80 mb-5">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div className="row contact-form">
        <div className="col-md-5">
          <div className="btn-wrps gap-4 mb-4">
            <Buttons
              className={"btn-outline"}
              icon={<MdOutlineMessage />}
              text="Via Support Chat"
            />
            <Buttons
              className={"btn-outline"}
              icon={<FaPhoneAlt />}
              text="Via Support Call"
            />
          </div>
          <Buttons
            className={"btn-transparent mb-4"}
            icon={<MdEmail />}
            text="Via Email Form"
          />

          <form onSubmit={onSubmit}>
            <div className="form-control mb-4">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form-control mb-4">
              <label htmlFor="email">E-Mail</label>
              <input type="mail" name="email" />
            </div>
            <div className="form-control mb-4">
              <label htmlFor="message">Message</label>
              <textarea type="text" name="message" />
            </div>
            <div className="form-control submit-wrp">
              <Buttons
                className={"btn-outline"}
                icon={<MdOutlineMessage />}
                text="Submit Message"
              />
            </div>
            <div>{name + " " + email + " " + msg}</div>
          </form>
        </div>
        <div className="col-md-6 offset-md-1">
          <img src={contactImg} alt="Contact service" className="service-img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
