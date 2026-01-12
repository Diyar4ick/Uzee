import img2 from "../../assets/images/history-img2.jpg";
import img1 from "../../assets/images/generalIcons/telIcon2.jpg";

const CorpManage = () => {
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
        <div className="corp-manage-page__content">
          <h3 className="main-title">
            Наблюдательный <span>совет и органы контроля</span>
          </h3>
          <table className="corp-manage-page__table">
            <tbody>
              <tr>
                {/* <td></td> */}
                <td colSpan={3} className="corp-manage-page__table-title">
                  <p className="">
                    Состав Наблюдательного совета утверждено протоколом ОСА №8
                    от 20.12.2023
                  </p>
                </td>
                {/* <td></td> */}
              </tr>
              <tr>
                <td>
                  <p> Мирзараимов Баходир Тохирович</p>
                </td>
                <td>
                  <p>
                    {" "}
                    Председатель Наблюдательного совета Общества, ENERGY PROJECT
                    INVEST GROUP MCHJ- директор
                  </p>
                </td>
                <td>
                  <a href="">Открыть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p> Ғафуров Муроджон Рахимжонович</p>
                </td>
                <td>
                  <p>
                    {" "}
                    Член Наблюдательного совета Общества. Начальник управления
                    Агентства по управлению государственными активами Республики
                    Узбекистан.
                  </p>
                </td>
                <td>
                  <a href="">Открыть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Умарбеков Бахром Ботирбекович </p>
                </td>
                <td>
                  <p>
                    {" "}
                    Член Наблюдательного совета Общества, Исполняющий
                    обязанности руководителя государственного учреждения по
                    внедрению рыночных механизмов в водном хозяйстве.
                  </p>
                </td>
                <td>
                  <a href="">Открыть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Баратов Мехритдин Нариманович</p>
                </td>
                <td>
                  <p>
                    {" "}
                    Член Наблюдательного совета Общества, аъзоси,“SPECTR
                    INDUSTRIES” MCHJ-начальник отдела.
                  </p>
                </td>
                <td>
                  <a href="">Открыть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p> Усманова Висола Баходировна</p>
                </td>
                <td>
                  <p>
                    Член Наблюдательного совета Общества, “ORTUS SOLIS X GROUP”
                    MCHJ директор.
                  </p>
                </td>
                <td>
                  <a href="">Открыть</a>
                </td>
              </tr>
              <tr>
                {/* <td></td> */}
                <td colSpan={3} className="corp-manage-page__table-title">
                  <p className="">Состав Службы внутреннего аудита</p>
                </td>
                {/* <td></td> */}
              </tr>
              <tr>
                <td>
                  <p>Бойсариев Собит Жуманазарович</p>
                </td>
                <td>
                  <p>Начальник службы внутреннего аудита Общества. </p>
                </td>
                <td>
                  <a href="">Открыть</a>
                </td>
              </tr>
            </tbody>
          </table>
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
              <span className="bold">Наш адрес:</span> 100076, г. Ташкент ул.М.Ашрафи 1 пер.,дом 9
             <span className="bold">Тел:</span>+998 555200404
              <span className="enter"></span>
              <span className="bold">e-mail:</span> info@uzee.uz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorpManage;
 