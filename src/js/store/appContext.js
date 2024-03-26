import React, { useEffect, useReducer } from "react";
import functions from "./flux.js";


export const Context = React.createContext(null);


export const addStore = MyAppWityhoutContext => {

	const ContextGiver = props => {

        const actions = functions.ACTIONS;

		const [ contactsInContext, proceduresInContext] = useReducer(functions.storeReducer, {})
		

		useEffect(() => {
			proceduresInContext(functions.ACTIONS.RETRIEVE_FROM_CLOUD)
		}, []);

		return (
			<Context.Provider value={{contactsInContext, proceduresInContext, actions}}>
				<MyAppWityhoutContext {...props} />
			</Context.Provider>
		);
	};

	return ContextGiver;

};
