import React, { useEffect, useState } from "react";
import './App.css'

import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

//pages
import Home from './pages/home'
import About from './pages/About'
import Work from './pages/Work'
import WorkDetails from './pages/WorkDetails'

function App() {
  
const [users, setUsers] = useState([])
//de gefetchte data staat in 'users'


const fetchData = () => {
  fetch('https://api.github.com/users/Mennovlaming/repos')
  .then(response => response.json())
  .then(data => {
      //zet de data in 'users' dmv setUsers
      setUsers(data)
    console.log(data) 
})
  .catch(error => console.error(error));
}

useEffect(() => {
    fetchData()
}, [])


  return (
    <BrowserRouter>
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='work'>Work</NavLink>
        {/* <NavLink to='detail'>Detail</NavLink> */}
      </nav>
    </header>
      <main>
        <Routes>
         
          {/* de gefetchte data in 'users' moet worden doorgegeven aan het home component */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work users={users}/>} />
          <Route path="/work/:workId" element={<WorkDetails users={users}/>} /> 
        </Routes>
      </main> 
    </BrowserRouter>
  )
}

export default App
