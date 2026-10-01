import express, { Router } from 'express';

const PORT = 4163;
const app = express();
const router = Router();

app.use(router);

router.get('/', (req, res) => {
  res.send({message: 'Hello World!'})
});

app.listen(PORT, () => console.log(`running at http://0.0.0.0:${PORT}`));