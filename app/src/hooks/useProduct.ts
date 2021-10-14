import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IProduct } from "../types";

export const useProduct = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        async function find() {
            try {
                const data = await fetch(`/api/items/${id}`);
                const { item } = await data.json();
                setProduct(
                    {
                        ...item,
                        freeShipping: item.free_shipping,
                        soldQuantity: item.sold_quantity,
                    }
                );
            } catch (error) {
                console.error(error);
            }
        }
        find();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return { product }
}