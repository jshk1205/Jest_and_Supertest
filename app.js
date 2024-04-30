const express = require('express')
const { get } = require('./todo-service')

const app = express()
const port = 3000

app.get('/todo', async (req, res) => {
  try {
    const content = await get()
    return res.json({ result: content })
  } catch (err) {
    return res.status(500).json({ result: 'server internal error', error: err })
  }
})

// POST /todo
app.post('/todo', async (req, res) => {
  res.status(501).send({ error: 'Not implemented yet' });
});

// PUT /todo/:id
app.put('/todo/:id', async (req, res) => {
  res.status(501).send({ error: 'Not implemented yet' });
});

// DELETE /todo/:id
app.delete('/todo/:id', async (req, res) => {
  res.status(501).send({ error: 'Not implemented yet' });
});

const server = app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`)
})

module.exports = { app, server }