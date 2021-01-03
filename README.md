# Exercise Tracker Full Stack Project (MERN)
This project was was built with assistance from a MERN stack tutorial by Beau Carnes. MERN stands for MongoDB, Express, React, Node. MongoDB is a NoSQL database which can be controlled with Node.js. Express is a flexible Node.js web framework that helps move content from the backend to the front. React is framework that will be used to manage components and states in the front end.

# Back End
To start the backend server, switch into the backend folder from the terminal and run `nodemon server.js`. After the load, 2 messages will appear in the terminal. One saying successful launch of the app, and successfull connection to the database.

# Setup
To create a new react app, we used 
>$ npx create-react-app app_name

This will create a new folder with the specified name of 'app_name'. This folder will be created in the location that the terminal currently displays.

The backend portion was completed first, and developed within a new backend folder put into the react-app. Within the backend, we will ustilize express, cors, mongoose, and dotenv were used.
`````
npm init -y
npm install express cors mongoose dotenv
`````
Express is the web framework that was used for Node. CORS stands for cross-origin resource sharing. It is an Express middleware that allows restricted resources on a web page to be requested from a separate domain. Mongoose is a middleware that makes it easier to control MongoDB. dotenv is the package that allows for the use of environment variables.

# Models
Mongoose models are an interface to the database for CRUD operations. Schemas define the structure of data. Each schema was created in it's own file, then wrapped with a mongoose model. This was then set up to be exported so that other files can request the model.

# Routes
Routes provide a response to a client request. Routes must require the appropriate model so that the route can interact with the corresponding data.

## Error handling within routes
### try, catch
try... catch error handling can only catch errors that occur at runtime. This is not beneficial if we have errors that arise during the reading/ parsing phase.

### throw
Throw can be nested into the catch function. This exits out of the try function and moves into the first available catch function. An example from Codeburst:
`````
try {
   let hello = prompt(“Type hello”)
   if (hello !== ‘hello’){
     throw new Error(“Oops, you didn’t type hello”)
   }
} catch(e) {
   alert(e.message)
} finally {
   alert(‘thanks for playing!’)
}
`````

### try, catch with Promises
This is an asynchronous method that can wait to get the final value and que up steps that will eventually run. Within the routes, we will use promises to try something, or catch an error. An example of this is:
`````  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
`````

# Testing with Postman
Post routes were tested by using postman to send and receive JSON data.

## CREATE routes
The create route (POST) for new users was tested by setting the request to "POST", with the address of `http://localhost:5000/users/add`. Within the raw body section, a JSON was sent.
`````
{
    "username": "kelvin"
}
`````
Because within our user routes, we have a promise that executes when the username is succesfully stored, we get a JSON response of "User added!"

## READ routes
Read routes (GET) could also be checked by setting the request to "GET", with the address of `http://localhost:5000/users`. Because our routes were set up with a promise that would return all Users, that was printed out in the respose Body.

This also applies to the exercises. By sending a get route to `http://localhost:5000/exercises`, all the different exercises objects would be printed out, along with the id that MongoDB assigns to each object. These exercises were custom put in while testing the post route for exercieses

## UPDATE routes
Changes can be made to existing objects by using the appropriate id, and sending a JSON with existing/ modified values. It is currently set up so that all the variables will be over-written, even if they are the same.

## DELETE routes
Delete routes can be checked by sending a delete request using the id of the object. This can be found when looking up all exercise objects.

# Front End
To start the front end server, move into the top most directory and run `npm start`. This will launch a new web page and output a message in the terminal. The front end was managed by React, which is a javascript framework.

# Setup
The bootstrap module was imported using `$ npm install bootstrap` instead of using the cdn. Bootstrap was imported into our app through src/App.js using 

>import "bootstrap/dist/css/bootstrap.min.css";

To connect all the components to gether, react-router-dom needed to be installed ($ npm install react-router-dom)

