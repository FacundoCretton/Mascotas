import {css, styled} from 'styled-components';
import {motion} from 'framer-motion';


export const StyledButton = styled(motion.button)`

    padding: 0.5rem 1rem;
    border-radius: ${({radius}) => `${radius}px`};
    outline: none;
    border: none;
    cursor: pointer;
    background: darkkhaki;
    color: white;
    text-transform: uppercase;
    font-weight: 400;

    &:hover {
        opacity: 95%;

    }


    &:disabled{
        cursor: not-allowed;
        opacity: 50%;
    }

    ${({primary}) => primary && 
    css `
        background: #4caf50;

        & span{
            color: #021fef12;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

        }
    `}
`;
