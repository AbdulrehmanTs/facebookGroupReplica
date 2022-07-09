import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Discussion from "./Pages/Discussion";
import Login from "./Pages/Login";
import Members from "./Pages/Members";
import Register from "./Pages/Register";




function App() {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/members' element={<Members />} />
      <Route path='/discussion' element={<Discussion />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
