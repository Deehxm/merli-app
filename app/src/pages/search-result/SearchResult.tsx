import React from "react";
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { Item } from "../../components/item/Item";
import { useSearchResult } from "../../hooks/useSearchResult";
import "./SearchResult.css";

export const SearchResult: React.FC = () => {
    
    const { items, categories } = useSearchResult();

    return (
        items ? (
            <span>
                <Breadcrumb categories={categories} />
                <ul className="SearchResult">
                    {items.map(item => { return <Item key={item.id} product={item} /> })}
                </ul>
            </span>
        ) : (<p>Loading...</p>)
    );
}
