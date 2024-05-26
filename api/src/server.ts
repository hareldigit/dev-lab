import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const items:{id:number,name:string}[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});