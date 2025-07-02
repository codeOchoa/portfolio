const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/projects', (req, res) => {
    res.json([
        { id: 1, title: 'API de Autenticación', stack: 'Node.js, JWT, MongoDB' },
        { id: 2, title: 'Dashboard de Telemetría', stack: 'Express, WebSockets, PostgreSQL' },
        { id: 3, title: 'Sistema de E-commerce', stack: 'Next.js, Stripe, Express, MongoDB' }
    ]);
});

app.post('/api/contact', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log('Nuevo mensaje:', { nombre, email, mensaje });
    res.status(200).json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor Backend corriendo en puerto ${PORT}`));