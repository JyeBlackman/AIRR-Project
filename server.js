const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

const db = new sqlite3.Database('database.db');

app.use(express.static('public'));

app.get('/api/jobs', (req, res) => {
    const userLocation = req.query.location; // Assume user's location is passed in the query string

    // Example SQL query to retrieve jobs ordered by distance
    const sqlQuery = `
        SELECT *, (
            6371 * acos (
                cos(radians(${userLocation.lat})) * cos(radians(location_lat)) * cos(radians(location_lng) - radians(${userLocation.lng})) +
                sin(radians(${userLocation.lat})) * sin(radians(location_lat))
            )
        ) AS distance
        FROM jobs
        ORDER BY distance;
    `;

    db.all(sqlQuery, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});