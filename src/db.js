import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError); //on 은 여러번 발생가능
db.once("open", handleOpen); //once 는 한번만 발생
