// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const controller = require('./controller.js');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const morgan = require('morgan')
  const port = 3000;

  const server = express();

  // user middleware
  server.use(bodyParser.json())
        .use(cors())
        .use(morgan('dev'))

  // *** Double check express static later
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));

  // Need to use the router
  server.use('/api', router);

  server.listen(port, () => console.log('Connected to port: 3000'))




  // server.get('/name', (req, res) => {
  //   res.status(200).send('This is your get request, modify this file to use your router!')
  // })

  // server.post('/name', (req, res) => {
  //   res.status(200).send('This is your post request, modify this file to use your router!')
  // })

  // server.put('/name', (req, res) => {
  //   res.status(200).send('This is your put request, modify this file to use your router!')
  // })

  // server.delete('/name', (req, res) => {
  //   res.status(200).send('This is your delete request, modify this file to use your router!')
  // })
