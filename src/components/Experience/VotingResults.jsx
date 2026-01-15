import img2 from "../../assets/images/history-img2.jpg";
import img1 from "../../assets/images/generalIcons/telIcon2.jpg";

const VotingResults = () => {
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
            ПРОТОКОЛ заседания счётной комиссии по итогам регистрации участников внеочередного общего собрания акционеров Акционерного Общества «O`ZENERGOINJINIRING» и результаты голосования по вопросам повестки дня.
          </h3>
          <table className="corp-manage-page__table">
            <tbody>
              <tr>
                <td><p>Протоколы счетной комиссии за 2020 год</p></td>
                <td><a href="">Посмотреть</a></td>
              </tr>
              <tr>
                <td><p>Протоколы счетной комиссии за 2021 год</p></td>
                <td><a href="">Посмотреть</a></td>
              </tr>
              <tr>
                <td><p>Протоколы счетной комиссии за 2022 год</p></td>
                <td><a href="">Посмотреть</a></td>
              </tr>
              <tr>
                <td><p>Протоколы счетной комиссии за ноябрь 2022 год</p></td>
                <td><a href="">Посмотреть</a></td>
              </tr>
              <tr>
                <td><p>Протоколы счетной комиссии за декабрь 2022 год</p></td>
                <td><a href="">Посмотреть</a></td>
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
  )
}

export default VotingResults