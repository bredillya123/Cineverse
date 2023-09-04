export const FimlCard = () => {
    const famelyFilms = [
        {
            image: "https://static.hdrezka.ac/i/2021/8/31/de3bf86fbfd68ml30j66v.jpg",
            name: "Круэлла / Стервелла",
            year: "2021",
            decription: "До того, как стать известной преступницей со страстью к одежде из собачьих шкур, Круэлла Де Виль была известна как Эстелла.",
            category: "family",
        },
        {
            image: "https://static.hdrezka.ac/i/2022/4/19/k265edb8b0072lu54a57x.jpg",
            name: "Фантастические твари: Тайны Дамблдора",
            year: "2022",
            decription: "1932-й год. Грин-де-Вальд и его круг ближайших последователей стремятся захватить абсолютную власть над Волшебным миром, собирая поддержку для участия в предстоящих выборах Верховного мага на Международной конференции волшебников.",
            category: "family",
        },
        {
            image: "https://static.hdrezka.ac/i/2013/8/14/c7f84934738c2fw18s42a.jpg",
            name: "Пираты Карибского моря: Проклятие Черной жемчужины",
            year: "2003",
            decription: "Пиратское судно «Черная жемчужина» совершает дерзкое нападение на Порт-Ройал, похищая, среди прочего, дочь губернатора.",
            category: "family",
        },
        {
            image: "https://static.hdrezka.ac/i/2020/11/9/xb5614ffe43dbzm54q83f.jpeg",
            name: "Один дома",
            year: "1990",
            decription: "Огромное семейство Маккалистеров собирается отправиться на Рождественские праздники в Париж.",
            category: "family",
        },
        {
            image: "https://static.hdrezka.ac/i/2022/1/2/z4e25d1dc1581ax68j93w.jpeg",
            name: "Чарли и шоколадная фабрика",
            year: "2005",
            decription: "Фильм снят по мотивам одноименной повести английского писателя Роальда Даля.",
            category: "family",
        },
        {},
    ];

    const cartoonsFilms = [
        {
            image: "https://static.hdrezka.ac/i/2023/6/4/s11a39b3c60f8ko11i71d.jpg",
            name: "Человек-паук: Паутина Вселенных",
            year: "2023",
            decription: "Гвен Стейси присоединяется к элитному отряду Людей-пауков Мигеля О’Хары и помогает защищать мультивселенную от опасных угроз и аномалий.",
            category: "cartoon",
        },
        {
            image: "https://static.hdrezka.ac/i/2023/7/4/jd71d1581ab24ey58h54e.jpg",
            name: "Футурама",
            year: "1999",
            decription: "Накануне Нового 2000 года, неудачливый нью-йоркский разносчик пиццы Филип Джей Фрай, которого только что бросила девушка, доставляет заказ в инновационную криогенную лабораторию, но понимает, что его разыграли.",
            category: "cartoon",
        },
        {
            image: "https://static.hdrezka.ac/i/2023/8/25/c71f468f74321ea42v24l.jpg",
            name: "Рик и Морти",
            year: "2013",
            decription: "Сюжет повествует о безудержных приключениях гениального ученого, страдающего от алкогольной зависимости Рика Санчеза и его наивного, но иногда смелого 14-летнего внука Морти Смита.",
            category: "cartoon",
        },
        {
            image: "https://static.hdrezka.ac/i/2018/8/9/y8492699e7490wd11s64q.jpg",
            name: "Аватар: Легенда об Аанге",
            year: "2005",
            decription: "Сюжет мультфильма переносит зрителя в вымышленный мир, где бок о бок живут люди, фантастические животные и духи.",
            category: "cartoon",
        },
        {
            image: "https://static.hdrezka.ac/i/2014/7/24/kbc0201d904d8qw66r17s.jpg",
            name: "Время приключений",
            year: "2010",
            decription: "Действия мультсериала разворачиваются в постапокалиптическом мире под названием Земля Ууу, пережившем ядерную войну.",
            category: "cartoon",
        },
    ];

    return (
        <div className="film-list">
            <h1>CineVerse</h1>
            <h2>Семейные</h2>
            {famelyFilms.map((film, index) => (
                <div className="card" key={`family-film-${index}`}>
                    <img className="card__img" src={film.image} alt={film.name} />
                    <h4 className="card__title">{film.name}</h4>
                    <p className="card__text">Дата выхода: {film.year}</p>
                    <p className="card__desc">{film.decription}</p>
                </div>
            ))}

            <h2>Мультфильмы</h2>
            {cartoonsFilms.map((film, index) => (
                <div className="card" key={`cartoon-film-${index}`}>
                    <img className="card__img" src={film.image} alt={film.name} />
                    <h4 className="card__title">{film.name}</h4>
                    <p className="card__text">Дата выхода: {film.year}</p>
                    <p className="card__desc">{film.decription}</p>
                </div>
            ))}
        </div>
    );
};