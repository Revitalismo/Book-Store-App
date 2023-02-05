import { useQuery } from "@tanstack/react-query";

function useRecomendBooks() {
    return useQuery(["recomend"], async function() {
        const request = new Request(`https://Book-Store-API.achmadjulian2.repl.co/recomend`, {
            method: "GET"
        });

        const response = await fetch(request);
        return response.json();
    }, {
        staleTime: 5 * 60 * 1000,
        cacheTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false
    });
}

function usePopularBooks() {
    return useQuery(["popular"], async function() {
        const request = new Request(`https://Book-Store-API.achmadjulian2.repl.co/popular`, {
            method: "GET"
        });

        const response = await fetch(request);
        return response.json();
    }, {
        staleTime: 5 * 60 * 1000,
        cacheTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false
    });
}

function useBookDetail(id) {
    return useQuery(["book-detail", id], async function() {
        const request = new Request(`https://Book-Store-API.achmadjulian2.repl.co/book/${id}`, {
            method: "GET"
        });
        
        const response = await fetch(request);
        return response.json();
    }, {
        staleTime: 5 * 60 * 1000,
        cacheTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false
    });
}

export { useRecomendBooks, usePopularBooks, useBookDetail };