// declare express functionality
const express = require('express')
// creating app via express 
const app = express()
// port is ... 
const port = 3000

// req is ...
// res is ...
app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})


app.listen(port, () => {
    console.log(`our app is running on port ${port}`)
})