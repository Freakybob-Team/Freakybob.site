function showInfo(name) {
    const toggleDescriptions = {
        'Squirrel': 'Squirrel bought the domain and does most of all the coding! Silly boykisser :3  ',
        'Wish': 'Wish is a main developer for the website and made it so the music gallery can live on!',
        'Hater': '#2 Twitter Hater helped with giving all sorts of spongebob images!',
        'mpax':  'Mpax helps with the 3DS and IE6 versions! He also makes little tweaks to improve the site.',
        'names': 'Names helps with the Freakyblog, and also improves the sites!',
        'Nomaakip': 'Is now a part of the freakybob team and added some images to the image gallery!',
    };
    const images = {
        'Squirrel': 'images/pfps/Boykisser Squirrel.png',
        'Wish': 'images/pfps/wish.png',
        'Hater': 'images/pfps/twitterhater.webp',
        'mpax':  'images/pfps/Mpax.png',
        'names':  'images/pfps/names.png',
        'Nomaakip': 'images/pfps/nomaakip.jpg',
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
