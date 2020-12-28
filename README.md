## Practice instructions:

* **1) Create a module for the route handlers**
  * Create a file named 'routes.js'.  
  * In 'routes.js', import `express` and set up `express.Router`
  * Remove the two route handlers, '/' and '/error', from 'app.js' and add them to 'routes.js'
  * Adjust the route handlers to work on the `router` rather than `app`
  * Export the `router` and import the module into 'app.js'
  * Use `app.use()` to pass the new `routes` module to the Express app
  
* **2) Create a module for the error handlers**
  * Create a file named 'errorHandlers.js'
  * Remove the callback functions from the 404 and global error handlers in 'app.js' and add them to 'errorHandlers.js'
  * Convert the callbacks in 'errorHandlers.js' to named functions so that they can be exported
  * Export the new named error handler functions from 'errorHandlers.js' and import the module into 'app.js'
  * Pass the new exported functions into the `app.use` statements for the 404 and global error handlers

* **3) Create a module for the helper functions**
  * Create a file named 'helpers.js'
  * Remove the `reverseString` and `shortenString` functions from 'app.js' and add them to 'helpers.js'
  * Export the two functions from 'helpers.js' and import the module into 'routes.js'
  * Change the two helper function calls in the GET '/' route handler from 'routes.js' to call the `reverseString` and `shortenString` helper functions from the imported module


## Other methods of Import/Export

### Exporting
1. Set module.exports to an object containing multiple functions
  module.exports = { 
    reverseString: (string) => {...},
    shortenString: (string) => {...}
  };

2. Create multiple named functions and export them together in the file’s module.exports object:
  const reverseString = (string) => {...};
  const shortenString = (string) => {...};

  module.exports = { reverseString, shortenString };

3. Use exports without module to export multiple items separately:
  exports.reverseString = () => {...};
  exports.shortenString = () => {...};


### Importing
1. Import the entire module and call each exported item with moduleName.functionName(), for example:
  // Import helpers module
  const helpers = require('./helpers');

  // Home route
  router.get('/', (req, res) => {
    const reversedGreeting = helpers.reverseString('...');
    const shortenedDesc = helpers.shortenString('...');

    res.send(...);
  });

2. Import each value from the module separately:
  // Import helpers
  const reverseString = require('./helpers').reverseString;
  const shortenString = require('./helpers').shortenString;

  // Home route
  router.get('/', (req, res) => {
    const reversedGreeting = reverseString('...');
    const shortenedDesc = shortenString('...');

    res.send(...);
  });

3. Use destructuring assignment to unpack the values from module.exports into distinct variables:
  // Import helpers
  const { reverseString, shortenString }  = require('./helpers');

  // Home route
  router.get('/', (req, res) => {
    const reversedGreeting = reverseString('...');
    const shortenedDesc = shortenString('...');

    res.send(...);
  });
