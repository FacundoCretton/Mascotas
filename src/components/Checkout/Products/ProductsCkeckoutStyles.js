import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }

`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  margin-bottom: 1rem;
  color: #B5651D; 
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 80%;
  max-height: 440px;
  margin: 0 auto;
  overflow-y: auto;
  scrollbar-color: #a9917c #2e2e2e;
  scrollbar-width: thin;

  @media (max-height: 800px) {
    max-height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #B5651D; 
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: #B5651D; 
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
  border: none;
  height: 2px;
  background-color: #B5651D; 
`;

export const PClearStyled = styled.p`
color: #B5651D;
font-size: 1.3rem;
font-weight: 600;
`