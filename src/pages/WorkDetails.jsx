import React from "react"
import {useParams} from "react-router-dom"
import "./styles.css"

function WorkDetails(data) {

    const users = data.users;
    const {workId} = useParams()
    const thisUser = users.find(user => Number(user.id) === Number(workId))
    console.log(thisUser);
    
    return (
        <section>
                <h1>{thisUser.name}</h1>  
                <p>{thisUser.description}</p>
        </section>
    );
}

export default WorkDetails