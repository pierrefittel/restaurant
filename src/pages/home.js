import bajiao from "../assets/icons/bajiao.svg";
import huajiao from "../assets/icons/huajiao.svg";
import dingxiang from "../assets/icons/dingxiang.svg";
import newElement from "../functions/newElement";

const home = () => {

    const main = newElement("div", "main", "main");

    const concept = newElement("div", "concept", "tab", "Concept");
    const menu = newElement("div", "menu", "tab", "Menu");
    const reservation = newElement("div", "reservation", "tab", "Reservation");
    
    const conceptBackground = newElement("img", "concept-background", "tab-background");
    conceptBackground.src = bajiao;

    const menuBackground = newElement("img", "menu-background", "tab-background");
    menuBackground.src = huajiao;

    const reservationBackground = newElement("img", "reservation-background", "tab-background");
    reservationBackground.src = dingxiang;

    concept.appendChild(conceptBackground);
    menu.appendChild(menuBackground);
    reservation.appendChild(reservationBackground);

    main.appendChild(concept);
    main.appendChild(menu);
    main.appendChild(reservation);

    const content = document.getElementById("content");
    content.appendChild(main);

};

export default home;