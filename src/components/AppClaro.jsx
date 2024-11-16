import React from "react";
import "./assets/css/ayudaStyles.css";
import img1 from "./assets/img/claro1.webp";
import img2 from "./assets/img/claro2.webp";
import app1 from "./assets/img/app1.jpeg";
import app2 from "./assets/img/app2.jpeg";
import app3 from "./assets/img/app3.jpeg";

export default function PlanesCard() {
  return (
    <div className="seccionAppClaro">
      <div className="containerAppClaro">
        <div className="cardAppClaro">
          <div className="imgApp">
            <img src={img1} alt="" className="imgAppClaro"></img>
          </div>
          <div className="infoAppClaro">
            <h3 className="titleAppClaro">Mi Claro App</h3>
            <p className="pAppClaro">
              Paga en Línea, compra paquetes o revisa tus consumos, sin consumir
              tus megas
            </p>
            <div className="storeButtons">
              <img
                src={app1}
                alt="App Store"
                className="storeIcon"
              ></img>
              <img
                src={app2}
                alt="Google Play"
                className="storeIcon"
              ></img>
              <img
                src={app3}
                alt="App Gallery"
                className="storeIcon"
              ></img>
            </div>
          </div>
        </div>
        <div className="cardAppClaro">
          <div className="imgApp">
            <img src={img2} alt="" className="imgAppClaro"></img>
          </div>
          <div className="infoAppClaro">
            <h3 className="titleAppClaro">Claro Smart Home</h3>
            <p className="pAppClaro">
              Detecta y soluciona los inconvenientes técnicos de tus servicios Claro Hogar
            </p>
            <div className="storeButtons">
              <img
                src={app1}
                alt="App Store"
                className="storeIcon"
              ></img>
              <img
                src={app2}
                alt="Google Play"
                className="storeIcon"
              ></img>
              <img
                src={app3}
                alt="App Gallery"
                className="storeIcon"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
