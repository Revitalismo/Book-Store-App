import { useQuery } from "@tanstack/react-query";

export function useSearch(query) {
    return useQuery(["search", query], async function() {
        const request = new Request(`https://book-store-api.achmadjulian2.repl.co/books?q=${query}`, {
            method: "GET"
        });

        const response = await fetch(request);
        return response.json();
    }, {
        enabled: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
        cacheTime: 30 * 60 * 1000
    });
}