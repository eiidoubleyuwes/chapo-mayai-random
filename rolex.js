// script.js

function handleImageUpload() {
    const imageInput = document.getElementById('imageInput');
    const randomImage = document.getElementById('randomImage');

    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            randomImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

function displayRandomImage() {
    // Your existing code to display random images
    // ...
}
