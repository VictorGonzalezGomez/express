const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json())

app.listen(PORT, (err)=>{
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})


