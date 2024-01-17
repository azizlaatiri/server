const express = require('express')
const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

app.listen(3002, () => {
    console.log(`Serveur sur le port 3002`)
})
app.get('/', (req, res) => {
    res.send('we are available from 9h to 18h')
    })
 