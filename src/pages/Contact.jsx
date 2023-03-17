import React from "react";

function Contact() {
    return(
        <>
            <h2>Contact</h2>
            <form action="">
                <label>Name
                <input type="text" />
                </label>

                <label>E-mail
                <input type="text" />
                </label>

               

                <label>Message
                <textarea>Enter text here...</textarea>
                </label>
                <button>send</button>
            </form>
        </>
    )
}

export default Contact;