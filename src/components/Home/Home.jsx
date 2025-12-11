import homePageIconImg from "../../assets/images/iconBanner.svg";
import persons from "../../assets/images/person-2.svg";
import statistics from "../../assets/images/statistics.svg";
import lamp from "../../assets/images/lamp.svg";
import news from "../../assets/images/news-img.jpg";
import boxes from "../../assets/images/boxes.svg";
import licenziya from "../../assets/images/licenziya_2019.jpg";
import { useState } from "react";
import LicenzModal from "../LicenzModal/LicenzModal";
import homeBanner from "../../assets/images/homePageBanner.jpg";
import homeSection2 from "../../assets/images/homePageSection2.jpg";
import checkmark from "../../assets/images/checkmark.svg";
import adventages from "../../assets/images/company-advantages.jpg";
import areasImg1 from "../../assets/images/homePageSection3-1.jpg";
import areasImg2 from "../../assets/images/homePageSection3-2.jpg";
import areasImg3 from "../../assets/images/homePageSection3-3.jpg";
import areasImg4 from "../../assets/images/homePageSection3-4.jpg";

import { Link } from "react-router-dom";

const Home = () => {
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

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="home-page">
      <section className="home-page__section1">
        <img src={homePageIconImg} alt="" className="iconBannerImg" />
        <div className="container">
          <div className="home-page__section1-content">
            <h3 className="main-title">
              О <span>нас</span>
            </h3>
            <p className="home-page__section1-subtitle main-subtitle">
              АО «O’ZENERGOINJINIRING» — ведущая инжиниринговая компания в
              энергетическом секторе Узбекистана, обладающая обширным опытом в
              области проектирования и консалтинга.
            </p>
            <p className="main-description">
              С 1956 года мы с гордостью предоставляем комплексные
              инженерно-технические консультационные услуги в энергетическом
              секторе. Благодаря нашему обширному опыту, мы глубоко понимаем
              энергетическую систему и ее потребности.
              <span className="enter"></span>
              Благодаря большой команде опытных специалистов, обладающих
              собственными компетенциями в различных областях инженерии, включая
              изыскания и проектирование, мы успешно управляем проектами любой
              сложности и масштаба, предоставляя надежные и высококачественные
              решения для энергетической отрасли.
              <span className="enter"></span>
              Мы постоянно совершенствуемся, внедряя передовые технологии и
              инновационные подходы к управлению проектами. Благодаря
              партнерству с международными компаниями мы применяем лучшие
              мировые практики и стандарты, чтобы обеспечить высокую
              эффективность и надежность наших проектов.
            </p>
          </div>
        </div> 
      </section>
      <section className="home-page__section2">
        <div className="container">
          <img src={homeSection2} alt="" className="" />
          <div className="home-page__section2-content">
            <h3 className="main-title">
              Что мы <span>делаем?</span>
            </h3>
            <p className="main-subtitle">
              Мы предлагаем полный спектр инженерно-технических консультационных
              услуг в области энергетики, охватывающий все этапы реализации
              проектов.
            </p>
            <ul className="home-page__section2-worklist">
              <li className="home-page__section2-task">
                <Link to="#" className="home-page__section2-work">
                  01. ПРЕДПРОЕКТНЫЕ ИССЛЕДОВАНИЯ
                </Link>
                <ul>
                  <li>
                    <p className="main-description">
                      Исследования взаимосвязи электросетей
                    </p>
                  </li>
                  <li>
                    <p className="main-description">
                      Выбор и утверждение маршрутов
                    </p>
                  </li>
                  <li>
                    <p className="main-description">
                      Оценка воздействия на окружающую среду и социальную сферу
                    </p>
                  </li>
                  <li>
                    <p className="main-description">Инженерные изыскания</p>
                  </li>
                  <li>
                    <p className="main-description">
                      Технико-экономическое обоснование, базовый проект и
                      тендерная документация.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="home-page__section2-task">
                <Link to="#" className="home-page__section2-work">
                  02. ДЕТАЛИ ДЕТАЛЬНОГО ПРОЕКТИРОВАНИЯ
                </Link>
                <ul>
                  <li>
                    <p className="main-description">
                      Детальное проектирование подстанций и линий
                      электропередачи
                    </p>
                    <p className="main-description">
                      Адаптация и поддержка дизайна
                    </p>
                  </li>
                </ul>
              </li>
              <li className="home-page__section2-task">
                <Link to="#" p className="home-page__section2-work">
                  03. НАДЗОР ЗА ОБЪЕКТОМ
                </Link>
                <ul>
                  <li>
                    <p className="main-description">
                      Проектирование/надзор за строительством
                    </p>
                    <p className="main-description">
                      Услуги инженера-заказчика
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="home-page__section3">
        <div className="container">
          <div className="home-page__section3-images">
            <img src={areasImg1} alt="" />
            <img src={areasImg2} alt="" />
            <img src={areasImg3} alt="" />
            <img src={areasImg4} alt="" />
          </div>
          <div className="home-page__section3-content">
            <h3 className="main-title"><span>ОБЛАСТИ,</span>КОТОРЫЕ МЫ ОБСЛУЖИВАЕМ</h3>
            <ul className="home-page__section3-list">
              <li><button className="home-page__section3-btn">станции повышеения уровня</button></li>
              <li><button className="home-page__section3-btn">СТАНЦИИ ПОНИЖЕНИЯ УРОВНЯ</button></li>
              <li><button className="home-page__section3-btn">Воздушные и кабельные линии электропередачи</button></li>
              <li><button className="home-page__section3-btn">ВОЗОБНОВЛЯЕМЫЕ ЭЛЕКТРОСТАНЦИИ</button></li>
              <li><button className="home-page__section3-btn">ТЭС (тепловая электростанция)</button></li>
              <li><button className="home-page__section3-btn">BESS (система хранения энергии в аккумуляторах)</button></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="home-page__section4">
        <img
          className="home-page__section4-backround"
          src={homeBanner}
          alt=""
        />
        <div className="container">
          <div className="home-page__section4-content">
            <p className="home-page__section4-subtitle">
              Ваш помощник в области Энергетики
            </p>
            <h2 className="home-page__section4-title">
              Акционерное общество АО «O`ZENERGOINJINIRING»
            </h2>
            <p className="home-page__section4-description">
              АО «O`ZENERGOINJINIRING» является специализированной организацией
              по проектированию объектов электроснабжения и электрификации всех
              потребителей, расположенных в сельской местности, городах и
              райцентрах, включая малые и средние предприятия, объекты водного
              хозяйства и коммунальные комплексы, находящиеся на территории
              Республики Узбекистан.
            </p>
          </div>
          <div className="home-page__section4-cards">
            <div className="home-page__section4-card">
              <img src={persons} alt="" />
              <h3>Участие</h3>
              <p>
                участие в разработке и реализации основ национальных и
                отраслевых программ, директивных правительственных документов,
                определяющих развитие электрических сетей Республики Узбекистан
                Прогнозирование
              </p>
            </div>
            <div className="home-page__section4-card">
              <img src={statistics} alt="" />
              <h3>Прогнозирование</h3>
              <p>
                прогнозирование и оптимизация энергобалансов отраслей экономики
              </p>
            </div>
            <div className="home-page__section4-card">
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
      <section className="home-page__section5">
        <div className="container">
          <h3 className="home-page__section5-title">
            Новости АО "Узэнергоинжиниринг"
          </h3>
          <div className="home-page__section5-news">
            <div className="home-page__section5-card">
              <img src={news} alt="" />
              <div className="home-page__section5-content">
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
            <div className="home-page__section5-card">
              <img src={news} alt="" />
              <div className="home-page__section5-content">
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
            <div className="home-page__section5-card">
              <img src={news} alt="" />
              <div className="home-page__section5-content">
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
      <section className="home-page__section6">
        <div className="container">
          <div className="home-page__section6-content">
            <h3 className="main-title">
              Почему выбирают <span>нас?</span>
            </h3>
            <p className="main-subtitle">
              Обладая более чем 65-летним опытом, мы всегда выполняем свои
              обещания.
            </p>
            <ul className="home-page__section6-list">
              <li>
                <img src={checkmark} alt="" />
                <p className="main-subtitle">
                  Мы обладаем обширным опытом успешной реализации проектов,
                  подкрепленным глубокими экспертными знаниями.
                </p>
              </li>
              <li>
                <img src={checkmark} alt="" />
                <p className="main-subtitle">
                  У нас большая команда квалифицированных специалистов с
                  разнообразным опытом в области инженерии и консалтинга.
                </p>
              </li>
              <li>
                <img src={checkmark} alt="" />
                <p className="main-subtitle">
                  В своих проектах мы используем передовые технологии и
                  современные решения.
                </p>
              </li>
              <li>
                <img src={checkmark} alt="" />
                <p className="main-subtitle">
                  Мы поддерживаем доверительные отношения с государственными
                  экспертными органами, основанные на многолетней качественной
                  работе.
                </p>
              </li>
              <li>
                <img src={checkmark} alt="" />
                <p className="main-subtitle">
                  Мы сотрудничаем с ведущими международными партнерами.
                </p>
              </li>
            </ul>
          </div>
          <img src={adventages} alt="" className="home-page__section6-adv" />
        </div>
      </section>
      <section className="home-page__section7">
        <div className="container">
          <h3 className="home-page__section7-title">НАШИ ПРЕИМУЩЕСТВА</h3>
          <div className="home-page__section7-content">
            <div className="home-page__section7-card">
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
            <div className="home-page__section7-card">
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
            <div className="home-page__section7-card">
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
            <div className="home-page__section7-card">
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
      <section className="home-page__section8">
        <h3 className="home-page__section8-title">
          Наши лицензии и сертификаты
        </h3>
        <div className="home-page__section8-content">
          <div
            className="home-page__section8-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src={licenziya} alt="" />
            <button type="submit" onClick={() => openModal()}>
              +
            </button>
          </div>
          {modal && <LicenzModal img={licenziya} close={closeModal} />}
        </div>
      </section>
    </div>
  );
};

export default Home;
