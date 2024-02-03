import express from 'express';
import cors from 'cors';
import adminRoutes from './router/adminRoutes';
import studentRoutes from './router/studentRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('CORS policy violation'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}));


app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);




app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
