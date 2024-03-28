import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/addContact.css";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { contacts: store } = useContext(Context);

	const navigate = useNavigate();

	const [ editing, setEditing] = useState(false)
	useEffect(() => {
		setEditing(!store ? false : !store.STORE ? false : !store.STORE.editing ? false : true)
		console.log(!store ? false : !store.STORE ? false : !store.STORE.editing ? false : true)
	}, [store.STORE])

	const actionCreator = (action, e) => {
		e.preventDefault();
		navigate('/');
		console.log("I'm sending the command to " + action + " with: ");
		console.log(e);
		store.ACTIONS[action](
			!e ? {} : !e.target ? {} :
			{
			id: e.target.id ? e.target.id : "",
			body: !e.target.elements ? {} : 
			{
			full_name: !e.target.elements.full_name ? "name wasn't provided" : (e.target.elements.full_name.value === "" ? "name wasn't provided" : e.target.elements.full_name.value),
			email: !e.target.elements.email ?"email wasn't provided" : (e.target.elements.email.value === "" ? "email wasn't provided" : e.target.elements.email.value),
			agenda_slug: "ErnestWarhead",
			address: !e.target.elements.address ? "address wasn't provided" : (e.target.elements.address.value === "" ? "address wasn't provided" : e.target.elements.address.value),
			phone: !e.target.elements.phone ? "phone wasn't provided" : (e.target.elements.phone.value === "" ? "phone wasn't provided" : e.target.elements.phone.value),
			}
			}
		);
		editing 
	};

	return (
		<div className="generalDiv">
		  <h2>Add a new contact</h2>
		  <form onSubmit={(e) => actionCreator(editing ? "edit" : "add", e)} id={editing ? store.STORE.editing.id : ""}>
	  
			<p>Full Name</p>
			<input name="full_name" type="text" {...editing ? { defaultValue: store.STORE.editing.full_name } : { placeholder: "Full Name" }} />
	  
			<p>Email</p>
			<input name="email" type="email" {...editing ? { defaultValue: store.STORE.editing.email } : { placeholder: "Enter email" }} />
	  
			<p>Phone</p>
			<input name="phone" type="tel" {...editing ? { defaultValue: store.STORE.editing.phone } : { placeholder: "Enter phone" }} />
	  
			<p>Address</p>
			<input name="address" type="text" {...editing ? { defaultValue: store.STORE.editing.address } : { placeholder: "Enter address" }} />
	  
			<button type="submit" className="save-btn">save</button>
			<Link to="/" className="back-link">or get back to contacts</Link>
		  </form>
		</div>
	  );	  
};
