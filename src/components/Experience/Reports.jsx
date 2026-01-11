import img2 from "../../assets/images/history-img2.jpg";
import img1 from "../../assets/images/generalIcons/telIcon2.jpg";
import img3 from "../../assets/images/generalIcons/otchet.jpg";

const Reports = () => {
  return (
    <div className="corp-manage-page">
      <div className="container">
        <div className="corp-manage-page__cardText">
          <p className="corp-manage-page__cardText-nav">
            Уставный фонд и акционеры АО «O'ZENERGOINJINIRING»
          </p>
          <p className="corp-manage-page__cardText-content">
            <span className="bold">АО «O'ZENERGOINJINIRING»</span>
            Размер Уставного фонда составляет 13 167 161,0 тыс.сум.Акционерами
            АО «O‘ZENERGOINJINIRING» являются акционерное общество "O’zbekiston
            milliy elektr tarmoqlari", акционерное общество
            «Elelnrqishloqqurilish» и трудовой коллектив и другие физические
            лица акционерного общества " АО «O‘ZENERGOINJINIRING».
          </p>
        </div>
        <div className="report-page__content">
           <div className="corp-manage-page__details-card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">Квартальные отчеты эммитента</span>
              <span className="enter"></span>
              Квартальные отчеты эммитента
            </p>
            <a href="">Посмотреть</a>
          </div>
           <div className="corp-manage-page__details-card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">Годовые и квартальные отчеты</span>
              <span className="enter"></span>
              Годовые и квартальные отчеты по
            </p>
            <a href="">Посмотреть</a>
          </div>
           <div className="corp-manage-page__details-card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">Отчеты ЦКР РЦБ</span>
              <span className="enter"></span>
              Годовой отчет эмитента
            </p>
            <a href="">Посмотреть</a>
          </div>
           <div className="corp-manage-page__details-card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">Отчеты МСФО</span>
              <span className="enter"></span>
              Отчеты МСФО
            </p>
            <a href="">Посмотреть</a>
          </div>
           <div className="corp-manage-page__details-card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">Перечень КПЭ</span>
              <span className="enter"></span>
              Перечень КПЭ
            </p>
            <a href="">Посмотреть</a>
          </div>
           <div className="corp-manage-page__details-card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">Аудиторское заключение</span>
              <span className="enter"></span>
              Аудиторское заключение
            </p>
            <a href="">Посмотреть</a>
          </div>
           <div className="corp-manage-page__details-card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">Оценка КУ</span>
              <span className="enter"></span>
              Оценка КУ
            </p>
            <a href="">Посмотреть</a>
          </div>
        </div>
        <div className="corp-manage-page__details">
          <div className="corp-manage-page__details-card">
            <img src={img1} alt="" />
            <p>
              Номер телефона горячий линии для связи с акционерами и с
              иностранными инвесторами:
            </p>
            <a href="">(71) 291-87-24</a>
          </div>
          <div className="corp-manage-page__details-card">
            <img src={img2} alt="" />
            <p>
              <span className="bold">Наш адрес:</span> 100076, г. Ташкент
              ул.М.Ашрафи 1 пер.,дом 9<span className="bold">Тел:</span>+998
              555200404
              <span className="enter"></span>
              <span className="bold">e-mail:</span> info@uzee.uz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
