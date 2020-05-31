import { addNewContact, 
        getContacts,
        getContactWithId
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
    
        .put((req, res) => 
        res.send('PUT request successful'))
        
        .delete((req, res) => 
        res.send('DELETE  request successful'))
}

export default routes;