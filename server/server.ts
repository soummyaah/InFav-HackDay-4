import express from "express"
import { PersonaRouter } from "./routes/PersonaRoute";
import { StrategyRouter } from "./routes/StrategyRoute";
import { SeriesRouter } from "./routes/SeriesRoute";
import { PostRouter } from "./routes/Post";
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
