import React from "react";
import ButtonPrimary from "../Shared/Button/ButtonPrimary";
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
  return (

    <div className="hero mt-40 " style={{background:`url(${appointment})`}}>
        
      <div className="hero-content w-4/5 flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm ">
        <div className="text-center text-xl">
            <h2 className="text-primary">Contact Us</h2>
            <p className="text-white text-2xl">Stay Connected With Us</p>
        </div>
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
            <textarea className="textarea" placeholder="Your Message"></textarea>
            </div>
            <div className="form-control mt-6 text-center">
            <ButtonPrimary>Submit</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
