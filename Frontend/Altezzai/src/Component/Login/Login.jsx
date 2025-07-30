import React from "react";
import "../Login/Login.css";
import vector from "../Assets/vector.webp";
import contctt from "../Assets/contact.png";
import mail from "../Assets/mail.svg"
const Login = () => {
  return (
    <div className="login">
      <div className="logheading">contact us</div>
      <img src={vector} alt="" className="vectorr" />
      <div className="contact">
        <div className="contact-left">
          <div className="contact-left-heading"></div>
          <img src={contctt} alt="" />

        <div class="btn2">
            <a class="button-cls hoverbtn" href="mailto:enquiry@altezzai.com" target="_blank">
                <img src={mail} alt="message icon" draggable="false"/>enquiry@altezzai.com
                </a>
                </div>
         
        </div>

            <div class="contact-form-container">
                <div class="contact-form">
                    <div class="form-head">Fill the form below:</div>
                    <form action="" class="form-box">
                    <input class="form-input" id="name" name="name" type="text" placeholder="Enter your name" required />
                    <input class="form-input" id="phone" name="phone" type="text" placeholder="Phone number" required />
                    <input id="email" class="form-input" name="email" type="email" placeholder="E-mail address" required />
                    <textarea class="form-input message-input" name="message" id="message" placeholder="Message" required>
                        </textarea>
                        <button class="send-btn active:to-blue-900" type="submit">Send Message</button>
                        </form>
                        </div>
                        </div>

      </div>
    </div>
  );
};

export default Login;
