// import { URL } from 'node:url';

let http = require('http');
const fs = require('fs');
const url = require("url");
// const myURL = new URL('http://localhost:8080/');



http.createServer(function (req, res) { 
    console.log(url);
    var q = url.parse(req.url, true);
    console.log(q);

   let filename = "." + q.pathname;
    console.log("this is the filename: " + filename);

    if (filename === "./") {
        filename = "./index.html";
        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                fs.readFile("./404.html", function(err, data) {
                    res.write(data);
                    return res.end(); // important
                    // display file basically.
                })
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            console.log(data);
            res.write(data);
            return res.end(); // important
           })
    }
   fs.readFile(filename, function(err, data) {
    if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.readFile("./404.html", function(err, data) {
            res.write(data);
            return res.end(); // important
            // display file basically.
        })
    } else {
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    console.log(data);
    res.write(data);
    return res.end(); // important
    }   
   })

}).listen(8080);


    // async function fetchFiles() {
    //     try {
    //         const homepage = await fs.readFile('./index.html', { encoding: 'utf8' });
    //         console.log(homepage);
    //         const aboutpage = await fs.readFile('./about.html', { encoding: 'utf8' });
    //         console.log(aboutpage);
    //         const contactpage = await fs.readFile('./contact.html', { encoding: 'utf8' });
    //         console.log(contactpage);
    //       } catch (err) {
    //         console.log(err);
    //       }
    // }