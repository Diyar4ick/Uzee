import img1 from "../../assets/images/history-img1.jpg";

import arrowYel from "../../assets/images/generalIcons/arrow-yellow.svg";
import arrowBlue from "../../assets/images/generalIcons/arrow-blue.svg";
import arrowGreen from "../../assets/images/generalIcons/arrow-green.svg";

import homePageIconImg from "../../assets/images/iconBanner-left.svg";

const History = () => {
  return (
    <div className="history-page">
      <section className="history-page__section1 container">
        <h3 className="main-title">
          История <span>общества</span>
        </h3>
        <div className="history-page__section1-content">
          <img src={img1} alt="" />
          <p className="">
            1 января 1956 года в соответствии с Постановлением Совета Министров
            СССР от 24.08.55 г. № 1558 «О мерах по улучшению работы проектных
            организаций» на базе отдела электрификации института «Узгипроводхоз»
            организован Узбекский филиал института «Гипросельэлектро» в составе
            Министерства городского и сельского строительства СССР.
            <span className="enter"></span>
            Постановлением Совета Министров СССР № 178-р от 31.01.64 г. институт
            был передан в состав Всесоюзного научно-исследовательского и
            проектного института «Сельэлектро». По приказу Минэнерго СССР были
            организованы в составе института филиалы в виде отделов комплексного
            проектирования:
            <span className="enter"></span>- Туркменский ОКП (г. Ашхабад);
            <span className="enter"></span>- Киргизский ОКП (г. Фрунзе);
            <span className="enter"></span>- Таджикский ОКП (г. Душанбе).
            <span className="enter"></span>
            На базе этих филиалов в 1989-1991 г. в республиках Туркменистан,
            Киргизстан и Таджикистан были организованы республиканские
            институты.
            <span className="enter"></span>С 17 сентября 1969 года на основании
            приказа Министерства энергетики и электрификации СССР № 111а от
            25.08.1969 г. институт был переименован в Среднеазиатское отделение
            Всесоюзного Государственного проектно-изыскательского и
            научно-исследовательского института «Сельэнергопроект».
          </p>
        </div>
        <p>
          Решением Исполкома Совета народных депутатов Хамзинского района г.
          Ташкента № 532/24-14 от 03.10.1991 г. Среднеазиатское отделение
          института «Сельэнергопроект» было переименовано в Арендное предприятие
          Среднеазиатский научно-исследовательский, проектно-изыскательский и
          конструкторско-технологический институт «Средазсельэнергопроект».
          Постановлением Кабинета Министров при Президенте РУз № 471 от
          13.10.1992 года институт «Средазсельэнергопроект», ранее подчиненный
          Минэнерго СССР, включен в состав Минэнерго Республики Узбекистан с
          01.10.1992 г.
          <span className="enter"></span>
          Решением Хокимията Хамзинского района г. Ташкента № 1117 от 28.09.1998
          г. переименован в Арендное предприятие Проектно-изыскательский
          институт «Узсельэнергопроект».
          <span className="enter"></span>С 12 сентября 2002 года приказом
          Госкомимущества от 13.06.2002 г. № 153к-ПО проектно-изыскательский
          институт преобразован в открытое акционерное общество
          «Qishloqenergoloyiha» (ОАО «СЕЛЬЭНЕРГОПРОЕКТ»). 16.07.2014 года в
          соответствии с требованиями новой редакции закона №ЗРУ-370 от
          06.05.2014г. «Об акционерных обществах и защите прав акционеров» ОАО
          «Qishloqenergoloyiha» переименовано в АО «Qishloqenergoloyiha».
          <span className="enter"></span>
          На основании Постановления Президента РУз от 27.03.2019г. №ПП-4249 «О
          стратегии дальнейшего развития и реформирования электроэнергетической
          отрасли Республики Узбекистан» на основании протокола №4 от
          24.05.2019г. внеочередного общего собрания акционеров о создании на
          базе АО «Qishloqenergoloyiha» современной многопрофильной организации
          АО «O`ZENERGOINJINIRING»
        </p>
      </section>
      <section className="history-page__section2">
        <img src={homePageIconImg} alt="" className="iconBannerImg" />
        <div className="container">
          <h3 className="main-title">
            Наша <span>ИСТОРИЧЕСКАЯ ХРОНОЛОГИЯ</span>
          </h3>
          <div className="history-page__section2-timeline">
            <div className="history-page__section2-box">
              <span className="history-page__section2-box-img">
                <div class="history-page__section2-time">
                  <img src={arrowYel} alt="" />
                  <p>1956</p>
                </div>
                <div class="history-page__section2-time">
                  <img src={arrowYel} alt="" />
                  <p>1990</p>
                </div>
              </span>
              <div className="history-page__section2-box-content">
                <p>
                  <span className="bold">1956 г.</span> — основан как инженерная
                  база для распределительных сетей в Центральной Азии.
                  <span className="enter"></span>
                  <span className="bold">1990-е годы</span> — расширение услуг
                  для передающих сетей до 500 кВ.
                </p>
              </div>
            </div>
            <div className="history-page__section2-box">
              <span className="history-page__section2-box-img">
                <div class="history-page__section2-time">
                  <img src={arrowYel} alt="" />
                  <p>1992</p>
                </div>
                <div class="history-page__section2-time">
                  <img src={arrowYel} alt="" />
                  <p>2002</p>
                </div>
              </span>
              <div className="history-page__section2-box-content">
                <p>
                  <span className="bold">1992 г.</span> — вошла в состав
                  Министерства энергетики Узбекистана.
                  <span className="enter"></span>
                  <span className="bold">2002 г.</span> — преобразовано в
                  акционерное общество.
                </p>
              </div>
            </div>
            <div className="history-page__section2-box">
              <span className="history-page__section2-box-img">
                <div class="history-page__section2-time">
                  <img src={arrowBlue} alt="" />
                  <p>2019</p>
                </div>
                <div class="history-page__section2-time">
                  <img src={arrowGreen} alt="" />
                  <p>Now</p>
                </div>
              </span>
              <div className="history-page__section2-box-content">
                <p>
                  <span className="bold">2019 г.</span> — переименовано в
                  «Узенергоинженеринг» указом Президента Узбекистана.
                  <span className="enter"></span>
                  <span className="bold">С 2024 года</span> — входит в состав
                  UET Group, крупной промышленной группы в Узбекистане.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
