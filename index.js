// index file

const server = require('./server.js')

//manage products (8) 
//manage clients (8)
//manage orders 
//manage suppliers 

const port = 7000;
server.listen(port, () => console.log(`\n** API on port ${port} **\n`))