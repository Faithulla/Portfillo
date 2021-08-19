import React from "react";
import { useState } from "react";

import "./Contact.scss";
export default function Contact() {

  const [massage, setMassage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMassage(true)
    }
  return (
    <div className="Contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder="Email" />
          <textarea placeholder='Massage'></textarea>
          <button type='submit'>Submit</button>
          {massage && <span>Thanks for FeedBack ,I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
