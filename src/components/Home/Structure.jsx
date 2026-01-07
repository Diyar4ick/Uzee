import img1 from "../../assets/images/structure-img.jpg";
import department1 from "../../assets/images/structure/department-img1.jpg";
import department2 from "../../assets/images/structure/department-img2.jpg";
import department3 from "../../assets/images/structure/department-img3.jpg";
import department4 from "../../assets/images/structure/department-img4.jpg";
import department5 from "../../assets/images/structure/department-img5.jpg";
import department6 from "../../assets/images/structure/department-img6.jpg";
import department7 from "../../assets/images/structure/department-img7.jpg";
import department8 from "../../assets/images/structure/department-img8.jpg";

import branch1 from "../../assets/images/structure/branch-img1.jpg";
import StructureBanner from "../Banners/StructureBanner";

const Structure = () => {
  return (
    <>
    <StructureBanner/>
    <div className="structure-page">
      <section className="structure-page__section1 container">
        <h3 className="main-title">
          Структура <span>общества</span>
        </h3>
        <img src={img1} alt="" />
        <p>
          <span className="bold">
            Описание организационной структуры АО «O‘ZENERGOINJINIRING»
            утвержденной протоколом внеочередного общего собрания акционеров от
            23.12.2020г. №5
          </span>
          <span className="enter"></span>
          <span className="bold">Общее собрание акционеров</span> - высший орган
          управления Обществом, через который акционеры реализуют свое право на
          участие в управлении Обществом.
          <span className="enter"></span>
          <span className="bold">Ревизионная комиссия</span> – орган,
          осуществляющий функции внутреннего финансово-хозяйственного и правого
          контроля за деятельностью Общества, подотчетный непосредственно Общему
          собранию акционеров. Члены ревизионной комиссии избираются на общем
          собрании акционеров.
          <span className="enter"></span>
          <span className="bold">Наблюдательный совет</span> - орган управления,
          отвечающий за разработку стратегии Общества, общее руководство и
          надзор за деятельностью общества в целях обеспечения его интересов.
          Избирается акционерами на общем собрании акционеров.
          <span className="enter"></span>
          <span className="bold">Служба внутреннего аудита</span> - осуществляет
          контроль и оценку работы исполнительного органа путем проверок и
          мониторинга соблюдения законодательства, устава общества и других
          документов, обеспечения полноты и достоверности отражения данных в
          бухгалтерском учете и финансовой отчетности, установленных правил и
          процедур осуществления хозяйственных операций, сохранности активов, а
          также соблюдения установленных законодательством требований по
          управлению обществом. Служба внутреннего аудита подотчетна
          наблюдательному совету общества.
          <span className="enter"></span>
          <span className="bold">Генеральный директор</span> - единоличный
          исполнительный орган Общества, осуществляющий руководство текущей
          деятельностью Общества и реализующий стратегию, определенную
          Наблюдательным советом и акционерами Общества.
          <span className="enter"></span>
          <span className="bold">Технический директор</span> – осуществляет
          общее руководство процессом проектирования;
          <span className="enter"></span>
          <span className="bold">
            Директор по экономике, финансам и общим вопросам
          </span>{" "}
          – осуществляет руководство финансово-экономической и хозяйственной
          деятельностью Общества.
          <span className="enter"></span>
          <span className="bold">Бухгалтерия</span> – осуществляет:
          <span className="enter"></span>
          <ul>
            <li>
              <p>- составление финансовых и налоговых отчетов;</p>
              <span className="enter"></span>
            </li>
            <li>
              <p>
                - учет основных средств, товарно-материальных ценностей (приход,
                списание);
              </p>
              <span className="enter"></span>
            </li>
            <li>
              <p>
                - учет расчетов с персоналом (зарплата, командировочные и
                прочие);
              </p>
              <span className="enter"></span>
            </li>
            <li>
              <p>- учет расчетов с дебиторами и кредиторами;</p>
              <span className="enter"></span>
            </li>
            <li>
              <p>- банковские операции.</p>
              <span className="enter"></span>
            </li>
          </ul>
          <span className="enter"></span>
          <span className="bold">Отдел экономики производства</span> -
          осуществляет:
          <span className="enter"></span>
          <ul>
            <li>
              <p>- составление бизнес-плана;</p>
              <span className="enter"></span>
            </li>
            <li>
              <p>- мониторинг экономических показателей;</p>
              <span className="enter"></span>
            </li>
            <li>
              <p>- оформление договоров;</p>
              <span className="enter"></span>
            </li>
            <li>
              <p>- разработка штатного расписания;</p>
              <span className="enter"></span>
            </li>
            <li>
              <p>- контроль распределения фонда заработной платы.</p>
              <span className="enter"></span>
            </li>
          </ul>
          <span className="enter"></span>
          <span className="bold">Канцелярия</span> - обеспечивает организацию
          делопроизводства в соответствии с основными положениями ЕГСД (Единая
          Государственная Система Делопроизводства).
          <span className="enter"></span>
          <span className="bold">
            Начальник службы материально-технического обеспечения, эксплуатации
            и транспорта
          </span>{" "}
          – руководит хозяйственной деятельностью Общества и обеспечением
          транспортных средств.
          <span className="enter"></span>
          <span className="bold">
            Служба материально-технического обеспечения, эксплуатации и
            транспорта
          </span>{" "}
          – включает в состав:
          <span className="enter"></span>
          <ul>
            <li>
              <p>1) Группа транспорта – водители;</p>
              <span className="enter"></span>
            </li>
            <li>
              <p>
                2) Хозяйственная группа – зав.хоз. группой, садовник, сторожи,
                дворник, уборщицы;
              </p>
              <span className="enter"></span>
            </li>
            <li>
              <p>
                3) Группа материально-технического обеспечения - инженер
                энергетик, инженер связи, инженер (котельщик), операторы
                котельной, слесарь-сантехник, заведующий производственным
                складом, художник, маляр, плотник, медсестра.
              </p>
              <span className="enter"></span>
            </li>
          </ul>
          <span className="enter"></span>
          <span className="bold">
            Заместитель технического директора (ЭС 35-110 kV):
          </span>
          <span className="enter"></span>
          Осуществляет руководство процессом проектирования электрических сетей
          напряжением 35-110 kV.
          <span className="enter"></span>
          <span className="bold">
            Зональные Главные Инженеры Проектов (ГИП)
          </span>{" "}
          - координирует проектно-исполнительские работы по всему комплексу
          проекта.
          <span className="enter"></span>
          <span className="bold">Отдел перспективного развития</span> -
          выполняет схемы развития электрических сетей 6-10-35-110 kV на
          перспективу, схемы электроснабжения для отдельных потребителей в сетях
          0,4÷110 kV.
          <span className="enter"></span>
          <span className="bold">Отдел инженерных изысканий</span> – проведение
          инженерно-геодезических изысканий, инженерно-геологических изысканий
          (в том числе бурение);
          <span className="enter"></span>
          <span className="bold">
            Отдел электротехнических сетей и подстанций
          </span>{" "}
          - занимается проектированием ВЛ35-110 kV; КЛ35-110 kV и подстанциями
          ПС (35-110 kV).
          <span className="enter"></span>
          <span className="bold">Строительный отдел</span> - занимается
          разработкой проектной документации по строительной части воздушных и
          кабельных линии электропередачи 0,4-500 kV, строительной части
          подстанций 0,4-500 kV, различных сооружений, административных и жилых
          зданий.
          <span className="enter"></span>
          <span className="bold">Отдел смет</span> - занимается разработкой
          ресурсно-сметной документации к проектам линий электропередач,
          кабельных линий, электрических подстанций, дизельных электрических
          станций, административных и жилых зданий.
          <span className="enter"></span>
          <span className="bold">СФНТП</span> - обеспечивает Общество
          научно-технической, экономической и стандартно-нормативной
          документацией, ведет учет и контроль за сохранностью документов.
          <span className="enter"></span>
          <span className="bold">Картохранилище</span> – выполняет работу с
          картографическими материалами.
          <span className="enter"></span>
          <span className="bold">АФКП</span> - разработка рабочей документации,
          инженерно-изыскательские работы по проектам Ферганской, Андижанской,
          Наманганской областей Республики Узбекистан,
          <span className="enter"></span>
          <span className="bold">СФКП</span> - разработка рабочей документации,
          инженерно-изыскательские работы по проектам ВЛ 0,4-6-10 kV в
          Самаркандской и Сурхандарьинской областей Республики Узбекистан.
          <span className="enter"></span>
          <span className="bold">Отдел электрических сетей</span> - занимается
          проектированием электрических сетей 0,4-6-10 kV (ВЛ 0,4-10 kV, КЛ
          0,4-10 kV, ТП 6-10/0,4 kV, РП 6-10 kV, АСКУЭ) для электроснабжения
          потребителей по городу Ташкенте и областям (Сырдарьинской, Джизакской,
          Кашкадарьинской, Хорезмской, Бухарской, Навоийнской, Республики
          Каракалпакистан и Ташкентской областей) Республики Узбекистан.
          <span className="enter"></span>
          <span className="bold">Отдел оформления и выпуска проектов</span> -
          выполняет работы по оформлению и выпуску проектно-сметной
          документации.
          <span className="enter"></span>
          <span className="bold">
            Отдел информационных и коммуникационных технологий
          </span>{" "}
          - занимается внедрением в производство информационных и
          коммуникационных технологий с применением современного программного
          обеспечения и вычислительной техники.
          <span className="enter"></span>
          <span className="bold">Заместитель технического директора</span> -
          начальник технического департамента - общее руководство по новым
          сферам деятельности Общества.
          <span className="enter"></span>
          <span className="bold">Технический департамент</span> - подготовка
          персонала и организация работ по новым сферам деятельности Общества.
          <span className="enter"></span>
          <span className="bold">
            Сектор релейной защиты и автоматики подстанций 220-500 kV
          </span>
          <span className="enter"></span>- проектирование релейной защиты и
          вторичной коммутации ПС 220-500 kV.
          <span className="enter"></span>
          <span className="bold">
            Сектор противоаварийной автоматики сетей 220-500 kV
          </span>
          <span className="enter"></span>- проектирование противоаварийной
          автоматики энергосистемы.
          <span className="enter"></span>
          <span className="bold">Электротехнический сектор 220-500 kV</span>
          <span className="enter"></span>- проектирование первичной коммутации
          ПС 220-500 kV.
          <span className="enter"></span>
          <span className="bold">Сектор высоковольтных линий 220-500 kV</span> -
          проектирование линий электропередач 220-500 kV.
          <span className="enter"></span>
          <span className="bold">
            Архитектурно-строительный сектор 220-500 kV
          </span>{" "}
          - проектирование зданий и сооружений ПС 220-500 kV.
          <span className="enter"></span>
          <span className="bold">
            Сектор управления режимами и проектирования энергосистем
          </span>
          <span className="enter"></span>- разработка перспективных схем
          развития электрических сетей 220-500 kV;
          <span className="enter"></span>- расчеты статической и динамической
          устойчивости энергосистемы.
          <span className="enter"></span>
          <span className="bold">
            Сектор исследования инновационных технологий и научной работы
          </span>
          <span className="enter"></span>- проведение научно-исследовательских и
          прикладных работ в сфере энергетики, включая альтернативные источники
          энергии;
          <span className="enter"></span>- разработка нормативно-технической,
          методической и типовой документации по вопросам проектирования
          энергосистемы, электрических сетей, линий и подстанций.
          <span className="enter"></span>
          <span className="bold">
            Сектор технико-экономического обоснования инвестиционных проектов и
            маркетинга
          </span>
          <span className="enter"></span>
          -разработка ПТЭР, ПТЭО, ТЭР и ТЭО инвестиционных проектов;
          <span className="enter"></span>
          -маркетинговые исследования
          <span className="enter"></span>
          <span className="bold">
            Группа корпоративных отношений с акционерами
          </span>{" "}
          - организует работы по соблюдению прав и интересов всех участников
          корпоративных отношений, соблюдение норм и требований корпоративного
          законодательства, иных нормативных правовых актов и внутренних
          документов Общества, внедрение единых правил и стандартов
          корпоративного управления, координация работы и организация
          взаимодействия с государственными органами по корпоративным вопросам.
          <span className="enter"></span>
          <span className="bold">Отдел по управлению персоналом</span> - подбор,
          расстановка кадров, повышение их квалификации, ведение установленной
          документации по персоналу.
          <span className="enter"></span>
          <span className="bold">Специальная часть</span> - секретное
          делопроизводство.
          <span className="enter"></span>
          <span className="bold">Юрисконсульт</span> - выполняет работу по
          соблюдению законности в деятельности Общества и защиту его правовых
          интересов.
          <span className="enter"></span>
          <span className="bold">
            Группа по мобилизационной подготовке и гражданской защите
          </span>{" "}
          - организация работ по гражданской защите и мобилизационной подготовке
          персонала
          <span className="enter"></span>
          <span className="bold">
            Отдел контроля качества, соблюдения стандартов и функционирования
            СМК
          </span>{" "}
          - организовывает работы по предотвращению некачественного выполнения
          проектно-сметной документации и достижение соответствия требованиям
          нормативных документов.
          <span className="enter"></span>
          <span className="bold">
            Инженер по технике и пожарной безопасности
          </span>{" "}
          – осуществляет контроль за мерами противопожарный безопасности,
          вводный и периодический инструктаж по технике и пожарной безопасности.
          <span className="enter"></span>
          <span className="bold">Научно-технический совет (НТС)</span> -
          Научно-технический совет является одной из основных форм участия
          специалистов в разработке и реализации научно – технической политики
          общества, повышении научного уровня и актуальности выполняемых
          исследований, их инновационной направленности.
        </p>
      </section>
      <section className="structure-page__section2">
        <div className="container">
          <h3 className="main-title">Отделы</h3>
          <div className="structure-page__section2-items">
            <div className="structure-page__section2-card">
              <img src={department1} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>Отдел инженерных изысканий</h3>
                <p>
                  Отдел руководствуется действующими законами, постановлениями и
                  распоряжениями правительства; приказами, инструкциями и
                  указаниями АО Узбекэнерго, Госархитектстроя, Государственного
                  геодезического надзора Р.Узбекистана, инструкцией по выбору
                  площадок для строительства понижающих подстанций, инструкцией
                  по изысканиям трасс воздушных линий 35-750 кВ и ВЛ 6-10 кВ и
                  инструкцией по изысканиям площадок понижающих подстанций
                  35-500 кВ .
                </p>
                <h4>Начальник отдела - Раджабов Рустам Эгамбердиевич</h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Контактные</span> данные
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Телефон</span>: (+998 71) 291-87-84
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Электронная почта</span>: oiz@uzenergoeng.uz
                    </p>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="structure-page__section2-card">
              <img src={department2} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>Отдел релейной защиты и автоматики, средств диспетчерского и технологического управления</h3>
                <p>
                 Основными задачами отдела являются: - разработка проектной документации по части релейной защиты ВЛ 35/110/220 kV; ПС 35/110/220 kV; ДЭС; РПБ; ТП.
                </p>
                <h4>Начальник отдела - Захидов Аброр</h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Контактные</span> данные
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Телефон</span>: (+998 71) 291-87-93
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Электронная почта</span>: orzasdtu@uzenergoeng.uz
                    </p>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="structure-page__section2-card">
              <img src={department3} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>Отдел перспективного развития и расчётов</h3>
                <p>
                 Отдел является генеральным проектировщиком по выполнению схем развития электрических сетей 110-35-10-6-0,4 kV для электроснабжения.
                </p>
                <h4>Начальник отдела - Нурматов Илхом</h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Контактные</span> данные
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Телефон</span>: (+998 71) 291-87-88
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Электронная почта</span>: opr@uzenergoeng.uz
                    </p>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="structure-page__section2-card">
              <img src={department4} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>Отдел ресурсно-сметной документации</h3>
                <p>
                  Отдел занимается разработкой ресурсно-сметной документации.
                </p>
                <h4>Начальник отдела - Янкуев Усман Мусаевич</h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Контактные</span> данные
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Телефон</span>: (+998 71) 291-87-89
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Электронная почта</span>: osmet@uzenergoeng.uz
                    </p>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="structure-page__section2-card">
              <img src={department5} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>Отдел информационных и комммуникационных технологий.</h3>
                <p>
                  Отдел занимается техническим обслуживанием и системным программным обеспечением компьютерной техники, разработкой программ и расчетами электрических сетей.
                </p>
                <h4>Начальник отдела - Махмудов Шухрат Шаятович </h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Контактные</span> данные
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Телефон</span>: (+998 71) 291-87-30
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Электронная почта</span>: oikt@uzenergoeng.uz
                    </p>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="structure-page__section2-card">
              <img src={department6} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>Отдел контроля качества, соблюдения стандартов и функционирования СМК.</h3>
                <p>
                 Главной задачей отдела контроля качества, соблюдения стандартов и функционирования СМК является предотвращение некачественного выполнения проектно-сметной документации и достижение полного соответствия требованиям нормативных документов.
                </p>
                <h4>Начальник отдела - Вакант</h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Контактные</span> данные
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Телефон</span>: (+998 71) 291-87-85
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Электронная почта</span>: okk@uzenergoeng.uz
                    </p>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="structure-page__section2-card">
              <img src={department7} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>Отдел подстанций</h3>
                <p>
                  Отдел руководствуется действующими законами, постановлениями и распоряжениями правительства; приказами, инструкциями и указаниями АО Узбекэнерго, Госархитектстроя, Государственного геодезического надзора Р.Узбекистана, инструкцией по выбору площадок для строительства понижающих подстанций, инструкцией по изысканиям трасс воздушных линий 35-750 кВ и ВЛ 6-10 кВ и инструкцией по изысканиям площадок понижающих подстанций 35-500 кВ .
                </p>
                <h4>Начальник отдела - Нигматалиев Шухрат</h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Контактные</span> данные
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Телефон</span>: (+998 71) 291-87-87
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Электронная почта</span>: oesps@uzenergoeng.uz
                    </p>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="structure-page__section2-card">
              <img src={department8} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>Отдел линий электропередач</h3>
                <p>
                  Отдел руководствуется действующими законами, постановлениями и распоряжениями правительства; приказами, инструкциями и указаниями АО Узбекэнерго, Госархитектстроя, Государственного геодезического надзора Р.Узбекистана, инструкцией по выбору площадок для строительства понижающих подстанций, инструкцией по изысканиям трасс воздушных линий 35-750 кВ и ВЛ 6-10 кВ и инструкцией по изысканиям площадок понижающих подстанций 35-500 кВ .
                </p>
                <h4>Начальник отдела - Каримов Аброр</h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Контактные</span> данные
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Телефон</span>: (+998 71) 291-87-87
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Электронная почта</span>: oesvl@uzenergoeng.uz
                    </p>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
          <h3 className="main-title">Филиалы</h3>
          <div className="structure-page__section2-card">
              <img src={branch1} alt="" />
              <div className="structure-page__section2-card-content">
                <h3>Самаркандский филиал комплексного проектирования</h3>
                <p>
               Филиал руководствуется действующими законами, постановлениями и распоряжениями правительства; приказами, инструкциями и указаниями АО Узбекэнерго, Госархитектстроя, Государственного геодезического надзора Р.Узбекистана, инструкцией по выбору площадок для строительства понижающих подстанций.
                </p>
                <h4>Начальник филиала - Кучкаров Фахриддин Файзиевич</h4>
                <ul className="structure-page__section2-numlist">
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Контактные</span> данные
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Телефон</span>: (+998 66) 229-17-96
                    </p>
                  </li>
                  <li>
                    <p className="structure-page__section2-numitem">
                      <span>Электронная почта</span>: samfkp@uzenergoeng.uz
                    </p>
                  </li>
                </ul>
                
              </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Structure;
