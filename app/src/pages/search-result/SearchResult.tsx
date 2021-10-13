import React from "react";
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { Item } from "../../components/item/Item";
import "./SearchResult.css"

export const SearchResult: React.FC = () => {
    return (
        <span>
            <Breadcrumb />
            <ul className="SearchResult">
                <Item />
            </ul>
        </span>
    );
}
