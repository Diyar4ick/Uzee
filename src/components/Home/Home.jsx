import section1Img from "../../assets/images/office-building.jpg";
import persons from "../../assets/images/person-2.svg";
import statistics from "../../assets/images/statistics.svg";
import lamp from "../../assets/images/lamp.svg";
import news from "../../assets/images/news-img.jpg";
import boxes from "../../assets/images/boxes.svg";
import licenziya from "../../assets/images/licenziya_2019.jpg";
import { useState } from "react";
import LicenzModal from "../LicenzModal/LicenzModal";

const Home = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;

    card.style.transform =
      "perspective(600px) rotateX(0) rotateY(0)";
  };

  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="home-page">
      <section className="home-page__section1">
        <div className="container">
          <div className="home-page__section1-content">
            <span className="home-page__section1-content-subtitle">о нас</span>
            <h1>
              АО <span>«O`ZENERGOINJINIRING»</span>
            </h1>
            <p>
              АО «O`ZENERGOINJINIRING» является специализированной организацией
              по проектированию объектов электроснабжения и электрификации всех
              потребителей, расположенных в сельской местности, городах и
              райцентрах, включая малые и средние предприятия, объекты водного
              хозяйства и коммунальные комплексы, находящиеся на территории
              Республики Узбекистан.
            </p>
            <a href="">подробнее</a>
          </div>
          <img src={section1Img} alt="" />
        </div>
      </section>
      <section className="home-page__section2">
        <div className="container">
          <div className="home-page__section2-content">
            <p className="home-page__section2-subtitle">
              Ваш помощник в области Энергетики
            </p>
            <h2 className="home-page__section2-title">
              Акционерное общество АО «O`ZENERGOINJINIRING»
            </h2>
            <p className="home-page__section2-description">
              АО «O`ZENERGOINJINIRING» является специализированной организацией
              по проектированию объектов электроснабжения и электрификации всех
              потребителей, расположенных в сельской местности, городах и
              райцентрах, включая малые и средние предприятия, объекты водного
              хозяйства и коммунальные комплексы, находящиеся на территории
              Республики Узбекистан.
            </p>
          </div>
          <div className="home-page__section2-cards">
            <div className="home-page__section2-card">
              <img src={persons} alt="" />
              <h3>Участие</h3>
              <p>
                участие в разработке и реализации основ национальных и
                отраслевых программ, директивных правительственных документов,
                определяющих развитие электрических сетей Республики Узбекистан
                Прогнозирование
              </p>
            </div>
            <div className="home-page__section2-card">
              <img src={statistics} alt="" />
              <h3>Прогнозирование</h3>
              <p>
                прогнозирование и оптимизация энергобалансов отраслей экономики
              </p>
            </div>
            <div className="home-page__section2-card">
              <img src={lamp} alt="" />
              <h3>Участие</h3>
              <p>
                разработка вопросов стратегии перспективного развития и
                формирования системы распределения электроэнергии и
                электроснабжения Республики Узбекистанnpm{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page__section3">
        <div className="container">
          <h3 className="home-page__section3-title">
            Новости АО "Узэнергоинжиниринг"
          </h3>
          <div className="home-page__section3-news">
            <div className="home-page__section3-card">
              <img src={news} alt="" />
              <div className="home-page__section3-content">
                <span>
                  <svg
                    width="84"
                    height="40"
                    viewBox="0 0 92 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.226682 4.13649C-0.581247 2.16276 0.870389 0 3.00308 0H70.4928C71.7108 0 72.8078 0.736347 73.2692 1.86351L90.8402 44.7886C91.6481 46.7623 90.1965 48.9251 88.0638 48.9251H20.5741C19.3561 48.9251 18.2591 48.1888 17.7977 47.0616L0.226682 4.13649Z"
                      fill="#0068b4"
                    />
                  </svg>
                  <p> 01 фев. 2024</p>
                </span>
                <h4>
                  АО «Узэнергоинжиниринг» договорился с Китайскими партнерами о
                  создании совместного предприятия и организации международного
                  образовательного учреждения
                </h4>
              </div>
            </div>
            <div className="home-page__section3-card">
              <img src={news} alt="" />
              <div className="home-page__section3-content">
                <span>
                  <svg
                    width="84"
                    height="40"
                    viewBox="0 0 92 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.226682 4.13649C-0.581247 2.16276 0.870389 0 3.00308 0H70.4928C71.7108 0 72.8078 0.736347 73.2692 1.86351L90.8402 44.7886C91.6481 46.7623 90.1965 48.9251 88.0638 48.9251H20.5741C19.3561 48.9251 18.2591 48.1888 17.7977 47.0616L0.226682 4.13649Z"
                      fill="#0068b4"
                    />
                  </svg>
                  <p> 01 фев. 2024</p>
                </span>
                <h4>
                  АО «Узэнергоинжиниринг» договорился с Китайскими партнерами о
                  создании совместного предприятия и организации международного
                  образовательного учреждения
                </h4>
              </div>
            </div>
            <div className="home-page__section3-card">
              <img src={news} alt="" />
              <div className="home-page__section3-content">
                <span>
                  <svg
                    width="84"
                    height="40"
                    viewBox="0 0 92 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.226682 4.13649C-0.581247 2.16276 0.870389 0 3.00308 0H70.4928C71.7108 0 72.8078 0.736347 73.2692 1.86351L90.8402 44.7886C91.6481 46.7623 90.1965 48.9251 88.0638 48.9251H20.5741C19.3561 48.9251 18.2591 48.1888 17.7977 47.0616L0.226682 4.13649Z"
                      fill="#0068b4"
                    />
                  </svg>
                  <p> 01 фев. 2024</p>
                </span>
                <h4>
                  АО «Узэнергоинжиниринг» договорился с Китайскими партнерами о
                  создании совместного предприятия и организации международного
                  образовательного учреждения
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page__section4">
        <div className="container">
          <h3 className="home-page__section4-title">НАШИ ПРЕИМУЩЕСТВА</h3>
          <div className="home-page__section4-content">
            <div className="home-page__section4-card">
              <img src={boxes} alt="" />
              <div className="">
                <h4>Проект с учетом современных технологий строительства</h4>
                <p>
                  Проекты сделанные нашей командой специалистов позволяет
                  сократить время строительства, за счет использования
                  современных способ монтажа, материалов и технологий,
                  используемые материалы доступны по стоимости и имеются в
                  свободной продаже.{" "}
                </p>
              </div>
            </div>
            <div className="home-page__section4-card">
              <img src={boxes} alt="" />
              <div className="">
                <h4>Проект с учетом современных технологий строительства</h4>
                <p>
                  Проекты сделанные нашей командой специалистов позволяет
                  сократить время строительства, за счет использования
                  современных способ монтажа, материалов и технологий,
                  используемые материалы доступны по стоимости и имеются в
                  свободной продаже.{" "}
                </p>
              </div>
            </div>
            <div className="home-page__section4-card">
              <img src={boxes} alt="" />
              <div className="">
                <h4>Проект с учетом современных технологий строительства</h4>
                <p>
                  Проекты сделанные нашей командой специалистов позволяет
                  сократить время строительства, за счет использования
                  современных способ монтажа, материалов и технологий,
                  используемые материалы доступны по стоимости и имеются в
                  свободной продаже.{" "}
                </p>
              </div>
            </div>
            <div className="home-page__section4-card">
              <img src={boxes} alt="" />
              <div className="">
                <h4>Проект с учетом современных технологий строительства</h4>
                <p>
                  Проекты сделанные нашей командой специалистов позволяет
                  сократить время строительства, за счет использования
                  современных способ монтажа, материалов и технологий,
                  используемые материалы доступны по стоимости и имеются в
                  свободной продаже.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page__section5">
        <h3 className="home-page__section5-title">
          Наши лицензии и сертификаты
        </h3>
        <div className="home-page__section5-content">
          <div
            className="home-page__section5-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={licenziya} alt="" />
            <button type="submit" onClick={() => openModal()}>+</button>
          </div>
            {modal && <LicenzModal img={licenziya} close={closeModal}/>}
          
        </div>
      </section>
    </div>
  );
};

export default Home;
