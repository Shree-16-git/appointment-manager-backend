const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let appointments = [
    { id: 1, title: "Dentist", date: "2026-11-10" },
]

app.delete('/appointments/:id', (req, res) => {
    const id = Number(req.params.id)
    appointments = appointments.filter((a) => a.id !== id)
    res.json({message: 'deleted'})
})

app.post('/appointments', (req, res) => {
    const newAppointment = {
        id: Date.now(),
        title: req.body.title,
        date: req.body.date
    };
    appointments.push(newAppointment)
    res.status(201).json(newAppointment)
})

app.get('/appointments', (req,res) => {
    res.send(appointments)
})

app.get('/', (req, res) => {
    res.send("Server is Running")
})

app.listen(5000, () =>{
    console.log('server is running on port:5000')
})