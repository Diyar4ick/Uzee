import img2 from "../../assets/images/history-img2.jpg";
import img1 from "../../assets/images/generalIcons/telIcon2.jpg";

const DividentInfo = () => {
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
            ДИВИДЕНДЫ
          </h3>
          <table className="corp-manage-page__table">
            <tbody>
              <tr>
                <td colSpan={2} className="corp-manage-page__table-title"><p>ДИВИДЕНДЫ</p></td>
              </tr>
              <tr>
                <td><p>Сведения о начисленных и выплаченных дивидендах за 2016г.,2017г.,2018., 2019., 2020., 2021.,2022,2023 по состоянию на 01.01.2025г.</p></td>
                <td><a href="">Посмотреть</a></td>
              </tr>
              <tr>
                <td><p>Сведения о начисленных и выплаченных дивидендах за 2016г.,2017г.,2018., 2019., 2020., 2021., по состоянию на 01.01.2023г.</p></td>
                <td><a href="">Посмотреть</a></td>
              </tr>
              <tr>
                <td><p>Сведения о начисленных и выплаченных дивидендах за 2014г., 2015г.,2016г.,2017г.,2018., 2019., 2020., по состоянию на 01.01.2022г.</p></td>
                <td><a href="">Посмотреть</a></td>
              </tr>
              <tr>
                <td><p>Сведения о начисленных и выплаченных дивидендах за 2014г., 2015г.,2016г.,2017г.,2018., 2019.,по состоянию на 01.01.2021г.</p></td>
                <td><a href="">Посмотреть</a></td>
              </tr>
              <tr>
                <td><p>Сведения о начисленных и выплаченных дивидендах за 2014г., 2015г.,2016г.,2017г.,2018., по состоянию на 01.01.2020г.</p></td>
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

export default DividentInfo