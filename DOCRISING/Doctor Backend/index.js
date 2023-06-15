const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/appointments', require('./routes/appointments'))
app.use('/api/prescription', require('./routes/prescriptionroutes'))


app.listen(port, () => {
  console.log(`DocRising backend listening at http://localhost:${port}`)
})