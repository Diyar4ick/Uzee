import facebook from "../../assets/images/generalIcons/facebook.svg";
import instagram from "../../assets/images/generalIcons/instagram.svg";
import twitter from "../../assets/images/generalIcons/twitter.svg";
import vk from "../../assets/images/generalIcons/vk.svg";
import whatsapp from "../../assets/images/generalIcons/whatsapp.svg";
import youtube from "../../assets/images/generalIcons/youtube.svg";
import search from "../../assets/images/generalIcons/search.svg";
import logo from "../../assets/images/logo.png";
// import banner from "../../assets/images/banner.png";
// import banner2 from "../../assets/images/banner-2.jpg";
import bannerVideo from '../../assets/videos/bannerVideo.MP4'
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // const bannerImages = [
  //   banner,
  //   banner2,

  // ]
  // const [index, setIndex] = useState(0)
  const [activeMenu, setActiveMenu] = useState('');
  const [burger, setBurger] = useState(false);

  //  useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex(prev => (prev + 1) % bannerImages.length); 
  //   }, 10000); // 2000 мс = 2 секунды

  //   return () => clearInterval(timer); // очистка таймера
  // }, []);

  const toggleMenu = (name) => {
    setActiveMenu(activeMenu === name ? null : name);
  };
  

  return (
    <header className="header">
      <div className="header__promo">
        <div className="container">
          <div className="header__promo-media">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={vk} alt="" />
            <img src={whatsapp} alt="" />
            <img src={youtube} alt="" />
          </div>
          <div className="header__promo-address">
            <p className="header__promo-text">
              <span>Наш адрес:</span> 100076, г. Ташкент ул.М.Ашрафи 1 пер.,дом
              9
            </p>
            <p className="header__promo-text">
              <span>Тел:</span>+998 555200404 <span>Электронная почта:</span>{" "}
              info@uzee.uz
            </p>
          </div>
          <div className="header__promo-search">
            <input type="text" placeholder="Поиск" />
            <button type="submit">
              <img src={search} alt="" />
            </button>
          </div>
          <div className="header__promo-languages">
            <img src="" alt="RU" />
            <img src="" alt="EN" />
            <img src="" alt="UZ" />
          </div>
        </div>
      </div>
      <div className="header__nav">
        <div className="container">
          <NavLink to="/">
            <img src={logo} alt="" className="logo" />
          </NavLink>
          <ul className={`header__nav-list ${burger ? "active" : ""}`}>
            <li className="header__nav-item" onClick={() => toggleMenu('about')}>
              <button type="submit">Об организации ▾</button> 
              {activeMenu === 'about' && (
                <ul className="header__nav-dropdown">
                <li><NavLink to="/">Об организации </NavLink></li>
                <li><NavLink to="/history">История</NavLink></li>
                <li><NavLink to="/structure">Структура общества</NavLink></li>
                <li><NavLink to="/management">Руководство</NavLink></li>
                <li><NavLink to="/vacancies">Вакансии</NavLink></li>
                <li><NavLink to="/public-events">Публичные мероприятия, организованные обществом</NavLink></li>
              </ul>
              )}
            </li>
            <li className="header__nav-item" onClick={() => toggleMenu('corpotation')}>
              <button type="submit">Деятельность ▾</button>
              {activeMenu === 'corpotation' && (
                <ul className="header__nav-dropdown">
                <li><NavLink to="/activity">Услуги </NavLink></li>
                <li><a href="#">Text </a></li>
                <li><a href="#">Text </a></li>
                <li><a href="#">Text </a></li>
              </ul>
              )}
            </li>
            <li className="header__nav-item" onClick={() => toggleMenu('law')}>
              <button type="submit">Опыт и компетенции ▾</button>
              {activeMenu === 'law' && (
                <ul className="header__nav-dropdown">
                <li><NavLink to="/exp">Опыт и компетенции </NavLink></li>
                <li><a href="#">Text </a></li>
                <li><a href="#">Text </a></li>
                <li><a href="#">Text </a></li>
              </ul>
              )}
            </li>
            <li className="header__nav-item" onClick={() => toggleMenu('service')}>
              <button type="submit">Почему выбирают нас ▾</button>
              {activeMenu === 'service' && (
                <ul className="header__nav-dropdown">
                <li><NavLink to="/adv">Почему выбирают нас </NavLink></li>
                <li><a href="#">Text </a></li>
                <li><a href="#">Text </a></li>
                <li><a href="#">Text </a></li>
              </ul>
              )}
            </li>
            <li className="header__nav-item">
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
          </ul>
          <div
            className={`burger ${burger ? "active" : ""}`}
            onClick={() => setBurger(!burger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="header__banner">
        <div className="header__banner-first">
          {/* <img src={bannerImages[index]} alt="" className="header__banner-img" /> */}
          <video className="header__banner-video" src={bannerVideo} autoPlay loop muted playsInline></video>
          <div className="header__banner-black">
            <div className="container">
              <h1>
                Проектирование воздушных и кабельных линий напряжением до 500кВ{" "}
                <span>UZEE</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="header__banner-second">
          <div className="container">
            <p>
              <span className="header__banner-second-span1">
                <span className="header__banner-second-span2">70</span>
                <span className="header__banner-second-span3">
                  <span className="header__banner-second-span4">лет</span>{" "}
                  успешной работы
                </span>
              </span>
              Электрическая подстанция – это установка, которая служит для
              преобразования и распределение энергии. В ее составе выделяют
              следующие конструктивные части: трансформаторы, распределительные
              устройства повышенного и пониженного напряжения, и вспомогательные
              устройства.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
