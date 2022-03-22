import newElement from "../functions/newElement";
import image from "../assets/images/chester-toh-USXMYHubRtA-unsplash.jpg"
import styles from "../styles.css";

const loadMenu = () => {

    const container = newElement("div", "container", "container");

    for (let i = 0; i < 10; i++) {
        
        let menuItem = newElement("div", `menu-item-${i}`, "menu-item");
        
        let menuTitle = newElement("div", "menu-title", "menu-title", `Menu n°${i}`);
        let menuImage = newElement("img", "menu-image", "menu-image");
        menuImage.src = image;
        let menuDescription = newElement("div", "menu-description", "menu-description", "Ex tempor elit et ex ad. Enim esse elit amet cupidatat aliquip consequat voluptate consectetur sint ut.");
        
        menuItem.appendChild(menuTitle);
        menuItem.appendChild(menuImage);
        menuItem.appendChild(menuDescription);
        
        container.appendChild(menuItem);
        
        menu.appendChild(container);
    
    }

};

export default loadMenu;