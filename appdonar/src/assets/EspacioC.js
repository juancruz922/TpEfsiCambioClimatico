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
            src="https://www.iberdrola.com/documents/20125/42055/Educacion_Cambio_Climatico_746x419.jpg/a57fcb45-6975-5ac1-9c19-50348c7fb77a?t=1630469247417"
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
            src="https://humanidades.com/wp-content/uploads/2017/04/investigacion-cientifica-5-e1568166670621.jpg"
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
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/latin-america/Brasil30-es.jpg?crop=0%2C283%2C4000%2C2100&wid=1200&hei=630&scl=3.3333333333333335"
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
