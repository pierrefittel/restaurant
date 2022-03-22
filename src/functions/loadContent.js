import loadConcept from "../pages/concept";
import loadMenu from "../pages/menu";
import loadReservation from "../pages/reservation";

const loadContent = (element) => {
    element.children[0].style.display = "none"
    if (element.id === "concept") {
        loadConcept();
    } else if (element.id === "menu") {
        loadMenu();
    } else if (element.id === "reservation") {
        loadReservation();
    }
};

export default loadContent;