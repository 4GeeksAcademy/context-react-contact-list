export default (val, setter) => {
return {
STORE: {},

ACTIONS: {
//add
    add: (payload) => {
        fetch("https://playground.4geeks.com/apis/fake/contact", {
            headers: {
               "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(payload.body)
        })
        .then(response => {
            if (!response.ok) {throw new Error(`Contact not created! status: ${response.status}`);}
        return response.json()})
        .then(data => {console.log("Contact created successfully:", data);
        })
        .catch(error => console.error("Error:", error))
        .then(() => fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ErnestWarhead", {
                method: "GET"
                }))
        .then(response => {
            if (!response.ok) {throw new Error(`Couldn't get data to update contacts: ${response.status}`);}
            return response.json()})
        .then(data => {
            const transformedData = Object.entries(data).reduce((newObj, [key, value]) => {
                newObj[value.id] = value;
                return newObj;
            }, {});
            setter((oldVal) => ({...oldVal, STORE: transformedData}));
            console.log(`theese are the new contacts updated by add: ${val.STORE}`)
            })        
        .catch(error => console.error("Error at the last catch:", error))
    },
//delete
    delete: (payload) => {
        console.log("this is the payload received by delete: ")
        console.log(payload)
        fetch(`https://playground.4geeks.com/apis/fake/contact/${payload.id}`, {
                method: "DELETE"
                })
        .then(response => {
            if (!response.ok) {throw new Error(`Couldn't delete that contact: ${response.status}`);}
            else { console.log(`${payload.id} deleted successfully: `) }})
        .catch(error => console.log("There was an error while deleting the contact: " + error))
        .then(() => fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ErnestWarhead", {
                method: "GET"
                }))
        .then(response => {
            if (!response.ok) {throw new Error(`Couldn't get data to update contacts: ${response.status}`);}
            return response.json()})
        .then(data => {
            const transformedData = Object.entries(data).reduce((newObj, [key, value]) => {
                newObj[value.id] = value;
                return newObj;
            }, {});
            setter((oldVal) => ({...oldVal, STORE: transformedData}));
            console.log("This is your agenda in the API: ");
            console.log(data)
            console.log("theese are the contacts being introduced: ");
            console.log(transformedData);
            })        
        .catch(error => console.error("Error at the last catch:", error))
    },
//deleteAll
    deleteAll: () => {
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ErnestWarhead",{
	    			method: "DELETE"
			})
		.then(() => console.log("The request to delete all contacts was sent but the server doesn't conferm. fingers crossed."))
        .then(setter((oldVal) => ( { ...oldVal, STORE: {} } )))
		.catch(error => console.error("All contacts couldn't be deleted:", error));
    },
//edit
    edit: (payload) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${payload.id}`, {
            headers: {
               "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(payload.body)
        })
        .then(response => {
            if (!response.ok) {throw new Error(`Contact not updated! status: ${response.status}`);}
        return response.json()})
        .then(data => {console.log("Contact updated successfully:", data);
        })
        .catch(error => console.error("Error updating the contact:", error))
        .then(() => fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ErnestWarhead", {
                method: "GET"
                }))
        .then(response => {
            if (!response.ok) {throw new Error(`Couldn't get data to update contacts after update: ${response.status}`);}
            return response.json()})
        .then(data => {
            const transformedData = Object.entries(data).reduce((newObj, [key, value]) => {
                if (key !== "deleting") {
                  newObj[value.id] = value;
                }
                return newObj;
              }, {});
              
            setter((oldVal) => ({...oldVal, STORE: transformedData}));
            console.log(`theese are the new contacts updated by edit: ${val.STORE}`)
            })        
        .catch(error => console.error("Error at the last catch in edit:", error))
    },
//openEddit
    openEddit: (payload) => {
        console.log("openEdit is trying to set editing with: ");
        console.log(payload);
        setter(oldVal => ( {...oldVal, STORE: {...oldVal.STORE, editing: payload} } ));
    },
//set
    set: () => {
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ErnestWarhead", {
                method: "GET"
                })
        .then(response => {
            if (!response.ok) {throw new Error(`Couldn't get data to update contacts: ${response.status}`);}
            return response.json()})
        .then(data => {
            const transformedData = Object.entries(data).reduce((newObj, [key, value]) => {
                newObj[value.id] = value;
                return newObj;
            }, {});
            setter((oldVal) => ({...oldVal, STORE: transformedData}));
            console.log("This is your agenda in the API: ");
            console.log(data)
            console.log("theese are the contacts being introduced: ");
            console.log(transformedData);
            })        
        .catch(error => console.error("Error at the last catch:", error))
    },
//getAgendas
    getAgendas: () => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/agenda`, {
                method: "get"
                })
        .then(response => {
            if (!response.ok) {throw new Error(`Couldn't get all agendas: ${response.status}`)}
            return response.json()})
        .then((data) => {
            console.log("Theese are all the agendas: ")
            console.log(data)
        })
        .catch(error => console.log("There was an error while deleting the contact: " + error))
    },

}
}
}
