// HeroComponent.jsx
import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import {
  CarouselContainer,
  CarouselSlide,
  InfoSide,
  ImageSide,
  AnimatedPetImage,
  CatFoodImage,
  InfoTitle,
  InfoDescription,
} from './HeroStyles';
import DogImage from './HeroImg/Perro Canva 2.png';
import CatImage from './HeroImg/Gato Canva 2.png';
import CatFood from './HeroImg/CatFood.png';

const textData = {
  dog: {
    description: 'Descripción del alimento para perros.',
  },
  cat: {
    description: 'Cosa Rica!!.',
  },
};

const InteractiveCarousel = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleMouseEnter = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleMouseLeave = () => {
    setSelectedAnimal(null);
  };

  return (
    <CarouselContainer>
      <CarouselSlide>
        <InfoSide>
          {selectedAnimal && (
            <ImageSide>
              {selectedAnimal === 'dog' ? (
                <AnimatedPetImage
                  src={DogImage}
                  alt="Perro"
                  onMouseEnter={() => handleMouseEnter('dog')}
                  onMouseLeave={handleMouseLeave}
                />
              ) : (
                <CatFoodImage src={CatFood} alt="Alimento para Gatos" />
              )}
            </ImageSide>
          )}
          <InfoSide>
            <InfoTitle>
              {selectedAnimal ? (
                textData[selectedAnimal]?.title
              ) : (
                'Alimento para Perros y Gatos'
              )}
            </InfoTitle>
            <InfoDescription>{textData[selectedAnimal]?.description}</InfoDescription>
          </InfoSide>
        </InfoSide>
        <ImageSide>
          <AnimatedPetImage
            src={DogImage}
            alt="Perro"
            onMouseEnter={() => handleMouseEnter('dog')}
            onMouseLeave={handleMouseLeave}
          />
          <AnimatedPetImage
            src={CatImage}
            alt="Gato"
            onMouseEnter={() => handleMouseEnter('cat')}
            onMouseLeave={handleMouseLeave}
          />
        </ImageSide>
      </CarouselSlide>
      {/* Otros slides aquí */}
    </CarouselContainer>
  );
};

export default InteractiveCarousel;