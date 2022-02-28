import React from "react";

import Login from "../assets/images/login-img/login.jpg"
import Vector from "../assets/images/home-page/Vector.png"

import "./Modal.css";

 function Modal() {
  return (
    <div className="container-modal">
      <div className="modal">
        <h3>python</h3>
        <img
        className="vector"
        width="300"
        src={Vector}
        alt="img"
      />
        </div>
      <img
        className="card__a"
        width="300"
        src={Login}
        alt="img"
      />
      <div className="title">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          sapiente, quod reiciendis ex, iusto aliquam excepturi minus, itaque
          repellat ab expedita sequi at doloribus accusantium earum impedit quam
          cum libero porro illo! Sit magnam aspernatur mollitia cum impedit
          tempore dolor nesciunt ex aliquam rerum sapiente atque sed illum,
          asperiores sint?
        </p>
      </div>
      <div className="all-modal"></div>
      <button>Read</button>
    </div>
  );
}
export default Modal;