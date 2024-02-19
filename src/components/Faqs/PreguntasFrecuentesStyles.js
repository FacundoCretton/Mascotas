import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-family: "Comfortaa";
    margin-bottom: 20px;
    text-align: center;


  };
`;

export const CategoryHeader = styled.div`
  /* background-color: ${(props) => (props.isActive ? "#e0e0e0" : "#f0f0f0")}; */
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Añadir sombra en la parte inferior */
  font-family: "Comfortaa";
`;

export const QuestionHeader = styled.div`
  /* background-color: #f8f8f8; */
  border-bottom: 1.8px solid #fff;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  font-family: "Noto Sans";
  display: flex;
  justify-content: space-between;
`;

export const QuestionContent = styled.div`
  padding: 10px;
  /* background-color: #f0f0f0; */
  border-radius: 5px;
  font-family: "Noto Sans";
  font-size: 1.2rem;
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
`;

export const Answer = styled(motion.p)`
  margin-top: 10px;
  transform-origin: top;
  
`;

export const AnswerContainer = styled(motion.div)`
  overflow: hidden;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  font-size: 1rem;

`;