import React, { useEffect, useState } from "react";
import List from "../components/list/list.jsx";

function Work(data) {
// retrieve the data put the app.jsx component (it was the 'users' variable with fetched data)
const users = data.users
//put the retrieved data in a variable
    return(
        <>
        <h2 className="workh2">Work</h2>
            <List users={users}/>
            {/* pass this data to the 'List' component */}
        </>
    )
}

export default Work;