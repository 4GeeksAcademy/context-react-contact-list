import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/contactsList.css";
import profilePic from "../../img/Mike Anamendolla.png";
import { Context } from "../store/appContext";

export const ContactList = () => {
	const { contacts: store } = useContext(Context);


	const actionCreator = (action, e) => {
		console.log("I'm sending the command to " + action + " with: ");
		console.log(e);
		action === "openEddit" ? store.ACTIONS[action](e) :
		store.ACTIONS[action](
			!e ? {} : !e.target ? {} :
			{
			id: e.target.id ? e.target.id : "",
			body: !e.target.elements ? {} : 
			{
			full_name: e.target.elements.full_name ? e.target.elements.full_name.value : "name wasn't provided",
			email: e.target.elements.email ? e.target.elements.email.value : "email wasn't provided",
			agenda_slug: "ErnestWarhead",
			address: e.target.elements.address ? e.target.elements.address.value : "address wasn't provided",
			phone: e.target.elements.phone ? e.target.elements.phone.value : "phone wasn't provided",
			}
			}
		);
	};

	
	return (
		<div className="generalDiv">
			<div className="listDiv">
				<Link to="/addContact" className="firstLink">Add new contact</Link>
				{store.STORE && Object.keys(store.STORE).length !== 0 ? 
      				Object.entries(store.STORE).map(([id, contact]) =>
        				id === "editing" ? <div key={id}></div> :
        					<div className="elementDiv" key={id}>
          						<img className="profilePic" src={profilePic} alt={`A pic of ${contact.full_name}`}/>
          						<div className="infoDiv">
            						<p>{contact.full_name}</p>
            						<h5><i className="fa-solid fa-location-dot"></i>{contact.address}</h5>
            						<h6><i className="fa-solid fa-phone"></i>{contact.phone}</h6>
            						<h6><i className="fa-solid fa-envelope"></i>{contact.email}</h6>
          						</div>
          						<div className="editsDiv">
		  							<Link className="editdelete" to="/addContact" onClick={() => actionCreator("openEddit", contact)} id={contact.id}><i className="fa-solid fa-pencil" id={contact.id}></i></Link>
									<button className="editdelete" onClick={(e) => actionCreator("delete", e)} id={contact.id}><i className="fa-solid fa-trash-can" id={contact.id}></i></button>
          						</div>
        					</div>
      			) : <div className="elementDiv">No contacts here</div>}
			</div>
			<div className="devButtons">
			<button onClick={() => actionCreator("add",
			{
				target : {
					elements: {
					full_name: {value: "Mike Anamendolla"},
					email: {value: "mike.ana@example.com"},
					agenda_slug: {value: "ErnestWarhead"},
					address: {value: "5842 Hillcrest Rd"},
					phone: {value: "(870)288-4149"},}}
					
			}
			)}>Add Mike Anamendolla</button>
			<button onClick={() => actionCreator("deleteAll")}>Delete all</button>
			<button onClick={() => actionCreator("getAgendas")}>Get all agendas</button>
			</div>
		</div>
	);
};


