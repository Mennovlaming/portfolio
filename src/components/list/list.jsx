import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./list.css"

function List(data) {
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
    {users.length > 0 && (
            <ul className='list-ul'>
                 {users.map((user) => (
                     <li key={user.id} className='list-li'>
                            <h2>{user.name}</h2>
                            <p>{user.description}</p>
                            <Link to={`/work/${user.id}`}>Zie meer</Link>
                     </li>
                ))} 
            </ul>
        )}
    </>
);
}

export default List;