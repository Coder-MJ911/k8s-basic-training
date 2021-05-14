const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cronJob', (req, res) => {
  res.send('This is cron job ------ ' + new Date())
})

app.listen(port, () => {
  console.log(`Example app listening at http://127.0.0.1:${port}`)
})