import { BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.tsx'
import {Home} from './pages/Home.tsx'
import {Games} from './pages/Games.tsx'
import {Socials} from './pages/Socials.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <>
      <div className="app">
      <h1>Welcome to Games On Acidzz</h1>
      <BrowserRouter>
      <Navbar/>
          <div className="content">
        <Routes>
          <Route path ="/" element = {<Home/>} />
          <Route path ="/games" element = {<Games/>} />
          <Route path ="/socials" element = {<Socials/>} />
        </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
      </div>
    </>

  )
}

export default App
