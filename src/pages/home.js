import bajiao from "../assets/icons/bajiao.svg";
import huajiao from "../assets/icons/huajiao.svg";
import dingxiang from "../assets/icons/dingxiang.svg";
import background from "../assets/images/johanneke-kroesbergen-kamps-odEUcnnqCHo-unsplash.jpg";
import newElement from "../functions/newElement";

const home = () => {

    //Main composition
    const main = newElement("div", "main", "main");

    const header = newElement("div", "header", "header", "香料");

    const tabGrid = newElement("div", "tab-grid", "tab-grid");

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

    tabGrid.appendChild(concept);
    tabGrid.appendChild(menu);
    tabGrid.appendChild(reservation);

    main.appendChild(header);
    main.appendChild(tabGrid);

    //Content composition
    const content = document.getElementById("content");
    content.appendChild(main);

    //Style adjustment
    const tabs = document.getElementsByClassName("tab");
    for (let i of tabs) {
        i.style.width = "250px";
        i.style.height = "250px";
        i.style.borderRadius = "50%";
        i.children[0].style.filter = "opacity(80%)";
    }

};

export default home;