import { addNewContact, 
        getContacts,
        getContactWithId,
        updateContact,
        deleteContact
} from '../controllers/restapiControllers'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)

            // I have forgot to add this so next() middleware take to next function from its current function.
            next();
        }, getContacts)

        .post(addNewContact)

    app.route('/contact/:contactID')
        .get(getContactWithId)
    
        .put(updateContact)
        
        .delete(deleteContact)
}

export default routes;