// import data files
import { courses, blogs, users } from "./data.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const http = require("http");
const port = 5000;

// creating server and specify routes then send the data to each route
http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("welcome to the home page");
    }
    if (req.url === "/courses") {
        courses.forEach((course) => {
            res.write(JSON.stringify(course) + "\n");
        });
    }
    if (req.url === "/blogs") {
        blogs.forEach((blog) => {
            res.write(JSON.stringify(blog) + "\n");
        });
    }
    if (req.url === "/users") {
        users.forEach((user) => {
            res.write(JSON.stringify(user) + "\n");
        });
    }

    res.end();
}).listen(port, (err) => {
    if (err) console.log(err);
    console.log(`server run on ${port}`);
});
