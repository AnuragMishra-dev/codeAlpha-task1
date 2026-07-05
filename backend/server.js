import express from "express";

import cors from "cors";

import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import LongtoShortrouter from "./routes/urlRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


connectDB();

app.get("/" , (req,res) =>{
    res.send("request received!")
})

app.use("/api/url" ,LongtoShortrouter);



app.listen(process.env.PORT, () => {
  console.log(`server is runnig at PORT ${process.env.PORT}`);
});
