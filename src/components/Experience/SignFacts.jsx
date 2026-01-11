import img2 from "../../assets/images/history-img2.jpg";
import img1 from "../../assets/images/generalIcons/telIcon2.jpg";
import img3 from "../../assets/images/generalIcons/facts.jpg";
import { Link } from "react-router-dom";

const SignFacts = () => {
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
        <div className="sign-facts-page__content">
          <div className="sign-facts-page__card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">2025 год</span>
              <span className="enter"></span>
              Все существенные факты за 2025 год
            </p>
            <a href="">Посмотреть</a>
          </div>
          <div className="sign-facts-page__card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">2024 год</span>
              <span className="enter"></span>
              Все существенные факты за 2024 год
            </p>
            <Link to="/sign-fact2024">Посмотреть</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">2023 год</span>
              <span className="enter"></span>
              Все существенные факты за 2023 год
            </p>
            <Link to="/sign-fact2023">Посмотреть</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">2022 год</span>
              <span className="enter"></span>
              Все существенные факты за 2022 год
            </p>
            <Link to="/sign-fact2022">Посмотреть</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">2021 год</span>
              <span className="enter"></span>
              Все существенные факты за 2021 год
            </p>
            <Link to="/sign-fact2021">Посмотреть</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">2020 год</span>
              <span className="enter"></span>
              Все существенные факты за 2020 год
            </p>
            <Link to="/sign-fact2020">Посмотреть</Link>
          </div>
          <div className="sign-facts-page__card">
            <img src={img3} alt="" />
            <p>
              <span className="bold">2019 год</span>
              <span className="enter"></span>
              Все существенные факты за 2019 год
            </p>
            <Link to="/sign-fact2019">Посмотреть</Link>
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

export default SignFacts;
