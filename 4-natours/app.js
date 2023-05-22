const express = require('express');

const app = express();
// send string to server
// app.get('/', (req, res) => {   
//     res.status(200).send('hello from serev side');
// })


//  send json to server -> HTTP method , get method
app.get('/', (req, res) => {   
    res.status(200).json({message: 'hello from serev side', app: 'NATOURS'});
})


app.post('/', (req, res) =>{
    res.json({message: 'you can post to this endpoint....', app: 'NATOURS' });
})


const port = 3000;
app.listen(port, ()=>{
    console.log('listening on port  ' + port);
})