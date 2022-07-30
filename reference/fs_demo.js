const fs = require("fs");
const { dirname } = require("path");
const path = require("path");

// Create a folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });

// For just creating a file, use fs.open

// Create and write file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "This is the file content",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to");

//     append();
//   }
// );

// // Appending file
// const append = () => {
//   fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     "\nI am learning Node.js",
//     (err) => {
//       if (err) throw err;
//       console.log("File written to");
//     }
//   );
// };

// Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename a file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "changed.txt"),
  (err, data) => {
    if (err) throw err;
    console.log("File renamed");
  }
);
