import expandElement from "./expandElement";

const addEvent = (element, action) => {
    element.addEventListener("click", function () {
        expandElement();
    });
};

export default addEvent;