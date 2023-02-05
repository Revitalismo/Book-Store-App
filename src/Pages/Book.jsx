import { NavbarPrimary } from "../Components/Navbar";
import { BookUI } from "../Components/ui/BookUI";

export function Book() {
    return (
        <main className="container">
            <NavbarPrimary title="book detail" />
            <BookUI />
        </main>
    );
}