// Get a reference to the "Designs" link
const designsLink = document.getElementById('designs');

// Event listener for the "Designs" link
designsLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Open a new window or tab with the templates page
    window.open('design.html', '_blank');
});

// Get a reference to the "Contact" link
const contactLink = document.getElementById('contact');

// Event listener for the "Contact" link
contactLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Open a new window or tab with the contact details page
    window.open('contact.html', '_blank');
});

// Get a reference to the "Custom" link
const customLink = document.getElementById('custom');

// Event listener for the "Contact" link
customLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Open a new window or tab with the contact details page
    window.open('newcustom.html', '_blank');
});

function copyPhone() {
    const phoneElement = document.getElementById('phone');
    const range = document.createRange();
    range.selectNode(phoneElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Phone number copied!");
}


function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.alt);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var img = document.createElement("img");
    img.src = data + ".jpg";
    img.alt = data;
    img.width = 50;
    img.height = 50;
    img.style.position = "absolute";
    img.style.left = (event.clientX - 50) + "px";
    img.style.top = (event.clientY - 50) + "px";
    document.getElementById("droppedItems").appendChild(img);
}

function addText() {
    var text = document.getElementById("textInput").value;
    var p = document.createElement("p");
    p.textContent = text;
    p.style.position = "absolute";
    p.style.left = "100px"; // Example position
    p.style.top = "100px"; // Example position
    document.getElementById("droppedItems").appendChild(p);
}

        // JavaScript to handle image animation
        document.addEventListener("DOMContentLoaded", function() {
            const images = document.querySelectorAll(".image-container img");
            let currentIndex = 0;

            function showNextImage() {
                // Hide the current image
                images[currentIndex].style.display = "none";

                // Move to the next image or loop back to the first image
                currentIndex = (currentIndex + 1) % images.length;

                // Display the next image
                images[currentIndex].style.display = "block";

                // Repeat the process after a certain time interval (e.g., 3 seconds)
                setTimeout(showNextImage, 3000);
            }

            // Start the image animation
            showNextImage();
        });
    
