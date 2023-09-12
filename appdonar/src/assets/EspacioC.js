import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './EspacioC.css';

const CustomCarousel = () => {
  return (
    <div className="container-sm" id='carrousel'>
      {}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Bow_Lake_beim_Icefields_Parkway.jpg"
            alt="Slide 1"
          />
          <div className="carousel-caption text-center custom-caption">
            <h3>Slide 1</h3>
            <p>Texto descriptivo del Slide 1</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Bow_Lake_beim_Icefields_Parkway.jpg"
            alt="Slide 2"
          />
          <div className="carousel-caption text-center custom-caption">
            <h3>Slide 2</h3>
            <p>Texto descriptivo del Slide 2</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Bow_Lake_beim_Icefields_Parkway.jpg"
            alt="Slide 3"
          />
          <div className="carousel-caption text-center custom-caption">
            <h3>Slide 3</h3>
            <p>Texto descriptivo del Slide 3</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
