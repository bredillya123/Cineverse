import styled from 'styled-components';
import React, { useState } from 'react';

export const Rating = ({ initialRating, onRatingChange }) => {
    const StarStyled = styled.img`
        width: 40px;
        height: 40px;
        cursor: pointer;
        user-select: none;
        transition: 0.1s ease-in;
        border-radius: 50%;

        &:hover {
            transform: scale(1.1);
        }
        
        @media screen and (max-width: 599px) {
            width: 20px;
            height: 20px;
            margin-right: 2px;
        }
    `;

    const [rating, setRating] = useState(initialRating);
    const [canChangeRating, setCanChageRatign] = useState(true);

    const handleStarClick = (newRating) => {
        if (canChangeRating){
            setRating(newRating);
            onRatingChange(newRating);
            setCanChageRatign(false);
        }
    }

    const stars = [];
    for (let i = 1; i <= 10; i++){
        stars.push(
            <StarStyled 
                key={i}
                src={i <= rating ? 'https://cdn.icon-icons.com/icons2/1522/PNG/96/starlinear_106175.png' : 'https://cdn.icon-icons.com/icons2/796/PNG/96/star_icon-icons.com_65720.png'}
                alt={`Star ${i}`}
                onClick={() => handleStarClick(i)}
            />
        );
    }

    return <div>{stars}</div>
}
