import express from "express"
import { PersonaRouter } from "./routes/PersonaRoute";
import { StrategyRouter } from "./routes/StrategyRoute";
import { SeriesRouter } from "./routes/SeriesRoute";
import { PostRouter } from "./routes/PostRoute";
import { pool } from "./db/psql";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/persona", PersonaRouter)
app.use("/strategy", StrategyRouter)
app.use("/series", SeriesRouter)
app.use("/post", PostRouter)

app.get('/health', (req, res) => {
  res.sendStatus(200)
});

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
