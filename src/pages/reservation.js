import newElement from "../functions/newElement";
import "../styles/reservation.sass";

const loadReservation = () => {

    const container = newElement("div", "container", "container");

    const name = newElement("input", "name", "input");
    name.placeholder = "First name / Family name";
    name.type = "text";

    const phone = newElement("input", "phone", "input");
    phone.placeholder = "Phone number";
    phone.type = "text";

    const date = newElement("input", "date", "input");
    date.type = "date";

    const submit = newElement("button", "submit", "button", "Submit");

    container.appendChild(name);
    container.appendChild(phone);
    container.appendChild(date);
    container.appendChild(submit);
        
    reservation.appendChild(container);

};

export default loadReservation;