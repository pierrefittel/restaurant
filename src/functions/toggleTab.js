import loadContent from "./loadContent";
import addEvent from "./addEvent";

const expandElement = () => {
    for (let i of event.currentTarget.parentElement.children) {
        if (i === event.currentTarget && i.style.borderRadius != "0%") {
            //On click, expand event target element
            i.style.borderRadius = "0%";
            i.style.width = "50vw";
            i.style.height = "80vh";
            i.children[1].style.filter = "opacity(0%)";
            loadContent(i);
        } else if (i != event.currentTarget && i.style.width === "250px") {
            //On click, minify other tab elements
            i.style.opacity = "0%";
            i.style.width = "0vw";
            i.style.height = "0vh";
        }
    }
};

const closeElement = () => {
    const tabGrid = event.currentTarget.parentElement.parentElement;
    const activeTab = event.currentTarget.parentElement;
    for (let i of tabGrid.children) {
        if (i === activeTab && i.style.borderRadius === "0%") {
            //On click on close button, pull back target tab to normal state
            removeTabContent(i);
            i.style.borderRadius = "50%";
            i.style.width = "250px";
            i.style.height = "250px";
            i.children[1].style.filter = "opacity(80%)";
            i.children[1].style.display = "block";
            setTimeout(() => { addEvent.addExpand(i); }, 1000); //Wait for window update before adding a new event listener
        }  else if (i != activeTab && i.style.width === "0vw") {
            //On click on close button, pull back other tabs to normal state
            i.style.opacity = "100%";
            i.style.width = "250px";
            i.style.height = "250px";
            i.children[1].style.filter = "opacity(80%)";
        }
    }
};

const removeTabContent = (tab) => {
    tab.children[3].remove();
    tab.children[0].remove();
};

export default { expandElement, closeElement };