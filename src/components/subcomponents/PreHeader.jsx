import React from "react";
import '.././assets/css/myStyles.css'

export default function PreHeader() {
  return (
    <>
      <div className="container preHeaderContainer">
        <nav class="nav listSegment">
          <a class="nav-link active " aria-current="page" href="/">
            Personas
          </a>
          <a class="nav-link link-dark" href="/">
            Negocios
          </a>
          <a class="nav-link link-dark" href="/">
            Empresas
          </a>
        </nav>
      </div>
    </>
  );
}
