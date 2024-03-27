import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Layout from './layout.js'

ReactDOM.render(<Layout />, document.querySelector("#app"));


// create contact
/*
fetch("https://playground.4geeks.com/apis/fake/contact", {
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
        full_name: "someone different",
        email: "not the same@gmail.com",
        agenda_slug: "ErnestWarhead",
        address: "even more, 33434 FL, USA",
        phone: "anything7864445566"
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => console.log("Contact created:", data))
.catch(error => console.error("Error:", error));
*/

// update contact
/*
fetch("https://playground.4geeks.com/apis/fake/contact{contact_id}", {
    headers: {
        "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify({
        full_name: "Dave Bradley",
        email: "dave@gmail.com",
        agenda_slug: "ErnestWarhead",
        address: "47568 NW 34ST, 33434 FL, USA",
        phone: "7864445566"
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => console.log("Contact created:", data))
.catch(error => console.error("Error:", error));
*/

/*
// get all agendas
fetch("https://playground.4geeks.com/apis/fake/contact/agenda",{

// get/delete all contacts from an agenda
fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ErnestWarhead",{

// get/delete one particular contact
fetch("https://playground.4geeks.com/apis/fake/contact/{contact_id}{



    method: "GET/DELETE"
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

*/

fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ErnestWarhead",{


    method: "GET"
})
.then(response => response.json())
.then(data => {
    console.log("This is the data in the API: ");
    console.log(data)
})
.catch(error => console.error("Error:", error));