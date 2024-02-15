import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CategoryHeader = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const QuestionHeader = styled(motion.div)`
  background-color: #f8f8f8;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const QuestionContent = styled(motion.div)`
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

export const AccordionContent = styled(motion.ul)`
  list-style: none;
`;
