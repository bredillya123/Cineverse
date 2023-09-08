import { famelyFilms, cartoonsFilms, FilmlistStyled} from '../../../Home/components/FilmList';
import FilmCard from '../../../Home/components/FilmCard';
import styled from 'styled-components';

export const ProfileFilmList = () => {

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

    return (
        <div>
            <ProfileFilmNavStyled>
                <ProfileCatStyled>Избранные фильмы</ProfileCatStyled>

                <ProfileCatStyled>Продолжить просмотр</ProfileCatStyled>

                <ProfileCatStyled>История</ProfileCatStyled>
            </ProfileFilmNavStyled>

            <FilmlistStyled>
                <FilmCard
                    key={`family-film-1`}
                    image={famelyFilms[1].image}
                    title={famelyFilms[1].name}
                    year={famelyFilms[1].year}
                    description={famelyFilms[1].description}
                />
                <FilmCard
                    key={`family-film-2`}
                    image={cartoonsFilms[2].image}
                    title={cartoonsFilms[2].name}
                    year={cartoonsFilms[2].year}
                    description={cartoonsFilms[2].description}
                />
                <FilmCard
                    key={`family-film-2`}
                    image={cartoonsFilms[3].image}
                    title={cartoonsFilms[3].name}
                    year={cartoonsFilms[3].year}
                    description={cartoonsFilms[3].description}
                />
            </FilmlistStyled>
            
        </div>
    );
};