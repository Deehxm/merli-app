import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IProduct } from "../types";

export const useSearchResult = () => {
    const { search } = useLocation();
    const [categories, setCategories] = useState<string[]>();
    const [items, setItems] = useState<IProduct[]>();

    useEffect(() => {
        async function searchResults() {
            try {
                const data = await fetch(`/api/items${search}${search ? "&limit=4" : ""}`);
                const { categories, items } = await data.json();
                setItems(items.map((el: any) => {
                    return {
                        ...el,
                        freeShipping: el.free_shipping,
                        soldQuantity: el.sold_quantity,
                    }
                }));
                setCategories(categories)
            } catch (error) {
                console.error(error)
            }
        }
        searchResults();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { categories, items }
}