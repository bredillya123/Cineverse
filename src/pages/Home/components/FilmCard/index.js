import styled from 'styled-components';

const FilmCardStyled = styled.div`
    width: 47%;
    border-radius: 4px;
    padding: 1%;
    display: flex;
    background: #1d1f26;

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



export const FilmCard = (props) => {
    return (
      <FilmCardStyled>
        <FilmImage src={props.image} alt={props.title} />
        <FilmInfo>
          <div>
            <FilmTitle>{props.title}</FilmTitle>
            <p>Дата выхода: {props.year}</p>
          </div>
          <FilmDescription>{props.description}</FilmDescription>
        </FilmInfo>
      </FilmCardStyled>
    );
};

export default FilmCard;