const expandElement = () => {
    for (let i of event.target.parentElement.children) {
        if (i === event.target) {
            event.target.classList.toggle("tab-expand");
        } else { i.classList.toggle("tab-hide"); }
    }
     
};

export default expandElement;