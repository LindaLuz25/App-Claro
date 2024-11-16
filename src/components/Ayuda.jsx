import React from "react";

import "./assets/css/ayudaStyles.css";

export default function MiniCard2() {
  return (
    <div className="sectionAyuda">
      <div className="containerText">
        <p className="textAyuda1">SIEMPRE PENDIENTES DE TI</p>
        <h2 className="textAyuda2">¿Necesitas ayuda?</h2>
      </div>
      <div className="containerAyuda">
        <div className="cardAyuda" style={{ width: "15rem" }}>
          <div className="container">
            <div className="rowAyuda">
              <div className="bodyAyuda">
                <h3 className="titleAyuda">Télefonos de contacto</h3>
                <ion-icon
                  name="call-outline"
                  className="iconAyuda"
                  style={{ zoom: "2.0", color: "orange" }}
                ></ion-icon>
                <p className="textAyuda">
                  Para ventas llámanos al 0800 00200 o para información marca
                  0800 00123
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardAyuda" style={{ width: "15rem" }}>
          <div className="container">
            <div className="rowAyuda">
              <div className="bodyAyuda">
                <h3 className="titleAyuda">Centro de ayuda</h3>
                <ion-icon
                  name="laptop-outline"
                  style={{ zoom: "2.0", color: "orange" }}
                ></ion-icon>
                <p className="textAyuda">
                  Encuentra las soluciones que necesitas y en un solo lugar
                </p>
                <div style={{marginTop:"39px"}}>
                  <a href="/" className="btnAyuda">
                    Ir a Centro de Ayuda
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardAyuda" style={{ width: "15rem" }}>
          <div className="container">
            <div className="rowAyuda">
              <div className="bodyAyuda">
                <h3 className="titleAyuda">Puntos de contacto</h3>
                <ion-icon
                  name="person-circle-outline"
                  style={{ zoom: "2.0", color: "orange" }}
                ></ion-icon>
                <p className="textAyuda">
                  Conoce todos nuestros canales de atención disponibles
                </p>
                <a href="/" className="btnAyuda">
                  Ir a Puntos de contacto
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cardAyuda" style={{ width: "15rem" }}>
          <div className="container">
            <div className="rowAyuda">
              <div className="bodyAyuda">
                <h3 className="titleAyuda">Comunidad Claro</h3>
                <ion-icon
                  name="people-circle-outline"
                  style={{ zoom: "2.0", color: "orange" }}
                ></ion-icon>
                <p className="textAyuda">
                  Comparte experiencias e inquietudes con otros usuarios como tú
                </p>
                <a href="/" className="btnAyuda">
                  Ir a Comunidad Claro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
