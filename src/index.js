import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { FavoritesProvider } from "./components/FilmCard/hooks/Favorites";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </FavoritesProvider>
);


