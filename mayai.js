 // Function to display random images of chapo mayai
 function displayRandomImage() {
    var images = [
        'vitunguu(images)/590_1.jpg',
        'vitunguu(images)/chapatti-mayai-recipe-main-photo.jpg',
        'vitunguu(images)/download.jpeg',
        'vitunguu(images)/chapo-mayai-recipe-step-7-photo.jpg'
        // Add more image paths as needed
    ];

    // Get a random index
    var randomIndex = Math.floor(Math.random() * images.length);

    // Get the image element by its ID
    var imageElement = document.getElementById('randomImage');

    // Set the source attribute of the image element to display the random image
    imageElement.src = images[randomIndex];
}

// Call the function initially to display a random image when the page loads
displayRandomImage();
