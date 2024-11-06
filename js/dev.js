let currentName = null;

function showInfo(name) {
    const descriptions = {
        'Squirrel': 'Squirrel bought the domain and does most of all the coding! Silly boykisser :3',
        'Wish': 'Wish is a main developer for the website and made it so the music gallery can live on!',
        'Hater': '#2 Twitter Hater helped with giving all sorts of spongebob images!',
        'mpax': 'Mpax helps with the 3DS and IE6 versions! He also makes little tweaks to improve the site.',
        'names': 'Names helps with the Freakyblog, and also improves the sites!',
        'Nomaakip': 'Nomaakip helps fix the site and helped designing the lb website!',
    };
    const images = {
        'Squirrel': 'https://static.wikia.nocookie.net/christmas-wiki/images/2/21/How-old-is-santa-6500cdaec0818.jpg/revision/latest?cb=20240708135338',
        'Wish': 'images/pfps/wish.png',
        'Hater': 'images/pfps/twitterhater.webp',
        'mpax': 'images/pfps/Mpax.png',
        'names': 'images/pfps/names.png',
        'Nomaakip': 'images/pfps/nomaakip2.png',
    };

    const descriptionDiv = document.getElementById('description');
    const personImage = document.getElementById('person-image');
    const image = document.getElementById('image');

    
    if (currentName === name) {
        descriptionDiv.innerText = '';
        personImage.style.display = 'none';
        currentName = null;
    } else {
        descriptionDiv.innerText = descriptions[name] || 'Information not available.';
        image.src = images[name] || '';
        personImage.style.display = 'block';
        currentName = name; 
    }
}
