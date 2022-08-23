import { courses, blogs, users } from "./data.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const http = require("http");
const port = 2000;

http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("welcome to home page");
    }
    // users data ()
    if (req.url === "/users") {
        users.forEach((user) => {
            res.write(`name : ${user.user_name} \nemail : ${user.user_email}\n`);
            res.write("\n-----------------------------------------------------\n");
        });
    }
    if (req.url === "/users/user") {
        users.forEach((user) => {
            res.write(`user name : ${user.user_name}\n`);
            res.write(`user age : ${user.user_age}\n`);
            res.write(`user password : ${user.user_password}\n`);
            res.write(`user skills : ${user.user_skills}\n`);
            res.write(`user email : ${user.user_email}\n`);
            res.write("\n----------------------------------------------------------------------------- \n");
        });
    }

    // courses data
    if (req.url === "/courses") {
        courses.forEach((course) => {
            res.write(`course name : ${course.course_name} \n`);
            res.write(`course price : ${course.course_price} \n`);
            res.write(`course teacher : ${course.course_teacher} \n`);
            res.write("\n----------------------------------------\n");
        });
    }

    if (req.url === "/courses/course") {
        courses.forEach((course) => {
            res.write(`course name : ${course.course_name} \n`);
            res.write(`course price : ${course.course_price} \n`);
            res.write(`course teacher : ${course.course_teacher} \n`);
            res.write(`course student : ${course.course_students} \n`);
            res.write("\n----------------------------------------\n");
        });
    }

    // blog data
    if (req.url === "/blogs") {
        blogs.forEach((blog) => {
            res.write(`blog name : ${blog.blog_name}\n`);
            res.write(`blog view : ${blog.blog_view} view\n`);
            res.write("\n-------------------------------------\n");
        });
    }

    if (req.url === "/blogs/blog") {
        blogs.forEach((blog) => {
            res.write(`blog name : ${blog.blog_name}\n`);
            res.write(`blog view : ${blog.blog_view} view\n`);
            res.write(`blog writer : ${blog.blog_writer}\n`);
            res.write("comments : \n");
            blog.blog_comments.forEach((comment) => {
                res.write(`\n${comment}\n`);
            });
            res.write("\n-------------------------------------\n");
        });
    }

    res.end();
}).listen(port, (err) => {
    if (err) console.log(err);
    console.log(`server run on port ${port}`);
});
