import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Galleries from './components/Galleries'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/galleries" element={<Galleries />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
