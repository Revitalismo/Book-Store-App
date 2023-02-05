import { Sidebar } from "../Navbar/navbar.mjs";
import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import { useContext } from "react";

function SidebarUI() {
    const [sidebar, setSidebar] = useContext(Sidebar);

    return (
        <aside className={`sidebar sidebar-${sidebar}`}>
            <header className="sidebar-header">
                <IKImage path="store.svg" />
                <h1>Julian's book store</h1>
                <IKImage path="close-btn.svg" onClick={sidebarHandler} />
            </header>

            <nav className="sidebar-navigation">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/favorite">Favorite</Link>
                <Link to="/account">Account</Link>
            </nav>
        </aside>
    );
 
    function sidebarHandler() {
        sidebar ? setSidebar(false) : setSidebar(true);
    }

}

export { SidebarUI };