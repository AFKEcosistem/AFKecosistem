import express from 'express';
import bodyParser from 'body-parser';
import { setLoginRoutes } from './routes/loginRoutes';
import { setRegisterRoutes } from './routes/registerRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setLoginRoutes(app);
setRegisterRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});