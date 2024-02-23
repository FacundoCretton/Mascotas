import { formatPrice } from '../../utils/formatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../UI/Count/Count';
import Increase from '../UI/Incrense/Incrense';

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  TextStyled,
  QuantityContainerStyled,
} from './CardProductCheckoutStyles';

import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../components/redux/cart/cartSlide';

const CardProductCheckout = ({img, name, price, id, quantity}) => {

  const dispatch = useDispatch();

  return (
    <CardContainerStyled>
        <img src={img} alt={name} /> 

      <CardInfoStyled>
        <ProductTitleStyled>{name}</ProductTitleStyled>
        <TextStyled></TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor= "red"
          onClick={()=>dispatch(removeFromCart(id))}
          size="20px" 
          borderRadius='5px'

        >
          <FaMinus />
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={()=>dispatch(addToCart({img, name, price, id, quantity}))}
            size="20px" 
            borderRadius='5px'
            >
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
