const express = require('express')
const { raw } = require('express')
const app = express()
const port = 8080

app.get('/students', (req, res) => res.send(students))
app.get('students/studentId', (req, res) => res.send (students))
app.get('grades/studentId', (req, res) => res.send (grades))
app.post('/grades', (req, res) => res.send(grades))
app.post('/register', (req, res) => res.send (register))

let students = [];
let grades = [];

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))