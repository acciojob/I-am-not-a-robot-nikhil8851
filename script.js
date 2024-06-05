//your code here
// Define variables
var clickedImages = [];
var verifyButton = document.getElementById('verify');
var resetButton = document.getElementById('reset');

// Function to shuffle array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Function to reset state
function resetState() {
    clickedImages = [];
    resetButton.style.display = 'none';
    verifyButton.style.display = 'none';
}

// Function to handle image click
function handleImageClick(event) {
    var img = event.target;
    if (clickedImages.length < 2 && !clickedImages.includes(img)) {
        clickedImages.push(img);
        img.classList.add('selected');
        if (clickedImages.length === 2) {
            verifyButton.style.display = 'block';
        }
    }
}

// Function to handle reset button click
resetButton.addEventListener('click', function() {
    clickedImages.forEach(function(img) {
        img.classList.remove('selected');
    });
    resetState();
});

// Function to handle verify button click
verifyButton.addEventListener('click', function() {
    if (clickedImages.length === 2) {
        if (clickedImages[0].classList.contains(clickedImages[1].classList[1])) {
            document.getElementById('para').textContent = "You are a human. Congratulations!";
        } else {
            document.getElementById('para').textContent = "We can't verify you as a human. You selected the non-identical tiles.";
        }
        verifyButton.style.display = 'none';
    }
});

// Render images
var container = document.getElementById('container');
var images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img1']; // One image repeats
shuffleArray(images);
images.forEach(function(className) {
    var img = document.createElement('img');
    img.setAttribute('src', 'https://via.placeholder.com/150');
    img.classList.add(className);
    img.addEventListener('click', handleImageClick);
    container.appendChild(img);
});

// Initial state
resetState();
