import homePageIconImg from "../../assets/images/iconBanner-left.svg";
import map from "../../assets/images/uzbMap.png";
import cyrcle from "../../assets/images/generalIcons/cyrcle.svg";
import icon from "../../assets/images/serviceImages/service-icon10.jpg";

import expImg1 from "../../assets/images/expImg1.jpg";
import expImg2 from "../../assets/images/expImg2.jpg";

import sertIcon from "../../assets/images/serviceImages/service-icon11.jpg";

import sert1 from "../../assets/images/serts/sert1.jpg";
import sert2 from "../../assets/images/serts/sert2.jpg";
import sert22 from "../../assets/images/serts/sert2-2.jpg";
import sert3 from "../../assets/images/serts/sert3.jpg";
// import sert32 from "../../assets/images/serts/sert3-2.jpg";
import sert4 from "../../assets/images/serts/sert4.jpg";
// import sert42 from "../../assets/images/serts/sert4-2.jpg";
import sert5 from "../../assets/images/serts/sert5.jpg";
import sert52 from "../../assets/images/serts/sert5-2.jpg";
import sert6 from "../../assets/images/serts/sert6.jpg";

import map2 from "../../assets/images/map.jpg";

import partnersImg1 from "../../assets/images/partners/img1.png";
import partnersImg2 from "../../assets/images/partners/img2.png";
import partnersImg3 from "../../assets/images/partners/img3.png";
import partnersImg4 from "../../assets/images/partners/img4.svg";
import partnersImg5 from "../../assets/images/partners/img5.svg";
import partnersImg6 from "../../assets/images/partners/img6.png";
import partnersImg7 from "../../assets/images/partners/img7.jpg";

import clientsImg1 from "../../assets/images/clients/img7.jpg";
import clientsImg2 from "../../assets/images/clients/img2.jpg";
import clientsImg3 from "../../assets/images/clients/img3.png";
import clientsImg4 from "../../assets/images/clients/img4.png";
import clientsImg5 from "../../assets/images/clients/img5.png";
import clientsImg6 from "../../assets/images/clients/img6.jpg";
import clientsImg7 from "../../assets/images/clients/img7.jpg";
import clientsImg8 from "../../assets/images/clients/img8.png";
import clientsImg9 from "../../assets/images/clients/img9.jpg";
import clientsImg10 from "../../assets/images/clients/img10.jpg";
import clientsImg11 from "../../assets/images/clients/img11.jpg";
import clientsImg12 from "../../assets/images/clients/img12.png";

import { useState } from "react";
import LicenzModal from "../LicenzModal/LicenzModal";

const Experience = () => {
  const licenzImages = [
    sert2,
    sert22,
    sert1,
    sert4,
    sert6,
    sert3,
    sert5,
    sert52,
  ];
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = (y / rect.height - 0.5) * -20;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleMouseLeave = (e) => {
    const card = e.currentTarget;

    card.style.transform = "perspective(600px) rotateX(0) rotateY(0)";
  };
  const [modal, setModal] = useState(false);
  const [imgIdx, setImgIdx] = useState(null);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="exp-page">
      <section className="exp-page__section1">
        <img src={homePageIconImg} alt="" className="iconBannerImg" />
        <h3 className="main-title">
          Наш <span>опыт</span>
        </h3>
        <div className="exp-page__section1-map">
          <img src={map} alt="" className="exp-page__section1-map-img" />
          <div className="exp-page__section1-map-cards">
            <div className="exp-page__section1-map-amount1">
              <h5>
                <img src={cyrcle} alt="" />
                3123
              </h5>
              <p>Реализованные проекты 2019-2023</p>
            </div>
            <div className="exp-page__section1-map-amount2">
              <h5>
                <img src={cyrcle} alt="" />
                72
              </h5>
              <p>Проекты в 2025 году</p>
            </div>
            <div className="exp-page__section1-map-amount3">
              <h5>
                <img src={cyrcle} alt="" />7
              </h5>
              <p>Проекты в области возобновляемой энергетики в 2024 году</p>
            </div>
          </div>
        </div>
      </section>
      <section className="exp-page__section2">
        <div className="container">
          <h3 className="main-title">
            <span>НАШ</span> ОПЫТ И КОМПЕТЕНЦИЯ
          </h3>
          <div className="exp-page__section2-content">
            <div className="exp-page__section2-box">
              <img src={expImg1} alt="" />
              <p>АКТУАЛЬНАЯ И ТОЧНАЯ МОДЕЛЬ СЕТИ В DIGSILENT ®</p>
            </div>
            <div className="exp-page__section2-box">
              <img src={expImg2} alt="" />
              <p>ЗНАНИЯ О СИСТЕМЕ ЭНЕРГЕТИКИ, ВКЛЮЧАЯ ЭЛЕКТРОСЕТИ</p>
            </div>
          </div>
          <div className="exp-page__section2-footer">
            <img src={icon} alt="" />
            <p>UZEE С 1956 года</p>
          </div>
        </div>
      </section>
      <section className="exp-page__section3">
        <div className="container">
          <div className="exp-page__section3-content">
            <h3 className="main-title">
              НАШИ <span>СЕРТИФИКАТЫ</span>
            </h3>
            <img src={sertIcon} alt="" />
            <p className="main-subtitle">
              Качество и надежность для нас не просто слова, поскольку мы строго
              соблюдаем процедуры международной и национальной сертификации.
            </p>
          </div>
          {licenzImages.map((img, index) => (
            <img
              src={img}
              key={index}
              alt=""
              className="exp-page__section3-img1"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                openModal();
                setImgIdx(index);
              }}
            />
          ))}
          {modal && (
            <LicenzModal close={closeModal} img={licenzImages[imgIdx]} />
          )}
        </div>
      </section>
      <section className="exp-page__section4">
        <h3 className="main-title">
          Наши <span>БИЗНЕС-ПАРТНЕРЫ</span>
        </h3>
        <div className="exp-page__section4-partners container">
          <img src={partnersImg1} alt="" />
          <img src={partnersImg2} alt="" />
          <img src={partnersImg3} alt="" />
          <img src={partnersImg4} alt="" />
          <img src={partnersImg5} alt="" />
          <img src={partnersImg6} alt="" />
          <img src={partnersImg7} alt="" />
        </div>
      </section>
      <section className="exp-page__section5">
        <h3 className="main-title">
          Наши <span>КЛИЕНТЫ</span>
        </h3>
        <div className="exp-page__section5-clients container">
          <img src={clientsImg1} alt="" />
          <img src={clientsImg2} alt="" />
          <img src={clientsImg3} alt="" />
          <img src={clientsImg4} alt="" />
          <img src={clientsImg5} alt="" />
          <img src={clientsImg6} alt="" />
          <img src={clientsImg7} alt="" />
          <img src={clientsImg8} alt="" />
        </div>
      </section>
      <section className="exp-page__section6">
        <div className="exp-page__section6-img">
          <img src={clientsImg1} alt="" />
          <p>NEGU</p>
        </div>
        <div className="exp-page__section6-img">
          <img src={clientsImg9} alt="" />
          <p>Oilstone Technologies DMCC, UAE</p>
        </div>
        <div className="exp-page__section6-img">
          <img src={clientsImg10} alt="" />
          <p>Enter Engineering </p>
        </div>
        <img src={map2} alt="" />
        <div className="exp-page__section6-img">
          <img src={clientsImg3} alt="" />
          <p>CEEC</p>
        </div>
        <div className="exp-page__section6-img">
          <img src={clientsImg11} alt="" />
          <p>UZLITI Engineering </p>
        </div>
        <div className="exp-page__section6-img">
          <img src={clientsImg6} alt="" />
          <p>O'ZELEKTROAPPARAT-ELEСTROSHIELD</p>
        </div>
        <div className="exp-page__section6-img">
          <img src={clientsImg12} alt="" />
          <p>WANG DA ROLLING STEEL</p>
        </div>
      </section>
    </div>
  );
};
 
export default Experience;
