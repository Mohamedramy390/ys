import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ColorModeProvider from "./contexts/ThemeContext"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"

function App() {


  return (
    <ColorModeProvider>
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="project/:id" element={<ProjectDetail /> } />
          </Routes>
      </BrowserRouter>
    </ColorModeProvider>
  )
}

export default App
