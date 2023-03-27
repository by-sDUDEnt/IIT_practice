const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
// Hardcoded JSON database of vegetables
let vegetables = [
  { id: 1, name: 'Carrots', color: 'Orange', quantity: 10 },
  { id: 2, name: 'Broccoli', color: 'Green', quantity: 5 },
  { id: 3, name: 'Eggplant', color: 'Purple', quantity: 3 }
];

// Initialize express app and middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());


// CRUD operations
// Get all vegetables
app.get('/', (req, res) => {
  res.send("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
});


app.get('/wow', (req, res) => {
    res.send("WOOOOOOOOOOOOOOOOOOOOOOOW");
  });
  

// Start the server
const port = 6015;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});