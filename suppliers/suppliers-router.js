const express = require('express')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  res.send('get to /suppliers/')
})

router.get('/:name', (req, res) => {
  const name = req.params.id
  res.send(`The name you sent was ${name}`)
})

module.exports = router