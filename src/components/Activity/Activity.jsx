import { Link } from "react-router-dom";
import activitySection1 from "../../assets/images/homePages/homePageSection2.jpg";

import areasImg1 from "../../assets/images/homePages/homePageSection3-1.jpg";
import areasImg2 from "../../assets/images/homePages/homePageSection3-2.jpg";
import areasImg3 from "../../assets/images/homePages/homePageSection3-3.jpg";
import areasImg4 from "../../assets/images/homePages/homePageSection3-4.jpg";

import companyIcon1 from "../../assets/images/companyIcons/company-icon1.jpg";
import companyIcon2 from "../../assets/images/companyIcons/company-icon2.jpg";
import companyIcon3 from "../../assets/images/companyIcons/company-icon3.jpg";
import companyIcon4 from "../../assets/images/companyIcons/company-icon4.jpg";
import companyIcon5 from "../../assets/images/companyIcons/company-icon5.jpg";
import companyIcon6 from "../../assets/images/companyIcons/company-icon6.jpg";
import companyIcon7 from "../../assets/images/companyIcons/company-icon7.jpg";
import companyIcon8 from "../../assets/images/companyIcons/company-icon8.jpg";
import companyIcon9 from "../../assets/images/companyIcons/company-icon9.jpg";
import companyIcon10 from "../../assets/images/companyIcons/company-icon10.jpg";
import companyIcon11 from "../../assets/images/companyIcons/company-icon11.jpg";
import companyBanner from "../../assets/images/companyIcons/company-banner.jpg";

import logo2 from "../../assets/images/logo2.jpg";


const Activity = () => {
  return (
    <div className="activity-page">
      <section className="activity-page__section1">
        <div className="container">
          <img src={activitySection1} alt="" className="" />
          <div className="activity-page__section1-content">
            <h3 className="main-title">
              Что мы <span>делаем?</span>
            </h3>
            <p className="main-subtitle">
              Мы предлагаем полный спектр инженерных и технических
              консультационных услуг в области энергетики, охватывающих все
              этапы проекта.
            </p>
            <ul className="activity-page__section1-worklist">
              <li className="activity-page__section1-task">
                <Link to="/service-1" className="activity-page__section1-work">
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
              <li className="activity-page__section1-task">
                <Link to="/service-2" className="activity-page__section1-work">
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
              <li className="activity-page__section1-task">
                <Link
                  to="/service-3"
                  p
                  className="activity-page__section1-work"
                >
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
      <section className="activity-page__section2">
        <div className="container">
          <div className="activity-page__section2-images">
            <img src={areasImg1} alt="" />
            <img src={areasImg2} alt="" />
            <img src={areasImg3} alt="" />
            <img src={areasImg4} alt="" />
          </div>
          <div className="activity-page__section2-content">
            <h3 className="main-title">
              СФЕРЫ<span> В КОТОРЫХ МЫ РАБОТАЕМ</span>
            </h3>
            <ul className="activity-page__section2-list">
              <li>
                <button className="activity-page__section2-btn">
                  подстанции повышающего типа
                </button>
              </li>
              <li>
                <button className="activity-page__section2-btn">
                  подстанции понижающего типа
                </button>
              </li>
              <li>
                <button className="activity-page__section2-btn">
                  Воздушные и кабельные линии передачи
                </button>
              </li>
              <li>
                <button className="activity-page__section2-btn">
                  {" "}
                  ЭЛЕКТРОСТАНЦИИ на основе ВОЗОБНОВЛЯЕМЫх источников энергии
                </button>
              </li>
              <li>
                <button className="activity-page__section2-btn">
                  ТЭС (тепловая электростанция)
                </button>
              </li>
              <li>
                <button className="activity-page__section2-btn">
                  АСХЭ (Аккумуляторные станции хранения энергии)
                </button>
              </li>
              <li>
                <button className="activity-page__section2-btn">
                  ФЭС (Фотоэлектростанции)
                </button>
              </li>
              <li>
                <button className="activity-page__section2-btn">
                  ВЭС (ветряные электростанции)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="activity-page__section3">
        <div className="activity-page__section3-nav">
          <h3 className="main-title">
            ПРОЕКТНОЕ <span>ДИЗАЙНИРОВАНИЕ</span>
          </h3>
          <img src={logo2} alt="" className="logo-2" />
        </div>
        <img
          src={companyBanner}
          alt=""
          className="activity-page__section3-banner"
        />
        <div className="container">
          <div className="activity-page__section3-content">
            <div className="activity-page__section3-card">
              <p>Модернизация 8 подстанций 110 кВ-35 (CHINT)</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon1} alt="" />
                <img src={companyIcon10} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>Строительство новой подстанции 220/35 кВ «Янги-Ташкент-1»</p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon6} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                МОДЕРНИЗАЦИЯ подстанций в соответствии с ПП 91 от 11.03.2023 и
                DCM 259 от 26.
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon8} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                МОДЕРНИЗАЦИЯ ПОДСТАНЦИЙ 35КВ–110КВ И ВОЗДУШНЫХ ЛИНИЙ
                ЭЛЕКТРОПЕРЕДАЧ ПОД УПРАВЛЕНИЕМ ПК В 2025–2026 ГОДАХ
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon8} alt="" />
                <img src={companyIcon9} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                Строительство солнечной фотоэлектрической электростанции Tutli-2
                мощностью 65 МВт
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon2} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                Строительство солнечной фотоэлектрической электростанции Tutli-2
                мощностью 65 МВт
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon3} alt="" />
                <img src={companyIcon4} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                «Строительство аккумулирующей электростанции Сергели мощностью
                150 МВт / 300 МВтч с реконструкцией наружного распределительного
                устройства 220/110 кВ подстанции Сергели»
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon11} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                Строительство гибридной электростанции в Navoi (300 МВт СЭС, 150
                МВт/300 БЭСС)
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon7} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                ТЭО проекта «Строительство подстанции 500 кВ Кольцевая и двух
                воздушных линий электропередачи 500 кВ (LILO)»
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon9} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                Строительство парогазовой электростанции мощностью 1600 МВт в
                Сурхандарьинской области. Подстанция 500/220/10,5 кВ.
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon5} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                Строительство системы хранения энергии Adolat & Chirchiq
                мощностью 100 МВт/200 МВтч
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon7} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                Строительство системы хранения энергии Adolat & Chirchiq
                мощностью 100 МВт/200 МВтч
              </p>
            </div>
            <div className="activity-page__section3-card">
              <p>
                Строительство систем накопления энергии Ahangaran, Kizilravat,
                Obi Hayot и Hakan мощностью 100 МВт/200 МВтч каждая
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon7} alt="" />
              </div>
            </div>
            <div className="activity-page__section3-card">
              <p>
                ТЭО проекта «Воздушная линия электропередачи 500 кВ от
                подстанции Каракуль 500/220/10 кВ до подстанции Нурабад
                500/220/10 кВ»
              </p>
              <div className="activity-page__section3-logos">
                <img src={companyIcon9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activity;
