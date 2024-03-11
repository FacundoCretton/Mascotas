import styled from "styled-components";


export const StyledCard = styled.div`
  width: 23rem;
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  color: #000000;
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