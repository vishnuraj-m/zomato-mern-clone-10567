import express from 'express';

const zomato = express();
const PORT = 4000;

zomato.use(express.json());

zomato.get('/', (req, res) => {
    res.json({
        message: 'Server is running',
    });
});

zomato.listen(PORT,()=>{
    console.log('Server is running')
})