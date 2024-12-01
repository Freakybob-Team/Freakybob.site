function showInfo(name) {
    const toggleDescriptions = {
        'sspruce': "Is apart of the Freakybob-team's graphics team (Is the only one 😭) He's really good and can cook for whatever he needs to make :fire:",
        'tina': "Helps with testing the macOS versions of FreakyBrowse!"
    };
    const images = {
        'sspruce': 'images/pfps/sspruce.png',
        'tina': 'images/pfps/tina.webp'
    };
    const descriptionDiv = document.getElementById('description');
    const personImage = document.getElementById('person-image');
    const image = document.getElementById('image');
    if (personImage.style.display === 'block') {
        descriptionDiv.innerText = '';
        image.src = '';
        personImage.style.display = 'none';
    } else {
        descriptionDiv.innerText = toggleDescriptions[name] || 'Information not available.';
        image.src = images[name] || '';
        personImage.style.display = 'block';
    }
 }
