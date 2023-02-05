import { SearchUI } from "./../Components/ui/SearchUI";
import { NavbarPrimary } from "../Components/Navbar";

export function Search() {
    return (
        <main className="container">
            <NavbarPrimary title="search" />
            <SearchUI />
        </main>
    );
}