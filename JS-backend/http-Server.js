const fs = require("fs"); // File system module ko import kar rahe hain
const http = require("http"); // HTTP module ko import kar rahe hain

// Server create kar rahe hain
const myserver = http.createServer((request, response) => {
    const log = `${Date.now()}: New Request received on ${request.url}\n`;

    // Log ko file mein append kar rahe hain (add kar rahe hain bina overwrite kiye)
    fs.appendFile("./login.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err); // Agar error aata hai to console par show karega
        }
    });

    // Request ka URL check kar ke response bhej rahe hain
    switch (request.url) {
        case '/': 
            response.end("Home Page"); // Home page ka response bhej rahe hain
            break;
        case '/about':
            response.end("About Page"); // About page ka response bhej rahe hain
            break;
        default:
            response.end("404 Not Found"); // Agar koi aur URL aaye to 404 error bhej rahe hain
    }
});

// Server ko port 8000 par start kar rahe hain
myserver.listen(8000, () => {
    console.log("Server started on port 8000"); // Jab server start ho jaye to console par message show karega
});
