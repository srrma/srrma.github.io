// Initialize Masonry
var grid = document.querySelector('.grid');
var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
});

// Simulate grid items loading dynamically
const images = [
    { webp: "./images/pj9.webp", fallback: "./images/img-fallback/pj9.png", alt: "Bismarck Zwei", },
    { webp: "./images/pj8.webp", fallback: "./images/img-fallback/pj8.png", alt: "Shinano" },
    { webp: "./images/pj7.webp", fallback: "./images/img-fallback/pj7.png", alt: "sasakoi photo" },
    { webp: "./images/pj6.webp", fallback: "./images/img-fallback/pj6.png", alt: "Skadi Ticket done" },
    { webp: "./images/pj5.webp", fallback: "./images/img-fallback/pj5.jpg", alt: "Untitled5 (1)" },
    { webp: "./images/pj4.webp", fallback: "./images/img-fallback/pj4.jpg", alt: "86lena_artwork (1)" },
    { webp: "./images/pj3.webp", fallback: "./images/img-fallback/pj3.jpg", alt: "20231220_122826 (1)" },
    { webp: "./images/pj2.webp", fallback: "./images/img-fallback/pj2.jpg", alt: "public_001" },
    { webp: "./images/pj1.webp", fallback: "./images/img-fallback/pj1.jpg", alt: "001_kntn" }
];

// Function to create and append grid item
function appendGridItem(image) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const picture = document.createElement('picture');
    
    const sourceWebp = document.createElement('source');
    sourceWebp.srcset = image.webp;
    sourceWebp.type = 'image/webp';
    
    const img = document.createElement('img');
    img.src = image.fallback;
    img.alt = image.alt;
    img.loading = 'lazy';
    img.onload = function() {
        msnry.appended(gridItem);
        msnry.layout();
    };

    picture.appendChild(sourceWebp);
    picture.appendChild(img);
    gridItem.appendChild(picture);
    grid.appendChild(gridItem);
}

// Append images to grid dynamically
images.forEach(image => {
    appendGridItem(image);
});