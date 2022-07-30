const url = require("url");

const myURL = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host (root domain)
console.log(myURL.host);

// Host name (the difference is, it will NOT include the port)
console.log(myURL.hostname);

// Pathname
console.log(myURL.pathname);

// Serialized query - returns a string
console.log(myURL.search);

// Seralized query - returns an object
console.log(myURL.searchParams);

// Add a param
myURL.searchParams.append("value", "200");
console.log(myURL.searchParams);

// Loop through params
myURL.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
