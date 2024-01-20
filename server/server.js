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
    origin: ['https://support-ticket-system-iota.vercel.app'],
    methods: ["GET","POST"],
    credentials: true,
  };

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api", ticketRoutes);

app.get('/', (req, res) => {
  res.send('Hello, this is a GET route!');
});
app.get('/api', (req, res) => {
  res.send('Hello, this is a GET API route!');
});

app.listen(5000, () => {
  connect();
  console.log("Listening to port 3000");
});
