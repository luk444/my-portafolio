import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';
import meter1 from "../assets/img/react.svg";
import meter2 from "../assets/img/js.svg";
import meter3 from "../assets/img/dw.svg";
import Certificado1 from "../assets/img/Certificado1.png";
import Certificado2 from "../assets/img/Certificado2.png";
import Certificado3 from "../assets/img/Certificado3.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Certificados = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setModalIsOpen(false);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="Cert" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="Cert-bx wow zoomIn">
              <h2>Certificados</h2>
              <p>Aqui presento algunos de los Certificados de cursos realizados</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme Cert-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>ReactJs</h5>
                  <p>
                    <button onClick={() => openModal(Certificado2)}>Ver</button>
                  </p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JavaScript</h5>
                  <p>
                    <button onClick={() => openModal(Certificado1)}>Ver</button>
                  </p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Desarrollo Web</h5>
                  <p>
                    <button onClick={() => openModal(Certificado3)}>Ver</button>
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificado Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        {currentImage && <img src={currentImage} alt="Certificado" />}
        <hr/>
        <div className='BtnClose'>
            <button className='textbtn' onClick={closeModal}>Cerrar</button>
        </div>
      </Modal>
    </section>
  );
};
