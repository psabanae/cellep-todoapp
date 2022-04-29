const express = require('express');
const db = require('./db/dbConnection');
const path = require('path');

const tasksRoutes = require('./routes/app');

const app = express();

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

// Rotas
// ---------------------------------------------
app.use(tasksRoutes);


// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express');
});