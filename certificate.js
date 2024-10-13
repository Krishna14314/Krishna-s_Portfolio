

const text = "Technical Certificates";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust the typing speed here (lower value = faster typing)
    }
}

window.onload = function() {
    type();
};