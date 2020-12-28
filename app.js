// Import Express and set up the app
const express = require('express');
const app = express();

// Import routes and pass route handlers to the app
const routes = require('./routes');
app.use(routes);

// Import errorHandlers and pass error handlers to the app
const errorHandlers = require('./errorHandlers');
app.use(errorHandlers.noRouteError);
app.use(errorHandlers.globalError);

// Turn on Express server
app.listen(4000, () => {
  console.log('Server listening on port 4000');
})