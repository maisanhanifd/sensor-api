const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 storage sementara (demo)
let sensorData = [];

// health check
app.get("/", (req, res) => {
    res.json({ status: "API hidup 🚀" });
});

// ✅ endpoint terima sensor
app.post("/sensor", (req, res) => {
    const data = {
        ...req.body,
        timestamp: new Date().toISOString(),
    };

    sensorData.push(data);

    console.log("Data masuk:", data);

    res.json({ success: true });
});

// ✅ endpoint ambil data (UNTUK STREAMLIT)
app.get("/sensor", (req, res) => {
    res.json(sensorData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server jalan di port", PORT);
});
