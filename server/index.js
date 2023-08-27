const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectBd = require('./mongodb/connect.js')
const postRoutes = require('./routes/postRoutes.js')
const dalleRoutes = require('./routes/dalleRoutes.js')


dotenv.config();
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '10mb', extended:true}));
app.use(cors());

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get("/", async (req, res) => {
  res.send("Hello from backend dell-e");
});

const startServer = async () => {
  try {
    connectBd(process.env.MONGODB_URL)
    app.listen(7000, () =>
      console.log("server is started on http://localhost:7000")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();