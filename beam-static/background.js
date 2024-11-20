document.getElementById('ip-link').addEventListener('click', function(event) {
    event.preventDefault();
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-link').textContent = 'Your IP: ' + data.ip;
        })
        .catch(error => {
            document.getElementById('ip-link').textContent = 'Unable to retrieve IP';
        });
});