import homePageIconImg from "../../assets/images/iconBanner-left.svg";
import homePageIconImg2 from "../../assets/images/iconBanner-right.svg";
import persons from "../../assets/images/generalIcons/person-2.svg";
import statistics from "../../assets/images/generalIcons/statistics.svg";
import lamp from "../../assets/images/generalIcons/lamp.svg";
import news from "../../assets/images/news-img.jpg";
import homeBanner from "../../assets/images/homePages/homePageBanner.jpg";

// import checkmark from "../../assets/images/checkmark.svg";
// import adventages from "../../assets/images/companyIcons/company-advantages.jpg";

import arrowYel from "../../assets/images/generalIcons/arrow-yellow.svg";
import arrowBlue from "../../assets/images/generalIcons/arrow-blue.svg";
import arrowGreen from "../../assets/images/generalIcons/arrow-green.svg";

import project1 from "../../assets/images/projects/project1.jpg";
import project2 from "../../assets/images/projects/project2.jpg";
import project3 from "../../assets/images/projects/project3.jpg";
import project4 from "../../assets/images/projects/project4.jpg";
import project5 from "../../assets/images/projects/project5.jpg";
import project6 from "../../assets/images/projects/project6.jpg";
import project7 from "../../assets/images/projects/project7.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <section className="home-page__section1">
        <img src={homePageIconImg} alt="" className="iconBannerImg" />
        <div className="container">
          <div className="home-page__section1-content">
            <h3 className="main-title">
              О <span>нас</span>
            </h3>
            <p className="home-page__section1-subtitle main-subtitle">
              АО «O’ZENERGOINJINIRING» — ведущая инжиниринговая компания в
              энергетическом секторе Узбекистана, обладающая обширным опытом в
              области проектирования и консалтинга.
            </p>
            <p className="main-description">
              С 1956 года мы с гордостью предоставляем комплексные
              инженерно-технические консультационные услуги в энергетическом
              секторе. Благодаря нашему обширному опыту, мы глубоко понимаем
              энергетическую систему и ее потребности.
              <span className="enter"></span>
              Благодаря большой команде опытных специалистов, обладающих
              собственными компетенциями в различных областях инженерии, включая
              изыскания и проектирование, мы успешно управляем проектами любой
              сложности и масштаба, предоставляя надежные и высококачественные
              решения для энергетической отрасли.
              <span className="enter"></span>
              Мы постоянно совершенствуемся, внедряя передовые технологии и
              инновационные подходы к управлению проектами. Благодаря
              партнерству с международными компаниями мы применяем лучшие
              мировые практики и стандарты, чтобы обеспечить высокую
              эффективность и надежность наших проектов.
            </p>
          </div>
        </div>
      </section>
      <section className="home-page__section2">
        <div className="container">
          <div className="home-page__section2-content">
            <h3 className="main-title">
              МИССИЯ <span>КОМПАНИИ</span>
            </h3>
            <p className="home-page__section2-subtitle main-subtitle">
              Наша миссия — предоставлять нашим клиентам высококачественные и
              надежные услуги, постоянно совершенствуя наши подходы и
              технологии. Мы стремимся оставаться надежным партнером для
              существующих клиентов и привлекать новых благодаря нашей
              приверженности к совершенству и инновациям.
            </p>
          </div>
        </div>
        <img src={homePageIconImg2} alt="" className="iconBannerImg" />
      </section>
      <section className="home-page__section3">
        <img
          className="home-page__section3-backround"
          src={homeBanner}
          alt=""
        />
        <div className="container">
          <div className="home-page__section3-content">
            <p className="home-page__section3-subtitle">
              Ваш помощник в области Энергетики
            </p>
            <h2 className="home-page__section3-title">
              Акционерное общество АО «O`ZENERGOINJINIRING»
            </h2>
            <p className="home-page__section3-description">
              АО «O`ZENERGOINJINIRING» является специализированной организацией
              по проектированию объектов электроснабжения и электрификации всех
              потребителей, расположенных в сельской местности, городах и
              райцентрах, включая малые и средние предприятия, объекты водного
              хозяйства и коммунальные комплексы, находящиеся на территории
              Республики Узбекистан.
            </p>
          </div>
          <div className="home-page__section3-cards">
            <div className="home-page__section3-card">
              <img src={persons} alt="" />
              <h3>Участие</h3>
              <p>
                участие в разработке и реализации основ национальных и
                отраслевых программ, директивных правительственных документов,
                определяющих развитие электрических сетей Республики Узбекистан
                Прогнозирование
              </p>
            </div>
            <div className="home-page__section3-card">
              <img src={statistics} alt="" />
              <h3>Прогнозирование</h3>
              <p>
                прогнозирование и оптимизация энергобалансов отраслей экономики
              </p>
            </div>
            <div className="home-page__section3-card">
              <img src={lamp} alt="" />
              <h3>Участие</h3>
              <p>
                разработка вопросов стратегии перспективного развития и
                формирования системы распределения электроэнергии и
                электроснабжения Республики Узбекистанnpm{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page__section4">
        <div className="container">
          <h3 className="home-page__section4-title">
            Новости АО "Узэнергоинжиниринг"
          </h3>
          <div className="home-page__section4-news">
            <div className="home-page__section4-card">
              <img src={news} alt="" />
              <div className="home-page__section4-content">
                <span>
                  <svg
                    width="84"
                    height="40"
                    viewBox="0 0 92 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.226682 4.13649C-0.581247 2.16276 0.870389 0 3.00308 0H70.4928C71.7108 0 72.8078 0.736347 73.2692 1.86351L90.8402 44.7886C91.6481 46.7623 90.1965 48.9251 88.0638 48.9251H20.5741C19.3561 48.9251 18.2591 48.1888 17.7977 47.0616L0.226682 4.13649Z"
                      fill="#0068b4"
                    />
                  </svg>
                  <p> 01 фев. 2024</p>
                </span>
                <h4>
                  АО «Узэнергоинжиниринг» договорился с Китайскими партнерами о
                  создании совместного предприятия и организации международного
                  образовательного учреждения
                </h4>
              </div>
            </div>
            <div className="home-page__section4-card">
              <img src={news} alt="" />
              <div className="home-page__section4-content">
                <span>
                  <svg
                    width="84"
                    height="40"
                    viewBox="0 0 92 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.226682 4.13649C-0.581247 2.16276 0.870389 0 3.00308 0H70.4928C71.7108 0 72.8078 0.736347 73.2692 1.86351L90.8402 44.7886C91.6481 46.7623 90.1965 48.9251 88.0638 48.9251H20.5741C19.3561 48.9251 18.2591 48.1888 17.7977 47.0616L0.226682 4.13649Z"
                      fill="#0068b4"
                    />
                  </svg>
                  <p> 01 фев. 2024</p>
                </span>
                <h4>
                  АО «Узэнергоинжиниринг» договорился с Китайскими партнерами о
                  создании совместного предприятия и организации международного
                  образовательного учреждения
                </h4>
              </div>
            </div>
            <div className="home-page__section4-card">
              <img src={news} alt="" />
              <div className="home-page__section4-content">
                <span>
                  <svg
                    width="84"
                    height="40"
                    viewBox="0 0 92 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.226682 4.13649C-0.581247 2.16276 0.870389 0 3.00308 0H70.4928C71.7108 0 72.8078 0.736347 73.2692 1.86351L90.8402 44.7886C91.6481 46.7623 90.1965 48.9251 88.0638 48.9251H20.5741C19.3561 48.9251 18.2591 48.1888 17.7977 47.0616L0.226682 4.13649Z"
                      fill="#0068b4"
                    />
                  </svg>
                  <p> 01 фев. 2024</p>
                </span>
                <h4>
                  АО «Узэнергоинжиниринг» договорился с Китайскими партнерами о
                  создании совместного предприятия и организации международного
                  образовательного учреждения
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-page__section5">
        <img src={homePageIconImg} alt="" className="iconBannerImg" />
        <div className="container">
          <h3 className="main-title">
            Наша <span>ИСТОРИЧЕСКАЯ ХРОНОЛОГИЯ</span>
          </h3>
          <div className="home-page__section5-timeline">
            <div className="home-page__section5-box">
              <span className="home-page__section5-box-img">
                <div class="home-page__section5-time">
                  <img src={arrowYel} alt="" />
                  <p>1956</p>
                </div>
                <div class="home-page__section5-time">
                  <img src={arrowYel} alt="" />
                  <p>1990</p>
                </div>
              </span>
              <div className="home-page__section5-box-content">
                <p>
                  <span className="bold">1956 г.</span> — основан как инженерная
                  база для распределительных сетей в Центральной Азии.
                  <span className="enter"></span>
                  <span className="bold">1990-е годы</span> — расширение услуг
                  для передающих сетей до 500 кВ.
                </p>
              </div>
            </div>
            <div className="home-page__section5-box">
              <span className="home-page__section5-box-img">
                <div class="home-page__section5-time">
                  <img src={arrowYel} alt="" />
                  <p>1992</p>
                </div>
                <div class="home-page__section5-time">
                  <img src={arrowYel} alt="" />
                  <p>2002</p>
                </div>
              </span>
              <div className="home-page__section5-box-content">
                <p>
                  <span className="bold">1992 г.</span> — вошла в состав
                  Министерства энергетики Узбекистана.
                  <span className="enter"></span>
                  <span className="bold">2002 г.</span> — преобразовано в
                  акционерное общество.
                </p>
              </div>
            </div>
            <div className="home-page__section5-box">
              <span className="home-page__section5-box-img">
                <div class="home-page__section5-time">
                  <img src={arrowBlue} alt="" />
                  <p>2019</p>
                </div>
                <div class="home-page__section5-time">
                  <img src={arrowGreen} alt="" />
                  <p>Now</p>
                </div>
              </span>
              <div className="home-page__section5-box-content">
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
      <section className="home-page__section6">
        <h2 className="main-title">
          Наши <span>проекты</span>
        </h2>
        <div className="container">
          <div className="home-page__section6-project1">
            <img src={project1} alt="" />
            <ul className="home-page__section6-project1-list">
              <li>
                <p>
                  РП "Строительство ВЛ 220 kV на территории СЭЗ "Ургут" со
                  строительством новой ПС 220 kV мощностью 2х125 МВА для
                  повышения надежности электроснабжения потребителей
                  электроэнергии, расположенных на массивах "Мерганча",
                  "Сариктепа".
                </p>
                <span>2021 год.</span>
              </li>
            </ul>
          </div>
          <div className="home-page__section6-project1">
            <img src={project2} alt="" />
            <ul className="home-page__section6-project1-list">
              <li>
                <p>
                  ""Схемы внешнего электроснабжения проекта "Электрификация железнодорожной линии Бухара-Ургенч-Хива""
                </p>
                <span>2021 год.</span>
              </li>
            </ul>
          </div>
          <div className="home-page__section6-project1">
            <img src={project3} alt="" />
            <ul className="home-page__section6-project1-list">
              <li>
                <p>
                 Схема внешнего электроснабжения проекта: "Расширение действую-щего производства кальциниро-ванной соды на 250 тыс. тонн в год на СП ООО "Кунградский содо-вый завод".
                </p>
                <span>2021 год.</span>
              </li>
            </ul>
          </div>
          <div className="home-page__section6-project1">
            <img src={project4} alt="" />
            <ul className="home-page__section6-project1-list">
              <li>
                <p>
                  РП "Реконструкция подстанции 110/10-10 kV "ДНС-2" с переводом на напряжение 220/110/35/10 kV в Зарбдорском районе Джизакской области".
                </p>
                <span>2021 год.</span>
              </li>
            </ul>
          </div>
          <div className="home-page__section6-project1">
            <img src={project5} alt="" />
            <ul className="home-page__section6-project1-list">
              <li>
                <p>
                 РП "Внешнее электроснабжение "Yunusobod Business City" и улучшение электроснабжения Юнусабадского района г. Ташкента".
                </p>
                <span>2021 год.</span>
              </li>
            </ul>
          </div>
          <div className="home-page__section6-project1">
            <img src={project6} alt="" />
            <ul className="home-page__section6-project1-list">
              <li>
                <p>
                  РП "Строительство МГЭС "Шаудар" на канале Даргом и МГЭС на ПК135+50 на канале Даргом в Самаркандской области (строительство ВЛ 35 kV и ВЛ 110 kV)".
                </p>
                <span>2021 год.</span>
              </li>
            </ul>
          </div>
          <div className="home-page__section6-project1">
            <img src={project7} alt="" />
            <ul className="home-page__section6-project1-list">
              <li>
                <p>
                  РП "Выдача мощности в энергосистему от станций по производству электроэнергии от свалочного газа, образующегося на полигонах бытовых отходов "Майдонтол".
                </p>
                <span>2021 год.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
