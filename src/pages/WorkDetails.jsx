import React from "react"
import {useParams} from "react-router-dom"
import "./styles.css"

function WorkDetails(data) {
// retrieve data again, put in variable
    const users = data.users;
    // with userParams() i can retrieve the ID given in work.jsx
    const {workId} = useParams()
    // retrieve the user with .find where the id === the useParams() ID
    const thisUser = users.find(user => Number(user.id) === Number(workId))
    
    return (
        <section>
                <h1>{thisUser.name}</h1>  
                <p>{thisUser.description}</p>
        </section>
    );
}

export default WorkDetails