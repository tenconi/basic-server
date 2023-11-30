import express from 'express'; // const express = require('express');
import './persistence/mongo/configDB.js'; // DB conection
import config from './config.js';
import gralRouter from './routes/gral.router.js'; // routes


const app = express();

app.get('/', gralRouter); 
// app.get('/', (req, res) => {
//   res.send('♠ index ♠ ');
// });

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`♠ Servidor ${PORT} UP!`);
});
