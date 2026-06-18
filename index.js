//import json server 
const jsonServer = require('json-server')

//create server 
const autoServer = jsonServer.create()

//set port for the server
const PORT = 4001 || process.env.PORT

//set middleware
const middleware = jsonServer.defaults()

//set router
const router = jsonServer.router('data.json')

//tell server to use middleware
autoServer.use(middleware)

//tell server to use router
autoServer.use(router)

//make the server listen to that port
autoServer.listen(PORT, () => {
    console.log(`server successfully running at port : ${PORT}`);
})

//check request
autoServer.get(`/`, (req, res) => {
    res.send(`Get Request Recieved`)
})

