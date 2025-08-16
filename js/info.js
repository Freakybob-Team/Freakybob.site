function showInfo(id) {
    var descriptionDiv = document.getElementById('description');
    descriptionDiv.innerHTML = '';
  
    if (id) {
      var para = document.createElement('p');
      para.id = id;
  
      var messages = {
        'point': 'Listen, you do not know how many times we hear this. The point of this website is just refering to the meme Freakybob and just having random ah features in the website :3',
        'DouKnow': 'No, I do not.'
      };
  
      para.textContent = messages[id] || 'Unknown message';
      descriptionDiv.appendChild(para);
  
      var closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.onclick = function() {
        showInfo('');
      };
      descriptionDiv.appendChild(closeButton);
    }
    para.style.display = 'block';
    descriptionDiv.scrollIntoView({ behavior: 'smooth' });
  }
  var descriptionDiv = document.getElementById('description');
  descriptionDiv.addEventListener('click', function(event) {
    var target = event.target;
    if (target !== descriptionDiv && !descriptionDiv.contains(target)) {
      showInfo('');
    }
  });
let currentIndex = 0;
const images = document.querySelectorAll('#image-track img');
const totalImages = images.length;
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
function updateCarousel() {
    const imageTrack = document.getElementById('image-track');
    const width = images[0].clientWidth;
    imageTrack.style.transform = `translateX(-${currentIndex * width}px)`;
}
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}
function openModal(src) {
    modalImage.src = src;
    modal.style.display = "flex";
}
function closeModal() {
    modal.style.display = "none";
}

images.forEach(image => {
    image.addEventListener('click', () => openModal(image.src));
});

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

window.addEventListener('keydown', (event) => {
    if (event.key === "Escape"
        (event.key ===";")
    ) {
        closeModal();
    }
});
window.addEventListener('resize', updateCarousel);