import express from 'express';
import routes from './src/routes/restapiRoutes'

const app = express();
const PORT = 4000;

routes(app)

app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})