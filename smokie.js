 // Function to display random images of chapo mayai
 function displayRandomImage() {
    var images = [
        'smocha(images)/download (1).jpeg',
        'smocha(images)/download.jpeg',
        'smocha(images)/download (2).jpeg',
        'smocha(images)/download3.jpeg',
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
