import { useAddToCart } from "../../hooks/useCartHooks.mjs";
import toRupiah from '@develoka/angka-rupiah-js';

function TransactionPrimary({btnPrimary, btnSecondary, bookId}) {
    const { mutate: addBookToCart } = useAddToCart();

    return (
        <section className="transaction-container">
            <section className="transaction justify-end">
                <button className="btn btn-primary"
                        onClick={cartHandler.bind(this, bookId)}>
                    {btnPrimary}
                </button>

                <button className="btn btn-secondary">{btnSecondary}</button>
            </section>
        </section>
    );

    function cartHandler(id) {
        addBookToCart(id);
    }

}

function TransactionSecondary({btnPrimary, books, className}) {
    let price = 0;

    return (
        <section className={`transaction-container ${className}`}>
            <section className="transaction justify-between">
                <section className="font-poppins">
                    {books.data.map(book => {
                        price += (book.price * book.quantity);
                    })}
                    <h3 className="text-dark-secondary text-lg">Total</h3>
                    <h3 className="text-red-primary text-lg">
                        {toRupiah(price, {floatingPoint: 0, formal: false})}
                    </h3>
                </section>
                <button className="btn btn-secondary">{btnPrimary}</button>
            </section>
        </section>
    );

}

export { TransactionPrimary, TransactionSecondary };