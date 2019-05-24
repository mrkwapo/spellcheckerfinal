const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Your app listening on port ${port}!`))

console.log("server running");
console.log("nodemon is working");
