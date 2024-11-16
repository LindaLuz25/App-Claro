import React from "react";
import icon_wifi from ".././assets/img/icon_wifi.webp";
import ".././assets/css/pedidosStyles.css";

export default function MiniCard() {
  return (
    <div class="sectionBanner">
      <div class="bannerBody">
        <img className="imgBanner" src={icon_wifi} alt="" style={{width:"50px"}}></img>
        <h1 className="textBanner">
          Contrata Internet hogar, Fibra óptica, TV y más en Claro.
        </h1>
      </div>
    </div>
  );
}
