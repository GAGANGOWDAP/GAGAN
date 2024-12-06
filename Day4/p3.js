const readline = require('readline');
const { LocalStorage } = require('node-localstorage');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const localStorage = new LocalStorage('./scratch');


function register() {
    rl.question("Enter email for registration: ", (email) => {
        rl.question("Enter password for registration: ", (password) => {
            if (email && password) {
               
                localStorage.setItem("userEmail", email);
                localStorage.setItem("userPassword", password);
                console.log("Registration successful! You can now login.");
                login(); 
            } else {
                console.log("Please provide both email and password.");
                rl.close(); 
            }
        });
    });
}


function login() {
    rl.question("Enter your email: ", (email) => {
        rl.question("Enter your password: ", (password) => {
            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email === storedEmail && password === storedPassword) {
                console.log("Login successful!");
            } else if (storedEmail && storedPassword) {
                console.log("Incorrect email or password.");
            } else {
                console.log("No user found. Please register first.");
            }
            rl.close();
        });
    });
}


register();
