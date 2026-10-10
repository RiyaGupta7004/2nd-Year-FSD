const EventEmitter = require("events");

class SessionManager extends EventEmitter {

    // Method to trigger only allowed events
    trigger(command, ...args) {

        if (command === "greet" || command === "exit") {
            this.emit(command, ...args);
        } 
        else {
            console.log(`Unknown event: ${command}`);
        }
    }
}

const session = new SessionManager();

// greet event
session.on("greet", (username) => {
    console.log(`Hello, ${username}! Welcome.`);
});

// once listener
session.once("greet", () => {
    console.log("First login of the day!");
});

// exit event
session.on("exit", (code) => {
    console.log(`Session closed with code ${code}. Goodbye!`);
});

// error listener
session.on("error", (message) => {
    console.log(`Error: ${message}`);
});


// Emit greet three times
session.emit("greet", "Riya");
session.emit("greet", "Priyanshu");
session.emit("greet", "Prakhar");

// Current listener count
console.log(
    "Greet listener count:",
    session.listenerCount("greet")
);

// Emit exit
session.emit("exit", 0);

// Unknown event
session.trigger("login");

// Emit error
session.emit("error", "Something went wrong!");