import { Fragment, useState, useEffect } from "react";
import Button from "../components/elements/button";
import CardProducts from "../components/fragments/CardProducts";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import { Link } from 'react-router-dom';



const ProductsPage = () => {
  // State for cart items
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username=useLogin()


  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);


  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id);
        return acc + (product ? product.price * item.qty : 0);
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // Handle logout, remove email and password from local storage and redirect to login page
  const HandleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    window.location.href = "/login";
  };

  // Handle adding items to the cart with a given quantity
  const HandleToCart = (id, qty) => {
    // Check if the item is already in the cart
    const itemInCart = cart.find(item => item.id === id);
    if (itemInCart) {
      // Update quantity if the item is already in the cart
      setCart(
        cart.map(item => item.id === id ? { ...item, qty: item.qty + qty } : item)
      );
    } else {
      // Add new item to the cart
      setCart([...cart, { id, qty }]);
    }
  };

  // Increment item quantity in the cart
  const handleIncrement = (id) => {
    setCart(
      cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
    );
  };

  // Decrement item quantity in the cart
  const handleDecrement = (id) => {
    setCart(
      cart.map(item => 
        item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item
      )
    );
  };

  // Get the quantity of a specific item in the cart
  const getQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    return item ? item.qty : 1;
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.id);
      return total + (product ? product.price * item.qty : 0);
    }, 0);
  };

  return (
    <Fragment>
      {/* Header section with logout button */}
      <div className="flex justify-end h-10 bg-blue-600 text-white">
        {username}
        <Button children="log out" className="ml-5 bg-black" onClick={HandleLogout}></Button>
      </div>

      {/* Main content section */}
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {/* Render each product using the CardProducts component */}
          { products.length > 0 && products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header image={product.image} id={product.id}></CardProducts.Header>
              <CardProducts.Body title={product.title}>{product.description}</CardProducts.Body>
              <CardProducts.Footer 
                price={product.price} 
                addToCart={HandleToCart} 
                id={product.id}
              />
               <Link className="text-white" to={`/product/${product.id}`}>View Details</Link>
            </CardProducts>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
          {/* Cart table */}
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Render each item in the cart */}
              {products.length > 0 && cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                if (product) {
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>RP.{product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                      <td>{item.qty}</td>
                      <td>RP.{(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                    </tr>
                  );
                }
                return null; // In case product is not found
              })}
              {/* Total price row */}
              <tr>
                <td colSpan="3" className="font-bold">Total</td>
                <td className="font-bold">RP.{calculateTotal().toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
