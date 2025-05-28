// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/",(req,resp)=>{
  resp.send("i am root")
})
app.post('/submit', (req, res) => {
  const { name } = req.body;
  console.log('Received:', name);
  res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
