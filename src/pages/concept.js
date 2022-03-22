import newElement from "../functions/newElement";
import image from "../assets/images/amanda-lim--Iaj4vYlnUM-unsplash.png"
import "../styles/concept.sass";

const loadConcept = () => {

    const container = newElement("div", "container", "container");

    const titleText = "Consectetur fugiat est pariatur..."
    const title = newElement("div", "title", "title", titleText);

    const introText = "Ut esse est laboris commodo nostrud in quis laborumanim in. Sint proident sint exercitation ut ex proident ea mollit voluptate proident dolore enim. Quis amet laboris excepteur excepteur reprehenderit adipisicing mollit eu ea ex ullamco dolor consectetur. Duis elit tempor fugiat ex minim. Exercitation incididunt ipsum nisi ea ullamco ullamco pariatur aute do magna nulla adipisicing. Lorem officia mollit reprehenderit minim adipisicing dolore. Exercitation reprehenderit ipsum in adipisicing ea occaecat ea exercitation in pariatur pariatur tempor anim.<br><br>Ullamco velit consectetur duis voluptate do occaecat incididunt. Id voluptate Lorem duis dolor nisi officia est qui est commodo eiusmod anim duis Lorem. Sunt Lorem nisi in qui eu adipisicing amet voluptate proident sunt voluptate elit eu."
    const intro = newElement("div", "intro", "intro", introText);

    const conceptImage = newElement("img", "concept-image", "concept-image");
    conceptImage.src = image

    container.appendChild(title);
    container.appendChild(intro);
    container.appendChild(conceptImage);

    concept.appendChild(container);

};

export default loadConcept;