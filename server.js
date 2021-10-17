const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
//const express = require('express')
////const app = express()
const port = 3000
//const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send('Hello World!')
});





// Require employee routes
const employeeRoutes = require('./src/Routers/employee.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});