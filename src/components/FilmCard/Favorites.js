import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [favoriteStatus, setFavoriteStatus] = useState({});
  
    const addToFavorites = (movie) => {
      setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
      setFavoriteStatus((prevStatus) => ({
        ...prevStatus,
        [movie.title]: true,
      }));
    };
  
    const removeFromFavorites = (movieTitle) => {
      setFavoriteMovies((prevFavorites) =>
        prevFavorites.filter((movie) => movie.title !== movieTitle)
      );
      setFavoriteStatus((prevStatus) => ({
        ...prevStatus,
        [movieTitle]: false,
      }));
    };
  
    return (
      <FavoritesContext.Provider
        value={{
          favoriteMovies,
          addToFavorites,
          removeFromFavorites,
          favoriteStatus,
        }}
      >
        {children}
      </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};