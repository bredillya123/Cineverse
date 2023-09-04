import { Link } from "react-router-dom";

export const Root = () => {
    return (
        <div>
            <h1>Карта сайта</h1>
            <Link to="/home">Перейти на главную</Link>
            <Link to="/profile">Перейти в профиль</Link>
        </div>
    );
};