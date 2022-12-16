import { Fragment } from 'react';
import HeaderCartBUtton from './HeaderCartButton';
import meals from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartBUtton />
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="meals" />
      </div>
    </Fragment>
  );
};
export default Header;
