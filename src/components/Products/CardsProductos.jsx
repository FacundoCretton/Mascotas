import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const selectedCategory = useSelector(state => state.categories.selectedCategory);
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const toggleView = () => {
    setViewType(prevType => (prevType === "cards" ? "list" : "cards"));
  };

  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [selectedCategory]);


  const filteredProducts = selectedCategory && selectedCategory !== "Todos"
    ? products[selectedCategory]
    : Object.values(products).flatMap(product => product);

  const visibleProducts = filteredProducts.slice(0, limit);

  const handleLoadMoreClick = () => {
    setLimit(prevLimit => Math.min(prevLimit + INITIAL_LIMIT, filteredProducts.length));
  };

  const handleLoadLessClick = () => {
    setLimit(INITIAL_LIMIT);
  };

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
          {visibleProducts.map(pet => <CardProducto {...pet} key={pet.id} />)}
        </CardProductosContainer>
      ) : (
        <ListProductosContainer>
          {/* Renderiza la lista de productos */}
          {visibleProducts.map(pet => <ListProductos {...pet} key={pet.id} />)}
        </ListProductosContainer>
      )}

      <ButtonContainer>
        {/* Botones para ver más o menos productos */}
        {(viewType === "cards" || viewType === "list") && (
          <>
            <Button1
              onClick={handleLoadLessClick}
              secondary="true"
              disabled={limit <= INITIAL_LIMIT}
            >
              <span>Ver Menos</span>
            </Button1>
            <Button1
              onClick={handleLoadMoreClick}
              disabled={limit >= filteredProducts.length}
            >
              Ver Más
            </Button1>
          </>
        )}
      </ButtonContainer>
      
    </>
  );
};

export default CardsProductos;
