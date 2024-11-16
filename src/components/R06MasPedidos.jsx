import React from "react";
import pedido1 from "./assets/img/pedido1.png";
import pedido2 from "./assets/img/pedido2.png";
import pedido3 from "./assets/img/pedido3.png";
import pedido4 from "./assets/img/pedido4.png";
import pedido5 from "./assets/img/pedido5.png";
import pedido6 from "./assets/img/pedido6.png";
import pedido7 from "./assets/img/pedido7.png";
import pedido8 from "./assets/img/pedido8.png";
import "./assets/css/pedidosStyles.css";

export default function R06MasPedidos() {
  return (
    <div className="r06Pedidos">
      <div className="pedidos">
        <nav>
          <div
            className="nav nav-tabs justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              id="nav-tienda-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-tienda"
              type="button"
              role="tab"
              aria-controls="nav-tienda"
              aria-selected="true"
            >
              Tienda Claro
            </button>
            <button
              className="nav-link"
              id="nav-promociones-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-promociones"
              type="button"
              role="tab"
              aria-controls="nav-promociones"
              aria-selected="false"
            >
              Promociones
            </button>
            <button
              className="nav-link"
              id="nav-liberados-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-liberados"
              type="button"
              role="tab"
              aria-controls="nav-liberados"
              aria-selected="false"
            >
              Celulares liberados
            </button>
          </div>
        </nav>

        <div className="tab-content myMargins" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-tienda"
            role="tabpanel"
            aria-labelledby="nav-tienda-tab"
          >
            <div className="containerPedidos">
              <div className="rowPedidos">
                <div className="textPerdidos">
                  <span>Tienda Claro</span>
                  <h2>Celulares más Pedidos</h2>
                  <p>Nuevos celulares en lanzamiento</p>
                  <a href="/" className="btnPedidos">
                    Vamos a la tienda
                  </a>
                </div>
                <div className="colPedidos">
                  <div className="cardPedidos">
                    <div className="tabsPedidos">
                      <div className="bodyPedidos">
                        <div className="imgPedidos">
                          <img
                            className="imgpedidos"
                            src={pedido1}
                            alt=""
                          ></img>
                        </div>
                        <div className="">
                          <div className="contentPedidos">
                            <h3 className="titlePedidos">
                              Apple iPhone 13 128GB Midnight
                            </h3>
                            <p className="textPedidos">Precio del equipo</p>
                            <p className="pricePedido">S/ 2019</p>
                            <a href="/" className="btnComprar">
                              Comprar Online
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="colPedidos">
                  <div className="cardPedidos">
                    <div className="tabsPedidos">
                      <div className="bodyPedidos">
                        <div className="imgPedidos">
                          <img
                            className="imgpedidos"
                            src={pedido2}
                            alt=""
                          ></img>
                        </div>
                        <div className="col">
                          <div className="contentPedidos">
                            <h3 className="titlePedidos">
                              Xiaomi Redmi Note 13 256GB Verde + Headphones
                            </h3>
                            <p className="textPedidos">Precio del equipo</p>
                            <p className="pricePedido">S/ 599</p>
                            <a href="/" className="btnComprar">
                              Comprar Online
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="colPedidos">
                  <div className="cardPedidos" style={{ width: "15rem" }}>
                    <div className="tabsPedidos">
                      <div className="bodyPedidos">
                        <div className="imgPedidos">
                          <img
                            className="imgpedidos"
                            src={pedido3}
                            alt=""
                          ></img>
                        </div>
                        <div className="col">
                          <div className="contentPedidos">
                            <h3 className="titlePedidos">
                              Honor X8B 256gb Plata Titanio
                            </h3>
                            <p className="textPedidos">Precio del equipo</p>
                            <p className="pricePedido">S/ 709</p>
                            <a href="/" className="btnComprar">
                              Comprar Online
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-promociones"
            role="tabpanel"
            aria-labelledby="nav-promociones-tab"
          >
            <div className="containerPedidos">
              <div className="rowPedidos">
                <div className="textPerdidos">
                  <span>Tienda Claro</span>
                  <h2>Celulares más Pedidos</h2>
                  <p>Nuevos celulares en lanzamiento</p>
                  <a href="/" className="btnPedidos">
                    Vamos a la tienda
                  </a>
                </div>
                <div className="colPedidos">
                  <div className="cardPedidos">
                    <div className="tabsPedidos">
                      <div className="bodyPedidos">
                        <div className="imgPedidos">
                          <img
                            className="imgpedidos"
                            src={pedido4}
                            alt=""
                          ></img>
                        </div>
                        <div className="col">
                          <div className="contentPedidos">
                            <h3 className="titlePedidos">
                              Apple iPhone 16 128GB Ultramarine
                            </h3>
                            <p className="textPedidos">Precio del equipo</p>
                            <p className="pricePedido">S/ 3689</p>
                            <a href="/" className="btnComprar">
                              Comprar Online
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="colPedidos">
                  <div className="cardPedidos" style={{ width: "15rem" }}>
                    <div className="tabsPedidos">
                      <div className="bodyPedidos">
                        <div className="imgPedidos">
                          <img
                            className="imgpedidos"
                            src={pedido5}
                            alt=""
                          ></img>
                        </div>
                        <div className="col">
                          <div className="contentPedidos">
                            <h3 className="titlePedidos">
                              Samsung Galaxy A06 128GB Black + Cargador
                            </h3>
                            <p className="textPedidos">Precio del equipo</p>
                            <p className="pricePedido">S/ 299</p>
                            <a href="/" className="btnComprar">
                              Comprar Online
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="colPedidos">
                  <div className="cardPedidos">
                    <div className="tabsPedidos">
                      <div className="bodyPedidos">
                        <div className="imgPedidos">
                          <img
                            className="imgpedidos"
                            src={pedido1}
                            alt=""
                          ></img>
                        </div>
                        <div className="col">
                          <div className="contentPedidos">
                            <h3 className="titlePedidos">
                              Apple iPhone 13 128GB Midnight
                            </h3>
                            <p className="textPedidos">Precio del equipo</p>
                            <p className="pricePedido">S/ 2019</p>
                            <a href="/" className="btnComprar">
                              Comprar Online
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-liberados"
            role="tabpanel"
            aria-labelledby="nav-liberados-tab"
          >
            <div className="containerPedidos">
              <div className="rowPedidos">
                <div className="textPerdidos">
                  <span>Tienda Claro</span>
                  <h2>Celulares más Pedidos</h2>
                  <p>Nuevos celulares en lanzamiento</p>
                  <a href="/" className="btnPedidos">
                    Vamos a la tienda
                  </a>
                </div>
                <div className="colPedidos">
                  <div className="cardPedidos">
                    <div className="tabsPedidos">
                      <div className="bodyPedidos">
                        <div className="imgPedidos">
                          <img
                            className="imgpedidos"
                            src={pedido6}
                            alt=""
                          ></img>
                        </div>
                        <div className="">
                          <div className="contentPedidos">
                            <h3 className="titlePedidos">
                              Motorola Moto G14 128GB Gris
                            </h3>
                            <p className="textPedidos">Precio del equipo</p>
                            <p className="pricePedido">S/ 519</p>
                            <a href="/" className="btnComprar">
                              Comprar Online
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="colPedidos">
                  <div className="cardPedidos">
                    <div className="tabsPedidos">
                      <div className="bodyPedidos">
                        <div className="imgPedidos">
                          <img
                            className="imgpedidos"
                            src={pedido7}
                            alt=""
                          ></img>
                        </div>
                        <div className="col">
                          <div className="contentPedidos">
                            <h3 className="titlePedidos">
                              Honor X5 Plus 64GB Negro Medianoche + Audifonos
                            </h3>
                            <p className="textPedidos">Precio del equipo</p>
                            <p className="pricePedido">S/ 389</p>
                            <a href="/" className="btnComprar">
                              Comprar Online
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="colPedidos">
                  <div className="cardPedidos" style={{ width: "15rem" }}>
                    <div className="tabsPedidos">
                      <div className="bodyPedidos">
                        <div className="imgPedidos">
                          <img
                            className="imgpedidos"
                            src={pedido8}
                            alt=""
                          ></img>
                        </div>
                        <div className="col">
                          <div className="contentPedidos">
                            <h3 className="titlePedidos">
                              Motorola Moto G54 256 GB 5G Verde Menta
                            </h3>
                            <p className="textPedidos">Precio del equipo</p>
                            <p className="pricePedido">S/ 779</p>
                            <a href="/" className="btnComprar">
                              Comprar Online
                            </a>
                          </div>
                        </div>
                      </div>
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
