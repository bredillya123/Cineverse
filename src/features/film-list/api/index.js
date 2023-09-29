import axios from "axios";
import { useEffect } from 'react';

export const filmToShow = [];    

export const PopFilms = () => {

    

    useEffect(() => {
        const fetchData = async () => {
            const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/random?list=most_pop_movies',
            headers: {
                'X-RapidAPI-Key': 'da79f94c75msha125fbf37bcca11p1a7c33jsn4dbc7415d989',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
            };
    
            try {
                const response = await axios.request(options);
                const popFilms = response.data.results;

                popFilms.forEach(element => {
                    let fimlId = element.id;
                    let filmUlr = element.primaryImage.url;
                    let filmName = element.originalTitleText.text;
                    let filmYear = element.releaseYear.year;
                    let filmDesc = element.primaryImage.caption.plainText;

                    let filmObj = {
                        id: fimlId,
                        image: filmUlr,
                        name: filmName,
                        year: filmYear,
                        description: filmDesc,
                    }
                    filmToShow.push(filmObj);

                    // We getting the ratting of film
                    const fetchRate = async () => {
                        const getRate = {
                        method: 'GET',
                        url: `https://moviesdatabase.p.rapidapi.com/titles/${fimlId}/ratings`,
                        headers: {
                            'X-RapidAPI-Key': 'da79f94c75msha125fbf37bcca11p1a7c33jsn4dbc7415d989',
                            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                        }
                        };
                        
                        try {
                            const response = await axios.request(getRate);
                            const filmRate = response.data.results.averageRating;
                            filmToShow.forEach(el => {
                                if (fimlId === el.id){
                                    el.rate = filmRate;
                                }
                            })
                            
                        } catch (error) {
                            console.error(error);
                        }
                    }
                    fetchRate();
                });

            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, []);

    console.log(filmToShow);


}



