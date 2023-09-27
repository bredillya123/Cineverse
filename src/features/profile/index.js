import styled from 'styled-components';
import { ProfileFilmList } from './componetns/ProfileFimlList';

export const ProfileMain = () => {

    const ProfileContainerStyled = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
        margin-top: 30px;
        position: relative;
    `;

    const ProfileInfoStyled = styled.div`
        width: 100%;
        display: flex;
        column-gap: 30px; 
        
        @media screen and (max-width: 599.99px) {
            flex-direction: column;
        }
    `;

    const ImgContainerStyled = styled.div`
        max-width: 130px;
    `;

    const ProfileImageStyled = styled.img`
        width: 130px;
        height: 130px;
        background: #cecece;
        border-radius: 50%;
    `;

    const ProfileNameStyled = styled.h2`
        font-size: 22px;
        color: #fff;
        padding-bottom: 10px;
    `;

    const SubInfoStyled = styled.h4`
        font-size: 16px;
    `;

    const WhiteTitleStyled = styled.span`
        color: #fff;
        font-weight: 600;
    `;

    const RedactBtnStyled = styled.button`
        max-width: 270px;
        max-height: 40px;
        padding: 10px 8px;
        background: #1d1f26;
        border-radius: 4px;
        color: #8c8c8d;
        border: 1px solid #1d1f26;
        font-size: 16px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        transition: 0.4s ease-in-out;
        

        &::before {
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            background: url("https://cdn.icon-icons.com/icons2/2483/PNG/96/edit_square_icon_149939.png");
            background-size: cover;
            background-repeat: no-repeat;
        }

        @media screen and (max-width: 599.99px) {
            position: absolute;
            top: 0%;
            right: 0%;
        }

        @media screen and (max-width: 1023.99px) {
            width: 42px;
            height: 42px;
            padding: 4px;
            
            span {
                display: none;
            }

            &::before {
                width: 26px;
                height: 26px;
            }
        }

        @media (any-hover: hover) {
            &:hover {
                background: #fff;
                border: 1px solid #fff;
                cursor: pointer;
            }
        }
    `;

    const ProfileSectionStyled = styled.section`
        width: 100%;
        margin-bottom: 50px;
    `;

    return (        
        <ProfileSectionStyled>
            <ProfileContainerStyled>
                <ProfileInfoStyled>
                    <ImgContainerStyled>
                        <ProfileImageStyled width="130" height="130" src="https://cdn.icon-icons.com/icons2/3054/PNG/512/account_profile_user_icon_190494.png" alt="My img"/>
                    </ImgContainerStyled>

                    <div>
                        <ProfileNameStyled>Илья</ProfileNameStyled>
                        <h3>Email: <WhiteTitleStyled>Some@mail.com</WhiteTitleStyled></h3>

                        <SubInfoStyled>Просмотренно фильмов: <WhiteTitleStyled>24</WhiteTitleStyled></SubInfoStyled>
                        <SubInfoStyled>Просмотренно мультфильмов: <WhiteTitleStyled>4</WhiteTitleStyled></SubInfoStyled>
                        <SubInfoStyled>Любимая категория: <WhiteTitleStyled>Эротика</WhiteTitleStyled></SubInfoStyled>
                    </div>
                </ProfileInfoStyled>    

                <RedactBtnStyled><span>Редактировать</span></RedactBtnStyled> 
            </ProfileContainerStyled> 

            <ProfileFilmList/>

        </ProfileSectionStyled>
    );
};