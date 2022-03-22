import loadContent from "./loadContent";

const expandElement = () => {
    for (let i of event.target.parentElement.children) {
        if (i === event.target && i.style.borderRadius != "0%") {
            //On click, expand event target element
            i.style.borderRadius = "0%";
            i.style.width = "50vw";
            i.style.height = "80vh";
            i.children[0].style.filter = "opacity(0%)"
            loadContent(i);
        } else if (i != event.target && i.style.width === "250px") {
            //On click, minify other tab elements
            i.style.opacity = "0%";
            i.style.width = "0vw";
            i.style.height = "0vh";
        } else if (i != event.target && i.style.width === "0vw") {
            //On new click on expanded element, pull back target to normal state
            i.style.opacity = "100%";
            i.style.width = "250px";
            i.style.height = "250px";
            i.children[0].style.filter = "opacity(80%)"
        } else if (i === event.target && i.style.borderRadius != "50%") {
            //On new click on expanded element, pull back target element to normal state
            i.style.borderRadius = "50%";
            i.style.width = "250px";
            i.style.height = "250px";
            i.children[0].style.filter = "opacity(80%)"
            i.children[0].style.display = "block"
        }
    }
};

export default expandElement;