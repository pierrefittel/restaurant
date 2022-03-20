import "./styles/styles.sass";
import head from "./pages/head";
import home from "./pages/home";
import addEvent from "./functions/addEvent";
import expandElement from "./functions/expandElement";

//Loading page frame
head();
home();

//Adding event listener on tabs
addEvent(concept, expandElement);
addEvent(menu, expandElement);
addEvent(reservation, expandElement);
