import Header from "../components/Header";
import { ContainerStyled, MainTitleStyled } from '../Home/index';
import styled from 'styled-components';
import { useState } from 'react';
import { famelyFilms, cartoonsFilms, FilmlistStyled } from "../../features/film-list";
import FilmCard from "../../components/FilmCard";

const SearchStyled = styled.section``;

const SearchBlock = styled.div`
    width: 100%;
    padding: 20px 0px;
    @media screen and (max-width: 1024px) {
        text-align: center;
    }
`;

const SearchInputStyled = styled.input`
    width: 47.5%;
    padding: 10px;
    font-family: 'Noto Sans', sans-serif;
    border-radius: 4px;
    font-size: 16px;
    color: #1d1f26;
    background: #fff;

    @media screen and (max-width: 1024px) {
        width: 90%;
    }
`;

export const Search = () => {

    const AllFilms = famelyFilms.concat(cartoonsFilms);
    // console.log(AllFilmsArray);

    const [value, setVaue] = useState('');

    const filmsFilter = AllFilms.filter(film => {
        return film.name.toLowerCase().includes(value.toLowerCase())
    });

    return (
        <SearchStyled>
            <Header/>
            
            <ContainerStyled>
                <MainTitleStyled>Поиск</MainTitleStyled>

                <SearchBlock>
                    <SearchInputStyled 
                        type="text"
                        placeholder="Введите название фильма"
                        onChange={(event) => setVaue(event.target.value)}
                    />
                </SearchBlock>
                <FilmlistStyled>
                    {filmsFilter.map((film, index) => (
                        <FilmCard
                            key={`all-film-${index}`}
                            image={film.image}
                            title={film.name}
                            year={film.year}
                            description={film.description}
                            rate={film.rate}
                        />
                    ))}
                </FilmlistStyled>
            </ContainerStyled>
        </SearchStyled>
    );
}