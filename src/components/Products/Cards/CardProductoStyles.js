import styled, { css } from "styled-components";


export const StyledCard = styled.div`
  width: 23rem;
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  color: #000000;
  border-radius: 15px;
display: flex;
flex-direction: column;
`;
export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  color: #4caf50; /* Verde que complementa el diseño de la página */
`;
export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-around;

`;
export const StockText = styled.span`
  color: red;
  font-weight: 600;
  font-style: italic;
  font-family: "Noto Sans";
  display: flex;
  align-items: center;
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


export const StyledImage = styled.img`
  width: 100px;
  height: 180px;
`;

export const StockMessage = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
  border-radius: 5px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionHeader = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #ddd;
  border-radius: 10px;
  

`;

export const AccordionContent = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
`;

export const CustomCardTitle = styled.h3`
  font-size: 18px;
  color: #333;
  text-align: center;
  font-weight: 600;
  font-family: "Bricolage";
`;
export const SpanTag = styled.span `

  padding-top: 5px;

`;