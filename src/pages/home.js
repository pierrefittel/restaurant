const home = () => {

    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.id = "header";
    header.className = "header";

    const concept = document.createElement("div");
    concept.id= "concept";
    concept.className = "tab";
    concept.innerText = "Concept";

    const menu = document.createElement("div");
    menu.id= "menu";
    menu.className = "tab";
    menu.innerText = "Menu"

    const reservation = document.createElement("div");
    reservation.id= "reservation";
    reservation.className = "tab";
    reservation.innerText = "Reservation";

    const main = document.createElement("div");
    main.id = "main";
    main.className = "main";

    const thread = document.createElement("div");
    thread.id = "thread";
    thread.className = "thread";
    thread.innerText = "";

    header.appendChild(concept);
    header.appendChild(menu);
    header.appendChild(reservation);

    main.appendChild(thread);

    content.appendChild(header);
    content.appendChild(main);

};

export default home;