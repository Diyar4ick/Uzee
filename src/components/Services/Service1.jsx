import greet from "../../assets/images/serviceImages/service-1-img.jpg";
import icon1 from "../../assets/images/serviceImages/service-icon1.jpg";
import icon2 from "../../assets/images/serviceImages/service-icon2.jpg";
import icon3 from "../../assets/images/serviceImages/service-icon3.jpg";
import icon4 from "../../assets/images/serviceImages/service-icon4.jpg";
import icon5 from "../../assets/images/serviceImages/service-icon5.jpg";

const Service1 = () => {
  return (
    <div className="service-1">
      <div className="container">
        <div className="service-1__greet">
          <h3 className="main-title">
            Наши <span>услуги</span>
          </h3>
          <h4 className="service-1__title">
            01. ПРЕДВАРИТЕЛЬНЫЕ ПРОЕКТНЫЕ ИССЛЕДОВАНИЯ
          </h4>
          <img src={greet} alt="" className="service-1__greet-img" />
          <span className="service-1__greet-subtitle">UZEE C 1956 года</span>
        </div>
        <div className="service-1__content">
          <div className="service-1__card">
            <img src={icon1} alt="" />
            <h4>Исследования по соединению сетей</h4>
            <ul>
              <li>
                <p className="">Анализ потока нагрузки</p>
              </li>
              <li>
                <p className="">Соответствие сетевому кодексу</p>
              </li>
              <li>
                <p className="">Анализ стабильности</p>
              </li>
            </ul>
          </div>
          <div className="service-1__card">
            <img src={icon3} alt="" />
            <h4>
              ТЕХНИКО-ЭКОНОМИЧЕСКОЕ ОБОСНОВАНИЕ И ПРЕДВАРИТЕЛЬНОЕ ПРОЕКТИРОВАНИЕ
            </h4>
            <ul>
              <li>
                <p className="">Техническая экспертиза</p>
              </li>
              <li>
                <p className="">Технико-экономическое обоснование</p>
              </li>
              <li>
                <p className="">
                  (требования национальных органов и международных финансовых
                  институтов)
                </p>
              </li>
              <li>
                <p className="">Базовые проектные исследования</p>
              </li>
              <li>
                <p className="">
                  Выбор технологии и определение ключевых параметров
                </p>
              </li>
              <li>
                <p className="">
                  Выбор трассы и получение разрешений на прокладку воздушных и
                  кабельных линий электропередачи
                </p>
              </li>
              <li>
                <p className="">
                  Базовый ведомость объёмов работ и смета расходов
                </p>
              </li>
              <li>
                <p className="">Подготовка и оценка тендерных предложений</p>
              </li>
            </ul>
          </div>
          <div className="service-1__card">
            <img src={icon2} alt="" />
            <h4>ОЦЕНКА ВОЗДЕЙСТВИЯ НА ОКРУЖАЮЩУЮ СРЕДУ</h4>
            <ul>
              <li>
                <p className="">
                  Оценки воздействия на местную окружающую среду
                </p>
              </li>
              <li>
                <p className="">
                  Международные оценки воздействия на окружающую среду и
                  социальную сферу
                </p>
              </li>
            </ul>
          </div>
          <div className="service-1__card">
            <img src={icon4} alt="" />
            <h4>ОБСЛЕДОВАНИЕ МЕСТОНАХОЖДЕНИЯ</h4>
            <ul>
              <li>
                <p className="">Топографическая съёмка</p>
              </li>
              <li>
                <p className="">Геотехническая съёмка</p>
              </li>
              <li>
                <p className="">Гидрометеорологическая съёмка</p>
              </li>
            </ul>
          </div>
          <div className="service-1__card">
            <img src={icon5} alt="" />
            <h4>АККРЕДИТОВАННАЯ ГЕОТЕХНИЧЕСКАЯ ЛАБОРАТОРИЯ</h4>
            <ul>
              <li>
                <p className="">Механические испытания грунта</p>
              </li>
              <li>
                <p className="">Свойства грунта/горных пород</p>
              </li>
              <li>
                <p className="">Химические испытания</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1;
