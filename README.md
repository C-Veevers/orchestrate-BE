# orchestrate-be

## Background

During the northcoders course myself and three other students were tasked with building a webapp, we created this api to provide and store information to/from the frontend
The database is MongoDB and we interact with it using [Mongoose](https://mongoosejs.com/)

Project time: 2 weeks

## Setting up the project

You must have node.js installed (17.0.1)

Clone this repo by clicking the green 'code' link at the top of this page, copy your prefered link or download the code.

Once Cloned / downloaded, you will need to install the packages:
``npm install``

You will need to create _one_ `.env` file for this project: `.env`
Into the file, add `DATABASE=connection URL for mongo DB` and `SECRET=12345`

start the api:
``npm start``

## Running Tests

You can run the tests using Jest commands:
`npm test`

tests may take upto 40 seconds to complete.

## Connecting to the Api

you can connect to the API using thunder client / insomnia / postman using localhost:9090/api

## Live Version

[On Heroku](https://orchestrate-co.herokuapp.com/api)
