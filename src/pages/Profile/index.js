import Header from "../components/Header";
import { ProfileMain } from "./components/ProfileMain/index"
import { ContainerStyled, MainTitleStyled } from '../Home/index';
import styled from 'styled-components';

const ProfileStyled = styled.section``;

export const Profile = () => (
    <ProfileStyled>
        <Header></Header>

        <ContainerStyled>
            <MainTitleStyled>Profile settings</MainTitleStyled>

            <ProfileMain></ProfileMain>
        </ContainerStyled>
    </ProfileStyled>
);