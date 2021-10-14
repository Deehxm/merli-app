import "./App.css";
import { SearchBar } from "./components/search-bar/SearchBar";
import { SearchResult } from "./pages/search-result/SearchResult";
import { Product } from "./components/product/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <SearchBar />
        </header>
      </div>
      <Switch>
        <Route path="/" exact />
        <Route path="/items" exact component={SearchResult} />
        <Route path="/items/:id" exact component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
