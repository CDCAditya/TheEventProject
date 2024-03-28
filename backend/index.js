// server.js
import express  from 'express';
import mongoose from 'mongoose';
import Event from './models/eventmodel.js';
import router from './routes/eventroute.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

//import eventRoutes from './eventroutes.js';

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Define routes
app.get('/', (req, res) => {
  res.send('Hello Worldl!');
});

//Use Routes

app.use('/events', router)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
