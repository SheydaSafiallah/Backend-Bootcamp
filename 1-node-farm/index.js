const fs = require('fs')

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
fs.readFile('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/starttt.txt','utf-8', (err, text1)=>{
    if (err) return console.log(err.message)
    fs.readFile(`/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/${text1}.txt`,'utf-8', (err, text2)=>{
        console.log(text2)
        fs.readFile('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/append.txt', 'utf-8', (err, text3) => {
            console.log(text3)

            fs.writeFile('/home/shey/Desktop/Backend Bootcamp/1-node-farm/txt/final.txt', `${text2}\n${text3}`,'utf-8', (err) => {
                console.log('your file has been written')
            })

        } )
    });
});
console.log('will read file')

//