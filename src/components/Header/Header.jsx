import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import vk from "../../assets/images/vk.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import youtube from "../../assets/images/youtube.svg";
import search from "../../assets/images/search.svg";
import logo from "../../assets/images/logo.png";
import banner from "../../assets/images/banner.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = useState("");

  const pageChange = (e) => {
    const value = e.target.value;
    setSelectedPage("");
    if (value !== "") {
      navigate(value);
    }
  };

  const [burger, setBurger] = useState(false)

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
          <ul className={`header__nav-list ${burger ? 'active' : ''}`}>
            <li className="header__nav-item">
              <select
                className="header_nav-select"
                onChange={pageChange}
                value={selectedPage}
              >
                <option value="" disabled hidden>
                  Об организации ▾
                </option>
                <option value="/">Об организации</option>
                <option value="/">История общества</option>
                <option value="/">Деятельность общества</option>
                <option value="/">Структура общества</option>
                <option value="/">Руководство</option>
                <option value="/">Отделы и филиалы</option>
                <option value="/">Вакансии</option>
                <option value="/">Лицензии и сертификаты</option>
                <option value="/">Проекты</option>
                <option value="/">Публичные мероприятия,</option>
                <option value="/">организованные обществом</option>
                <option value="/">Проводимые конкурсы (тендеры)</option>
                <option value="/">
                  Перечень продукции работ и услуг, и сведения о них
                </option>
              </select>
            </li>
            <li className="header__nav-item">
              <select onChange={pageChange} value={selectedPage}>
                <option value="" disabled hidden>
                  Корпоративное управление ▾
                </option>
                <option value="/">Text</option>
                <option value="/">Text</option>
                <option value="/">Text</option>
              </select>
            </li>
            <li className="header__nav-item">
              <select onChange={pageChange} value={selectedPage}>
                <option value="" disabled hidden>
                  Законодательство ▾
                </option>
                <option value="/">Text</option>
                <option value="/">Text</option>
                <option value="/">Text</option>
                <option value="/">Text</option>
              </select>
            </li>
            <li className="header__nav-item">
              <select onChange={pageChange} value={selectedPage}>
                <option value="" disabled hidden>
                  Интерактивные услуги ▾
                </option>
                <option value="/">Text</option>
                <option value="/">Text</option>
                <option value="/">Text</option>
              </select>
            </li>

            <li className="header__nav-item">
              <NavLink to="/contacts">Контакты</NavLink>
            </li>

          </ul>
            <div className={`burger ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
      </div>
      <div className="header__banner">
        <div className="header__banner-first">
        <img src={banner} alt="" className="header__banner-img" />
        <div className="header__banner-black">
        <div className="container">
          <h1>Проектирование воздушных и кабельных линий напряжением до 500кВ <span>UZEE</span></h1>
        </div>

        </div>
        </div>
        <div className="header__banner-second">
          <div className="container">

          <p>
            <span className="header__banner-second-span1">
              <span className="header__banner-second-span2">30</span> 
              <span className="header__banner-second-span3">
                <span className="header__banner-second-span4">лет</span> успешной работы
              </span>
            
            </span>
            Электрическая подстанция – это установка, которая служит для преобразования и распределение энергии. В ее составе выделяют следующие конструктивные части: трансформаторы, распределительные устройства повышенного и пониженного напряжения, и вспомогательные устройства.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
