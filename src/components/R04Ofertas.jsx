import React from "react";
import ofertas1 from "./assets/img/ofertas1.webp";
import ofertas2 from './assets/img/ofertas2.webp';
import ofertas3 from './assets/img/ofertas3.webp';
import ofertas4 from './assets/img/ofertas4.webp';
import "./assets/css/ofertasStyles.css";

export default function R04Ofertas() {
  return (
    <div className="cardsOfertas">
      <div className="cardOferta">
        <h2 className="card-title-oferta">EQUIPOS</h2>
        <div className="card-content-oferta">
          <img className="imgOfertas" src={ofertas1} alt=""></img>
          <a href="/" className="btnOferta">
            Me interesa
          </a>
        </div>
      </div>
      <div className="cardOferta">
        <h2 className="card-title-oferta">POSTPAGO MAX</h2>
        <div className="card-content-oferta">
          <img className="imgOfertas"src={ofertas2} alt=""></img>
          <a href="/" className="btnOferta">
            Me interesa
          </a>
        </div>
      </div>
      <div className="cardOferta">
        <h2 className="card-title-oferta">CLARO HOGAR</h2>
        <div className="card-content-oferta">
          <img className="imgOfertas" src={ofertas3} alt=""></img>
          <a href="/" className="btnOferta">
            Me interesa
          </a>
        </div>
      </div>
      <div className="cardOferta">
        <h2 className="card-title-oferta">PREPAGO CHÉVERE</h2>
        <div className="card-content-oferta">
          <img className="imgOfertas" src={ofertas4} alt=""></img>
          <a href="/" className="btnOferta">
            Me interesa
          </a>
        </div>
      </div>
    </div>
  );
}
