import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import styled, { css } from 'styled-components';
export const CardProductosContainer = styled.div `
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  max-width:1200px ;
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
  font-size: 1.5rem;
  color: #4caf50; /* Verde que complementa el diseño de la página */
`;



export const StyledAccordionHeader = styled(Accordion.Header)`
  font-family: "Noto Sans";
  border: 1px solid #ccc; /* Cambia el color del borde para que se ajuste mejor al diseño general */

  span {
    font-size: 16px;
    font-weight: 500;
  }

  .accordion-button:not(.collapsed) {
    color: #fff; /* Cambia el color del texto cuando el acordeón está expandido */
    background-color: #2196f3; /* Cambia el color de fondo cuando el acordeón está expandido */
  }

  .accordion-button:focus {
    z-index: 3;
    border-color: green; /* Cambia el color del borde cuando el acordeón tiene foco */
    outline: 0;
    box-shadow: var(--bs-accordion-btn-focus-box-shadow);
  }
`;


export const CustomCardTitle = styled(Card.Title)`
  font-size: 18px;
  color: #333;
  text-align: center;
  font-weight: 600;
  font-family: "Comfortaa", cursive;
`;

export const PTag = styled.p `

  padding-top: 5px;

`;

export const CardText = styled(Card.Text)`

  font-size: 14px;
  text-align: center;
  margin: 0;
  font-family: "Noto Sans";

`;


export const LoadButtonContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 2rem 0 5rem;
  width: 100%;
  justify-content: space-evenly;
  


`;

export const FiltersIconsProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;

`;


export const SectionProductosContainer = styled.section`

  max-width: 1200px;

`;