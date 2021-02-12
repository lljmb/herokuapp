const dotenv = require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 9000

// /* points to anything after the /
app.use('/api/*', (_, res) => {
    res.json({data: 'the api lives'})
})

app.listen(port, () => {
    console.log(`server is alive on port: ${port}`)
})

// console.log('HEY HEY HEY')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)
