import { useQuery, useMutation } from "@tanstack/react-query";

function useFavoriteBooks() {
    return useQuery(["books"], async function() {
        const request = new Request(`https://Book-Store-API.achmadjulian2.repl.co/favorites`, {
            method: "GET"
        });

        const response = await fetch(request);
        return response.json();
    });
}

function useAddFavorite() {
    return useMutation(async function(id) {
        const request = new Request(`https://Book-Store-API.achmadjulian2.repl.co/favorites/${id}`, {
            method: "POST"
        });

        const response = await fetch(request);
        return response.json();
    });
}

function useRemoveFavorite() {
    return useMutation(async function(id) {
        const request = new Request(`https://Book-Store-API.achmadjulian2.repl.co/favorites/${id}`, {
            method: "DELETE"
        });

        const response = await fetch(request);
        return response.json();
    });
}

export { useFavoriteBooks, useAddFavorite, useRemoveFavorite };