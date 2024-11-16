import React from "react";
import "./assets/css/tabsStyles.css";
import imgTabs from "./assets/img/iconTabs.png";

export default function R05Tabs() {
  return (
    <div className="containerTabs">
      <nav className="navTabs">
        <div
          className="nav nav-tabs justify-content-center"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active"
            id="nav-hogar-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-hogar"
            type="button"
            role="tab"
            aria-controls="nav-hogar"
            aria-selected="true"
          >
            Planes Hogar
          </button>
          <button
            className="nav-link"
            id="nav-ilimitados-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-ilimitados"
            type="button"
            role="tab"
            aria-controls="nav-ilimitados"
            aria-selected="false"
          >
            Planes Móviles Ilimitados
          </button>
        </div>
      </nav>
      <div className="tab-content myMargins" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-hogar"
          role="tabpanel"
          aria-labelledby="nav-hogar-tab"
        >
          <div className="cardsTab">
            <div className="rowTabs">
              <div className="colTabs">
                <div className="card plan-card" style={{ width: "23rem" }}>
                  <div className="card-header text-center bg-primary text-white">
                    INTERNET FIBRA ÓPTICA <br /> 150MBPS
                  </div>
                  <div className="card-body text-center">
                    <img src={imgTabs} alt=""></img>
                    <h8>Precio mensual</h8>
                    <h2 className="price">S/65</h2>
                    <div className="part2">
                      <h5 className="card-title">DOBLE DE VELOCIDAD</h5>
                      <h7 className="cardtitle2">con Full Claro</h7>
                    </div>
                    <p className="card-text">
                      <strong>
                        Velocidad con Full Claro para toda la vida:
                      </strong>{" "}
                      300Mbps
                    </p>
                    <p className="card-text">
                      <strong>Velocidad regular (Sin Full Claro):</strong>{" "}
                      150Mbps
                    </p>
                    <p className="card-text">
                      <strong>Suscripción incluida:</strong> Claro video,
                      Paramount+ y 11 canales locales
                    </p>
                    <p className="card-text">
                      <strong>Beneficios adicionales:</strong> Claro club
                    </p>
                    <small className="text-muted">
                      *Aplica para planes contratados del 08.02 al 30.11.24
                    </small>
                    <small className="text-muted">
                      *Hasta el doble de velocidad si eres Full Claro
                    </small>
                    <div className="" style={{ marginTop: "55px" }}>
                      <a href="/" className="linkTabs">
                        Conoce más
                      </a>
                      <button type="button" className="btnTabs">
                        Solicitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colTabs">
                <div className="card plan-card" style={{ width: "23rem" }}>
                  <div className="card-header text-center bg-primary text-white">
                    INTERNET FIBRA ÓPTICA <br /> 300MBPS
                  </div>
                  <div className="card-body text-center">
                    <img src={imgTabs} alt=""></img>
                    <h8>Precio mensual</h8>
                    <h2 className="price">S/75</h2>
                    <div className="part2">
                      <h5 className="card-title">BONO DE 1000Mbps</h5>
                      <h7 className="cardtitle2">x 6 MESES</h7>
                    </div>
                    <p className="card-text">
                      <strong>
                        Velocidad con Full Claro para toda la vida:
                      </strong>{" "}
                      600Mbps
                    </p>
                    <p className="card-text">
                      <strong>Suscripción incluida:</strong> Claro video,
                      Paramount+ y 11 canales locales
                    </p>
                    <p className="card-text">
                      <strong>Beneficios adicionales:</strong> Claro club
                    </p>
                    <small className="text-muted">
                      *Aplica para planes contratados del 08.02 al 30.11.24
                    </small>
                    <small className="text-muted">
                      *Hasta el doble de velocidad si eres Full Claro
                    </small>
                    <div className="" style={{ marginTop: "90px" }}>
                      <a href="/" className="linkTabs">
                        Conoce más
                      </a>
                      <button type="button" className="btnTabs">
                        Solicitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colTabs">
                <div className="card plan-card" style={{ width: "23rem" }}>
                  <div className="card-header text-center bg-primary text-white">
                    INTERNET FIBRA ÓPTICA <br /> 400MBPS
                  </div>
                  <div className="card-body text-center">
                    <img src={imgTabs} alt=""></img>
                    <h8>Precio mensual</h8>
                    <h2 className="price">S/85</h2>
                    <div className="part2">
                      <h5 className="card-title">BONO DE 1000Mbps</h5>
                      <h7 className="cardtitle2">x 6 MESES</h7>
                    </div>
                    <p className="card-text">
                      <strong>
                        Velocidad con Full Claro para toda la vida:
                      </strong>{" "}
                      800Mbps
                    </p>
                    <p className="card-text">
                      <strong>Suscripción incluida:</strong> Claro video,
                      Paramount+ y 11 canales locales
                    </p>
                    <p className="card-text">
                      <strong>Beneficios adicionales:</strong> Claro club
                    </p>
                    <small className="text-muted">
                      *Aplica para planes contratados del 08.02 al 30.11.24
                    </small>
                    <small className="text-muted">
                      *Hasta el doble de velocidad si eres Full Claro
                    </small>
                    <div className="" style={{ marginTop: "90px" }}>
                      <a href="/" className="linkTabs">
                        Conoce más
                      </a>
                      <button type="button" className="btnTabs">
                        Solicitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Segunda pestaña - Planes Móviles Ilimitados */}
        <div
          className="tab-pane fade"
          id="nav-ilimitados"
          role="tabpanel"
          aria-labelledby="nav-ilimitados-tab"
        >
          <div className="cardsTab">
            <div className="rowTabs">
              <div className="colTabs">
                <div className="card plan-card" style={{ width: "23rem" }}>
                  <div className="card-header text-center bg-primary text-white">
                    INTERNET FIBRA ÓPTICA <br /> 1500 MBPS
                  </div>
                  <div className="card-body text-center">
                    <img src={imgTabs} alt=""></img>
                    <h8>Precio mensual</h8>
                    <h2 className="price">S/200</h2>
                    <div className="part2">
                      <h5 className="card-title">Velocidad + Estabilidad</h5>
                    </div>
                    <p className="card-text">
                      <strong>Velocidad de subida y bajada:</strong> 1500mbps
                    </p>
                    <p className="card-text">
                      <strong>Suscripción incluida:</strong> Claro video,
                      Paramount+ y 11 canales locales
                    </p>
                    <p className="card-text">
                      <strong>Beneficios adicionales:</strong> Claro club
                    </p>
                    <small className="text-muted">
                      *Aplica para planes contratados del 08.02 al 30.11.24
                    </small>
                    <div className="" style={{ marginTop: "150px" }}>
                      <a href="/" className="linkTabs">
                        Me interesa
                      </a>
                      <button type="button" className="btnTabs">
                        Solicitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colTabs">
                <div className="card plan-card" style={{ width: "23rem" }}>
                  <div className="card-header text-center bg-primary text-white">
                    INTERNET FIBRA ÓPTICA <br /> 1500 MBPS
                  </div>
                  <div className="card-body text-center">
                    <img src={imgTabs} alt=""></img>
                    <h8>Precio mensual</h8>
                    <h2 className="price">S/200</h2>
                    <div className="part2">
                      <h5 className="card-title">Velocidad + Estabilidad</h5>
                    </div>
                    <p className="card-text">
                      <strong>Velocidad de subida y bajada:</strong> 1500mbps
                    </p>
                    <p className="card-text">
                      <strong>Suscripción incluida:</strong> Claro video,
                      Paramount+ y 11 canales locales
                    </p>
                    <p className="card-text">
                      <strong>Beneficios adicionales:</strong> Claro club
                    </p>
                    <small className="text-muted">
                      *Aplica para planes contratados del 08.02 al 30.11.24
                    </small>
                    <div className="" style={{ marginTop: "150px" }}>
                      <a href="/" className="linkTabs">
                        Me interesa
                      </a>
                      <button type="button" className="btnTabs">
                        Solicitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colTabs">
                <div className="card plan-card" style={{ width: "23rem" }}>
                  <div className="card-header text-center bg-primary text-white">
                    INTERNET FIBRA ÓPTICA <br /> 1500 MBPS
                  </div>
                  <div className="card-body text-center">
                    <img src={imgTabs} alt=""></img>
                    <h8>Precio mensual</h8>
                    <h2 className="price">S/200</h2>
                    <div className="part2">
                      <h5 className="card-title">Velocidad + Estabilidad</h5>
                    </div>
                    <p className="card-text">
                      <strong>Velocidad de subida y bajada:</strong> 1500mbps
                    </p>
                    <p className="card-text">
                      <strong>Suscripción incluida:</strong> Claro video,
                      Paramount+ y 11 canales locales
                    </p>
                    <p className="card-text">
                      <strong>Beneficios adicionales:</strong> Claro club
                    </p>
                    <small className="text-muted">
                      *Aplica para planes contratados del 08.02 al 30.11.24
                    </small>
                    <div className="" style={{ marginTop: "150px" }}>
                      <a href="/" className="linkTabs">
                        Me interesa
                      </a>
                      <button type="button" className="btnTabs">
                        Solicitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
