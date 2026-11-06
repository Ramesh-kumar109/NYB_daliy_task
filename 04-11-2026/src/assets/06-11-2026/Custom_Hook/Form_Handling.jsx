import {useState} from 'react'



function Form_Handling() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" />

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form_Handling;

