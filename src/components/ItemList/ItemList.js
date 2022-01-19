import Item from "./Item";

const ItemList = ({ prod }) => {
  return (
    <>
      <div id="cardContainer">
        {prod.map((products) => {
          return <Item key={products.id} products={products} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
