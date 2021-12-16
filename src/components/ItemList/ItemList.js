import Item from "./Item";

const ItemList = ({ prod }) => {
  return (
    <>
      <div id="card-container">
        {prod.map((products) => {
          return (
            <Item
              key={products.id}
              img={products.image}
              title={products.title}
              price={products.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;

// Quito onAdd por el momento

// const onAdd = () => {
//     if (product.stock <= 0) {
//     } else {
//       Swal.fire({
//         icon: "success",
//         text: "Successfully added to cart",
//       });
//     }
//   };
// <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
