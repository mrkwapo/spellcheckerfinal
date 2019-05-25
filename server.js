const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api', function (req, res) {
 const checkSpellingOf = req.query.checkspellingof;
 const message = req.query.message;
 console.log(checkSpellingOf);
 const reply = `The spelling of the word ${checkSpellingOf} has been checked and it is ${message}`
 res.send(reply);
})

app.listen(port, () => console.log(`Your app listening on port ${port}!`))

console.log("server running");
console.log("nodemon is working");
