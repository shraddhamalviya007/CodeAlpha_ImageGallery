// LIGHTBOX FUNCTIONALITY
const galleryImages = document.querySelectorAll('.image-box img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = galleryImages[currentIndex].src;
}

galleryImages.forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(i));
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Next Image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});

// Previous Image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});

// FILTERING
const buttons = document.querySelectorAll('.filter-btn');
const images = document.querySelectorAll('.image-box');
const title = document.getElementById('category-title');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Active class change
        document.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        let category = button.getAttribute('data-filter');

        // Change category title
        if (category === 'all') title.textContent = 'All Images';
        else title.textContent = category.charAt(0).toUpperCase() + category.slice(1) + ' Images';

        // Filtering
        images.forEach((img) => {
            if (category === 'all') {
                img.style.display = 'block';
            } else {
                img.style.display = img.classList.contains(category)
                    ? 'block'
                    : 'none';
            }
        });
    });
});
