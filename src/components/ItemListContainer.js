import ItemCount from "./ItemCountFile/ItemCount";
import Swal from "sweetalert2";

const products = [
  { id: 1, name: "French Fries", price: "$2", stock: 10 },
  { id: 2, name: "Soda", price: "$1.5", stock: 0 },
  { id: 3, name: "Cheese Burger", price: "$3", stock: 5 },
];

const ItemListContainer = ({ props }) => {
  return (
    <div id="products-container">
      <h1 id="products-title">Our Stock Products</h1>
      <div id="card-container">
        {products.map((product) => {
          const onAdd = () => {
            if (product.stock <= 0) {
            } else {
              Swal.fire({
                icon: "success",
                text: "Successfully added to cart",
              });
            }
          };
          return (
            <>
              <div id="card">
                <h3 id="card-title">{product.name}</h3>
                <h4 className="card-info">Price: {product.price}</h4>
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
