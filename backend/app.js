const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user.routes")
const cors = require("cors");


app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        status:"success",
        msg:({
            msg:`Hello from homw api`
        })
    })
})
// base
app.use("/auth/api/v1/",userRouter)





mongoose
  .connect("mongodb://127.0.0.1:27017/voosh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected successfully");
    
    app.listen(4200, () => {
      console.log("Listening on port 4200....");
    });
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
