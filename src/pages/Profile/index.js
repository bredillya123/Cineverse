import Header from "../components/Header";
import { ProfileMain } from "../../features/profile/index";
import { ContainerStyled, MainTitleStyled } from '../Home/index';
import styled from 'styled-components';

const ProfileStyled = styled.section``;

export const Profile = () => (
    <ProfileStyled>
        <Header/>

        <ContainerStyled>
            <MainTitleStyled>Настройки профиля</MainTitleStyled>

            <ProfileMain/>
        </ContainerStyled>
    </ProfileStyled>
);