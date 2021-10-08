import ProductsList from "./components/productsList";
import { CatalogueProvider } from "./providers/catalogue/";
import { CartProvider } from "./providers/cart/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Nosso Catálogo:</h1>
      <ProductsList type="catalogue"></ProductsList>
      <h1>Carrinho: </h1>
      <ProductsList type="cart"></ProductsList>
    </div>
  );
}

export default App;
