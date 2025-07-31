import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from 'http';    

const app = express();

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});