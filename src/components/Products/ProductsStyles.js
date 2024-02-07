import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import styled, { css } from 'styled-components';
export const ProductosContainer = styled.div `
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;
`;

export const CardsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  gap: 20px;

  /* ${({ stock }) =>
    !stock &&
    css`
      filter: brightness(30%);
    `} */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.75rem;
  background: linear-gradient(83deg, #ffa100, #fb103d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledAccordionHeader = styled(Accordion.Header)`
  width: 150px;
`;

export const CustomCardTitle = styled(Card.Title)`
  font-size: 18px;
  color: #333;
  text-align: center;
  font-weight: 600;
`;
