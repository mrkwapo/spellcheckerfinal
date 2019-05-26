Spellchecker whiteboard:

1. Create an html page that will have:
    -an input box for a user to type a word
    -a button to submit the search term
    -an an area to display results

2. Create a file that contains correctly spelled words.

3. Create a javascript file that will:
    -access the user input
    -connect the file containing correctly spelled words
    -use the user input and query the dictionary file for the search term
    - use conditional statements to respond if the word is spelled correctly and if it is not spelled corredctly


Packages and dependencies needed:

1. express (https://expressjs.com/) used to create a server
2. nodemon (https://nodemon.io/) Saves time by automatically reloads your server when new changes are made 
3. axios (https://www.npmjs.com/package/axios)


Install and set up Express (also see this link for instructions on installing  and using express: https://expressjs.com/en/starter/installing.html)

1. cd into your project directory and type the following into the terminal:
    
    npm init
// which will initilize node package manager and create a package.json file
//This command prompts you for a number of things, such as the name and version 
of your application. For now, you can simply hit RETURN to accept the defaults for most of them except index.js which you can rename by typing  example.js or whatever
// for this project I will be naming mine server.js

2. Next type in the following to install express
        
        npm install express --save
 
Install and set up nodemon

1.Open your package.json file to add the following to your scripts object:

        "server": "nodemon server.js"
        
        example: 
"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "server": "nodemon server.js"
 }
        
2. In your terminal, type:
    

        npm install nodemon


Create an express app file:

   1.     In the terminal type:
        touch server.js
   
   2. then open server.js:
        In c9 type c9 server.js or if you are using VS Code type code server.js and then press enter
        
   3. To check if everything is installed and working properly, console log "nodemon server is working" and save the server.js file.
   4. In your terminal type npm run server and you should see the console log in your terminal and "[nodemon] clean exit - waiting for changes before restart"
   5.  Go to the express website (https://expressjs.com/en/starter/hello-world.html) to find the express boiler plate. 
   6.  copy and paste and save this to the server.js file:
   
        const express = require('express')
        const app = express()
        const port = 3000

        app.get('/', (req, res) => res.send('Hello World!'))

        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        
        // if you are using c9 you will want to usae port 8080
        // In the terminal it should also say "Example app listening on port 3000!"" 
        // If you are using c9 or any other cloud platform like c9 use the following for port:
        const port = process.env.PORT || 8080
   7. Create a test route
        -Add the following code in server.js after your first route

        app.get('/api', function (req, res) {
        res.send("API route working");
        })
        
        //test this route by opening the preview and add /api at the end of the address. 
        //In the web browser it should say "API route working"
        if using a local editor use:
                http://localhost:3000/api
        if using c9 or any other cloud platform just add /api at the end of the preview address
        example: https://exampleaddress.c9users.io/api

        -Then edit the route with the following code to be able to get a query from the browser:
        
        app.get('/api', function (req, res) {
        const userName = req.query.username;
        console.log(userName);
        res.send("API route working");
        })
        //Then if you go to your browser and type in the following in the address bar, you will send in a query to your server with the query username=Arnell-->
        //http://localhost:3000/api?username=Nate
        
        //Notice you will see the username you typed will show in the terminal and not the browser nor the browser console.


8. Create additional queries
Change the api route to the following
app.get('/api', function (req, res) {
 const checkSpellingOf = req.query.checkspellingof;
 const message = req.query.message;
 console.log(userName);
 const reply = `The spelling of the word ${checkSpellingOf} has been checked and it is ${message}`
 res.send(reply);
})

Now to make multiple queries to the server, type the following in your browser address bar:
http://localhost:3000/api?checkspellingof=tumultuous&message=correct!
queries always start with a question mark “?”


Create a front end web page

1. terminate server by pressing ctrl + ctrl

2. Create a public folder, change into the public folder and create an index.html, script.js and style.css file, by typing the following in your terminal:

    mkdir public
    cd public
    for c9 press 
    
    touch index.html  
    touch script.js
    touch style.css
    
    Or  
    
    for Visual Studo Code type 
    
    code index.html
    code script.js
    code style.css
    
3. Open index.html file and copy, paste and save the following:


<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <title>Spellcheck app</title>
 <script src="script.js"></script>
 <link rel="stylesheet" href="style.css">
</head>

<body>
 <h2>Spellchecker App</h2>
</body>

</html>

4. Make our web page content deployable, we will need to use the express.static() method.
    Add the following into your server.js file:

        app.use('/', express.static("public"));
    
    //this will ensure that when your application is deployed it will use the server where your public folder content are being served from.
    
    //it is very important that the above line of code is placed as your first route above any other routes.
    Example:
    
        const express = require('express')
        const app = express()
        const port = 3000
    
        app.use('/', express.static("public"));
    
        app.get('/', function (req, res) {
        res.send('Hello World!')
        })


By default, express will serve the index.html of the folder that you specify, so you do not have to point it to that file.

    Now you can run your server again
    npm run dev

    And go to localhost:3000
    You should see your index.html page being served there. Showing the header “Spellchecker App”
    
    
    
    
    
Next we use Ajax technology (axios) to make API calls, so the front end web page can communicate with your Express server using the Get method. 

//Make sure your server is running

    Add a button to our index.html file in the public folder
open your index.html file located in your public folder

    cd public
    code index.js // Open index.html file. Use c9 index.html on Cloud9
    

In public/index.html, add an input element with the placeholder =“check spelling”, id=“spellcheck”
Then create a button that would call a function named checkSpelling on click
<body>
  <h2>Spellchecker App</h2>
  <input placeholder="type a word here" id="userWord" type="text">
  <button onclick="getUserWord()">Check spelling</button>
</body>

Create the getUserWord function in public/script.js to console log out the input by typing the following:


    function getUserWord() {
     const input = document.getElementById("userWord").value;
     console.log(input)
    }

Make sure the server is running and go to the preview of the web page. 

Also use ctrl+shift+i to open the browswer console.  

Then type a word in the input box and press the button.
    You should see the word you typed in the input box appear in the console.
    
    Next make an Ajax GET request call using Axios
    
    obtain the Axios CDN link at https://cdnjs.com/libraries/axios
    
    Copy and past the link into a script tag and place it in the head of your html page.
    
    example:
    
         <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <title>My express app</title>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
         <script src="script.js"></script>
         <link rel="stylesheet" href="style.css">
        </head>

    





