const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const cardRoutes = require('./src/routers/cardRoutes');
const userRoutes = require('./src/routers/userRoutes')

app.use(bodyParser.json());
app.use(cors());
app.use(cardRoutes);
app.use(userRoutes);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


// mongoose.connect('mongodb://localhost:27017/cards')


// mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB successfully');
// });

// mongoose.connection.on('error', (err) => {
//     console.error('Failed to connect to MongoDB', err);
// });

// app.get('/' ,(req , res) =>{
//     res.send("Hello Node API")
// })


// app.listen(3000 , ()=>{
//     console.log("Node Server run on Port 3000")
// })

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)