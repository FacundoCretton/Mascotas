import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';

import CardProductCheckout from '../../CardProductCheckout/CardProductCheckout';

import {
  ProductosContainerStyled,
  ProductsTitleStyled,
  CardsWrapperStyled,
  PriceContainerStyled,
  SubtotalStyled,
  EnvioStyled,
  HrStyled,
  TotalStyled,
  PriceTotalStyled,
  PClearStyled,
} from './ProductsCkeckoutStyles';

const ProductsCheckout = ({cartItems, shippingCost, price}) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu compra</ProductsTitleStyled>
      <CardsWrapperStyled>

      {
        cartItems.length ? (
          cartItems.map((item) => {
            return <CardProductCheckout {...item} key={item.id} />
          })
          
        )
        : (
          <PClearStyled>Nada por aquí</PClearStyled>
        )
      }

        
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(price)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(shippingCost)}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(price + shippingCost)}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;
