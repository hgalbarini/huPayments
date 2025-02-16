const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/payment', (req, res) => {
    const { amount, currency, paymentMethod } = req.body;

    if (!amount || !currency || !paymentMethod) {
        return res.status(400).json({ success: false, message: 'Datos de pago incompletos' });
    }

    // Simulación de procesamiento de pago
    const isPaymentSuccessful = Math.random() > 0.2; // 80% de éxito

    if (isPaymentSuccessful) {
        res.json({ success: true, message: 'Pago realizado con éxito' });
    } else {
        res.status(500).json({ success: false, message: 'Error al procesar el pago' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});