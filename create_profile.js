document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;

    // You can send this data to a server or store it locally, depending on your needs
    // For now, let's just log the values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Location:', location);

    // Redirect the user to the profile page
    window.location.href = 'profile.html';
});