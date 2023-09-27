import styled from 'styled-components';
import React, { useState } from 'react';
import { Rating } from '../../components/FilmCard/RatingStars';


const FilmCardStyled = styled.div`
    width: 47%;
    border-radius: 4px;
    padding: 1%;
    display: flex;
    background: #1d1f26;
    cursor: pointer;

    @media screen and (max-width: 1199px) {
        width: 100%;
    }

    @media screen and (max-width: 599px) {
        flex-direction: column;
        align-items: center;
        padding: 5%;
    }

`;

const FilmImage = styled.img`
    max-width: 200px;
    min-height: 250px;
`;

const FilmInfo = styled.div`
    padding: 0px 0px 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 599px) {
        padding: 0;
        row-gap: 20px;
    }
`;

const FilmTitle = styled.h4`
    font-size: 26px;
    color: #fff;
    font-weight: 500;
    padding: 10px 0px;

    @media screen and (max-width: 599px) {
        font-size: 22px;
    }
`;

const FilmDescription = styled.p`
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
`;

const ReitBlockStyled = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }

    span {
        font-size: 32px;
        font-weight: 500;
    }
`;

// modal

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
export const ModalContent = styled.div`
    width: 80%;
    height: 90%;
    background: #1d1f26;
    padding: 30px;
    border-radius: 4px;
    position: relative;

    @media screen and (max-width: 599px) {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
`;
export const ModalClose = styled.div`
    width: 42px;
    height: 42px;
    position: absolute;
    top: 0%;
    right: 0%;
    padding: 30px;
    cursor: pointer;


    img {
        width: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 599px) {
        top: 20px;
    }
`;
export const ModalTitleStyle = styled.h2`
    display: block;
    width: 90%;
    font-size: 32px;
    color: #fff;
    margin-bottom: 20px;

    @media screen and (max-width: 599px) {
        font-size: 24px;
        width: 85%;
        padding-top: 20px;
    }
`;
export const PopUpMainInfoStyle = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 599px) {
        flex-direction: column;
        justify-content: center;
    }
`;
export const PopUpImgStyle = styled.img`
    max-width: 18%;
    max-height: 400px;

    @media screen and (max-width: 599px) {
        max-width: 100%;
        max-height: 480px;
    }
`;
export const PopUpDecrStyle = styled.div`
    padding-left: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    @media screen and (max-width: 599px) {
        padding-left: 0px;
        padding-top: 20px;
    }
`;
export const RaitStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const StarsNumsStyle = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`;
export const RateTextStyled = styled.span`
    color: #c5912b;
    font-size: 20px;
`;
export const DescriptionStyle = styled.span`
    color: #fff;
    font-size: 16px;
`;
export const SubTextStyle = styled.span`
    color: #cecece;
    font-size: 18px;
`;



export const FilmCard = (props, { rate }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);

    const handleFilmCardClick = () => {
        setSelectedFilm({
            img: props.image,
            title: props.title,
            year: props.year,
            category: props.category,
            description: props.description,
            rate: props.rate,
        });
        setIsModalOpen(true);
        let body = document.querySelector("body");
        body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedFilm(null);
        setIsModalOpen(false);
        let body = document.querySelector("body");
        body.style.overflow = 'visible';
        setFilmRating(parseFloat(rate));
        setCanChangeRating(true);
    };

    const handleRatingChange = (newRating) => {
        setFilmRating(newRating);
        let newPoints = (newRating + parseFloat(selectedFilm.rate)) / 2;
        selectedFilm.rate = newPoints.toFixed(1);
        setCanChangeRating(false);
    };

    const [filmRating, setFilmRating] = useState(parseFloat(props.rate));
    const [canChangeRating, setCanChangeRating] = useState(true);

    return (
        <>
            <FilmCardStyled onClick={handleFilmCardClick}>
                <FilmImage src={props.image} alt={props.title} />
                <FilmInfo>
                <div>
                    <FilmTitle>{props.title}</FilmTitle>
                    <p>Дата выхода: {props.year}</p>
                    <ReitBlockStyled>
                        <img width="40" height="40" src="https://cdn.icon-icons.com/icons2/259/PNG/96/ic_star_128_28867.png" alt="star"/>
                        <span>{props.rate}</span>
                    </ReitBlockStyled>
                </div>
                
                <FilmDescription>{props.description}</FilmDescription>
                </FilmInfo>
            </FilmCardStyled>
            {isModalOpen && (
                <Modal>
                    <ModalContent>
                        <ModalTitleStyle>{selectedFilm.title}</ModalTitleStyle>
                        <PopUpMainInfoStyle>
                            <PopUpImgStyle src={selectedFilm.img} alt="Logo Film"/>
                            <PopUpDecrStyle>
                                <SubTextStyle>Дата выхода: {selectedFilm.year}</SubTextStyle>
                                <RaitStyle>
                                    <StarsNumsStyle>
                                        <Rating initialRating={filmRating} onRatingChange={handleRatingChange}/>
                                        <RateTextStyled>{selectedFilm.rate}</RateTextStyled>
                                    </StarsNumsStyle>
                                    <span>{canChangeRating ? "Оцените фильм" : "Спасибо, тобой легко манипулировать!"}</span>
                                </RaitStyle>
                                
                                <DescriptionStyle>{selectedFilm.description}</DescriptionStyle>
                            </PopUpDecrStyle>
                            
                        </PopUpMainInfoStyle>
                        <ModalClose onClick={closeModal}><img src="https://cdn.icon-icons.com/icons2/491/PNG/96/close_48124.png" alt="Close"/></ModalClose>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};

export default FilmCard;