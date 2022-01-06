import Item from "./Item";

const ItemList = ({ prod }) => {
  return (
    <>
      <div id="card-container">
        {prod.map((products) => {
          return <Item key={products.id} products={products} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
