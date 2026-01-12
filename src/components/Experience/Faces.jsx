import img2 from "../../assets/images/history-img2.jpg";
import img1 from "../../assets/images/generalIcons/telIcon2.jpg";

const Faces = () => {
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
            СПИСОК АФФИЛИРОВАННЫХ ЛИЦ
          </h3>
          <table className="corp-manage-page__table">
            <tbody>
              <tr>
                <td colSpan={2} className="corp-manage-page__table-title">
                  <p>СПИСОК АФФИЛИРОВАННЫХ ЛИЦ</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 01.01.2025)  
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 02.07.2023)  
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 01.11.2022)  
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 01.07.2022)  
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 24.06.2021)  
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 29.12.2020)  
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 21.10.2020)  
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 05.12.2019)  
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 28.11.2019)
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 14.10.2019)
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Список аффилированных лиц АО «O‘ZENERGOINJINIRING» (по состоянию на 16.09.2019)  
                  </p>
                </td>
                <td>
                  <a href="">Посмотреть</a>
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
  )
}

export default Faces