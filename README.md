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
3. axios


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
   7.         

