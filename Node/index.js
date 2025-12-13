// fs : FileSystem
const fs = require("fs");
const http = require("http");

// blocking code

// 1. Read a File
// 1. path
// 2. encryption
// let read = fs.readFileSync("./Files/append.txt","utf-8");
// console.log(read);

// 2. Write a File
// 1. path
// 2. content
// 3. encryption
// fs.writeFileSync("./Files/a.txt","The file is not here but I want to write","utf-8");

// non-blocking code
// asynchronous code
// read data
// path, encryption, callbackfunction(err,data);
// fs.readFile("./Files/read.txt","utf-8",(err, data) => {
//     if(err) return console.log("Error Comes");
//     console.log(data);
//     fs.readFile(`./Files/${data}.txt`,"utf-8",(err1,data1) => {
//         if(err) return console.log("Error Comes");
//         console.log(data1)
//     })
// })
// path, data, encryption, callbackfn(err)
// fs.writeFile("./Files/a.txt/","Content is added","utf-8",(err) => {
//     if(err) return console.log("Error Comes");
//     console.log("File Written Successfully")
// }
// )

// Http Status Codes
// 1xx-199 : Information
// 2xx : Successful Case
// 3xx : Redirectional
// 4xx : Client Error
// 5xx : Server Error
let jsonData = fs.readFileSync("./Files/SeriesData.json","utf-8");
let htmlData = fs.readFileSync("./Files/index.html","utf-8");

const server = http.createServer((req, res) => {
    if(req.url === "/")
    {
        res.end(htmlData);
    }
    else if(req.url === "/api")
    {
        res.end("Just send api data");
    }
    else if(req.url === "/json")
    {
        res.end(jsonData);
    }
    else
    {
        res.end("Server Created Using Node");
    }
});

// We have to start the server
// 1. port
// 2. ip address
// 3. callback fn
server.listen(9000, "127.0.0.1", () => {
    console.log("Server started in port 9000");
});