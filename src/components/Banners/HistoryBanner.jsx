import historyBannerImg from '../../assets/images/banner-2.jpg'

const HistoryBanner = () => {
  return (
    <div className="main-banner">
      <div className="main-banner-first">
        <img src={historyBannerImg} alt="" className="main-banner-img" />
        <div className="main-banner-black">
          <div className="container">
            <h1>
              Проектирование воздушных и кабельных линий напряжением до 500кВ{" "}
              <span>UZEE</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="main-banner-second">
        <div className="container">
          <p>
            <span className="main-banner-second-span1">
              <span className="main-banner-second-span2">70</span>
              <span className="main-banner-second-span3">
                <span className="main-banner-second-span4">лет</span> успешной
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
  );
};

export default HistoryBanner;
