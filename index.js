const express = require('express')
const app = express()
const port = process.env.PORT || 4000


const bodyParser = require("body-parser");
app.use(bodyParser.json());

// routers 
const router = require('./routes/users')

app.get('/', (req, res) => res.send('default route'))
app.use('/users', router)

app.listen(port, () => {
  console.log('app is listening on:', port)
})