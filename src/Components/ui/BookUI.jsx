import { useState } from "react";
import { IKImage } from "imagekitio-react";
import { useParams } from "react-router-dom";

import { TransactionPrimary } from "./TransactionUI.jsx";

import { useBookDetail } from "../../hooks/useBooksHook.mjs";
import { useAddFavorite } from "../../hooks/useFavoriteHook.mjs";

import toRupiah from '@develoka/angka-rupiah-js';

function BookUI() {
    const [favoriteIcon, setFavoriteIcon] = useState('favorite.svg');

    const params = useParams();
    const { isFetching, isError, error, data } = useBookDetail(params.id);
    const { mutate: addFavorite } = useAddFavorite();

    if (isFetching) {
        return <h1 className="search-status">Loading...</h1>
    }

    if (isError) {
        console.error(error)
    }
    
    if (data?.data !== undefined) {
        const book = data.data;
        const price = toRupiah(book.price, {floatingPoint: 0});
        return (
            <>
            <article key={`${book.name} ${book._key}`}
                     className="book-container">

                <img src={book.image} alt={book.name} 
                     className="book-image-secondary"/>

                <header className="flex flex-col gap-y-[10px]">
                    <section className="book-name-secondary">
                        <h1>{book.name}</h1>
                        <FavoriteBtn id={book._id} />
                    </section>

                    <section className="flex flex-col gap-y-[3px]">
                        <h3 className="book-author font-poppins">{book.author}</h3>
                        <h3 className="book-publisher font-poppins">{book.publisher}</h3>
                        <h2 className="font-poppins book-price">{price}</h2>
                    </section>

                    <section className="px-4 flex gap-x-[30px]">
                        <section className="font-poppins flex flex-col justify-center text-center w-max">
                            <BookRating />
                            <BookReview />
                        </section>
                        
                        <BookPages />
                    </section>
                </header>

                <section className="book-about">
                    <h4 className="text-dark-primary">About this book</h4>
                    <p className="text-dark-secondary max-h-[200px] overflow-scroll">{book.about}</p>
                </section>
            </article>

            <TransactionPrimary btnPrimary={"cart"} btnSecondary={"buy"} bookId={book._id} />
            </>
        );
    }

    function BookReview() {
        const book = data?.data;
        if (book !== undefined) {
            if (book.reviews > 1) {
                return <h4 className="text-sm text-dark-secondary">{book.reviews} reviews</h4>
            }
            return <h4 className="text-sm text-dark-secondary">{book?.reviews} review</h4>
        }
    }

    function BookRating() {
        const book = data?.data;
        if (book !== undefined) {
            return (
                <section className="book-rating-secondary">
                    <h4>{book.rating}</h4>
                    <IKImage path="small-star.svg" />
                </section>
            );
        }
    }

    function BookPages() {
        const book = data?.data;
        if (book !== undefined) {
            return (
                <section className="font-poppins text-center text-sm text-dark-secondary
                                    flex flex-col justify-center gap-y-[3px]">
                    <h4>pages</h4>
                    <h4>{book.pages}</h4>
                </section>
            );
        }
    }

    function FavoriteBtn({id}) {
        return  <span className="icon h-[40px] max-w-[40px]">
                    <IKImage path={favoriteIcon} alt="icon favorite-filled"
                             onClick={favoriteHandler.bind(this, id)} />
                </span>
    }

    function favoriteHandler(id) {
        addFavorite(id);
        setFavoriteIcon("favorite-filled.svg")
    }

}

export { BookUI };