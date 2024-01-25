import React, {  useState } from "react";
import { useSelector } from "react-redux";
import CardProducto from "./CardProducto";
import Button1 from "../UI/Button/Button";
import { ProductosContainer, ButtonContainer } from "./ProductsStyles";
import { INITIAL_LIMIT } from "../../utils/constants";

const CardsProductos = () => {
    const [limit, setLimit] = useState(INITIAL_LIMIT);
    const products = useSelector((state) => state.products.products);
    const selectedCategory = useSelector((state) => state.categories.selectedCategory);
    const totalProducts = useSelector((state) => state.products.totalProducts);
  
    console.log("Selected Category:", selectedCategory);
    console.log("Filtered Products:", products[selectedCategory]);
  
    let filteredProducts = products;

    // if (selectedCategory && selectedCategory !== "Todos") {
    //   filteredProducts = products.filter(
    //     (product) => product.category === selectedCategory
    //   );
    // }
  

    return (
      <>
<ProductosContainer>
  {Array.isArray(filteredProducts) &&
    filteredProducts.flatMap((subcategories) =>
      subcategories.filter((pet) =>
        (limit >= pet.id || selectedCategory) &&
        (!selectedCategory || pet.subcategory.includes(selectedCategory))
      ).map((pet) => (
        <CardProducto key={pet.id} {...pet} />
      ))
    )}
</ProductosContainer>
  
        {!selectedCategory && (
          <ButtonContainer>
            <Button1
              onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
              secondary="true"
              disabled={INITIAL_LIMIT === limit}
            >
              <span>Ver menos</span>
            </Button1>
            <Button1 onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)} disabled={totalProducts <= limit}>
              Ver más
            </Button1>
          </ButtonContainer>
        )}
      </>
    );
};
  
  
  
export default CardsProductos;
  