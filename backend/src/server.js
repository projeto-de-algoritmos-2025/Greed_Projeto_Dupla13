import express from 'express';
import cors from 'cors';

import router from './router/router.js';

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"],

};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', router);

app.listen(8080,  () => {
    console.log("Server started on port 8080");
})