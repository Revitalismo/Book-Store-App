import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import { useRecomendBooks, usePopularBooks } from "../../hooks/useBooksHook.mjs";

function BooksUI({listName, bookList}) {
    let fetchBook = bookList === "recomend" ? useRecomendBooks : usePopularBooks;
    const { isFetching, isError, data: books, error } = fetchBook();

    return (
        <section className="book-container">
            <h1 className="book-category">{listName}</h1>

            <main className="book-slider">
                {showBooks()}
            </main>
        </section>
    );

    function showBooks() {
        if (isFetching) {
            return <h3 className="books-status font-poppins">Loading...</h3>
        }

        if (isError) {
            return <h3>{error}</h3>
        }

        if (books?.data) {
            return (
                <>
                {books.data.map( book => {
                    const bookImg = book.image;
                    return (
                        <article key={`${book.name} ${book._id}`}
                                 className="book-item">

                            <section style={{backgroundImage: `url(${bookImg})`}}
                                     className="book-image-primary">

                                {book.rank && <h1 className="book-rank">{`#${book.rank}`}</h1>}

                                <span className="book-rating">
                                    <IKImage path="small-star.svg" alt="star icon" />
                                    <h4>{book.rating}</h4>
                                </span>
                            </section>
            
                            <Link to={`book/${book._id}`} className="book-name">{book.name}</Link>
                        </article>
                    );
                })}
                </>
            );
        }
    }
}

export { BooksUI };