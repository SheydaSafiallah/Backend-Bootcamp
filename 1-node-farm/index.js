const fs = require('fs')
const http = require('http');
const url = require('url')

/////////////////////////////////////FILE
//blocking, synchronous way
// const textIn = fs.readFileSync('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/input.txt', 'utf-8')
// console.log(textIn)

// const textOut = `This is what we know about Avocado: ${textIn}.\n Create on ${Date.now()}`;
// fs.writeFileSync('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/output.txt', textOut)




//nonblocking, Asynchronous way
// fs.readFile('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/start.txt','utf-8', (err, text)=>{
//     console.log(text)
// });




// other way -> this is hell bcs of triangle shape!
// fs.readFile('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/starttt.txt','utf-8', (err, text1)=>{
//     if (err) return console.log(err.message)
//     fs.readFile(`/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/${text1}.txt`,'utf-8', (err, text2)=>{
//         console.log(text2)
//         fs.readFile('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/append.txt', 'utf-8', (err, text3) => {
//             console.log(text3)

//             fs.writeFile('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/final.txt', `${text2}\n${text3}`,'utf-8', (err) => {
//                 console.log('your file has been written')
//             })

//         } )
//     });
// });
// console.log('will read file')

///////////////////////SERVER!!!
// const server = http.createServer((req, res)=> {
//     console.log(req)
//     res.end('hello from the server')  //end -> simple way to send response
// });

// server.listen(8000,'127.0.0.1', ()=>{
//     console.log('listenning on port 8000')
// })

///////////////////////ROUTING
// const server = http.createServer((req, res)=> {
//     console.log(req.url)
//     // res.end('hello from the server')  //end -> simple way to send response
//     if(req.url === '/') {
//         res.end('hello from the root')
//     } else if(req.url === '/overview'){
//         res.end('hello from the overview')
//     } else if(req.url === '/product'){
//         res.end('hello from the product')
//     } else{
//         res.writeHead(404,{
//             'Content-type' : 'Text/html',
//             'my-own-header' : 'This is shey'
//         });
//         res.end('<h1>page not found</h1>')
//     }
// });

// server.listen(8000,'127.0.0.1', ()=>{
//     console.log('listenning on port 8000')
// })

////////////////easy API
// const server = http.createServer((req, res)=> {
//     console.log(req.url)
//     // res.end('hello from the server')  //end -> simple way to send response
//     if(req.url === '/') {
//         res.end('hello from the root')
//     } else if(req.url === '/overview'){
//         res.end('hello from the overview')
//     } else if(req.url === '/product'){
//         res.end('hello from the product')   
//     } else if(req.url === '/api'){

//         fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data)=>{
//             const productdata = JSON.parse(data)
//             res.writeHead(200, {
//                 'content-type': 'application/json'
//             })
//             res.end(data)
//         })
//     }else{
//         res.writeHead(404,{
//             'Content-type' : 'Text/html',
//             'my-own-header' : 'This is shey'
//         });
//         res.end('<h1>page not found</h1>')
//     }
// });

// server.listen(8000,'127.0.0.1', ()=>{
//     console.log('listenning on port 8000')
// })

///////////////// load file once use it many times!
const data = fs.readFileSync(`${__dirname}/dev-data/data.json` , 'utf-8')
const dataObj = JSON.parse(data)
const server = http.createServer((req, res)=> {
    console.log(req.url)
    // res.end('hello from the server')  //end -> simple way to send response
    if(req.url === '/') {
        res.end('hello from the root')
    } else if(req.url === '/overview'){
        res.end('hello from the overview')
    } else if(req.url === '/product'){
        res.end('hello from the product')   
    } else if(req.url === '/api'){
        res.writeHead(200, {
            'content-type': 'application/json'
        })
            res.end(data)
    }else{
        res.writeHead(404,{
            'Content-type' : 'Text/html',
            'my-own-header' : 'This is shey'
        });
        res.end('<h1>page not found</h1>')
    }
});

server.listen(8000,'127.0.0.1', ()=>{
    console.log('listenning on port 8000')
})