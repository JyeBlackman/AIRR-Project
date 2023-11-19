document.addEventListener('DOMContentLoaded', function() {
    // Retrieve profile data from localStorage
    var storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
        var profileData = JSON.parse(storedProfile);

        // Display profile information on the page
        var profileInfoElement = document.getElementById('profile-info');
        profileInfoElement.innerHTML = `
            <h2>${profileData.name}</h2>
            <p>Email: ${profileData.email}</p>
            <p>Phone: ${profileData.phone}</p>
            <p>Location: ${profileData.location}</p>
            <img src="${profileData.profilePicture}" alt="Profile Picture" onclick="goToProfilePage()">
            <!-- Add more details as needed -->
        `;
    }
});

// Function to navigate to the profile page when the profile picture is clicked
function goToProfilePage() {
    window.location.href = 'profile.html';
}