import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactList = () => {
	const { contacts: store } = useContext(Context);


	const actionCreator = (action, e) => {
		  const formData = e ? e.target.elements : {};
		  store.ACTIONS[action]({
			id: formData.id ? formData.id.value : "",
			body: {
			  full_name: formData.full_name ? formData.full_name.value : "name wasn't provided",
			  email: formData.email ? formData.email.value : "email wasn't provided",
			  agenda_slug: formData.agenda_slug ? formData.agenda_slug.value : "agenda wasn't provided",
			  address: formData.address ? formData.address.value : "address wasn't provided",
			  phone: formData.phone ? formData.phone.value : "phone wasn't provided",
			}
		  });
	  };
	  

	useEffect(() => {
	{console.log("This is the store from contactsList:")}
	{console.log(store)}
	{console.log("This are the contacts from contactsList:")}
	{console.log(store.STORE)}
	} , []

	)
	return (
		<div>
			Hello contactsList
			<Link to="/addContact">Go to addContact</Link>
			<button onClick={() => actionCreator("add")}>Add one</button>
			<button onClick={() => actionCreator("deleteAll")}>Delete all</button>
			{/*<button onClick={() => actionCreator("delete", {target:{elements:{id:47437555173}}})}>Delete this one</button>*/}
		</div>
	);
};


