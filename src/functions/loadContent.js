import loadConcept from "../pages/concept";
import loadMenu from "../pages/menu";
import loadReservation from "../pages/reservation";
import newElement from "./newElement";
import addEvent from "./addEvent";

const loadContent = (element) => {
    element.children[1].style.display = "none"
    if (element.id === "concept") {
        loadConcept();
    } else if (element.id === "menu") {
        loadMenu();
    } else if (element.id === "reservation") {
        loadReservation();
    }
    //Creates a "close window" button, removes the event listener and creates a new one on the button
    //Prevents tab event listener from propagating to children
    addEvent.remove(element);
    const close = newElement("div", "close", "close", "🗙");
    element.prepend(close);
    addEvent.addClose(close);
};

export default loadContent;