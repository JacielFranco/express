
//  Practice running 
const express = require('express')

const server = express()
const port = 5000

// C - Create (POST)
// R - Read (GET)
// U - Update (PUT, PATCH)
// D - Delete (DELETE)

server.get('/', (req, res) => {
    res.send('Server runnin')
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
