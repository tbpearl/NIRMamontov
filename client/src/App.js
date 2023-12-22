import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Register,
  Visitors,
  Theory,
  FideRate,
  HomeService,
  Champions,
  Settings,
  Memes,
  News,
} from "./Pages/index";
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/visitors' element={<Visitors />} />
          <Route path='/theory' element={<Theory />} />
          <Route path='/fiderate' element={<FideRate />} />
          <Route path='/home-service' element={<HomeService />} />
          <Route path='/champions' element={<Champions />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/memes' element={<Memes />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
