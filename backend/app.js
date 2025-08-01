require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
db();
const visterModule = require('./modul');
const cors = require('cors');
 
app.use(express.json());  // to parse JSON body
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.post('/vist', async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = req.body;

    // Save new visitor
    const newVisitor = new visterModule({
      name,
      email,
      phone: phoneNumber,
      message
    });

    await newVisitor.save();

    res.status(201).json({ success: true, message: "Visitor data saved!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(3000,()=>{
    console.log('server run in 3000');
}); 
