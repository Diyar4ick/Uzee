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
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import MainBanner from "../Banners/MainBanner";

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
                <li><NavLink to="/projects">Проекты </NavLink></li>
                <li><NavLink to="/tenders">Конкурсы и закупки </NavLink></li>
              </ul>
              )}
            </li>
            <li className="header__nav-item" onClick={() => toggleMenu('law')}>
              <button type="submit">Опыт и компетенции ▾</button>
              {activeMenu === 'law' && (
                <ul className="header__nav-dropdown">
                  <p> - Раскрытие информации</p> 
                <li><NavLink to="/exp">Опыт и компетенции </NavLink></li>
                <li><NavLink to="/corp-manage">Корпоративное управление</NavLink></li>
                <li><NavLink to="/significant-facts">Существенные факты</NavLink></li>
                <li><NavLink to="/reports">Годовые и квартальные отчеты</NavLink></li>
                <li><NavLink to="/FXD-table">Сравнительная таблица ФХД</NavLink></li>
                <li><NavLink to="/faces">Список аффилированных лиц</NavLink></li>
                <li><NavLink to="/stratagy">СТРАТЕГИЯ РАЗВИТИЯ ОБЩЕСТВА</NavLink></li>
                <li><NavLink to="/business-plan">БИЗНЕС ПЛАНЫ ОБЩЕСТВА </NavLink></li>
                <li><NavLink to="/prospect">Проспект эмиссии </NavLink></li>
                <li><NavLink to="/autdit-conclusion">АУДИТОРСКИЕ ЗАКЛЮЧЕНИЯ МСФО </NavLink></li>
                  <p> - АКЦИОНЕРАМ</p>
                <li><NavLink to="/divident-info">Информация о дивидендах </NavLink></li>
                <li><NavLink to="/business-plan-doing">Выполнение бизнес плана </NavLink></li>
                <li><NavLink to="/voting-results">Итоги голосования ОСА </NavLink></li>
                <li><NavLink to="/budget-distribution">Предлагаемое распределение чистой прибыли </NavLink></li>
              </ul>
              )}
            </li> 
            <li className="header__nav-item" onClick={() => toggleMenu('service')}>
              <button type="submit">Почему выбирают нас ▾</button>
              {activeMenu === 'service' && (
                <ul className="header__nav-dropdown">
                <li><NavLink to="/adv">Почему выбирают нас </NavLink></li>
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

      {/* <MainBanner/> */}
    </header>
  );
};

export default Header;
