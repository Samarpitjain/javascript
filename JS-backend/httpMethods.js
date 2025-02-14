const http = require("http");

// Server banayenge jo HTTP requests ko handle karega
const MyServer = http.createServer((req, res) => {
    
    // Switch case se different URLs handle karenge
    switch (req.url) {
        case '/':  // Agar '/' (home page) request aaye to ye chalega
            res.end("Home Page");
            break;

        case '/login': 
            if (req.method === "GET") {
                // Agar GET request aayi to login page dikhayenge
                res.end("Yeh login page hai");
            } 
            else if (req.method === "POST") {
                // Agar POST request aayi to login confirm karenge
                // Yahan pe database query likh sakte ho
                res.end("Login successful");
            } 
            else {
                // Agar koi aur HTTP method aayi to error bhejenge
                res.writeHead(405); // 405: Method Not Allowed
                res.end("Method Not Allowed");
            }
            break;

        default:
            // Agar koi unknown URL aaye to 404 error bhejenge
            res.writeHead(404);
            res.end("Page Not Found");
            break;
    }
});

// Server ko port 8000 pe start karenge
const PORT = 8000;
MyServer.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
