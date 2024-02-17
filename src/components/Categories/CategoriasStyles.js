import styled from 'styled-components';

export const ContenedorPrincipal = styled.div`
  text-align: center;
  margin: 50px 0;
  padding: 20px;
`;

export const TituloProductos = styled.h2`
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: "Comfortaa";
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const ContenedorCategorias = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardCategoria = styled.div`
  padding: 5px 35px;
  background-color: ${({ selected }) => (selected ? '#FFCC80' : '#81D4FA')}; /* Colores actualizados */
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ selected }) => (selected ? '#FFB74D' : '#4FC3F7')}; /* Colores actualizados */
  }

  h2 {
    font-size: 18px;
    color: ${({ selected }) => (selected ? '#fff' : '#333')};
    font-weight: 500;
    text-transform: uppercase;
    margin: 0;
    font-family: "Quicksand";
  }
`;


export const SubcategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  div {
    cursor: pointer;
    padding: 8px 15px;
    margin: 0 5px;
    border-radius: 20px;
    background-color: ${({ selected }) => (selected ? '#FFCC80' : '#81D4FA')}; /* Colores actualizados */
    color: ${({ selected }) => (selected ? '#fff' : '#333')};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ selected }) => (selected ? '#E57373' : '#AED581')}; /* Colores actualizados */
    }
  }
`;


export const CategoryIcon = styled.div`
  font-size: 23px;
  margin-bottom: 10px;
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;



export const ElDivi = styled.div`

  /* display: flex; */
  gap:30px

`;