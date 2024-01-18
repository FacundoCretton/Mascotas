// CategoriasStyles.js
import styled from 'styled-components';

export const ContenedorPrincipal = styled.div`
  text-align: center;
  margin: 50px 0;
`;

export const TituloProductos = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

export const ContenedorCategorias = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const CardCategoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 10px;
  background-color: ${({ selected }) => (selected ? '#ff6363' : '#4caf50')};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  h2 {
    font-size: 1rem;
    margin: 0;
    color: ${({ selected }) => (selected ? '#fff' : '#333')};
  }

  &:hover {
    background-color: ${({ selected }) =>
      selected ? '#ff4848' : '#45a049'};
  }

  &.selected {
    background-color: red; 
  }
`;

export const SubcategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  div {
    cursor: pointer;
    padding: 8px;
    margin: 0 5px;
    border-radius: 4px;
    background-color: ${({ selected }) => (selected ? '#ff6363' : 'blue')};
    color: ${({ selected }) => (selected ? '#fff' : '#333')};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ selected }) =>
        selected ? '#ff4848' : '#45a049'};
    }
  }
`;
