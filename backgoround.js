const images = [
    'image_jpg/Image1.jpg',
    'image_jpg/Image2.jpg',
    'image_jpg/Image3.jpg',
    'image_jpg/Image4.jpg',
    'image_jpg/Image5.jpg',
    'image_jpg/Image6.jpg',
    'image_jpg/Image7.jpg',
    'image_jpg/Image8.jpg',
    'image_jpg/Image9.jpg',
    'image_jpg/Image10.jpg',
    'image_jpg/Image11.jpg',
    'image_jpg/Image12.jpg',
]

const chosenImage = images[Math.round(Math.random() * (images.length - 1))];
const body = document.querySelector("body");

const bgImage = new Image();
bgImage.src = chosenImage;
bgImage.classList.add("fluid");
body.appendChild(bgImage);
