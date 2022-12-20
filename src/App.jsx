import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from './pages/Home';
import  About  from './pages/About';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import ProjectFour from './pages/ProjectFour';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project-one" element={<ProjectOne />} />
          <Route path="project-two" element={<ProjectTwo />} />
          <Route path="project-three" element={<ProjectThree />} />
          <Route path="project-four" element={<ProjectFour />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
