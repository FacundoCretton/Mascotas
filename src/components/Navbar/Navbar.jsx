import React, { useState } from "react";
import { NavbarContainer, LogoStyle,  NavbarMenuUl, NavbarItem, BarrsMenu, CartStyled, CustomButton } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import CartIcon from "./Cart/CartIcon";
import ModalCart from "./Cart/ModalCart/ModalCart";


const Navbar = () => {


  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };



  return (
    <NavbarContainer>
      <ModalCart />
      <LogoStyle src="/Logo_81.png" alt="logo" />
      <NavbarMenuUl isOpen={isMenuOpen}> 
        <NavbarItem>
          <a href="/">Home</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#productos">Productos</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#about">Conocenos</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contact">Contactanos</a>
        </NavbarItem>

      </NavbarMenuUl>
      <CartStyled>
        <CartIcon />
      </CartStyled>
      <BarrsMenu onClick={handleMenuClick}>
        <GiHamburgerMenu />
      </BarrsMenu>
    </NavbarContainer>
  );
};

export default Navbar;
