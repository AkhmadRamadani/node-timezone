const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Hi, It's me. I'm the problem it's me!`);
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

const { find } = require('geo-tz');

// create endpoint to find timezone
app.get('/find', (req, res) => {
    const { lat, lon } = req.query;
    const timezone = find(lat, lon);
    // res.send(timezone);
    // return as json 
    // get current time using timezone with this format: "2023-05-04T05:01:25.8601866"
    const time = new Date().toLocaleString("en-US", { timeZone: timezone });
    const formatedTime = new Date(time).toISOString();
    const data = {
        timezone: timezone,
        dateTime: formatedTime,
    }
    res.json(data);
});