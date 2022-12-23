import { useContext } from 'react';
import CartContext from '../../store/CartContext';

import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  const totalAmount = `$ ${cartCntx.totalAmount}`;
  const hasItems = cartCntx.items.length > 0;

  const cartItemAddHandler = (id) => {};

  const cartItemRemoveHandler = (item) => {};

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCntx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
