// var express = require("express");
// // var app = express();

// // app.get("/greeting", function (req, resp) {
// //     resp.send("Hello from api");
// // });
// // app.get("/time", function (req, resp) {
// //     var time = new Date().toLocaleTimeString();
// //     resp.send(`Time is : ${time}`);
// // });
// // app.get("/date", function (req, resp) {
// //     var date = new Date().toLocaleDateString();
// //     resp.send(`Date is : ${date}`);
// // });
// // app.listen(9000, () => console.log("API started listening..."));


// var express = require("express");
 
// var app = express();
 
// app.get('/',function(req,resp){
//     resp.send("Hello from API");
// });
// app.get('/square/:n',function(req,resp){
//     var n = req.params.n;
//     resp.send(`Square of ${n} is: ${n*n}`)
// });
// app.get('/addition/:a/:b',function(req,resp){
//     var a = Number(req.params.a);
//     var b =Number( req.params.b);
//     var c = a+b;
//     resp.send(`Add of ${a} and ${b} is: ${c}`);
// });
 
// const express = require("express");
// const app = express();

// app.use(express.json()); // to read JSON body

// // In-memory array (acts like DB)
// let users = [
//   { id: 1, name: "Ali", age: 25 },
//   { id: 2, name: "Sara", age: 22 }
// ];


// // ================= CREATE =================
// // POST /users
// app.post("/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     age: req.body.age
//   };

//   users.push(newUser);
//   res.send(newUser);
// });


// // ================= READ =================
// // GET /users
// app.get("/users", (req, res) => {
//   res.send(users);
// });

// // GET /users/:id
// app.get("/users/:id", (req, res) => {
//   const user = users.find(u => u.id == req.params.id);

//   if (!user) return res.status(404).send("User not found");

//   res.send(user);
// });


// // ================= UPDATE =================
// // PUT /users/:id
// app.put("/users/:id", (req, res) => {
//   const user = users.find(u => u.id == req.params.id);

//   if (!user) return res.status(404).send("User not found");

//   user.name = req.body.name;
//   user.age = req.body.age;

//   res.send(user);
// });


// // ================= DELETE =================
// // DELETE /users/:id
// app.delete("/users/:id", (req, res) => {
//   users = users.filter(u => u.id != req.params.id);
//   res.send("User deleted");
// });


// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

const express = require("express");
const app = express();

app.use(express.json());


let students = [
  { id: 1, name: "A", mobileno: 8978735498, address: "ABC", age: 20 },
  { id: 2, name: "B", mobileno: 7873547890, address: "BCD", age: 25 }
];


// ================= ADD STUDENT =================
// POST /students
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    mobileno: req.body.mobileno,
    address: req.body.address,
    age: req.body.age
  };

  students.push(newStudent);
  res.send(newStudent);
});


// ================= FIND BY ID =================
// GET /students/:id
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);

  if (!student) return res.status(404).send("Student not found");

  res.send(student);
});


// ================= UPDATE STUDENT =================
// PUT /students/:id
app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);

  if (!student) return res.status(404).send("Student not found");

  student.name = req.body.name;
  student.mobileno = req.body.mobileno;
  student.address = req.body.address;
  student.age = req.body.age;

  res.send(student);
});


// ================= DELETE STUDENT =================

app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.send("Student deleted");
});



app.get("/students", (req, res) => {
  res.send(students);
});


app.listen(3000, () => {
  console.log("Student server running on port 3000");
});

