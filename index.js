// add dotenv at top level & import modules
const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
// path is being called by express.static 
// static wants to know what file to run when the page loads
// & is combining the directory name, 
// the path that goes into the build folder, & index.html
app.use(express.static(path.join(__dirname, 'client/build')))

// /* points to anything after the /
app.use('/api/*', (_, res) => {
    res.json({data: 'the api lives'})
})

app.use('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(port, () => {
    console.log(`server is alive on port: ${port}`)
})



// console.log('HEY HEY HEY')
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)
