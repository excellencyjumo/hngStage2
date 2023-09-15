const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");

const personRoutes = require('./routes/person');
const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(express.json());
app.use('/api', personRoutes);


// Error-handling middleware
app.use((err, _req, res, _next) => {
    const { message, data ,statusCode } = err;
    console.error(message);
    const status = statusCode || 500;
    res.status(status).json({ message, data });
});

const PORT = process.env.PORT || 8080;

mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch(err => console.log(err))

module.exports = app;
