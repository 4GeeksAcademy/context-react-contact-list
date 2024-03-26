import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ContactList } from "./views/contactsList";
import { AddContact } from "./views/addContact";
import { addStore } from "./store/appContext";

const Layout = () => {

	return (
		<div>
			<BrowserRouter>
					<Routes>
						<Route path="/" element={<ContactList />} />
						<Route path="/addContact" element={<AddContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default addStore(Layout);
