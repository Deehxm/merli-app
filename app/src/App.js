import './App.css';
import { SearchBar } from './components/search-bar/SearchBar'
//import { Product } from './components/product/Product'
import { Item } from './components/item/Item'

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar onSearch={() => console.log(1)} />
      </header>
      <div>
      <ul className="App-breadcrumb">
          <li><a>Home</a></li>
          <li><a>Pictures</a></li>
          <li><a>Summer 15</a></li>
          <li>Italy</li>
        </ul>

      <ul className="App-content">


        <Item/>
      </ul>
      </div>

      {/*<Product />*/}
        
    </div>
  );
}

export default App;
