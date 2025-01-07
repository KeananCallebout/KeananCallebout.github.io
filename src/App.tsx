import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/home'
import Project from './pages/project'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
