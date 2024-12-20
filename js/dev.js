let currentName = null;

function showInfo(name) {
    const descriptions = {
        'Squirrel': '5quirre1 was the one to buy the actual domain. He spends his day working on random ah freaky projects :3',
        'Wish': 'Wish is a main developer for the website and made it so the music gallery can live on!',
        'Hater': '#2 Twitter Hater helped with giving all sorts of spongebob images!',
        'mpax': 'Mpax helps with the 3DS and IE6 versions! He also makes little tweaks to improve the site.',
        'names': 'Names helps with the Freakyblog, and also improves the sites!',
        'Nomaakip': 'Nomaakip helps fix the site and helped designing the lb website!',
    };
    const images = {
        'Squirrel': 'https://github.com/5quirre1.png',
        'Wish': 'https://github.com/wish13yt.png',
        'Hater': 'images/pfps/twitterhater.webp',
        'mpax': 'https://github.com/mpax235.png',
        'names': 'https://github.com/nameswastaken.png',
        'Nomaakip': 'https://github.com/nomaakip.png',
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
