import "./styles/styles.sass";
import head from "./pages/head";
import home from "./pages/home";
import addEvent from "./functions/addEvent";


//Loading page frame
head();
home();

//Adding event listener on tabs
addEvent.addExpand(concept);
addEvent.addExpand(menu);
addEvent.addExpand(reservation);
