import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setproducts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((res) => setproducts(res));
  }, []);

  return (
    <div className="mt-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          {products.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>
                  <Link to={`/products/${el.id}`}>More Details</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
