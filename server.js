const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get("/sum", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    // Check if a or b is not a number
    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Invalid parameters');
        return;
    }

    let sum = a + b;

    res.send(sum.toString());
});
app.listen(3000);