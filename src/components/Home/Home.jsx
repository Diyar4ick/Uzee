import homePageIconImg from "../../assets/images/iconBanner-left.svg";
import homePageIconImg2 from "../../assets/images/iconBanner-right.svg";
import persons from "../../assets/images/generalIcons/person-2.svg";
import statistics from "../../assets/images/generalIcons/statistics.svg";
import lamp from "../../assets/images/generalIcons/lamp.svg";
import news from "../../assets/images/news-img.jpg";
import homeBanner from "../../assets/images/homePages/homePageBanner.jpg";

// import checkmark from "../../assets/images/checkmark.svg";
// import adventages from "../../assets/images/companyIcons/company-advantages.jpg";

import sert7 from '../../assets/images/serts/sert7.jpg'
import MainBanner from "../Banners/MainBanner";

// import project1 from "../../assets/images/projects/project1.jpg";
// import project2 from "../../assets/images/projects/project2.jpg";
// import project3 from "../../assets/images/projects/project3.jpg";
// import project4 from "../../assets/images/projects/project4.jpg";
// import project5 from "../../assets/images/projects/project5.jpg";
// import project6 from "../../assets/images/projects/project6.jpg";
// import project7 from "../../assets/images/projects/project7.jpg";
// import project8 from "../../assets/images/projects/project8.jpg";
// import project9 from "../../assets/images/projects/project9.jpg";



const Home = () => {
  return (
    <>
    <MainBanner/>
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
        <div className="container">
          <h3 className="main-title">
            Деятельность <span>общества</span>
          </h3>
          <p className="">
            Коллектив АО «O'zenergoinjiniring» наряду с изыскательскими работами
            и рабочим проектированием, готовит комплексные решения отраслевого
            значения: вырабатывает концепцию и стратегию развития сетевой
            электроэнергетики, составляет сводные прогнозные энергобалансы,
            вырабатывает принципиальные решения, определяющие единую техническую
            политику, а также выполняет нормативные работы. Проектирование
            поставлено на поток. Электросетевые стройки в полном объеме
            своевременно обеспечиваются качественной проектной документацией.
            Своевременная разработка проектов позволяет заблаговременно
            размещать заказы на оборудование, сетевые конструкции и основные
            материалы. Принимаемые проектные решения обеспечивают условия для
            внедрения прогрессивных строительных технологий.
            <span className="enter"></span>
            Действующие распределительные электрические сети напряжением 0,38-35
            kV в настоящее время практически исчерпали свой расчетный срок
            службы, и их восстановление и дальнейшее развитие следует
            осуществлять с учетом новых технологических решений на уровне
            мировых стандартов и современных достижений, заложенных в
            изготовляемым электротехническими предприятиями новом оборудовании и
            строительных конструкциях.
            <span className="enter"></span>В мировой практике получили
            распространение следующие новые технические расширения, которые
            начали применять в АО «O'zenergoinjiniring» :
            <span className="enter"></span>
            <ul className="home-page__section5-list">
              <li>
                <p className="">
                  использование при строительстве ВЛ 0,38 kV самонесущих
                  изолированных проводов (СИП), которые значительно повышают
                  надежность электроснабжения потребителей, безопасность для
                  населения и обслуживающего персонала и снижают расходы на
                  эксплуатацию на 70%;
                </p>
              </li>
              <li>
                <p className="">
                  применение более современных компактных трансформаторных
                  подстанций напряжением 6-110 kV;
                </p>
              </li>
              <li>
                <p className="">
                  применением более современных изоляторных конструкций для ВЛ и
                  ПС;
                </p>
              </li>
              <li>
                <p className="">
                  применение современного оборудования для СДТУ и системы АИИС
                  КУЭ и электронных приборов учета электрической энергии;
                </p>
              </li>
              <li>
                <p className="">
                  применением новых кабелей 6-110 kV с сшитой изоляцией;
                </p>
              </li>
              <li>
                <p className="">
                  новые компьютерные технологии при выполнении
                  проектно-изыскательских работ.
                </p>
              </li>
            </ul>
            <span className="enter"></span>
            Внешнее электроснабжение насосных станций по смягчению отрицательных
            последствий ожидаемого маловодья.
            <span className="enter"></span>
            <ul className="home-page__section5-list">
              <li>
                <p className="">
                  Внешнее электроснабжение Дехканабадского завода калийных
                  удобрений на базе Тюбегатанского месторождения калийных солей.
                </p>
              </li>
              <li>
                <p className="">
                  Внешнее электроснабжение объектов Зармитанского месторождения.
                </p>
              </li>
              <li>
                <p className="">
                  Резервное электроснабжение приграничных объектов.
                </p>
              </li>
              <li>
                <p className="">
                  Внешнее электроснабжение объектов строительства участка
                  Кандымской группы месторождений газа в Бухарской области.
                </p>
              </li>
              <li>
                <p className="">
                  Внешнее электроснабжение инвестиционных объектов нефтегазового
                  комплекса Республики Узбекистан.
                </p>
              </li>
              <li>
                <p className="">
                  Электроснабжение школ, колледжей и врачебных пунктов во многих
                  районах Республики Узбекистан.
                </p>
              </li>
              <li>
                <p className="">
                  Электроснабжение строящихся новых объектов железной дороги
                  республики, включая проектирование ВЛ 110 kV для тяговых
                  подстанций, и реконструкцию переходов ВЛ-6-220-500 kV через
                  магистральные автодороги 1 категории..
                </p>
              </li>
            </ul>
            <span className="enter"></span>
            АО «O'zenergoinjiniring» принимал участие в проектировании линий
            электропередач 10 - 110 kV и подстанций напряжением 35 - 110 kV для
            объектов с иностранными инвестициями, строительство которых
            выполнялось с 1993 года и продолжается в настоящее время.
            <span className="enter"></span>
            АО «O'zenergoinjiniring» участвует в реализации программ,
            предусмотренных Постановлениями Правительства Республики Узбекистан,
            включая инвестиционные проекты ,а именно:
            <span className="enter"></span>
              <ul className="home-page__section5-list">
              <li>
                <p className="">
                  Внешнее электроснабжение насосных станций по смягчению отрицательных последствий ожидаемого маловодья.
                </p>
              </li>
              <li>
                <p className="">
                  Внешнее электроснабжение Дехканабадского завода калийных удобрений на базе Тюбегатанского месторождения калийных солей.
                </p>
              </li>
              <li>
                <p className="">
                  Внешнее электроснабжение объектов Зармитанского месторождения.
                </p>
              </li>
              <li>
                <p className="">
                  Резервное электроснабжение приграничных объектов.
                </p>
              </li>
              <li>
                <p className="">
                  Внешнее электроснабжение объектов строительства участка Кандымской группы месторождений газа в Бухарской области. 
                </p>
              </li>
              <li>
                <p className="">
                  Внешнее электроснабжение инвестиционных объектов нефтегазового комплекса Республики Узбекистан.
                </p>
              </li>
              <li>
                <p className="">
                 Электроснабжение школ, колледжей и врачебных пунктов во многих районах Республики Узбекистан.
                </p>
              </li>
              <li>
                <p className="">
                 Электроснабжение строящихся новых объектов железной дороги республики, включая проектирование ВЛ 110 kV для тяговых подстанций, и реконструкцию переходов ВЛ-6-220 kV через магистральные автодороги 1 категории.
                </p>
              </li>
            </ul>
            <span className="enter"></span>
            АО «O'zenergoinjiniring»  принимал участие в проектировании линий электропередач 10 - 110 kV и подстанций напряжением 35 - 110 kV для объектов с иностранными инвестициями, строительство которых выполнялось с 1993 года и продолжается в настоящее время.
          </p>
          <img src={sert7} alt="" />
        </div>
      </section>
      {/* <section className="home-page__section6">
        <h2 className="main-title">
          Наши <span>проекты</span>
        </h2>
        <div className="container">
          <div className="home-page__section6-project1">
            <img src={project1} alt="" />
            <ul className="home-page__section6-project1-list">
              <li>
                <p>
                 РП "Реконструкция участка существующей ВЛ 220 kV "Л-Ю-К" в месте пересечения с надземным метрополитеном на участке между станциями "Куйлюк" и "Кипчак".
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
                 РП «Выдача мощности, строящейся по принципу государственно-частного партнерства тепловой электростанции мощностью 1 500 МВт в Сырдарьинской области с выполнением схемы «Заход-Выход» ВЛ 500 kV Л-521, Л-550 (≈14,25 km) на ОРУ-500 Новой СДТЭС, «Заход-Выход» ВЛ 220 kV Л-М-2, Л-М-4, Л-20-Кс (≈1,13 km), переключением ВЛ Л-М-5, Л-М-6 (≈0,4 km) на ОРУ-220 kV Новой СДТЭС»
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
                 РД "Модернизация и реконструкция подстанций магистральных сетей. I фаза. ПС 220/110/35/6 kV "Бухара" Строительство здания лаборатории для РЗ и дополнительных служб.
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
                  РП «Расширение ПС 220 kV «Чупон Ота» с установкой АТ-5 и строительством ВЛ 220 kV в Самаркандской области».
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
                 "Модернизация и реконструкция подстанций магистральных сетей". 1 фаза. ПС 220/110/10 kV "Юлдуз".
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
                  РП "Перезаводка ВЛ 220 kV "Л-C-C" (по схеме "Заход-Выход") на технологическую ПС 220 kV "Azia metall prof" в Самаркандской области".
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
                  РД "Модернизация и реконструкция подстанций магистральных сетей". I фаза. ПС 220/110/35/10/6 kV "Шерабад".
                </p>
                <span>2021 год.</span>
              </li>
            </ul>
          </div>
          <div className="home-page__section6-project1">
            <img src={project8} alt="" />
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
            <img src={project9} alt="" />
            <ul className="home-page__section6-project1-list">
              <li>
                <p>
                 РП "Внешнее электроснабжение "Yunusobod Business City" и улуч-шение электроснабжения Юнуса-бадского района г. Ташкента".
                </p>
                <span>2021 год.</span>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </div>
    </>
  );
};

export default Home;
