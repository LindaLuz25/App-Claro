import React from 'react'
import img from '.././assets/img/img7.webp'

export default function ImageCard() {
  return (
    <div class="card" style={{width: "100%", marginTop:"35px"}}>
      <img src={img} class="card-img-top" alt="..."></img>
    </div>
  )
}