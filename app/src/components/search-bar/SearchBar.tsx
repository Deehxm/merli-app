import React from "react";
import "./SearchBar.css"

export const SearchBar: React.FC<
  {
    onSearch: (values: any) => Promise<void>;
  }> = (
    {
      onSearch
    }
  ) => {
    return (
      <form className="SearchBar" /*action="https://www.mercadolivre.com.br/jm/search" method="GET" */ role="search">
        <span id="search-bar-logo" />
        <div>
          <input type="text" name="as_word" placeholder="Nunca dejes de buscar" maxLength={120} />
          <button type="submit" >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
    );
  }
