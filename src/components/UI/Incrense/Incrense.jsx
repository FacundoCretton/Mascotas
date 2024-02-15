import React from 'react';
import { IncrenseStyled } from './IncrenseStyles';

const Increase = ({
  children,
  bgColor,
  disabled = false,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <IncrenseStyled
      whileTap={{ scale: 0.95 }}
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IncrenseStyled>
  );
};

export default Increase;