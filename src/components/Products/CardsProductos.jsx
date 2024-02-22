import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardProducto from "./CardProducto";
import ListProductos from "./ListProductos/ListProductos";
import Button1 from "../UI/Button/Button";
import {  CardProductoContainer, CardProductosContainer, FiltersIconsProducts, LoadButtonContainer, SectionProductosContainer, containerVariants } from "./ProductsStyles";
import { INITIAL_LIMIT } from "../../utils/constants";
import { FaList, FaTh } from "react-icons/fa";
import { ListProductosContainer } from "./ListProductos/ListProductosStyles";
import PrecioFilter from "./Filters/PrecioFilter";
import Categorias from "../Categories/Categorias";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const [viewType, setViewType] = useState("cards");
  const selectedCategory = useSelector(state => state.categories.selectedCategory);
  const products = useSelector(state => state.products.products);
  const selectedSubcategory = useSelector(state => state.categories.selectedSubcategory);
  const precioSortOrder = useSelector(state => state.categories.precioSortOrder);
  const { ref, inView } = useInView({ threshold: 0.5 });

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
      <Categorias/>

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
          <CardProductosContainer ref={ref}>
            {/* Renderizar productos */}
            {visibleProducts.map(product => (
            <CardProductoContainer key={product.id} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <CardProducto {...product} />
          </CardProductoContainer>           ))}
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















// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import CardProducto from "./CardProducto";
// import ListProductos from "./ListProductos/ListProductos";
// import Button1 from "../UI/Button/Button";
// import { CardProductoContainer, CardProductosContainer, FiltersIconsProducts, LoadButtonContainer, SectionProductosContainer, containerVariants } from "./ProductsStyles";
// import { INITIAL_LIMIT } from "../../utils/constants";
// import { FaList, FaTh } from "react-icons/fa";
// import { ListProductosContainer } from "./ListProductos/ListProductosStyles";
// import PrecioFilter from "./Filters/PrecioFilter";
// import Categorias from "../Categories/Categorias";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const CardsProductos = () => {
//   const [limit, setLimit] = useState(INITIAL_LIMIT);
//   const [viewType, setViewType] = useState("cards");
//   const [animationPlayed, setAnimationPlayed] = useState(false);
//   const selectedCategory = useSelector(state => state.categories.selectedCategory);
//   const products = useSelector(state => state.products.products);
//   const selectedSubcategory = useSelector(state => state.categories.selectedSubcategory);
//   const precioSortOrder = useSelector(state => state.categories.precioSortOrder);
//   const { ref, inView } = useInView({ threshold: 0.5 });
//   const controls = useAnimation();

//   const toggleView = () => {
//     setViewType(prevType => (prevType === "cards" ? "list" : "cards"));
//   };

//   useEffect(() => {
//     if (inView) {
//       setAnimationPlayed(true);
//     }
//   }, [inView]);

//   useEffect(() => {
//     controls.start("visible");
//   }, [controls]);

//   const sortProductsByPrice = (products) => {
//     if (precioSortOrder === "asc") {
//       return [...products].sort((a, b) => a.price - b.price);
//     } else if (precioSortOrder === "desc") {
//       return [...products].sort((a, b) => b.price - a.price);
//     } else {
//       return products;
//     }
//   };

//   // Filtrar y ordenar productos
//   const filteredProducts =
//     selectedCategory && selectedCategory !== "Todos"
//       ? selectedSubcategory
//         ? products[selectedCategory].filter(
//             (product) => product.subcategory === selectedSubcategory.name
//           )
//         : products[selectedCategory]
//       : selectedCategory === "Todos"
//         ? selectedSubcategory
//           ? Object.values(products).flatMap((product) =>
//               product.filter((p) => p.subcategory === selectedSubcategory.name)
//             )
//           : Object.values(products).flatMap((product) => product)
//         : [];

//   const sortedProducts = sortProductsByPrice(filteredProducts);

//   // Dividir productos en dos grupos: con stock y sin stock
//   const stockAvailableProducts = sortedProducts.filter(product => product.stock);
//   const outOfStockProducts = sortedProducts.filter(product => !product.stock);

//   // Ordenar productos: primero los con stock y luego los sin stock
//   const orderedProducts = [...stockAvailableProducts, ...outOfStockProducts];

//   // Limitar la cantidad de productos visibles
//   const visibleProducts = orderedProducts.slice(0, limit);

//   const handleLoadMoreClick = () => {
//     setLimit(prevLimit => Math.min(prevLimit + INITIAL_LIMIT, orderedProducts.length));
//   };

//   const handleLoadLessClick = () => {
//     setLimit(INITIAL_LIMIT);
//   };

//   return (
//     <>
//       <Categorias/>

//       <SectionProductosContainer>
//         <FiltersIconsProducts>
//           <Button1
//             onClick={toggleView}
//             radius="10"
//             style={{ marginRight: "10px" }}
//           >
//             {viewType === "cards" ? <FaList /> : <FaTh />}
//           </Button1>
//           <PrecioFilter/>
//         </FiltersIconsProducts>

//         {viewType === "cards" ? (
//           <CardProductosContainer ref={ref}>
//             {/* Renderizar productos */}
//             {visibleProducts.map(product => (
//               <CardProductoContainer key={product.id} variants={containerVariants} initial="hidden" animate={controls}>
//                 <CardProducto {...product} />
//               </CardProductoContainer>
//             ))}
//           </CardProductosContainer>
//         ) : (
//           <ListProductosContainer>
//             {/* Renderizar productos */}
//             {visibleProducts.map(product => (
//               <ListProductos {...product} key={product.id} />
//             ))}
//           </ListProductosContainer>
//         )}

//         <LoadButtonContainer>
//           {/* Botones para ver más o menos productos */}
//           {(viewType === "cards" || viewType === "list") && (
//             <>
//               <Button1
//                 onClick={handleLoadLessClick}
//                 radius="10"
//                 secondary="true"
//                 disabled={limit <= INITIAL_LIMIT}
//                 padding='1rem 2rem'
//                 icon={true}
//                 direction="up"
//               >
//                 Ver Menos
//               </Button1>
//               <Button1
//                 onClick={handleLoadMoreClick}
//                 disabled={limit >= orderedProducts.length}
//                 radius="10"
//                 padding='1rem 2rem'
//                 icon={true}
//                 direction="down"
//               >
//                 Ver Más
//               </Button1>
//             </>
//           )}
//         </LoadButtonContainer>
//       </SectionProductosContainer>
//     </>
//   );
// };


// export default CardsProductos;



//Quiero que la animacion de framer motion  se apliquen a los productos pero que solo se produzca la animacion cuando  el usuario haga scroll hacia abajo y no cuando se recargue la pagina.

//Para ello voy a utilizar el hook useInView de la libreria react-intersection-observer que me permite detectar cuando un elemento esta en el viewport del usuario.

//Primero instalo la libreria con npm install react-intersection-observer

//Luego importo el hook useInView en el componente CardsProductos.jsx

//Luego lo utilizo en el contenedor de productos y le paso el parametro threshold que me permite definir el porcentaje de visibilidad que debe tener el elemento para que se dispare el evento.

//Luego desestructuro el parametro inView que me devuelve el hook useInView y lo utilizo para condicionar la animacion de framer motion.

//Finalmente le paso el parametro threshold al hook useInView para que se dispare el evento cuando el usuario haga scroll hacia abajo.

//El codigo final queda de la siguiente manera:

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import CardProducto from "./CardProducto";
// import ListProductos from "./ListProductos/ListProductos";
// import Button1 from "../UI/Button/Button";
// import {  CardProductoContainer, CardProductosContainer, FiltersIconsProducts, LoadButtonContainer, SectionProductosContainer, containerVariants } from "./ProductsStyles";
// import { INITIAL_LIMIT } from "../../utils/constants";
// import { FaList, FaTh } from "react-icons/fa";
// import { ListProductosContainer } from "./ListProductos/ListProductosStyles";
// import PrecioFilter from "./Filters/PrecioFilter";
// import Categorias from "../Categories/Categorias";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
//
// const CardsProductos = () => {
//   const [limit, setLimit] = useState(INITIAL_LIMIT);
//   const [viewType, setViewType] = useState("cards");
//   const selectedCategory = useSelector(state => state.categories.selectedCategory);
//   const products = useSelector(state => state.products.products);
//   const selectedSubcategory = useSelector(state => state.categories.selectedSubcategory);
//   const precioSortOrder = useSelector(state => state.categories.precioSortOrder);
//   const { ref, inView } = useInView({ threshold: 0.5 });
//
//   const toggleView = () => {
//     setViewType(prevType => (prevType === "cards" ? "list" : "cards"));
//   };
//
//   useEffect(() => {
//     setLimit(INITIAL_LIMIT);
//   }, [selectedCategory, selectedSubcategory]);
//
//   const sortProductsByPrice = (products) => {
//     if (precioSortOrder === "asc") {
//       return [...products].sort((a, b) => a.price - b.price);
//     } else if (precioSortOrder === "desc") {
//       return [...products].sort((a, b) => b.price - a.price);
//     } else {
//       return products;
//     }
//   };
//
//   // Filtrar y ordenar productos
//   const filteredProducts =
//     selectedCategory && selectedCategory !== "Todos"
//       ? selectedSubcategory
//         ? products[selectedCategory].filter(
//             (product) => product.subcategory === selectedSubcategory.name
//           )
//         : products[selectedCategory]
//       : selectedCategory === "Todos"
//         ? selectedSubcategory
//           ? Object.values(products).flatMap((product) =>
//               product.filter((p) => p.subcategory === selectedSubcategory.name)
//             )
//           : Object.values(products).flatMap((product) => product)
//         : [];
//
//   const sortedProducts = sortProductsByPrice(filteredProducts);
//
//   // Dividir productos en dos grupos: con stock y sin stock
//   const stockAvailableProducts = sortedProducts.filter(product => product.stock);
//   const outOfStockProducts = sortedProducts.filter(product => !product.stock);
//
//   // Ordenar productos: primero los con stock y luego los sin stock
//   const orderedProducts = [...stockAvailableProducts, ...outOfStockProducts];
//
//   // Limitar la cantidad de productos visibles
//   const visibleProducts = orderedProducts.slice(0, limit);
//
//   const handleLoadMoreClick = () => {
//     setLimit(prevLimit => Math.min(prevLimit + INITIAL_LIMIT, orderedProducts.length));
//   };
//
//   const handleLoadLessClick = () => {
//     setLimit(INITIAL_LIMIT);
//   };
//
//   return (
//     <>
//       <Categorias/>
//
//       <SectionProductosContainer>
//         <FiltersIconsProducts>
//           <Button1
//             onClick={toggleView}
//             radius="10"
//             style={{ marginRight: "10px" }}
//           >
//             {viewType === "cards" ? <FaList /> : <FaTh />}
//           </Button1>
//           <PrecioFilter/>
//         </FiltersIconsProducts>
//
//         {viewType === "cards" ? (
//           <CardProductosContainer ref={ref}>
//             {/* Renderizar productos */}
//             {visibleProducts.map(product => (
//             <CardProductoContainer key={product.id} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
//             <CardProducto {...product} />
//           </CardProductoContainer>           ))}
//           </CardProductosContainer>
//         ) : (
//           <ListProductosContainer>
//             {/* Renderizar productos */}
//             {visibleProducts.map(product => (
//               <ListProductos {...product} key={product.id} />
//             ))}
//           </ListProductosContainer>
//         )}
//
//         <LoadButtonContainer>
//           {/* Botones para ver más o menos productos */}
//           {(viewType === "cards" || viewType === "list") && (
//             <>
//               <Button1
//                 onClick={handleLoadLessClick}
//                 radius="10"
//                 secondary="true"
//                 disabled={limit <= INITIAL_LIMIT}
//                 padding='1rem 2rem'
//                 icon={true}
//                 direction="up"
//               >
//                 Ver Menos
//               </Button1>
//               <Button1
//                 onClick={handleLoadMoreClick}
//                 disabled={limit >= orderedProducts.length}
//                 radius="10"
//                 padding='1rem 2rem'
//                 icon={true}
//                 direction="down"
//               >
//                 Ver Más
//               </Button1>
//             </>
//           )}
//         </LoadButtonContainer>
//       </SectionProductosContainer>
//     </>
//   );
// };
//
//
// export default CardsProductos;


// Y para que la animacion no se repita cada vez que el usuario haga scroll hacia abajo, voy a utilizar el hook useEffect para que la animacion solo se produzca una vez cuando el usuario haga scroll hacia abajo.

// El hook useEffect me permite ejecutar un efecto secundario en un componente funcional, en este caso voy a utilizar el hook useEffect para que la animacion de framer motion solo se produzca una vez cuando el usuario haga scroll hacia abajo.

// El hook useEffect recibe dos parametros, el primero es una funcion que se ejecuta cuando el componente se monta y el segundo es un array de dependencias que le indica al hook useEffect cuando debe ejecutar la funcion.

// Si el array de dependencias esta vacio, el hook useEffect solo se ejecuta una vez cuando el componente se monta.

// El codigo del hook useEffect para que no se repita la animacion de framer motion cuando el usuario haga scroll hacia abajo queda de la siguiente manera:

// useEffect(() => {
//     if (inView) {
//       setInView(true);
//     }
//   }, [inView]);

//setInView es una funcion que me permite cambiar el estado de la variable inView a true cuando el usuario haga scroll hacia abajo.

//El codigo del useState para la variable inView queda de la siguiente manera:

// const [inView, setInView] = useState(false);

//Pero ya tenemos un inview en el ref del useInView, por lo que vamos a cambiar el nombre de la variable inView del useState a animationPlayed.

//El codigo de animationPlayed queda de la siguiente manera:

// const [animationPlayed, setAnimationPlayed] = useState(false);

//Luego cambiamos el nombre de la funcion setInView a setAnimationPlayed.

//El codigo final del hook useEffect para que no se repita la animacion de framer motion cuando el usuario haga scroll hacia abajo queda de la siguiente manera:

// useEffect(() => {
//     if (inView) {
//       setAnimationPlayed(true);
//     }
//   }, [inView]);

//Y finalmente le pasamos el parametro threshold al hook useInView para que se dispare el evento cuando el usuario haga scroll hacia abajo.

//El codigo final del hook useInView queda de la siguiente manera:

// const { ref, inView } = useInView({ threshold: 0.5 });

//Luego debomos cambiar el parametro inView del hook useInView por animationPlayed en el componente CardProductoContainer de framer motion.



//El problema es que la animacion se ve poco fluida y se produce un efecto de parpadeo en los productos cuando el usuario hace scroll hacia abajo.

//Para solucionar este problema voy a utilizar el hook useAnimation de la libreria framer motion que me permite controlar la animacion de un componente.

//Primero importo el hook useAnimation en el componente CardsProductos.jsx

//Luego lo utilizo para controlar la animacion de framer motion en el componente CardProductoContainer.

//El codigo final del hook useAnimation queda de la siguiente manera:

// const controls = useAnimation();

//Luego le paso el parametro controls al componente CardProductoContainer de framer motion.

//El codigo final del componente CardProductoContainer de framer motion queda de la siguiente manera:

// <CardProductoContainer key={product.id} variants={containerVariants} initial="hidden" animate={controls}>



//El codigo final del componente CardsProductos.jsx sin las importaciones queda de la siguiente manera:

