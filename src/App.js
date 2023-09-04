import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./consts";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound/Index"
import { Root } from "./pages/Root";

const App = () => {
  const { home, profile } = ROUTES;

  return (
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={home} element={<Home/>}/>
      <Route path={profile} element={<Profile />}/>
      {/* <Route path="*" element={<Navigate relative to/>}/> */}
      
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
