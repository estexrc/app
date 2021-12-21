import Navbar from "./components/Nav/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
}
export default App;
