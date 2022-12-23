import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

import classes from './HeaderCartButton.module.css';

const HeaderCartBUtton = (props) => {
  const cartCntx = useContext(CartContext);
  const numberOfItems = cartCntx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}> 3</span>
    </button>
  );
};

export default HeaderCartBUtton;
