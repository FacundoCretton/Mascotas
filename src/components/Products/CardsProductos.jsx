import React, {  useState } from "react";
import { useSelector } from "react-redux";
import CardProducto from "./CardProducto";
import Button1 from "../UI/Button/Button";
import { ProductosContainer, ButtonContainer } from "./ProductsStyles";
import { INITIAL_LIMIT } from "../../utils/constants";

const CardsProductos = () => {
    const [limit, setLimit] = useState(INITIAL_LIMIT);
    let products = useSelector(state => state.products.products);
    const selectedCategory = useSelector(state => state.categories.selectedCategory);
    const totalProducts = useSelector((state) => state.products.totalProducts);
  
  
    
    if (selectedCategory && selectedCategory !== "Todos") {
      products = {
        [selectedCategory]: products[selectedCategory]
      };
    }
    return (
      <>
      <ProductosContainer>
        {
          Object.entries(products).map(([,pets]) => {
            return pets.map((pet) => {
              if (limit >= pet.id || selectedCategory){
                return <CardProducto {...pet} key={pet.id} />
              }
              return null
              
            })
          })
        }
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
  