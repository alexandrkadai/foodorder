import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

import classes from './HeaderCartButton.module.css';

const HeaderCartBUtton = (props) => {
  const cartCntx = useContext(CartContext);
  const numberOfItems = cartCntx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{cartCntx.items.length}</span>
    </button>
  );
};

export default HeaderCartBUtton;
