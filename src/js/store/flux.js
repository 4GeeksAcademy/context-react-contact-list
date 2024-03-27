export default (val, setter) => {
return {
STORE: {},

ACTIONS: {
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

    delete: (payload) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${payload.id}`, {
                method: "delete"
                })
        .then(response => {
            if (!response.ok) {throw new Error(`Couldn't delete that contact: ${response.status}`);}
            else { console.log(`${payload.id} deleted successfully: `) }})
        .catch(error => console.log("There was an error while deleting the contact: " + error))
    },

    deleteAll: () => {
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ErnestWarhead",{
	    			method: "DELETE"
			})
		.then(() => console.log("The request to delete all contacts was sent but the server doesn't conferm. fingers crossed."))
		.catch(error => console.error("All contacts couldn't be deleted:", error));
    },

    edit: (payload) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${payload.id}`, {
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
            console.log("theese are the contacts being introduced: ");
            console.log(transformedData);
            console.log(`theese are the new contacts updated by set: ${val.STORE}`)
            })        
        .catch(error => console.error("Error at the last catch:", error))
}
}
}
}