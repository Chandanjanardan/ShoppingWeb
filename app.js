const express = require("express");
const app = express();
const mongoose = require("mongoose");



app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        status:"success",
        msg:({
            msg:`Hello from homw api`
        })
    })
})




mongoose
  .connect("mongodb://127.0.0.1:27017/voosh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected successfully");
    
    app.listen(4200, () => {
      console.log("Listening on port 4000....");
    });
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
