const express = require('express');
const words = require("./data.js");
const getspelling = require("./getspelling.js");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/', express.static("public"));

app.get("/getspelling", (req, res)=>{
  const word = req.query.word;
  const spelling = getspelling(words, word);
  if (spelling === getspelling){
   console.log(spelling.word);
    res.send(word + "is spelled correctly!");
  }else{
    res.send("That word does not exist");
  }
  
});

// app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/api', function (req, res) {
//  const userWord = req.query.userword;
//  const message = req.query.message;
//  console.log(userWord);
//  const reply = `The spelling of the word ${userWord} has been checked and it is ${message}`
//  res.send(reply);
// })

// app.get("/showresults/:userword", function (req, res) {
//   const userWord = req.params.userword;
//   console.log(userWord);

//   res.send(`The word ${userWord} has been checked and it is ${message}`);
// })


app.listen(port, () => console.log(`Your app listening on port ${port}!`))

console.log("server running");
console.log("nodemon is working");

