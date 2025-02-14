// // Import the required modules
// const fs = require("fs"); 

const os= require("os");
console.log(os.cpus().length);


// // ==========================
// // 📌 Writing to a File (Asynchronous)
// // ==========================

// // Asynchronously writes "Hello user" into test.txt (creates the file if it doesn't exist)
// fs.writeFile("./test.txt", "Hello user", (err) => {
//     if (err) {
//         console.log("Error writing file:", err);
//     } else {
//         console.log("File written successfully!");
//     }
// });

// // ==========================
// // 📌 Writing to a File (Synchronous)
// // ==========================

// // Synchronously writes "Hello sam" into test.txt (Overwrites existing content)
// fs.writeFileSync("./test.txt", "Hello sam");
// console.log("Synchronous write completed.");

// // ==========================
// // 📌 Reading a File (Synchronous)
// // ==========================

// // Reads the content of 'contact.txt' synchronously and logs it
// try {
//     const read = fs.readFileSync("./contact.txt", "utf-8");
//     console.log("File content (Sync):", read);
// } catch (error) {
//     console.log("Error reading file:", error);
// }

// // ==========================
// // 📌 Reading a File (Asynchronous)
// // ==========================

// // Reads the file asynchronously and logs the content
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error reading file:", err);
//     } else {
//         console.log("File content (Async):", result);
//     }
// });

// // ==========================
// // 📌 Appending Data to a File (Synchronous)
// // ==========================

// // Appends a timestamped entry to 'contact.txt'
// fs.appendFileSync("./contact.txt", `${Date.now()} user3: +913333333333\n`);
// console.log("Data appended synchronously.");

// // ==========================
// // 📌 Appending Data to a File (Asynchronous)
// // ==========================

// // Appends a new user entry to 'contact.txt' asynchronously
// fs.appendFile("./contact.txt", `user4 :+9155555555555\n`, (err) => {
//     if (err) {
//         console.log("Error appending file:", err);
//     } else {
//         console.log("Data appended asynchronously.");
//     }
// });

// // ==========================
// // 📌 Copying a File
// // ==========================

// // Copies 'test.txt' to 'copy.txt' (Overwrites if it exists)
// fs.copyFileSync("./test.txt", "./copy.txt");
// console.log("File copied successfully.");

// // ==========================
// // 📌 Deleting a File
// // ==========================

// // Deletes 'copy.txt' if it exists
// try {
//     fs.unlinkSync("./copy.txt");
//     console.log("File deleted successfully.");
// } catch (error) {
//     console.log("Error deleting file:", error);
// }
