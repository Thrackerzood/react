const express = require('express')
const app = express()


app.use(express.json.apply({extended: true}))
//export routers
app.use("/api/home", require('./components/home'))

app.listen(5500)