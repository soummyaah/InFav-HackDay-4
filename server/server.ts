import express from "express"
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.sendStatus(200)
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
