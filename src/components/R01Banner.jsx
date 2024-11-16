import React from "react";
import "./assets/css/myStyles.css";
import cyberLogo from "./assets/img/cyber_wow.png";

export default function R01Banner() {
  return (
    <div className="imgFondo">
      <div className="row align-items-center justify-content-between">
        {/* Columna del logo */}
        <div className="col-auto">
          <img src={cyberLogo} alt="Cyber Wow Logo" className="cyberLogo" />
        </div>

        {/* Columna de texto */}
        <div className="col text-center" style={{textAlign:"center", marginTop:"10px"}}>
          <p>Descuentos en equipos, promos y más del 04 al 07 de noviembre.</p>
        </div>

        {/* Columna del botón alineado a la derecha */}
        <div className="col-auto">
          <button type="button" className="btn btn-danger customButton">
            Ingresa a tienda Claro
          </button>
        </div>
      </div>
    </div>
  );
}
