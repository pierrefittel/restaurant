import "./styles/home.sass";

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

const threadConcept = document.createElement("div");
threadConcept.id = "thread-concept";
threadConcept.className = "thread";
threadConcept.innerText = "AHAHAHAHAHA";

const threadMenu = document.createElement("div");
threadMenu.id = "thread-menu";
threadMenu.className = "thread";
threadMenu.innerText = "OHOHOHOHOHO";

const threadReservation = document.createElement("div");
threadReservation.id = "thread-reservation";
threadReservation.className = "thread";
threadReservation.innerText = "IHIHIHIHIH";

header.appendChild(concept);
header.appendChild(menu);
header.appendChild(reservation);

main.appendChild(threadConcept);
main.appendChild(threadMenu);
main.appendChild(threadReservation)

content.appendChild(header);
content.appendChild(main);

concept.addEventListener("click", showThread);
menu.addEventListener("click", showThread);
reservation.addEventListener("click", showThread);

function showThread () {
    const threads = document.getElementsByClassName("thread");
    for (let i of threads) { i.style.display = "none"; }
    const button = event.target;
    const target = document.getElementById(`thread-${button.id}`);
    target.style.display = "block";
}