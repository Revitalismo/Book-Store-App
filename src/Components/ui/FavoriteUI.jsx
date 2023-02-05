import { IKImage } from "imagekitio-react";
import toRupiah from '@develoka/angka-rupiah-js';

import { useFavoriteBooks, useRemoveFavorite } from "../../hooks/useFavoriteHook.mjs";

function FavoriteUI() {
    const { isFetching, isError, error, data: books, refetch: fetchFavoriteBook } = useFavoriteBooks();
    const { mutate: removeBook, } = useRemoveFavorite();
    
    if (isError) {
        console.error(error);
    }

    if (isFetching) {
        return <h1 className="books-status font-poppins">Loading...</h1>
    }
    
    if (books.status === 404) {
        return <h1 className="books-status font-poppins">You haven't add any book</h1>
    }

    if (books?.data !== undefined) {

        return (
            <section className="collection-container">
            {books.data.map(book => {
                const price = toRupiah(book.price, {floatingPoint: 0});
                return (
                    <article key={`${book.name} ${book._id}`}
                             className="collection-book">
                        <section style={{backgroundImage: `url(${book.image})`}}
                                 className="collection-book-img" />

                        <section className="font-Poppins w-full">
                            <h1 className="text-base text-dark-primary">{book.name}</h1>
                            <h1 className="text-base text-red-primary">{price}</h1>
                        </section>

                        <span className="icon h-[40px] max-w-[40px]"
                              onClick={removeBookHandler.bind(this, book._id)}>
                            <IKImage path="favorite-filled.svg" />
                        </span>
                    </article>
                );
            })}
            </section>
        );
    
        function removeBookHandler(id) {
            removeBook(id);
            setTimeout(fn => fetchFavoriteBook(), 100);
        }
    }
}

export { FavoriteUI };