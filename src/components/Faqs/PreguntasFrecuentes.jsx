import React, { useState } from "react";
import FaqsData from "../Data/Faqs";
import { Container, CategoryHeader, QuestionContent, QuestionHeader, AccordionContent, Answer, AnswerContainer } from "./PreguntasFrecuentesStyles";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { motion } from "framer-motion";

export const PreguntasFrecuentes = () => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  
    const toggleCategoryAccordion = (index) => {
      setActiveCategoryIndex(activeCategoryIndex === index ? null : index);
    };
  
    const toggleQuestionAccordion = (index) => {
      setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
    };
  
    return (
        <Container>
          <h2>Preguntas Frecuentes</h2>
          <div>
            {FaqsData.map((categoria, categoryIndex) => (
              <div key={categoryIndex}>
                <CategoryHeader onClick={() => toggleCategoryAccordion(categoryIndex)}>
                  <h2>{categoria.titulo}</h2>
                  {activeCategoryIndex === categoryIndex ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </CategoryHeader>
                <AccordionContent
                  animate={{ height: activeCategoryIndex === categoryIndex ? "auto" : 0, opacity: activeCategoryIndex === categoryIndex ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {categoria.preguntas.map((pregunta, questionIndex) => (
                    <QuestionContent key={questionIndex}>
                      <QuestionHeader onClick={() => toggleQuestionAccordion(questionIndex)}>
                        <h3>{pregunta.pregunta}</h3>
                        {activeQuestionIndex === questionIndex ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                      </QuestionHeader>
                      {activeQuestionIndex === questionIndex && (
                        <AnswerContainer
                        ><Answer>{pregunta.respuesta}</Answer></AnswerContainer>
                      )}
                    </QuestionContent>
                  ))}
                </AccordionContent>
              </div>
            ))}
          </div>
        </Container>
      );
};
