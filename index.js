

function typeWriter(element, text, delay) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

document.addEventListener("DOMContentLoaded", function() {
    // Target the elements for typing effect
    const nameElement = document.getElementById('name');
    const roleElement = document.getElementById('role');

    // Clear the initial text so it can be typed out
    nameElement.innerHTML = '';
    roleElement.innerHTML = '';

    // Start typing with delay for both lines
    typeWriter(nameElement, 'Krishnabharathi S', 100); // 100ms delay per character
    setTimeout(function() {
        typeWriter(roleElement, 'Full-Stack Developer', 100); // After name is typed
    }, 2000); // Delay between typing the name and role
});



function contact() {
    window.location.href = 'contact.html';
}