import homePageIconImg from "../../assets/images/iconBanner-left.svg";
import homePageIconImg2 from "../../assets/images/iconBanner-right.svg";
import persons from "../../assets/images/person-2.svg";
import statistics from "../../assets/images/statistics.svg";
import lamp from "../../assets/images/lamp.svg";
import news from "../../assets/images/news-img.jpg";
import boxes from "../../assets/images/boxes.svg";
import { useState } from "react";
import LicenzModal from "../LicenzModal/LicenzModal";
import homeBanner from "../../assets/images/homePageBanner.jpg";
import homeSection2 from "../../assets/images/homePageSection2.jpg";
// import checkmark from "../../assets/images/checkmark.svg";
// import adventages from "../../assets/images/company-advantages.jpg";
import areasImg1 from "../../assets/images/homePageSection3-1.jpg";
import areasImg2 from "../../assets/images/homePageSection3-2.jpg";
import areasImg3 from "../../assets/images/homePageSection3-3.jpg";
import areasImg4 from "../../assets/images/homePageSection3-4.jpg";

import arrowYel from "../../assets/images/arrow-yellow.svg";
import arrowBlue from "../../assets/images/arrow-blue.svg";
import arrowGreen from "../../assets/images/arrow-green.svg";

import expImg1 from "../../assets/images/expImg1.jpg";
import expImg2 from "../../assets/images/expImg2.jpg";

import icon from "../../assets/images/service-icon10.jpg";

import map from "../../assets/images/uzbMap.png";
import cyrcle from "../../assets/images/cyrcle.svg";

import sertIcon from "../../assets/images/service-icon11.jpg";

import sert1 from "../../assets/images/sert1.jpg";
import sert2 from "../../assets/images/sert2.jpg";
import sert22 from "../../assets/images/sert2-2.jpg";
import sert3 from "../../assets/images/sert3.jpg";
// import sert32 from "../../assets/images/sert3-2.jpg";
import sert4 from "../../assets/images/sert4.jpg";
// import sert42 from "../../assets/images/sert4-2.jpg";
import sert5 from "../../assets/images/sert5.jpg";
import sert52 from "../../assets/images/sert5-2.jpg";
import sert6 from "../../assets/images/sert6.jpg";

import logo2 from "../../assets/images/logo2.jpg";

import companyIcon1 from "../../assets/images/company-icon1.jpg";
import companyIcon2 from "../../assets/images/company-icon2.jpg";
import companyIcon3 from "../../assets/images/company-icon3.jpg";
import companyIcon4 from "../../assets/images/company-icon4.jpg";
import companyIcon5 from "../../assets/images/company-icon5.jpg";
import companyIcon6 from "../../assets/images/company-icon6.jpg";
import companyIcon7 from "../../assets/images/company-icon7.jpg";
import companyIcon8 from "../../assets/images/company-icon8.jpg";
import companyIcon9 from "../../assets/images/company-icon9.jpg";
import companyIcon10 from "../../assets/images/company-icon10.jpg";
import companyIcon11 from "../../assets/images/company-icon11.jpg";
import companyBanner from '../../assets/images/company-banner.jpg'

import { Link } from "react-router-dom";

const Home = () => {
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
          <div className="home-page__section2-content">
            <h3 className="main-title">
              МИССИЯ <span>КОМПАНИИ</span>
            </h3>
            <p className="home-page__section2-subtitle main-subtitle">
              Наша миссия — предоставлять нашим клиентам высококачественные и
              надежные услуги, постоянно совершенствуя наши подходы и
              технологии. Мы стремимся оставаться надежным партнером для
              существующих клиентов и привлекать новых благодаря нашей
              приверженности к совершенству и инновациям.
            </p>
          </div>
        </div>
        <img src={homePageIconImg2} alt="" className="iconBannerImg" />
      </section>
      <section className="home-page__section3">
        <div className="container">
          <img src={homeSection2} alt="" className="" />
          <div className="home-page__section3-content">
            <h3 className="main-title">
              Что мы <span>делаем?</span>
            </h3>
            <p className="main-subtitle">
              Мы предлагаем полный спектр инженерных и технических
              консультационных услуг в области энергетики, охватывающих все
              этапы проекта.
            </p>
            <ul className="home-page__section3-worklist">
              <li className="home-page__section3-task">
                <Link to="/service-1" className="home-page__section3-work">
                  01. ПРЕДВАРИТЕЛЬНЫЕ ПРОЕКТНЫЕ ИССЛЕДОВАНИЯ
                </Link>
                <ul>
                  <li>
                    <span className="main-description">
                      Исследования по подключению к энергосистеме
                    </span>
                  </li>
                  <li>
                    <span className="main-description">
                      Выбор и утверждение маршрутов
                    </span>
                  </li>
                  <li>
                    <span className="main-description">
                      Оценка воздействия на окружающую среду и социальную сферу
                    </span>
                  </li>
                  <li>
                    <span className="main-description">
                      Инженерные изыскания
                    </span>
                  </li>
                  <li>
                    <span className="main-description">
                      Технико-экономическое обоснование, базовый проект и
                      тендерная документация.
                    </span>
                  </li>
                </ul>
              </li>
              <li className="home-page__section3-task">
                <Link to="/service-2" className="home-page__section3-work">
                  02. ДЕТАЛЬНЫЕ ПРОЕКТНЫЕ РАБОТЫ
                </Link>
                <ul>
                  <li>
                    <span className="main-description">
                      Детальное проектирование подстанций и линий
                      электропередачи
                    </span>
                    <span className="main-description">
                      Адаптация и поддержка дизайна
                    </span>
                  </li>
                </ul>
              </li>
              <li className="home-page__section3-task">
                <Link to="/service-3" p className="home-page__section3-work">
                  03. НАДЗОР ЗА СТРОИТЕЛЬСТВОМ
                </Link>
                <ul>
                  <li>
                    <span className="main-description">
                      Проектирование/надзор за строительством
                    </span>
                    <span className="main-description">
                      Услуги инженера-заказчика
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="home-page__section4">
        <div className="container">
          <div className="home-page__section4-images">
            <img src={areasImg1} alt="" />
            <img src={areasImg2} alt="" />
            <img src={areasImg3} alt="" />
            <img src={areasImg4} alt="" />
          </div>
          <div className="home-page__section4-content">
            <h3 className="main-title">
              СФЕРЫ<span> В КОТОРЫХ МЫ РАБОТАЕМ</span>
            </h3>
            <ul className="home-page__section4-list">
              <li>
                <button className="home-page__section4-btn">
                  подстанции повышающего типа
                </button>
              </li>
              <li>
                <button className="home-page__section4-btn">
                  подстанции понижающего типа
                </button>
              </li>
              <li>
                <button className="home-page__section4-btn">
                  Воздушные и кабельные линии передачи
                </button>
              </li>
              <li>
                <button className="home-page__section4-btn">
                  {" "}
                  ЭЛЕКТРОСТАНЦИИ на основе ВОЗОБНОВЛЯЕМЫх источников энергии
                </button>
              </li>
              <li>
                <button className="home-page__section4-btn">
                  ТЭС (тепловая электростанция)
                </button>
              </li>
              <li>
                <button className="home-page__section4-btn">
                  АСХЭ (Аккумуляторные станции хранения энергии)
                </button>
              </li>
              <li>
                <button className="home-page__section4-btn">
                  ФЭС (Фотоэлектростанции)
                </button>
              </li>
              <li>
                <button className="home-page__section4-btn">
                  ВЭС (ветряные электростанции)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="home-page__section5">
        <img src={homePageIconImg} alt="" className="iconBannerImg" />
        <div className="container">
          <h3 className="main-title">
            Наша <span>ИСТОРИЧЕСКАЯ ХРОНОЛОГИЯ</span>
          </h3>
          <div className="home-page__section5-timeline">
            <div className="home-page__section5-box">
              <span className="home-page__section5-box-img">
                <div class="home-page__section5-time">
                  <img src={arrowYel} alt="" />
                  <p>1956</p>
                </div>
                <div class="home-page__section5-time">
                  <img src={arrowYel} alt="" />
                  <p>1990</p>
                </div>
              </span>
              <div className="home-page__section5-box-content">
                <p>
                  <span className="bold">1956 г.</span> — основан как инженерная
                  база для распределительных сетей в Центральной Азии.
                  <span className="enter"></span>
                  <span className="bold">1990-е годы</span> — расширение услуг
                  для передающих сетей до 500 кВ.
                </p>
              </div>
            </div>
            <div className="home-page__section5-box">
              <span className="home-page__section5-box-img">
                <div class="home-page__section5-time">
                  <img src={arrowYel} alt="" />
                  <p>1992</p>
                </div>
                <div class="home-page__section5-time">
                  <img src={arrowYel} alt="" />
                  <p>2002</p>
                </div>
              </span>
              <div className="home-page__section5-box-content">
                <p>
                  <span className="bold">1992 г.</span> — вошла в состав
                  Министерства энергетики Узбекистана.
                  <span className="enter"></span>
                  <span className="bold">2002 г.</span> — преобразовано в
                  акционерное общество.
                </p>
              </div>
            </div>
            <div className="home-page__section5-box">
              <span className="home-page__section5-box-img">
                <div class="home-page__section5-time">
                  <img src={arrowBlue} alt="" />
                  <p>2019</p>
                </div>
                <div class="home-page__section5-time">
                  <img src={arrowGreen} alt="" />
                  <p>Now</p>
                </div>
              </span>
              <div className="home-page__section5-box-content">
                <p>
                  <span className="bold">2019 г.</span> — переименовано в
                  «Узенергоинженеринг» указом Президента Узбекистана.
                  <span className="enter"></span>
                  <span className="bold">С 2024 года</span> — входит в состав
                  UET Group, крупной промышленной группы в Узбекистане.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page__section6">
        <img
          className="home-page__section6-backround"
          src={homeBanner}
          alt=""
        />
        <div className="container">
          <div className="home-page__section6-content">
            <p className="home-page__section6-subtitle">
              Ваш помощник в области Энергетики
            </p>
            <h2 className="home-page__section6-title">
              Акционерное общество АО «O`ZENERGOINJINIRING»
            </h2>
            <p className="home-page__section6-description">
              АО «O`ZENERGOINJINIRING» является специализированной организацией
              по проектированию объектов электроснабжения и электрификации всех
              потребителей, расположенных в сельской местности, городах и
              райцентрах, включая малые и средние предприятия, объекты водного
              хозяйства и коммунальные комплексы, находящиеся на территории
              Республики Узбекистан.
            </p>
          </div>
          <div className="home-page__section6-cards">
            <div className="home-page__section6-card">
              <img src={persons} alt="" />
              <h3>Участие</h3>
              <p>
                участие в разработке и реализации основ национальных и
                отраслевых программ, директивных правительственных документов,
                определяющих развитие электрических сетей Республики Узбекистан
                Прогнозирование
              </p>
            </div>
            <div className="home-page__section6-card">
              <img src={statistics} alt="" />
              <h3>Прогнозирование</h3>
              <p>
                прогнозирование и оптимизация энергобалансов отраслей экономики
              </p>
            </div>
            <div className="home-page__section6-card">
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
      <section className="home-page__section7">
        <div className="home-page__section7-nav">
          <h3 className="main-title">
            ПРОЕКТНОЕ <span>ДИЗАЙНИРОВАНИЕ</span>
          </h3>
          <img src={logo2} alt="" className="logo-2" />
        </div>
        <img src={companyBanner} alt="" className="home-page__section7-banner"/>
        <div className="container">
          <div className="home-page__section7-content">
            <div className="home-page__section7-card">
              <p>Модернизация 8 подстанций 110 кВ-35 (CHINT)</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon1} alt="" />
                <img src={companyIcon10} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>Строительство новой подстанции 220/35 кВ «Янги-Ташкент-1»</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon6} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>МОДЕРНИЗАЦИЯ подстанций в соответствии с ПП 91 от 11.03.2023 и DCM 259 от 26.</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon8} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>МОДЕРНИЗАЦИЯ ПОДСТАНЦИЙ 35КВ–110КВ И ВОЗДУШНЫХ ЛИНИЙ ЭЛЕКТРОПЕРЕДАЧ ПОД УПРАВЛЕНИЕМ ПК В 2025–2026 ГОДАХ</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon8} alt="" />
                <img src={companyIcon9} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>Строительство солнечной фотоэлектрической электростанции Tutli-2 мощностью 65 МВт</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon2} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>Строительство солнечной фотоэлектрической электростанции Tutli-2 мощностью 65 МВт</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon3} alt="" />
                <img src={companyIcon4} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>«Строительство аккумулирующей электростанции Сергели мощностью 150 МВт / 300 МВтч с реконструкцией наружного распределительного устройства 220/110 кВ подстанции Сергели»</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon11} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>Строительство гибридной электростанции в Navoi (300 МВт СЭС, 150 МВт/300 БЭСС)</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon7} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>ТЭО проекта «Строительство подстанции 500 кВ Кольцевая и двух воздушных линий электропередачи 500 кВ (LILO)»</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon9} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>Строительство парогазовой электростанции мощностью 1600 МВт в Сурхандарьинской области. Подстанция 500/220/10,5 кВ.</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon5} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>Строительство системы хранения энергии Adolat & Chirchiq мощностью 100 МВт/200 МВтч</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon7} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>Строительство системы хранения энергии Adolat & Chirchiq мощностью 100 МВт/200 МВтч</p>
            </div>
            <div className="home-page__section7-card">
              <p>Строительство систем накопления энергии Ahangaran, Kizilravat, Obi Hayot и Hakan мощностью 100 МВт/200 МВтч каждая</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon7} alt="" />
              </div>
            </div>
            <div className="home-page__section7-card">
              <p>ТЭО проекта «Воздушная линия электропередачи 500 кВ от подстанции Каракуль 500/220/10 кВ до подстанции Нурабад 500/220/10 кВ»</p>
              <div className="home-page__section7-logos">
                <img src={companyIcon9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page__section8">
        <div className="container">
          <h3 className="home-page__section8-title">
            Новости АО "Узэнергоинжиниринг"
          </h3>
          <div className="home-page__section8-news">
            <div className="home-page__section8-card">
              <img src={news} alt="" />
              <div className="home-page__section8-content">
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
            <div className="home-page__section8-card">
              <img src={news} alt="" />
              <div className="home-page__section8-content">
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
            <div className="home-page__section8-card">
              <img src={news} alt="" />
              <div className="home-page__section8-content">
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
      {/* <section className="home-page__section6">
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
      </section> */}
      <section className="home-page__section9">
        <div className="container">
          <h3 className="main-title">
            <span>НАШ</span> ОПЫТ И КОМПЕТЕНЦИЯ
          </h3>
          <div className="home-page__section9-content">
            <div className="home-page__section9-box">
              <img src={expImg1} alt="" />
              <p>АКТУАЛЬНАЯ И ТОЧНАЯ МОДЕЛЬ СЕТИ В DIGSILENT ®</p>
            </div>
            <div className="home-page__section9-box">
              <img src={expImg2} alt="" />
              <p>ЗНАНИЯ О СИСТЕМЕ ЭНЕРГЕТИКИ, ВКЛЮЧАЯ ЭЛЕКТРОСЕТИ</p>
            </div>
          </div>
          <div className="home-page__section9-footer">
            <img src={icon} alt="" />
            <p>UZEE С 1956 года</p>
          </div>
        </div>
      </section>
      <section className="home-page__section10">
        <img src={homePageIconImg} alt="" className="iconBannerImg" />
        <h3 className="main-title">
          Наш <span>опыт</span>
        </h3>
        <div className="home-page__section10-map">
          <img src={map} alt="" className="home-page__section10-map-img" />
          <div className="home-page__section10-map-cards">
            <div className="home-page__section10-map-amount1">
              <h5>
                <img src={cyrcle} alt="" />
                3123
              </h5>
              <p>Реализованные проекты 2019-2023</p>
            </div>
            <div className="home-page__section10-map-amount2">
              <h5>
                <img src={cyrcle} alt="" />
                72
              </h5>
              <p>Проекты в 2025 году</p>
            </div>
            <div className="home-page__section10-map-amount3">
              <h5>
                <img src={cyrcle} alt="" />7
              </h5>
              <p>Проекты в области возобновляемой энергетики в 2024 году</p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page__section11">
        <div className="container">
          <div className="home-page__section11-title">
            <h2>Почему выбирают нас?</h2>
          </div>
          <div className="home-page__section11-reasons">
            <div className="home-page__section11-reason">
              <span>1</span>
              <p>Большой опыт и успешные проекты</p>
            </div>
            <div className="home-page__section11-reason">
              <span>2</span>
              <p>Квалифицированная команда инженеро</p>
            </div>
            <div className="home-page__section11-reason">
              <span>3</span>
              <p>Передовые технологии</p>
            </div>
            <div className="home-page__section11-reason">
              <span>4</span>
              <p>
                Полный цикл проектных услуг — от концепции и
                технико-экономического обоснования до детальной документации и
                авторского надзора.
              </p>
            </div>
            <div className="home-page__section11-reason">
              <span>5</span>
              <p>
                Индивидуальные и экономически эффективные решения для клиентов
              </p>
            </div>
            <div className="home-page__section11-reason">
              <span>6</span>
              <p>Гарантированное качество и надежность</p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page__section12">
        <div className="container">
          <h3 className="home-page__section12-title">НАШИ ПРЕИМУЩЕСТВА</h3>
          <div className="home-page__section12-content">
            <div className="home-page__section12-card">
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
            <div className="home-page__section12-card">
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
            <div className="home-page__section12-card">
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
            <div className="home-page__section12-card">
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
      <section className="home-page__section13">
        <div className="container">
          <div className="home-page__section13-content">
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
              className="home-page__section13-img1"
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
    </div>
  );
};

export default Home;
