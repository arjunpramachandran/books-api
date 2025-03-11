const express = require('express')
const app = express()
const path = require('path')
const bookRouter = require('./bookRout')
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(express.static(__dirname));
app.use('/books',bookRouter)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))

})

app.listen(port)
