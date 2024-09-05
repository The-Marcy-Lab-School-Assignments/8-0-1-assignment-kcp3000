const express = require('express');
const app = express()

const path = require('path')

const pathToDistFolder = path.join(__dirname, '../vite-project/dist')

const serveStatic = express.static(pathToDistFolder)

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalURL} - ${time}`)
  next();
}

const serveFall = (req, res, next) => {
  res.send(`<h1>if you were up to the neck, why don't you keep going down?</h1>`)
}

const serveHello = (req, res, next) => {
  res.send(`<h1>stfu</h1>`)
}


app.use(logRoutes)
app.use(serveStatic)
app.get('/hello', serveHello)
app.get('/fall', serveFall)


const PORT = 2547
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});