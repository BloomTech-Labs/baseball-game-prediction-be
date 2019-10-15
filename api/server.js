const express = require('express')
const cors = require('cors');
const helmet = require('helmet');
const server = express();

const teamRouter = require('../routers/teams/team-router');

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/teams', teamRouter);

server.get('/', (req, res) => {
    res.send('api is up')
});

server.all('*', (req,res)=>{
    res.status(404).send({ message: "How did you get here?" })
  })

module.exports = server