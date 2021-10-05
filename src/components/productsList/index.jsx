import Button from "../button";
import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

const ProductsList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);
  return (
    <ul>
      {type === "catalogue" &&
        catalogue.map((item, index) => {
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <Button type={type} item={item}></Button>
          </li>;
        })}

      {type === "cart" &&
        cart.map((item, index) => {
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <Button type={type} item={item}></Button>
          </li>;
        })}
    </ul>
  );
};
export default ProductsList;
