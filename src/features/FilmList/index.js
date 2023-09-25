import styled from 'styled-components';
import React, { useState } from 'react';
import FilmCard from '../FilmCard';
import { Rating } from '../RatingStars';


export const famelyFilms = [
    {
        image: "https://static.hdrezka.ac/i/2021/8/31/de3bf86fbfd68ml30j66v.jpg",
        name: "Круэлла / Стервелла",
        year: "2021",
        description: "До того, как стать известной преступницей со страстью к одежде из собачьих шкур, Круэлла Де Виль была известна как Эстелла.",
        category: "family",
        rate: "4.5",
    },
    {
        image: "https://static.hdrezka.ac/i/2022/4/19/k265edb8b0072lu54a57x.jpg",
        name: "Фантастические твари: Тайны Дамблдора",
        year: "2022",
        description: "1932-й год. Грин-де-Вальд и его круг ближайших последователей стремятся захватить абсолютную власть над Волшебным миром, собирая поддержку для участия в предстоящих выборах Верховного мага на Международной конференции волшебников.",
        category: "family",
        rate: 4.1,
    },
    {
        image: "https://static.hdrezka.ac/i/2013/8/14/c7f84934738c2fw18s42a.jpg",
        name: "Пираты Карибского моря: Проклятие Черной жемчужины",
        year: "2003",
        description: "Пиратское судно «Черная жемчужина» совершает дерзкое нападение на Порт-Ройал, похищая, среди прочего, дочь губернатора.",
        category: "family",
        rate: 4.9,
    },
    {
        image: "https://static.hdrezka.ac/i/2020/11/9/xb5614ffe43dbzm54q83f.jpeg",
        name: "Один дома",
        year: "1990",
        description: "Огромное семейство Маккалистеров собирается отправиться на Рождественские праздники в Париж.",
        category: "family",
        rate: 3.9,
    },
    {
        image: "https://static.hdrezka.ac/i/2022/1/2/z4e25d1dc1581ax68j93w.jpeg",
        name: "Чарли и шоколадная фабрика",
        year: "2005",
        description: "Фильм снят по мотивам одноименной повести английского писателя Роальда Даля.",
        category: "family",
        rate: 3.3,
    },
];

export const cartoonsFilms = [
    {
        image: "https://static.hdrezka.ac/i/2023/6/4/s11a39b3c60f8ko11i71d.jpg",
        name: "Человек-паук: Паутина Вселенных",
        year: "2023",
        description: "Гвен Стейси присоединяется к элитному отряду Людей-пауков Мигеля О’Хары и помогает защищать мультивселенную от опасных угроз и аномалий.",
        category: "cartoon",
        rate: 3.7,
    },
    {
        image: "https://static.hdrezka.ac/i/2023/7/4/jd71d1581ab24ey58h54e.jpg",
        name: "Футурама",
        year: "1999",
        description: "Накануне Нового 2000 года, неудачливый нью-йоркский разносчик пиццы Филип Джей Фрай, которого только что бросила девушка, доставляет заказ в инновационную криогенную лабораторию, но понимает, что его разыграли.",
        category: "cartoon",
        rate: 3.5,
    },
    {
        image: "https://static.hdrezka.ac/i/2023/8/25/c71f468f74321ea42v24l.jpg",
        name: "Рик и Морти",
        year: "2013",
        description: "Сюжет повествует о безудержных приключениях гениального ученого, страдающего от алкогольной зависимости Рика Санчеза и его наивного, но иногда смелого 14-летнего внука Морти Смита.",
        category: "cartoon",
        rate: 4.7,
    },
    {
        image: "https://static.hdrezka.ac/i/2018/8/9/y8492699e7490wd11s64q.jpg",
        name: "Аватар: Легенда об Аанге",
        year: "2005",
        description: "Сюжет мультфильма переносит зрителя в вымышленный мир, где бок о бок живут люди, фантастические животные и духи.",
        category: "cartoon",
        rate: 4.2,
    },
    {
        image: "https://static.hdrezka.ac/i/2014/7/24/kbc0201d904d8qw66r17s.jpg",
        name: "Время приключений",
        year: "2010",
        description: "Действия мультсериала разворачиваются в постапокалиптическом мире под названием Земля Ууу, пережившем ядерную войну.",
        category: "cartoon",
        rate: 3.9,
    },
];

export const FilmlistStyled = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid #fff;
`;

const FilmContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-bottom: 50px;
`;

const CategoryTitle = styled.h2`
    color: #fff;
    font-size: 28px;
    padding: 15px 0px;
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



export const FimlList = ({ rate }) => {
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
        <FilmContainerStyled>
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
            <CategoryTitle>Семейные</CategoryTitle>
            <FilmlistStyled>                
                {famelyFilms.map((film, index) => (
                    <FilmCard
                        key={`family-film-${index}`}
                        image={film.image}
                        title={film.name}
                        year={film.year}
                        description={film.description}
                        rate={film.rate}
                        openModal={openModal}
                    />
                ))}
            </FilmlistStyled>

            <CategoryTitle>Мультфильмы</CategoryTitle>
            <FilmlistStyled> 
                {cartoonsFilms.map((film, index) => (
                    <FilmCard
                        key={`cartoon-film-${index}`}
                        image={film.image}
                        title={film.name}
                        year={film.year}
                        description={film.description}
                        rate={film.rate}
                        openModal={openModal}
                    />
                ))}
            </FilmlistStyled>
        </FilmContainerStyled>
    );
};