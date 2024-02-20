import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardProducto from "./CardProducto";
import ListProductos from "./ListProductos/ListProductos";
import Button1 from "../UI/Button/Button";
import { ButtonContainer, CardProductosContainer, FiltersIconsProducts, LoadButtonContainer } from "./ProductsStyles";
import { INITIAL_LIMIT } from "../../utils/constants";
import { FaList, FaTh } from "react-icons/fa";
import { ListProductosContainer } from "./ListProductos/ListProductosStyles";
import PrecioFilter from "./Filters/PrecioFilter";

const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const [viewType, setViewType] = useState("cards");
  const selectedCategory = useSelector(state => state.categories.selectedCategory);
  const products = useSelector(state => state.products.products);
  const selectedSubcategory = useSelector(state => state.categories.selectedSubcategory);
  const precioSortOrder = useSelector(state => state.categories.precioSortOrder);

  const toggleView = () => {
    setViewType(prevType => (prevType === "cards" ? "list" : "cards"));
  };

  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [selectedCategory, selectedSubcategory]);

  const sortProductsByPrice = (products) => {
    if (precioSortOrder === "asc") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (precioSortOrder === "desc") {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  // Filtrar y ordenar productos
  const filteredProducts = 
    selectedCategory && selectedCategory !== "Todos"
      ? selectedSubcategory
        ? products[selectedCategory].filter(
            (product) => product.subcategory === selectedSubcategory.name
          )
        : products[selectedCategory]
      : selectedCategory === "Todos"
        ? selectedSubcategory
          ? Object.values(products).flatMap((product) =>
              product.filter((p) => p.subcategory === selectedSubcategory.name)
            )
          : Object.values(products).flatMap((product) => product)
        : [];

  const sortedProducts = sortProductsByPrice(filteredProducts);
  const visibleProducts = sortedProducts.slice(0, limit);

  const handleLoadMoreClick = () => {
    setLimit(prevLimit => Math.min(prevLimit + INITIAL_LIMIT, sortedProducts.length));
  };

  const handleLoadLessClick = () => {
    setLimit(INITIAL_LIMIT);
  };

  return (
    <>
      <FiltersIconsProducts>          
        <Button1 
          onClick={toggleView}
          radius="10" 
          style={{ marginRight: "10px" }}
          >{viewType === "cards" ? <FaList /> : <FaTh />}
        </Button1>
        <PrecioFilter/>
      </FiltersIconsProducts>

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

      <LoadButtonContainer>
        {/* Botones para ver más o menos productos */}
        {(viewType === "cards" || viewType === "list") && (
          <>

              <Button1
                  onClick={handleLoadLessClick}
                  radius="10"
                  secondary="true"
                  disabled={limit <= INITIAL_LIMIT}
                  padding='1rem 2rem'
                  icon={true}
                  direction="up" 
              >
                  Ver Menos
              </Button1>
              <Button1
                 onClick={handleLoadMoreClick}
                 disabled={limit >= sortedProducts.length}
                 radius="10"
                 padding='1rem 2rem'
                 icon={true} 
                 direction="down" 
              >
                  Ver Más
              </Button1>
          </>
        )}
      </LoadButtonContainer>
      
    </>
  );
};

export default CardsProductos;
