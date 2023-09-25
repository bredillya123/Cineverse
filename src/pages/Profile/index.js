import Header from "../components/Header";
import { ProfileMain } from "../../features/profile/ProfileMain";
import { ContainerStyled, MainTitleStyled } from '../Home/index';
import styled from 'styled-components';

const ProfileStyled = styled.section``;

export const Profile = () => (
    <ProfileStyled>
        <Header/>

        <ContainerStyled>
            <MainTitleStyled>Profile settings</MainTitleStyled>

            <ProfileMain/>
        </ContainerStyled>
    </ProfileStyled>
);