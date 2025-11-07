import express from 'express'
const app = express()
const port = 3000

// middleware to parse form data and http req body data to req.body
app.use(
	express.urlencoded({extended: true}), 
	express.json()
);

app.get('/', (req, res) => {
  	res.json({user: 'Crownless'})
})

app.listen(port, () => {
  	console.log(`Example app listening on port ${port}`)
})
