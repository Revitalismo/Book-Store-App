import { NavbarSecondary } from "../Components/Navbar";
import { SettingUI } from "../Components/ui/SettingUI";

export function Account() {
    return (
        <main className="container">
            <NavbarSecondary title="My account" />
            <SettingUI />
        </main>
    );
}