import React from "react";
import "./assets/css/cards3Styles.css";
import icon1 from "./assets/img/icon1.png";
import icon2 from "./assets/img/icon2.png";
import icon3 from "./assets/img/icon3.png";
import icon4 from "./assets/img/icon4.png";
import icon5 from "./assets/img/icon5.png";

export default function R03Cards() {
  return (
    <div className="cards">
      <div className="cardR03">
        <div className="cardBody">
          <div className="card-content">
            <img className="myIllustration" src={icon1} alt="" />
            <div>
              <h5 className="cardTitle">Cambiarme a Claro</h5>
              <p className="cardText">Accede a un mundo de beneficios</p>
              <a href="/" className="cardLink link-primary">
                Saber más
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cardR03">
        <div className="cardBody">
          <div className="card-content">
            <img className="myIllustration" src={icon2} alt="" />
            <div>
              <h5 className="cardTitle">Renovar mi equipo</h5>
              <p className="cardText">Cambia o renueva tu equipo</p>
              <a href="/" className="cardLink link-primary">
                Ir a tienda
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cardR03">
        <div className="cardBody">
          <div className="card-content">
            <img className="myIllustration" src={icon3} alt="" />
            <div>
              <h5 className="cardTitle">Activar mi chip</h5>
              <p className="cardText">¡Sin ir a Claro!</p>
              <a href="/" className="cardLink link-primary">
                Conoce más
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cardR03">
        <div className="cardBody">
          <div className="card-content">
            <img className="myIllustration" src={icon4} alt="" />
            <div>
              <h5 className="cardTitle">Ser Full Claro</h5>
              <p className="cardText">Recibe full beneficios sin pagar más</p>
              <a href="/" className="cardLink link-primary">
                Conoce más
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cardR03">
        <div className="cardBody">
          <div className="card-content">
            <img className="myIllustration" src={icon5} alt="" />
            <div>
              <h5 className="cardTitle">Recargar</h5>
              <p className="cardText">Mantener conectado</p>
              <a href="/" className="cardLink link-primary">
                Conoce más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
