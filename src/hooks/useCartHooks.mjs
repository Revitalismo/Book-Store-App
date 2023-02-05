import { useQuery, useMutation } from "@tanstack/react-query";

function useCartBooks() {
    return useQuery(["books"], async function() {
        const request = new Request(`https://book-store-api.achmadjulian2.repl.co/cart`, {
            method: "GET"
        });

        const response = await fetch(request);
        return response.json();
    });
}

function useAddToCart() {
    return useMutation(async function(id) {
        const request = new Request(`https://book-store-api.achmadjulian2.repl.co/cart/${id}`, {
            method: "POST"
        });

        const response = await fetch(request);
        return response.json();
    });
}

function useRemoveFromCart() {
    return useMutation(async function(id) {
        const request = new Request(`https://book-store-api.achmadjulian2.repl.co/cart/${id}`, {
            method: "DELETE"
        });

        const response = await fetch(request);
        return response.json();
    });
}

function useIncreaseQuantity() {
    return useMutation(async function(id) {
        const request = new Request(`https://book-store-api.achmadjulian2.repl.co/cart/increase/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: 1
            })
        });

        const response = await fetch(request);
        return response.json();
    });
}

function useDecreaseQuantity() {
    return useMutation(async function(id) {
        const request = new Request(`https://book-store-api.achmadjulian2.repl.co/cart/decrease/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: -1
            })
        });

        const response = await fetch(request);
        return response.json();
    });
}

export { useCartBooks, useAddToCart, useRemoveFromCart, useIncreaseQuantity, useDecreaseQuantity };