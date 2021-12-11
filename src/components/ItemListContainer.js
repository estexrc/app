import ItemCount from "./ItemCountFile/ItemCount";

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
          return (
            <>
              <div id="card">
                <h3 id="card-title">{product.name}</h3>
                <h4 className="card-info">Price: {product.price}</h4>
                <ItemCount stock={product.stock} initial={1} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
