import { useContext, useState } from "react";
import { IKImage } from "imagekitio-react";
import { Sidebar } from "../Navbar/navbar.mjs"

function Hamburger() {
    const [sidebar, setSidebar] = useContext(Sidebar);

    return (
        <IKImage path={"hamburger-menu.svg"} alt="hamburger menu icon"
                 onClick={sidebarHandler} />
    );

    function sidebarHandler() {
        sidebar ? setSidebar(false) : setSidebar(true);
    }
}

export { Hamburger }