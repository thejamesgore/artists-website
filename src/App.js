import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './common/Home'
import NavBar from './components/NavBar'
import Galleries from './components/Galleries'
import About from './components/About.js'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import GalleryPost from './components/GalleryPost'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/galleries" element={<Galleries />} />
        <Route path="/galleries/:slug" element={<GalleryPost />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
