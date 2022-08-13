const express = require('express')
const app = express()

app.all('*', function(req, res) {
    res.redirect("https://forms.gle/M3wxZSnadupAxDpR7");
});
  
const port = 8000 || process.env.PORT
app.listen(port, ()=> console.log(`Listening on port ${port}`))