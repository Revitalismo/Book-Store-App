import { NavbarDefault } from "../Components/Navbar/index";
import { BooksUI } from "../Components/ui/BooksUI";

export function Home() {
    return (
        <main className="container">
            <NavbarDefault />   
            <BooksUI listName={"Recomend to read"} bookList={"recomend"} /> 
            <BooksUI listName={"Popular now"} bookList={"popular"} /> 
        </main>
    );
}