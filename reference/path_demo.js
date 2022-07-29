const path = require("path");

// Full path
console.log(__filename);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));
// or
// console.log(__dirname);

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate
console.log(path.join(__dirname, "test", "hello.html"));
