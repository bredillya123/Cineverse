import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <h1>404 - Страница не найдена</h1>
            <p>Извините, запрашиваемая страница не существует.</p>
            <Link to="/home">Вернуться на главную</Link>
        </div>
    );
};