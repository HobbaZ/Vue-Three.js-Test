const express = require('express');
const path = require('path');
const routes = require('./routes');
const db = require('./config/connection');
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
//Turn on routing
app.use(routes);

  db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening at port ${PORT}`));
});