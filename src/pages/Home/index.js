import { Link } from "react-router-dom";
import { FimlCard } from "../components/FilmCard/index"

export const Home = () => (
    <>
        <h1>Главная</h1>
        <FimlCard></FimlCard>
        <Link to="/profile">Перейти в профиль</Link>
    </>
);