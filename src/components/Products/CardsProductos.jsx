import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardProducto from "./CardProducto";
import ListProductos from "./ListProductos/ListProductos";
import Button1 from "../UI/Button/Button";
import { ButtonContainer, CardProductosContainer, FiltersIconsProducts, LoadButtonContainer, SectionProductosContainer } from "./ProductsStyles";
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

  // Dividir productos en dos grupos: con stock y sin stock
  const stockAvailableProducts = sortedProducts.filter(product => product.stock);
  const outOfStockProducts = sortedProducts.filter(product => !product.stock);

  // Ordenar productos: primero los con stock y luego los sin stock
  const orderedProducts = [...stockAvailableProducts, ...outOfStockProducts];

  // Limitar la cantidad de productos visibles
  const visibleProducts = orderedProducts.slice(0, limit);

  const handleLoadMoreClick = () => {
    setLimit(prevLimit => Math.min(prevLimit + INITIAL_LIMIT, orderedProducts.length));
  };

  const handleLoadLessClick = () => {
    setLimit(INITIAL_LIMIT);
  };

  return (
    <>
      <SectionProductosContainer>
        <FiltersIconsProducts>          
          <Button1 
            onClick={toggleView}
            radius="10" 
            style={{ marginRight: "10px" }}
          >
            {viewType === "cards" ? <FaList /> : <FaTh />}
          </Button1>
          <PrecioFilter/>
        </FiltersIconsProducts>

        {viewType === "cards" ? (
          <CardProductosContainer>
            {/* Renderizar productos */}
            {visibleProducts.map(product => (
              <CardProducto {...product} key={product.id} />
            ))}
          </CardProductosContainer>
        ) : (
          <ListProductosContainer>
            {/* Renderizar productos */}
            {visibleProducts.map(product => (
              <ListProductos {...product} key={product.id} />
            ))}
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
                disabled={limit >= orderedProducts.length}
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
      </SectionProductosContainer>
    </>
  );
};

export default CardsProductos;
