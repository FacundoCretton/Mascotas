import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../redux/categories/categoriesSlice";
import { CardCategoria } from "./CategoriasStyles";

export const Categoria = ({name, icon, category}) =>{

    const dispatch = useDispatch();

    const selectedCategory = useSelector((state) => state.categories.selectCategory)

    return(
            <CardCategoria

                selected = {category === selectedCategory}
                onClick={()=> dispatch (selectCategory(category))}
            
            
            >
                <h2>{name}</h2>
                {icon}





            </CardCategoria>





    );
}