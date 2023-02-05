import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Search } from "../Pages/Search";
import { Book } from "../Pages/Book";
import { Favorite } from "../Pages/Favorite";
import { Cart } from "../Pages/Cart";
import { Account } from "../Pages/Account";

export function RouteLayout() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
        </Routes>
    );
}