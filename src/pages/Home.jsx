import React, { useEffect, useState } from "react";
import Render from "../components/render/render";

function Home(data) {
    const users = data.users
    return(
        <>
        <section className="home">
            <h2>Menno</h2>
            <p>Welcome to my website, here you can find my work, projects and other random things I made.</p>
        </section>
        <Render users={users}/>
        </>
    )
}

export default Home;