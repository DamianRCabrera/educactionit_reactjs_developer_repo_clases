import React, { useContext, useEffect } from "react";
import "./ShoppingCart.css";
import ShoppingContext from "./context/shoppingContext";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import Message from "./Message";
import { useFetch } from "./hooks/useFetch";

const ShoppingCart = () => {
  const { data, error, loading } = useFetch(
    "https://62633b22c430dc560d2cf4d6.mockapi.io/productos"
  );

  const { products, cart, setData, clearCart } = useContext(ShoppingContext);

  useEffect(() => {
    setData(data);
  });

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      <article className="box grid-responsive">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))
        ) : (
          <p>Sin Productos</p>
        )}
      </article>
      <h3>Carrito</h3>
      <article>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} />
        ))}

        <button className="btn btn-danger" onClick={clearCart}>
          Limpiar Carrito
        </button>
      </article>
    </div>
  );
};

export default ShoppingCart;
