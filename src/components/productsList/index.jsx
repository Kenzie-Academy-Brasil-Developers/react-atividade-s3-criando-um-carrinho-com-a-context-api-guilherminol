import Button from "../button";
import { Container } from "./style";
import ProductCard from "../pruductCard";
import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue/";
import { CartContext } from "../../providers/cart/";

const ProductsList = ({ type }) => {
  console.log(type);
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);
  return (
    <Container>
      {type === "catalogue" &&
        catalogue.map((item, index) => {
          return <ProductCard type={type} item={item} key={index} />;
        })}

      {type === "cart" &&
        cart.map((item, index) => {
          return <ProductCard type={type} item={item} key={index} />;
        })}
    </Container>
  );
};
export default ProductsList;
