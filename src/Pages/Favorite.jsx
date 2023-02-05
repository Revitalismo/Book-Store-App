import { NavbarPrimary } from "../Components/Navbar";
import { FavoriteUI } from "../Components/ui/FavoriteUI";

export function Favorite() {
    return (
        <main className="container">
            <NavbarPrimary title="favorite" />
            <FavoriteUI />
        </main>
    );
}