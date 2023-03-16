import React, { useEffect, useState } from "react";
import Render from '../components/render/render.jsx'
import List from "../components/list/list.jsx";

function Work(data) {
const users = data.users
    return(
        <>
        <h2 className="workh2">Work</h2>
            {/* <Render users={users}/> */}
            <List users={users}/>
        </>
    )
}

export default Work;