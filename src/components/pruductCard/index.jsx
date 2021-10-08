import { Container } from "./style";
import Button from "../button";
const ProductCard = ({ item, type }) => {
  console.log(type);
  return (
    <Container>
      <h2>{item.name}</h2>
      <p>R$ {item.price}</p>
      <Button item={item} type={type}></Button>
    </Container>
  );
};
export default ProductCard;
