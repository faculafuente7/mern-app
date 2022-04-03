import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30m", extended: true}));
app.use(bodyParser.urlencoded({limit: "30m", extended: true}));
app.use(cors());

//MONGO CONNECTION
const CONNECTION_URL = 'mongodb+srv://facu-master-user:imperio_23@cluster0.auqq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))  )
    .catch((error)=> handleError(error));


