const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    res.send('ok, you got me')
})

app.listen(3001, ()=>{
    console.log('goodbye')
})