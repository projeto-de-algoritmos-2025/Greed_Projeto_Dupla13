import express from 'express';
const app = express();
import cors from 'cors';
const corsOptions = {
    origin: ["http://localhost:5173"],

};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(8080,  () => {
    console.log("Server started on port 8080");
})