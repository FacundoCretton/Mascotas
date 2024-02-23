import React from 'react';
import { IncrenseStyled } from './IncrenseStyles';

const Increase = ({
  children,
  bgColor,
  disabled = false,
  onClick = e => e.preventDefault(),
  size = "30px", // Agregamos una nueva prop size con un valor por defecto de "30px"
borderRadius= "10px",
}) => {
  return (
    <IncrenseStyled
      whileTap={{ scale: 0.95 }}
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
      style={{ width: size, height: size, borderRadius: borderRadius  }} // Aplicamos el tamaño a través de estilos en línea

    >
      {children}
    </IncrenseStyled>
  );
};

export default Increase;