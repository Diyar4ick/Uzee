import img1 from "../../assets/images/publicEvents/img1.jpg";
import img2 from "../../assets/images/publicEvents/img2.jpg";
import img3 from "../../assets/images/publicEvents/img3.jpg";
import img4 from "../../assets/images/publicEvents/img4.jpg";
import img5 from "../../assets/images/publicEvents/img5.jpg";
import img6 from "../../assets/images/publicEvents/img6.jpg";
import img7 from "../../assets/images/publicEvents/img7.jpg";
import img8 from "../../assets/images/publicEvents/img8.jpg";
import img9 from "../../assets/images/publicEvents/img9.jpg";
import img10 from "../../assets/images/publicEvents/img10.jpg";

const PublicEvents = () => {
  return (
    <div className="public-page container">
      <h3 className="main-title">
        18 марта на территории Узэнергоинжиниринг прошёл всенародный
        благотворительный хашар
      </h3>
      <span className="enter"></span>
      <p>Проводимые мероприятии / 19 марта 2023 / Просмотров: 1480</p>
      <span className="enter"></span>
      <h3 className="main-title">
        18 марта на территории Узэнергоинжиниринг прошёл всенародный
        благотворительный хашар по благоустройству в преддверии праздника
        Навруз.
      </h3>
      <span className="enter"></span>
      <div className="public-page__images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
      <span className="enter"></span>
      <p>
        Решение обосновывается необходимости тщательной подготовки и
        организованного проведения мероприятия. Хашар пройдёт под девизом
        «Благоустроенная и красивая махалля — красота страны».
      </p>
      <span className="enter"></span>
      <h3 className="main-title">
        22 октября 2022 года сотрудники АО "Узэнергоинжиниринг" провели встречу
        с студентами университета «Ташкентский институт инженеров ирригации и
        механизации сельского хозяйства».
      </h3>
      <span className="enter"></span>
      <p>Проводимые мероприятии / 25 октября 2022 / Просмотров: 1627</p>
      <span className="enter"></span>
      <h4 className="main-subtitle">
        22 октября 2022 года сотрудники АО "Узэнергоинжиниринг" провели встречу
        с студентами 4 курса факультета "Энергоснабжения сельского и водного
        хозяйства" национального исследовательского университета «Ташкентский
        институт инженеров ирригации и механизации сельского хозяйства».
      </h4>
      <div className="public-page__images">
        <img src={img9} alt="" />
        <img src={img10} alt="" />
      </div>
      <span className="enter"></span>
      <p>В целях привлечения молодых специалистов 22 октября 2022 года специалистами АО "Узэнергоинжиниринг" проведена  встреча с студентами 4 курса факультета "Энергоснабжения сельского и водного хозяйства" национального исследовательского университета «Ташкентский институт инженеров ирригации и механизации сельского хозяйства».</p>
      <span className="enter"></span>
    </div>
  );
};

export default PublicEvents;
