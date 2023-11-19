// Assuming you're using a library like Leaflet for the map
// Make sure to include Leaflet in your project

// Initialize the map
var map = L.map('map').setView([0, 0], 2); // Set the initial coordinates and zoom level

// Add a tile layer (you may want to customize the URL)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Fetch data from your database
fetch('https://your-api-endpoint.com/data')
    .then(response => response.json())
    .then(data => {
        // Loop through the data and create markers on the map
        data.forEach(item => {
            var marker = L.marker([item.latitude, item.longitude]).addTo(map);

            // Add a popup to the marker with details
            marker.bindPopup(`
                <strong>Location:</strong> ${item.location}<br>
                <strong>Time:</strong> ${item.time}<br>
                <strong>Date:</strong> ${item.date}<br>
                <a href="${item.detailsLink}" target="_blank">More Details</a>
            `);
        });
    })
    .catch(error => console.error('Error fetching data:', error));