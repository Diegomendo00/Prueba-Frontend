import React from "react";
import "./Inicio.css";

export default function Inicio({ bolsa, nap, puff, sombrilla }) {
  return (
    <div className="container">
      <div className="alfa" />
      <div className="medio">
        <div className="img_puff">
          <img src={puff} width="50px" alt="puff" />
          <h4>PUFI PUFF</h4>
        </div>
        <div className="img_sombrilla">
          <img src={sombrilla} width="40px" alt="sombrilla" />
          <h4>PUFI RAIN</h4>
        </div>
        <div className="img_bolsa">
          <img src={bolsa} width="40px" alt="bolsa" />
          <h4>PUFI CART</h4>
        </div>
        <div className="img_nap">
          <img src={nap} width="35px" alt="nap" />
          <h4>PUFI NAP</h4>
        </div>
      </div>
      <div className="final">
        <button>MI CUENTA </button>
        <button>MI COMPRA</button>
      </div>
    </div>
  );
}
