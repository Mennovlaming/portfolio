import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./list.css"

function List(data) {
// retrieve data and put it in variable again.
const users = data.users;

return(
    <>
     <label className="toggle">
        {/* list icon */}
        <div></div>
        <div></div>
        <div></div>
        {/* kolom icon */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <input type="checkbox" className="checkbox" />
    </label>
    {/* Loop trought the data using map, remember users is the fetched data in app.jsx */}
    {users.length > 0 && (
            <ul className='list-ul'>
                 {users.map((user) => (
                    // in react a list needs a unique id
                     <li key={user.id} className='list-li'>
                            <h2>{user.name}</h2>
                            <p>{user.description}</p>
                            {/* with this link you get a dynamic page with the user.id as atribute */}
                            <Link to={`/work/${user.id}`}>More</Link>
                     </li>
                ))} 
            </ul>
        )}
    </>
);
}

export default List;