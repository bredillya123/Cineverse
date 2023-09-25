import styled from 'styled-components';


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


export const FilmCard = (props) => {

    const handleFilmCardClick = () => {
        // Вызовите функцию openModal и передайте информацию о фильме
        props.openModal({
            img: props.image,
            title: props.title,
            year: props.year,
            category: props.category,
            description: props.description,
            rate: props.rate,
            updateRating: props.updateRating
        });
    };

    return (
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
    );
};

export default FilmCard;