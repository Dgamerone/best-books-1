import React from 'react'
import banner_central from '../imagenes_banner/banner_central.jpg'
import banner_1 from '../imagenes_banner/banner_1.png'
import banner_2 from '../imagenes_banner/banner_2.png'


export default function Banner() {
  return (
    <div className='container' style={{marginTop:20, marginBottom:20}}>

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={banner_central} className="d-block w-100" alt="1"/>
                </div>
                <div className="carousel-item">
                <img src={banner_1} className="d-block w-100" alt="2"/>
                </div>
                <div className="carousel-item">
                <img src={banner_2} className="d-block w-100" alt="3"/>
                </div>
            </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>


    </div>
  )
}


