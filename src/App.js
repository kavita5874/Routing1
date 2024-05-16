
import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <header>
       
        <nav className='container'>
        <h1 className='leftcss'>Routing to Career</h1>
        <div className='rightcss'>
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/about">About</NavLink>
        </div>
        </nav>
      </header>
      <main>
<Routes>
  <Route path='/' element ={<Home/>}/>
  <Route path='/about' element = {<About/>}/>
</Routes>
</main>
      </BrowserRouter>
    </div>
  );
}

export default App;
