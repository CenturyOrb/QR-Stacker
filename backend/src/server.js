import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import multer from 'multer'
const app = express();
const port = 3000; // this should be set in .env later

import itemRoutes from './routes/itemRoutes.js'
import authRoutes from './routes/authRoutes.js'

// middleware to parse form data and http req body data to req.body
app.use(
	cors({
		origin: "*",
	  	allowedHeaders: ["Authorization", "Content-Type"],
	}),
	morgan('tiny'),
	express.urlencoded({extended: true}), 
	express.json()
);

// routes
app.use('/api/item', itemRoutes);
app.use('/api/auth', authRoutes);

// route fuckery
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'resources/user/testUser')
  },
  filename: (req, file, cb) => {
    cb(null, 'TestName.png');
  },
});
const upload = multer({storage});
app.post("/api/test", upload.single("image"), (req, res) => {
  	console.log("BODY:", req.body);
  	console.log("FILE:", req.file);

  	res.send("Test success");
});

// error handling for non existent route, this is still a regular middleware
app.use((req, res, next) => { 
	res.status(404).json({error: 'Route not found'});
});

// error handling middleware for when next(error) gets called
// syncronous middleware errors implicitly calls error handler middleware
// asyncronous middleware errors needs explicit call next(Error)
// https://expressjs.com/en/guide/error-handling.html
app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500;
    err.message = 'Internal Server Error';
  }
  console.log(err.stack);
  res.status(err.status).json({ error: err.message });
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
