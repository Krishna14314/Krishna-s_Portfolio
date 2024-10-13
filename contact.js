// Typing effect for Contact Me and Get in Touch titles
function typeEffect(element, text, delay, callback) {
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, delay);
        } else {
            if (callback) callback();
        }
    }
    typeWriter();
}

// Function to show elements with fade-in effect
function fadeInElement(element, delay) {
    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
    }, delay);
}

// Run the animations when the page loads
window.onload = function() {
    const contactTitle = document.getElementById('contact-title');
    const contactPara = document.getElementById('contact-para');
    const form = document.querySelector('form');
    const getInTouchTitle = document.getElementById('get-in-touch-title');
    const contactDetails = document.querySelector('.contact-details');

    // Typing effect for "Contact Me" title
    typeEffect(contactTitle, "Contact Me", 100, () => {
        // Show paragraph and form with fade-in effect
        contactPara.style.display = 'block';
        form.style.display = 'block';
        fadeInElement(contactPara, 500);
        fadeInElement(form, 800);

        // Typing effect for "Get in Touch" title after form is shown
        typeEffect(getInTouchTitle, "Get in Touch", 100, () => {
            // Show the social icons with fade-in effect
            contactDetails.style.display = 'block';
            fadeInElement(contactDetails, 500);
        });
    });
};
