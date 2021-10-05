import ProductsList from "./components/productsList";
import { CatalogueProvider } from "./providers/catalogue/";
import { CartProvider } from "./providers/cart/";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <h1>Nosso Catálogo:</h1>
          <ProductsList type="catalogue"></ProductsList>
          <h1>Carrinho: </h1>
          <ProductsList type="cart"></ProductsList>
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
