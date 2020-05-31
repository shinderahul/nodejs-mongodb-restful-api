import express from 'express';
import routes from './src/routes/restapiRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

const app = express();
const PORT = 5000;

// mongoose connection
mongoose.connect('mongodb://localhost/restapiDb', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app)

app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})