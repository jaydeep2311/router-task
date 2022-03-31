import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const value = useParams();
  const [product, setproduct] = React.useState({
    name: "No",
    price: "0",
  });
  React.useState(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((res) => {
        res.forEach((element) => {
          if (element.id == value.id) {
            setproduct(element);
          }
        });
      });
  }, []);
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
  );
};

export default Product;
