import React, { useEffect, useState } from "react";
import store from "./flux.js";


export const Context = React.createContext(null);


export const addStore = MyAppWityhoutContext => {

	const ContextGiver = props => {

		const [ contacts, setContacts] = useState({})

		useEffect(() => {
			setContacts(store(contacts, setContacts))
			console.log("Theese are the undefined contacts from appContext when the page mounts: ")
			console.log(contacts.STORE)
		}, []);
		
		const [runOnlyAfterMount, startRunning] = useState(false);
		useEffect(() => {	
			if (runOnlyAfterMount) {
			contacts.ACTIONS.set()
			} else {startRunning(true)}
		}, [runOnlyAfterMount]);

		useEffect(() => {
			console.log("Theese are the new contacts updated seen from appContext: ");
			console.log(contacts.STORE);
		  }, [contacts]);
		  


		return (
			<Context.Provider value={{contacts}}>
				<MyAppWityhoutContext {...props} />
			</Context.Provider>
		);
	};

	return ContextGiver;

};
