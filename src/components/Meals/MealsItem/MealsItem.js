import { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import MealsItemForm from './MealsItemForm';

import classes from './MealsItem.module.css';

const MealsItem = (props) => {
  const cartCntx = useContext(CartContext);
  const onAddToCartHandler = (amount) => {
    cartCntx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};
export default MealsItem;
