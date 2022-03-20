const newElement = (tag, id, className, text="") => {
    const element = document.createElement(tag);
    element.id = id;
    element.className = className;
    element.innerText = text;
    return element;
};

export default newElement;