import { Link } from "react-router-dom";
import styled from 'styled-components';
import { ContainerStyled } from '../../Home/index';

const Header = () => {

    const HeaderStyled = styled.header`
        width: 100%;
        background: #1d1f26;
        /* position: fixed; */
    `;

    const HeaderPostionStyled = styled.div`
        width: 100%;
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const LogoStyled = styled(Link)`
        font-size: 36px;
        font-family: 'Pacifico', cursive;
        color: #fff;
        display: flex;
        align-items: center;
        column-gap: 15px;
        cursor: pointer;
        transition: 0.5s ease-in;
        user-select: none;

        &::after {
            content: '';
            display: block;
            width: 36px;
            height: 36px;
            background: url("https://cdn-icons-png.flaticon.com/128/8410/8410178.png");
            background-repeat: no-repeat;
            background-size: cover;

            @media screen and (max-width: 336.99px) {
                display: none;
            }
        }

        @media screen and (max-width: 424.99px) {
            font-size: 24px;
        }

        @media screen and (max-width: 336.99px) {
            color: #fc0005;
        }
    `;

    const NavElemStyled = styled(Link)`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 42px;
        width: auto;
        height: auto;
        border-radius: 10px;
        transition: 0.4s ease-out;
        padding: 10px;

        @media (any-hover: hover) {
            &:hover {
                background: #fff;
            }
        }

    `;

    const NavImageStyled = styled.img`
        width: 27px;
        height: 27px;

        @media screen and (max-width: 336.99px) {
            width: 42px;
            height: 42px;
        }
    `;

    const NavTextStyled = styled.span`
        text-decoration: none;
        color: #8c8c8d;
        font-size: 16px;
        transition: 0.4s ease-out;

        @media screen and (max-width: 336.99px) {
            display: none;
        }
    `;
    return (
        <HeaderStyled>
            <ContainerStyled>
                <HeaderPostionStyled>
                    <nav>
                        <NavElemStyled to="/home">
                            <NavImageStyled src="https://cdn.icon-icons.com/icons2/495/PNG/96/places-home-3_icon-icons.com_48499.png" alt="Главная"/>
                            <NavTextStyled>Главная</NavTextStyled>
                        </NavElemStyled>
                    </nav>
                    <LogoStyled to="/home">CineVerse</LogoStyled>
                    <div>
                        <NavElemStyled to="/profile">
                            <NavImageStyled src="https://cdn.icon-icons.com/icons2/3446/PNG/96/account_profile_user_avatar_icon_219236.png" alt="Главная"/>
                            <NavTextStyled>Илья</NavTextStyled>
                        </NavElemStyled>                            
                    </div>
                </HeaderPostionStyled>
            </ContainerStyled>
        </HeaderStyled>
    );
};

export default Header;
