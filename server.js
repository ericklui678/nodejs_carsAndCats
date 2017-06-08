var fs = require("fs"),
    http = require("http"),
    port = 7077;

var server = http.createServer(function server(req, res) {
    var file;
    var type;
    switch (req.url) {
        case '/cars':
            file = 'views/cars.html';
            type = {"Content-Type": "text/html"};
            break;
        case '/cats':
            file = 'views/cats.html';
            type = {"Content-Type": "text/html"};
            break;
        case '/cars/new':
            file = 'views/new.html';
            type = {"Content-Type": "text/html"};
            break;
        case '/stylesheets/style.css':
            file = 'stylesheets/style.css';
            type = {"Content-Type": "text/css"};
            break;
        case '/images/fold1.jpg':
            file = 'images/fold1.jpg';
            type = {'Content-type': 'image/jpg'};
            break;
        case '/images/ford.jpg':
            file = 'images/ford.jpg';
            type = {'Content-type': 'image/jpg'};
            break;
        default:
            file = null;
            break;
    }
    if (file !== null) {
        fs.readFile(`${file}`, function(error, contents) {
            res.writeHead(200, type);
            res.write(contents);
            res.end();
        });
    } else {
        res.writeHead(404);
        res.end("File not found!");
    }
});

server.listen(port, function() {
    console.log("Running on port:", port);
});
