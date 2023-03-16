import React from "react"
import {useParams} from "react-router-dom"

function WorkDetails(data) {
    //productsData = userData
    //Hierin staat de gefetchte data
    const users = data.users;

    const {workId} = useParams()
    // console.log(workId)
    
    const thisUser = users.find(user => Number(user.id) === Number(workId))
    
    console.log(thisUser);

    // console.log(users)

    // for (var i = 0; i < users.length; i++) {
    //      console.log(users[i].id);
    //   }

    
    return (
        <div>
                <h1>{thisUser.name}</h1>  
                <p>{thisUser.description}</p>
        </div>
    );
}

export default WorkDetails