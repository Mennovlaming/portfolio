import React, { useEffect, useState } from "react";
import "./render.css"

function Render(data) {
//hierboven haal je de meegestuurde gegevens op uit de parent, in dit geval de gefetchte data
//die in een state werd gezet
const users = data.users;
//maak van users de meegestuurde data .users waardoor de data hier te gebruiken is.
console.log(data.users);

return (
<>
        {users.length > 0 && (
            <ul className='carousel'>
 {/* hier .map je door de useState heen, in vanilla js zou dit bijv data.name zijn */}
                 {users.map((user, index) => (
                    // een list heeft in react een unieke key nodig, aan de map geef je nu een index mee, check .map functie js
                    // de unieke key is nu de index, dus de li items zijn 1, 2, 3, enz.
                     <li key={index} className='carousel-list'>
                       
                       <h2>{user.name}</h2>
                            <p>{user.description}</p>
                            {/* with this link you get a dynamic page with the user.id as atribute */}
                            {/* <Link to={`/work/${user.id}`}>More</Link> */}
                     </li>
                ))} 
            </ul>
        )}
</>
)    

}

export default Render;