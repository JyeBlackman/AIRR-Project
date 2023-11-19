document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;

    // Store the data in localStorage
    var profileData = { name, email, phone, location };
    localStorage.setItem('userProfile', JSON.stringify(profileData));

    // Redirect the user to the profile page
    window.location.href = 'profile.html';
});