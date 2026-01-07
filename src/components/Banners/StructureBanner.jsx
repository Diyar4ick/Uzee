import structureBannerImg from '../../assets/images/banners/structure-page.jpg'

const StructureBanner = () => {
  return (
     <div className="structure-banner">
          <div className="structure-banner-first">
            <img src={structureBannerImg} alt="" className="structure-banner-img" />
          </div>
          <div className="structure-banner-second">
            <div className="container">
              <p>
                <span className="structure-banner-second-span1">
                  <span className="structure-banner-second-span2">70</span>
                  <span className="structure-banner-second-span3">
                    <span className="structure-banner-second-span4">лет</span> успешной
                    работы
                  </span>
                </span>
                Электрическая подстанция – это установка, которая служит для
                преобразования и распределение энергии. В ее составе выделяют
                следующие конструктивные части: трансформаторы, распределительные
                устройства повышенного и пониженного напряжения, и вспомогательные
                устройства.
              </p>
            </div>
          </div>
        </div>
  )
}

export default StructureBanner