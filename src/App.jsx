import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

//pages
import Home from './pages/home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import WorkDetails from './pages/WorkDetails';

function App() {
  
const [users, setUsers] = useState([])
//the fetched data is now in the StateHook as 'users'


const fetchData = () => {
  fetch('https://api.github.com/users/Mennovlaming/repos')
  .then(response => response.json())
  .then(data => {
      //put the fetched data(data) in 'users' with setUsers
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
        <NavLink to='contact'>Contact</NavLink>
        {/* this functions as a navbar */}
      </nav>
    </header>
      <main>
        <Routes>
         
          {/* the fetched data statehook(users) must be given to other components, with props you pass it 'users={users}'*/}
          <Route index element={<Home users={users}/>} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work users={users}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="/work/:workId" element={<WorkDetails users={users}/>} /> 
        </Routes>
      </main> 
    </BrowserRouter>
  );
}

export default App
