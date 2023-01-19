const express = require('express');
const connectDB = require('./config/connectDB');
const userRoute = require('./router/userRoutes');
const app = express();
const port = 4569;
connectDB();



app.use(express.json());
app.listen(port,console.log(`app is running on port :${port}`));

app.use('/api/user',userRoute)
