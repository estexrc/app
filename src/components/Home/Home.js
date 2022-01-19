import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="titleForContainers">Welcome to My Store!!</h1>
      <p className="homeSubtitle">
        Please feel free to browser into our categories or start directly with
        all the products
      </p>
      <Link to={"/products"}>
        <div id="catalogImg" className="homeCardsImg">
          <img
            src="/assets/linkImg/all.jpg"
            alt="all prod img"
            className="catImg"
          />
          <p className="catText">All Products</p>
        </div>
      </Link>

      <div id="categoriesContainer">
        <Link to={"category/men-clothing"}>
          <div className="homeCardsImg">
            <img
              src="/assets/linkImg/MC.jpg"
              alt="men clothing img"
              className="catImg"
            />
            <p className="catText">Men Clothing</p>
          </div>
        </Link>
        <Link to={"category/woman-clothing"}>
          <div className="homeCardsImg">
            <img
              src="/assets/linkImg/WC.jpg"
              alt="woman clothing img"
              className="catImg"
            />
            <p className="catText">Woman Clothing</p>
          </div>
        </Link>
        <Link to={"category/electronics"}>
          <div className="homeCardsImg">
            <img
              src="/assets/linkImg/EL.jpg"
              alt="electronic img"
              className="catImg"
            />
            <p className="catText">Electronics</p>
          </div>
        </Link>
        <Link to={"category/jewelry"}>
          <div className="homeCardsImg">
            <img
              src="/assets/linkImg/JE.jpg"
              alt="jewelry img"
              className="catImg"
            />
            <p className="catText">Jewelry</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
