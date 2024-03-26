import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactList = () => {
	const { store } = useContext(Context);

	return (
		<div>
			Hello contactsList
			<Link to="/addContact">Go to addContact</Link>
		</div>
	);
};
