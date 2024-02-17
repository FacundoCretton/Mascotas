import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardProducto from "./CardProducto";
import ListProductos from "./ListProductos/ListProductos";
import Button1 from "../UI/Button/Button";
import { ButtonContainer, CardProductosContainer } from "./ProductsStyles";
import { INITIAL_LIMIT } from "../../utils/constants";
import { FaList, FaTh } from "react-icons/fa";
import { ListProductosContainer } from "./ListProductos/ListProductosStyles";





const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const [viewType, setViewType] = useState("cards");
  const products = useSelector(state => state.products.products);
  const selectedCategory = useSelector(state => state.categories.selectedCategory);
  const totalProducts = useSelector(state => state.products.totalProducts);

  const toggleView = () => {
    setViewType(prevType => (prevType === "cards" ? "list" : "cards"));
  };

  let filteredProducts = { ...products };
  if (selectedCategory && selectedCategory !== "Todos") {
    filteredProducts = {
      [selectedCategory]: products[selectedCategory]
    };
  }

  return (
    <>
          <ButtonContainer>          
            <Button1 onClick={toggleView} 
              style={{ marginRight: "10px" }}>{viewType === "cards" ? <FaList /> : <FaTh />}
            </Button1>
          </ButtonContainer>
      {viewType === "cards" ? (
        <CardProductosContainer>
          {/* Renderiza las tarjetas de productos */}
          {Object.entries(filteredProducts).map(([_, pets]) =>
            pets.map(pet => (limit >= pet.id || selectedCategory ? (
              <CardProducto {...pet} key={pet.id} />
            ) : null))
          )}
        </CardProductosContainer>
      ) : (
        <ListProductosContainer>
          {/* Renderiza la lista de productos */}
          {Object.entries(filteredProducts).map(([_, pets]) =>
            pets.map(pet => (limit >= pet.id || selectedCategory ? (
              <ListProductos {...pet} key={pet.id} />
            ) : null))
          )}
        </ListProductosContainer>
      )}
      
      {!selectedCategory && (
        <ButtonContainer>
          {/* Botón para cambiar entre las vistas de tarjetas y lista */}

          {/* Botones para ver más o menos productos (solo para la vista de tarjetas) */}
          {viewType === "cards" && (
            <>
              <Button1
                onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
                secondary="true"
                disabled={INITIAL_LIMIT === limit}
              >
                <span>Ver Menos</span>
              </Button1>
              <Button1
                onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
                disabled={totalProducts <= limit}
              >
                Ver Más
              </Button1>
            </>
          )}
        </ButtonContainer>
      )}
    </>
  );
};

export default CardsProductos;
