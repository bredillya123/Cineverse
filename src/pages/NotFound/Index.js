import { Link } from "react-router-dom";
import "../../styles/main.scss";

export const NotFound = () => {
    return (
        <div className="error">
            <h1 className="error__title">404 - Страница не найдена</h1>
            <p className="error__text">Извините, запрашиваемая страница не существует.</p>
            <Link className="error__btn" to="/home">Вернуться на главную</Link>
        </div>
    );
};
