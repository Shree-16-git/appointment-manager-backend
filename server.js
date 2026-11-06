const express = require('express')
const cors = require('cors')
require("dotenv").config();


const mongoose = require("mongoose");
const app = express()

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB error:", err));

const appointmentSchema = new mongoose.Schema({
    title: String,
    date: String
})

const Appointment = mongoose.model("Appointment", appointmentSchema)

app.get('/appointments', async (req,res) => {
    try{
        const appointments = await Appointment.find();
        res.json(appointments)
    } catch(error){
        res.status(500).json({ message: "Failed to fetch" });
    }
    
})

app.post('/appointments', async (req, res) => {
    try{
        const newAppointment = await Appointment.create({
        title: req.body.title,
        date: req.body.date
    });
    res.status(201).json(newAppointment)
    }
    catch(error){
        res.status(500).json({ message: "Failed to create" });
    }
    
    
})

app.delete('/appointments/:id', async (req, res) => {
    try{
        await Appointment.findByIdAndDelete(req.params.id)
        res.json({message: 'Deleted'});
    }
    catch(error){
        res.status(500).json({ message: "Failed to create" });
    }
})

app.get('/', (req, res) => {
    res.send("Server is Running")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});