import { FimlList } from "./components/FilmList/index";
import Header from "../components/Header";
import styled from 'styled-components';

export const ContainerStyled = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;


    @media screen and (min-width: 768px) {
        padding: 0 40px;
    }

    @media screen and (max-width: 480px) {
        padding: 0 10px;
    }
`;


export const MainTitleStyled = styled.h1`
    color: #fff;
    font-size: 36px;
    padding: 20px 0px;
`;

export const Home = () => {


    return (
        <>
            <Header></Header>
            <ContainerStyled>                       
                <MainTitleStyled>Главная</MainTitleStyled>
                <div>
                    <p>Мы рады приветствовать вас в мире кино и развлечений. На нашем сайте вы найдете огромную коллекцию фильмов, сериалов и мультфильмов для всех возрастов и вкусов. Независимо от того, что вас интересует — драмы, комедии, научная фантастика, приключения или что-то еще — у нас есть что-то особенное для каждого.</p>
                    <h4>Вот любимые категории наших зрителей!</h4>
                </div>
                <FimlList></FimlList>
            </ContainerStyled>
        </>
    );
};