const images = [
    'image_png/Image1.jpg',
    'image_png/Image2.jpg',
    'image_png/Image3.jpg',
    'image_png/Image4.jpg',
    'image_png/Image5.jpg',
    'image_png/Image6.jpg',
    'image_png/Image7.jpg',
    'image_png/Image8.jpg',
    'image_png/Image9.jpg',
    'image_png/Image10.jpg',
    'image_png/Image11.jpg',
    'image_png/Image12.jpg',
]

const chosenImage = images[Math.round(Math.random() * (images.length - 1))];
const body = document.querySelector("body");

const bgImage = new Image();
bgImage.src = chosenImage;
bgImage.classList.add("fluid");
body.appendChild(bgImage);
