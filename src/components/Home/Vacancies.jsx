import { useState } from "react";

const Vacancies = () => {
  const [activeVacancy, setActiveVacancy] = useState("");
  return (
    <div className="vacancy-page container">
      <h3 className="main-title">ВАКАНСИИ</h3>
      <div className="vacancy-page__card">
        <button
          onClick={() => {
            setActiveVacancy(
              activeVacancy !== "mainSpecialist" ? "mainSpecialist" : ""
            );
          }}
          type="submit"
        >
          Главный специалист строительного отдела
          {activeVacancy === "mainSpecialist" ? (
            <span className="arrow-up"></span>
          ) : (
            <span className="arrow-down"></span>
          )}
        </button>
        {activeVacancy === "mainSpecialist" ? (
          <div className="vacancy-page__content1">
            <p>
              <span className="bold">Знание:</span>
              <span className="enter"></span>- строительных норм и правил (ПУЭ,
              Правила эксплуатации электроустановок), стандартов, технических
              условий и других руководящих материалов по разработке и оформлению
              проектно-сметной документации, экономике и организации
              строительства, авторского права;
              <span className="enter"></span>- технических, экономических и
              социальных требований, предъявляемых к проектируемым объектам;
              <span className="enter"></span>- порядок оформления
              проектно-сметной и другой технической документации;
              <span className="enter"></span>- строительные материалы, изделия,
              конструкции.
              <span className="enter"></span>
              <span className="bold">Умение:</span>
              <span className="enter"></span>- анализировать рекламации по
              проектам и выявлять причины их возникновения;
              <span className="enter"></span>- читать строительные чертежи;
              <span className="enter"></span>- разрабатывать узлы рабочего
              проекта.<span className="enter"></span>
              <span className="bold">Навыки:</span>
              <span className="enter"></span>1 Знание офисных программ Microsoft
              (Word, Excel), системы автоматизированного проектирования и
              черчения АutoCAD.<span className="enter"></span>2 Должен обладать:
              - коммуникабельностью; - умением работать в коллективе.
              <span className="enter"></span>3 Желательно знание языков: -
              узбекский; - русский; - английский<span className="enter"></span>
              <span className="enter"></span>
              <span className="bold">Критерии при подборе персонала</span>
              <span className="enter2"></span>
              Высшее техническое образование, стаж работы по специальности не
              менее 6 лет
              <span className="enter"></span>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="vacancy-page__card">
        <button
          onClick={() => {
            setActiveVacancy(activeVacancy !== "engineer" ? "engineer" : "");
          }}
          type="submit"
        >
          Инженер, Инженер 3 категории
          {activeVacancy === "engineer" ? (
            <span className="arrow-up"></span>
          ) : (
            <span className="arrow-down"></span>
          )}
        </button>
        {activeVacancy === "engineer" ? (
          <div className="vacancy-page__content1">
            <p>
              1 Должен иметь высшее техническое образование или специальное
              техническое образование.
              <span className="enter"></span>2 Должен иметь общие понятия об
              электрических сетях.
              <span className="enter"></span>3 Должен уметь составлять схемы
              замещения элементов электрических сетей, определять сопротивление
              линий, трансформаторов.
              <span className="enter"></span>4 Умение работать на компьютере на
              уровне уверенного пользователя.
              <span className="enter"></span>5 Знание программ Microsoft Word,
              Excel, системы автоматизированного проектирования и черчения
              АutoCAD.
              <span className="enter"></span>6 Должен обладать
              коммуникабельностью.
              <span className="enter"></span>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="vacancy-page__card">
        <button
          onClick={() => {
            setActiveVacancy(activeVacancy !== "engineer2" ? "engineer2" : "");
          }}
          type="submit"
        >
          Инженер 2 категории
          {activeVacancy === "engineer2" ? (
            <span className="arrow-up"></span>
          ) : (
            <span className="arrow-down"></span>
          )}
        </button>
        {activeVacancy === "engineer2" ? (
          <div className="vacancy-page__content1">
            <p>
              1 Должен иметь высшее техническое образование или специальное
              техническое образование в области энергетики и стаж работы на
              должности инженера не менее 2-х лет.
              <span className="enter"></span>2 Должен иметь общие понятия об
              электрических сетях.
              <span className="enter"></span>3 Должен уметь составлять схемы
              замещения элементов электрических сетей, определять сопротивление
              линий, трансформаторов.
              <span className="enter"></span>4 Умение работать на компьютере на
              уровне уверенного пользователя.
              <span className="enter"></span>5 Знание программ Microsoft Word,
              Excel, системы автоматизированного проектирования и черчения
              АutoCAD.
              <span className="enter"></span>6 Должен знать руководящие и
              нормативные документы, касающиеся энергетики (ПУЭ, Правила
              эксплуатации электроустановок).
              <span className="enter"></span>7 Должен обладать
              коммуникабельностью.
              <span className="enter"></span>8 Готовность к командировкам.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="vacancy-page__details">
        Если Вы хотите работать в нашей компании, можете прислать свое резюме
        либо скачать анкету кандидата и заполнив ее, прислать по факсу или
        е-mail.
        <span className="enter"></span>
        <span className="bold">Факс:</span> (0371) 287-87-26
        <span className="enter"></span>
        <span className="bold">Телефон:</span> (0371) 287-87-62
        <span className="enter"></span>
        <span className="bold">E-mail:</span> ok@uzenergoeng.uz
        <span className="enter"></span>
        При появлении соответствующей вакансии сотрудники отдела управления
        персонала нашей компании свяжутся с Вами
        <span className="enter"></span>
        <span className="bold">Скачать анкету</span>
      </p>
    </div>
  );
};

export default Vacancies;
