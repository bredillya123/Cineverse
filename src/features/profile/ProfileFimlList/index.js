import { famelyFilms, cartoonsFilms, FilmlistStyled, Modal, ModalContent, ModalClose, ModalTitleStyle, PopUpMainInfoStyle, PopUpImgStyle, PopUpDecrStyle, RaitStyle, StarsNumsStyle, RateTextStyled, DescriptionStyle, SubTextStyle} from "../../FilmList";
import FilmCard from '../../FilmCard';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Rating } from '../../RatingStars';

export const ProfileFilmList = ({ rate }) => {

    const ProfileFilmNavStyled = styled.div`
        width: 100%;
        border-bottom: 1px solid #cecece;
        margin-bottom: 30px;
        display: flex;

        @media screen and (max-width: 1023.99px) {
            flex-wrap: wrap;
            column-gap: 15px;
            row-gap: 15px;
            border-bottom: none;
        }

        @media screen and (max-width: 599.99px) {
            padding-bottom: 25px;
            border-bottom: 2px solid #cecece;
        }
    `;

    const ProfileCatStyled = styled.a`
        padding: 0px 30px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.4s ease-in-out;
        font-size: 18px;
        color: #cecece;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            bottom: 0%;
            right: 0%;
            display: block;
            width: 100%;
            height: 2px;
            background: #fff;
            opacity: 0%;
            transition: 0.4s ease-in-out;
        }

        @media (any-hover: hover) {
            &:hover {
                color: #fff;

                &::before {
                    opacity: 100%;
                    right: 0%;
                    bottom: 0%;
                }
            }
        }

        @media screen and (max-width: 599.99px) {
            width: 100%;
        }

        @media screen and (max-width: 1023.99px) {
            color: #8c8c8d;
            border-radius: 4px;
            background: #1d1f26;
        }
        
    `;

    
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedFilm, setSelectedFilm] = useState(null);

        const openModal = (film) => {
            setSelectedFilm(film);
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

        const [filmRating, setFilmRating] = useState(parseFloat(rate));
        const [canChangeRating, setCanChangeRating] = useState(true);

        const handleRatingChange = (newRating) => {
            setFilmRating(newRating);
            let newPoints = (newRating + parseFloat(selectedFilm.rate)) / 2;
            selectedFilm.rate = newPoints.toFixed(1);
            setCanChangeRating(false);
        };
    return ( 
        <div>
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
            <ProfileFilmNavStyled>
                <ProfileCatStyled>Избранные фильмы</ProfileCatStyled>

                <ProfileCatStyled>Продолжить просмотр</ProfileCatStyled>

                <ProfileCatStyled>История</ProfileCatStyled>
            </ProfileFilmNavStyled>

            <FilmlistStyled>
                {famelyFilms.slice(1, 3).map((el, id) => (
                   <FilmCard key={`family-film-${id}`} {... el} openModal={openModal}/> 
                ))}
                {cartoonsFilms.slice(2, 3).map((el, id) => (
                   <FilmCard key={`family-film-${id}`} {... el} openModal={openModal}/> 
                ))}
            </FilmlistStyled>
            
        </div>
    );
};