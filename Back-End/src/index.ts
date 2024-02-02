import express from 'express';
import adminRoutes from './router/adminRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/admin', adminRoutes);
app.use('/admin', adminRoutes);


app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
