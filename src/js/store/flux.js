export default {
    ACTIONS: { ADD:{type: "add"}, DELETE:{type: "delete"}, EDIT:{type: "edit"}, RETRIEVE_FROM_CLOUD:{type: "get"}, UPDATE_CLOUD:{type: "put"}},
   
    storeReducer: (contactsInReducer, operationInReducer) => {
       switch(operationInReducer.type){
           case "add":
           break;
           case "delete":
           break;
           case "edit":
           break;
           case "get":
           break;
           case "put":
           break;
       }
   }
   }
   