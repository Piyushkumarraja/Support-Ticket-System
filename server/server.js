const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const cookieParser  = require("cookie-parser");

const ticketRoutes = require("./routes/ticketRoutes");
const app = express();

const connect = () => {
  mongoose
    .connect("mongodb+srv://piyushKumar:piyushKumar@atlascluster.fapuhd2.mongodb.net/")
    .then(() => {
      console.log("connect to mongodb database");
    })
    .catch((err) => {
      throw err;
    });
};

const corsOptions = {
    origin: 'https://support-ticket-system-iota.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api", ticketRoutes);

app.listen(5000, () => {
  connect();
  console.log("Listening to port 3000");
});
