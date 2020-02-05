const express = require('express')
const app = express()
const bookCtrl = require('./controllers/book_controller')

let port = 4000

app.use(express.json())
app.use(express.static(__dirname + "/../build"))

app.get('/api/books', bookCtrl.read)
app.post('/api/books', bookCtrl.create)
app.put('/api/books/:id', bookCtrl.update)
app.delete('/api/books/:id', bookCtrl.delete)

app.listen(port, () => console.log(`We're up and running at ${port}.`))