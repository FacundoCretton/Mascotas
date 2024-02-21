import React from 'react';

import { RiShoppingBagLine } from 'react-icons/ri';

import { CartStyled } from '../NavbarStyles';
import { toggleCartHidden } from '../../redux/cart/cartSlide';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {

  const totalCartItems = useSelector(state=>state.cart.cartItems).reduce((acc, item) => (acc+=item.quantity),0)

  const dispatch = useDispatch();
  return (
    <CartStyled onClick={() => dispatch(toggleCartHidden())}>
      <RiShoppingBagLine size={30} color='#888' />
      <span>{totalCartItems}</span>
    </CartStyled>
  );
};

export default CartIcon;