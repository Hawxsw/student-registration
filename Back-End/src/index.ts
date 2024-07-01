import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/adminRoutes';
import studentRoutes from './routes/studentRoutes';
import authRoutes from './routes/authRoutes';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
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

app.use(fileUpload({
    createParentPath: true,
    debug: true
}));

// Rotas
app.use('/admin', adminRoutes);
app.use('/students', studentRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
