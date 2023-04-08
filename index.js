const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to database!'))
        .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});


