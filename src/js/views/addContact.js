import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const store = useContext(Context)

	return (
		<div>
			Hello addContact <br />
			<Link to="/">Go to contactsList</Link> <br />
		</div>
	);
};
