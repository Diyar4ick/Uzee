import greet from "../../assets/images/serviceImages/service-3-img.jpg";
import icon9 from "../../assets/images/serviceImages/service-icon9.jpg";
import icon8 from "../../assets/images/serviceImages/service-icon8.jpg";

const Service3 = () => {
  return (
    <div className="service-3">
      <div className="container">
        <div className="service-3__greet">
          <h3 className="main-title">
            Наши <span>услуги</span>
          </h3>
          <h4 className="service-3__title">03. НАДЗОР И ИНЖЕНЕРЫ ЗАКАЗЧИКА</h4>
          <img src={greet} alt="" className="service-3__greet-img" />
          <span className="service-3__greet-subtitle">UZEE C 1956 года</span>
        </div>
        <div className="service-3__content">
          <div className="service-3__card">
            <img src={icon9} alt="" />
            <h4>АВТОРСКИЙ НАДЗОР</h4>
            <ul>
              <li>
                <p> Координация для решения вопросов по проекту.</p>
              </li>
              <li>
                <p>
                  {" "}
                  Проверка соответствия проектной документации (чертежи,
                  спецификации, расчеты).
                </p>
              </li>
              <li>
                <p> Проверка соответствия нормам и стандартам.</p>
              </li>
              <li>
                <p>
                  {" "}
                  Проверка соответствия поставляемых материалов и оборудования
                  проектным спецификациям и требованиям к качеству.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Анализ запросов на изменение проекта, внесение изменений в
                  проект.
                </p>
              </li>
            </ul>
          </div>
          <div className="service-3__card">
            <img src={icon8} alt="" />
            <h4>УСЛУГИ ИНЖЕНЕРА ЗАКАЗЧИКА</h4>
            <ul>
              <li>
                <p>
                  Планирование и управление проектами, разработка плана проекта,
                  контроль сроков и бюджета.
                </p>
              </li>
              <li>
                <p>Контроль строительства.</p>
              </li>
              <li>
                <p>Управление качеством.</p>
              </li>
              <li>
                <p>Управление рисками.</p>
              </li>
              <li>
                <p>Контроль соблюдения стандартов.</p>
              </li>
              <li>
                <p>Управление изменениями.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service3;
