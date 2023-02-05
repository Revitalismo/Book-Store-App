import { NavbarSecondary } from "../Components/Navbar";
import { CartUI } from "../Components/ui/CartUI";

export function Cart() {
    return (
        <main className="container">
            <NavbarSecondary title="cart" />
            <CartUI />
        </main>
    );
}