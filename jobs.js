async function searchJobs() {
    var searchTerm = document.getElementById('job-search').value.toLowerCase();

    try {
        // Fetch user's location (assuming a browser that supports Geolocation API)
        const userLocation = await getCurrentLocation();

        // Fetch jobs from the server based on the user's location
        const response = await fetch(`/api/jobs?location=${JSON.stringify(userLocation)}`);
        const jobs = await response.json();

        // Display or use the matching jobs as needed
        displayJobs(jobs);
    } catch (error) {
        console.error('Error fetching or displaying jobs:', error);
    }
}

async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => resolve({ lat: position.coords.latitude, lng: position.coords.longitude }),
                error => reject(error)
            );
        } else {
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
}

function displayJobs(jobs) {
    var jobsContainer = document.getElementById('active-jobs');
    jobsContainer.innerHTML = '';

    jobs.forEach(job => {
        var jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `<h3>${job.title}</h3><p>${job.location}</p>`;
        jobsContainer.appendChild(jobCard);
    });
}