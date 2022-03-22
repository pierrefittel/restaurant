import toggleTab from "./toggleTab";

const addExpand = (element) => {
    element.addEventListener("click", toggleTab.expandElement);
};

const addClose = (element) => {
    element.addEventListener("click", toggleTab.closeElement);
};

const remove = (element) => {
    element.removeEventListener("click", toggleTab.expandElement);
};

export default { addExpand, addClose, remove };