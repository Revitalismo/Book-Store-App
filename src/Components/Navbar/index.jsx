import { Link } from "react-router-dom";
import { IKImage } from "imagekitio-react";
import { Hamburger } from "./Hamburger";
import { SidebarUI } from "../ui/SidebarUI";

function NavbarDefault() {
    return (
        <header className="navbar-container">
            <nav className="navbar navbar-default">
                <Hamburger />
                <SidebarUI />
                <Link to="/search">
                    <IKImage path="search.svg" alt="search icon" />
                </Link>
            </nav>
        </header>
    );
}

function NavbarPrimary({title}) {
    return (
        <header className="navbar-container">
            <nav className="navbar navbar-primary">
                <Link to="..">
                    <IKImage path="back.svg" alt="back icon" />
                </Link>
                <h1>{title}</h1>
                <Link to="../cart">
                    <IKImage path="cart.svg" alt="cart icon" />
                </Link>
            </nav>
        </header>
    );
}

function NavbarSecondary({title}) {
    return (
        <header className="navbar-container">
            <nav className="navbar navbar-secondary">
                <Link to="..">
                    <IKImage path="back.svg" alt="back icon" />
                </Link>
                <h1>{title}</h1>
                <IKImage path="empty-icon.svg" alt="empty icon" />
            </nav>
        </header>
    );
}

export { NavbarDefault, NavbarPrimary, NavbarSecondary };