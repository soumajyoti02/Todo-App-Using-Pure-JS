const express = require('express')
const path = require('path');

const app = express()
const port = 3000

app.use('/src', express.static(path.join(__dirname, 'src')))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})