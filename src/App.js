import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./consts";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Search } from "./pages/Search"
import { NotFound } from "./pages/NotFound";

const App = () => {
  const { home, profile, search } = ROUTES;

  return (    
    <Routes>
      <Route path={"/"} element={<Navigate to={home}/>}/>
      <Route path={home} element={<Home/>}/>
      <Route path={profile} element={<Profile />}/>
      <Route path={search} element={<Search />}/>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
