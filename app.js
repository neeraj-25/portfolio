    document.addEventListener('DOMContentLoaded', function () {
        let navbar = document.getElementById('navbar');

        if (navbar) {
            window.addEventListener('scroll', function () {
                if (window.scrollY > window.innerHeight) { 
                    navbar.style.display = 'none'; 
                } else {
                    navbar.style.display = 'block';
                }
            });
        } 
    });
    
    // let glitchTextElement = document.getElementById('welcome');
    // const originalText = glitchTextElement.getAttribute('data-text'); // Store the original text
    
    // glitchTextElement.addEventListener('mouseover', function () {
    //     glitchTextElement.textContent = "To my WebPage!"; // Change to hover text
    // });
    
    // glitchTextElement.addEventListener('mouseout', function () {
    //     glitchTextElement.textContent = originalText;
    //     // Restore the original glitch text
    // });
    
    
    // let glitchTextElement = document.getElementById('click-me');
    // const originalText = glitchTextElement.getAttribute('data-text'); // Store the original text
    
    // glitchTextElement.addEventListener('onclick', function () {
    //     glitchTextElement.textContent = "To my WebPage!"; // Change to hover text
    // });
    
    // glitchTextElement.addEventListener('mouseout', function () {
    //     glitchTextElement.textContent = originalText;
    //     // Restore the original glitch text
    // });


const clickableText = document.getElementById('click');
const outputElement = document.getElementById('output'); // Element to display output text

clickableText.addEventListener('click', function (event) {
    // Get the mouse click coordinates
    const x = event.clientX;
    const y = event.clientY;

    // Set the output text and position it at the click coordinates
    outputElement.textContent = "To my Web Page!";
    outputElement.style.left = `${62}rem`; // Set X position
    outputElement.style.top = `${28}rem`; // Set Y position
});
//62 and 28

// stars start

document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars');
    const background = document.getElementById('background-2');
    const numberOfStars = 30; // Adjust the number of stars as you like

    function generateRandomStar() {
        const star = document.createElement('div');
        const size = Math.random() * 1 + 5; // Random size between 2px and 5px

        star.classList.add('stars');
        star.style.width = `${2.5}px`;
        star.style.height = `${2.5}px`;

        // Set random position within the background container
        star.style.top = `${Math.random() * background.offsetHeight}1px`;
        star.style.left = `${Math.random() * background.offsetWidth}1px`;

        // Adding a 'blink' class to enable the blinking effect
        star.classList.add('blink');

        // Append the star to the container
        starsContainer.appendChild(star);
    }

    for (let i = 0; i < numberOfStars; i++) {
        generateRandomStar();
    }

    // Ensure stars resize correctly when the window resizes
    window.addEventListener('resize', () => {
        starsContainer.innerHTML = ''; // Clear existing stars
        for (let i = 0; i < numberOfStars; i++) {
            generateRandomStar();
        }
    });
});


// stars end
const footerText = document.getElementById('footer-thankyou');

// Change text on hover
footerText.addEventListener('mouseover', () => {
    footerText.textContent = 'Bye!';
});

// Change back to original text when not hovering
footerText.addEventListener('mouseout', () => {
    footerText.textContent = 'Thank You!';
});



    