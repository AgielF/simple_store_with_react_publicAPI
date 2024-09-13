// src/components/fragments/CardProducts.js
import Button from '../elements/button/index';
import Counter from '../fragments/Counter';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-200 mx-3 rounded-lg my-2 shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image,id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-96 object-cover"></img>
    </Link>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white h-full">{title.substring(0,20)}...</h5>
      </a>
      <p className="text-m text-white">{children.substring(0,20)}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, addToCart, id } = props;
  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    setQty(qty > 1 ? qty - 1 : 1);
  };

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">RP.{price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</span>
      <Counter qty={qty} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <Button className="bg-blue-600" children="Add to cart" onClick={() => addToCart(id, qty)}></Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
