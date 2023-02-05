import { IKImage } from "imagekitio-react";
import toRupiah from '@develoka/angka-rupiah-js';

import { TransactionSecondary } from "./TransactionUI.jsx";

import { useCartBooks, useRemoveFromCart, useIncreaseQuantity, useDecreaseQuantity } from "../../hooks/useCartHooks.mjs";

function CartUI() {
    const { isFetching, isError, error, data: books, refetch: fetchBooks } = useCartBooks();
    const { mutate: removeBook } = useRemoveFromCart();
    const { mutate: increaseQuantity } = useIncreaseQuantity();
    const { mutate: decreaseQuantity } = useDecreaseQuantity();

    if (isError) {
        console.info(error);
    }

    if (isFetching) {
        return <h1 className="books-status font-poppins">Loading...</h1>
    }

    if (books?.status === 404) {
        return <h1 className="books-status font-poppins">You haven't add any book</h1>
    }

    if (books?.data !== undefined) {
        return (
            <>
            <section className="collection-container">
                {books.data.map(book => {
                    const price = toRupiah(book.price, {floatingPoint: 0, formal: false});
                    return(
                        <article key={`${book.name} ${book._id}`}
                                 className="collection-book">
                            
                            <section style={{backgroundImage: `url(${book.image})`}} 
                                     className="collection-book-img"/>

                            <header className="font-poppins w-full flex flex-col gap-y-[6px]">
                                <h1 className="text-dark-primary">{book.name}</h1>
                                <h1 className="text-red-primary">{price}</h1>
                                
                                <section className="flex gap-x-4 items-center font-poppins">
                                    <span className="icon icon-bordered h-[35px] max-w-[35px]"
                                          onClick={decreaseHandler.bind(this, book._id)}>
                                        <IKImage path="minus.svg" />
                                    </span>
                                    
                                    <h1 className="quantity">{book.quantity}</h1>

                                    <span className="icon icon-bordered h-[35px] max-w-[35px]"
                                          onClick={increaseHandler.bind(this, book._id)}>
                                        <IKImage path="plus.svg" />
                                    </span>
                                </section>
                            </header>

                            <span className="icon h-[40px] max-w-[40px]"
                                  onClick={removeHandler.bind(this, book._id)}>
                                <IKImage path="remove.svg" />
                            </span>
                        </article>
                    );
                })}
            </section>
            <TransactionSecondary btnPrimary={"buy"} books={books} className={"absolute bottom-0 left-0 right-0"} />
            </>
        );
    }

    function removeHandler(id) {
        removeBook(id);
        setTimeout(fn => fetchBooks(), 500);
    }
    
    function increaseHandler(id) {
        increaseQuantity(id);
        setTimeout(fn => fetchBooks(), 500);
    }
    
    function decreaseHandler(id) {
        decreaseQuantity(id);
        setTimeout(fn => fetchBooks(), 500);
    }

}

export { CartUI };