import { IKImage } from "imagekitio-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../hooks/useSearchHooks.mjs";

function SearchUI() {
    const [field, setField] = useState("");
    const {isFetching, isError, error, data: result, refetch} = useSearch(field);

    return (
        <>
            <form className="search-field"
                  onSubmit={event => {
                    event.preventDefault();
                    refetch();
                }}>

                <IKImage path="search-small.svg" />
                <input type="text" placeholder="How to influence people" 
                       className="input-field" minLength={1}
                       onChange={fieldHandler.bind(this)} />
            </form>

            {SearchIdle()}
            {SearchResult()}
        </>
    );
    
    function SearchResult() {
        const books = result?.data;
        if (books?.length > 0) {
            return (
                <section className="result-container">
                {books.map( book => {
                    const bookImg = book.image;
                        return (
                            <article key={`${book.name} ${book.id}`}
                                     className="book-item">

                                <section style={{backgroundImage: `url(${bookImg})`}}
                                     className="book-image-primary">

                                {book.rank && <h1 className="book-rank">{`#${book.rank}`}</h1>}

                                <span className="book-rating">
                                    <IKImage path="small-star.svg" alt="star icon" />
                                    <h4>{book.rating}</h4>
                                </span>
                            </section>
            
                            <Link to={`../book/${book._id}`} className="book-name">{book.name}</Link>
                            </article>
                        );
                    }
                )}
                </section>
            );
        }

        if (result?.status === 404) {
            return (
                <h1 className="search-status">The book you are looking for can not be found. Try a specific key.</h1>    
            );
        }

        if (isFetching) {
            return <h1 className="books-status font-poppins">Loading...</h1>
        }

        if (isError) {
            return console.error(error);
        }
        
    }

    function SearchIdle() {
        if (field.length === 0) {
            return <h1 className="search-status">Search what you want to read</h1>
        }
    }

    function fieldHandler(field) {
        setField(field.target.value);
    }
}

export { SearchUI };