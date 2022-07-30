const EventEmitter = require("events");
const uuid = require("uuid");

// Creating a random id
// console.log(uuid.v4());

// Create a class
class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener: ", data));

logger.log("Hello World");
