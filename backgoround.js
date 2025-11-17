const images = [
    'Image1.jpg',
    'Image2.jpg',
    'Image3.jpg',
    'Image4.jpg',
    'Image5.jpg',
    'Image6.jpg',
    'Image7.jpg',
    'Image8.jpg',
    'Image9.jpg',
    'Image10.jpg',
    'Image11.jpg',
    'Image12.jpg',
]

const chosenImage = images[Math.round(Math.random() * (images.length - 1))];
const body = document.querySelector("body");

const bgImage = new Image();
bgImage.src = chosenImage;
bgImage.classList.add("fluid");
body.appendChild(bgImage);
