

const lines = [
    "Hi, I'm Krishnabharathi, a fresh graduate in Computer Science Engineering with a strong passion for full-stack development.",
    "I have experience working with technologies like HTML, CSS, JavaScript, Python, and SQL, along with frameworks like Django.",
    "My internships and projects have equipped me with skills in both front-end and back-end development using Python for backend solutions.",
    "I'm eager to apply my knowledge in creating scalable web applications and solving real-world problems. Let’s connect!"
];

let lineIndex = 0;
let charIndex = 0;
let currentLine = "";
let typingSpeed = 20;

function typeLine() {
    if (charIndex < lines[lineIndex].length) {
        currentLine += lines[lineIndex].charAt(charIndex);
        document.getElementById(`line${lineIndex + 1}`).innerHTML = currentLine;
        charIndex++;
        setTimeout(typeLine, typingSpeed);
    } else {
        charIndex = 0;
        currentLine = "";
        lineIndex++;
        if (lineIndex < lines.length) {
            setTimeout(typeLine, 50); // Delay between lines
        } else {
            // Show skills and tools after typing finishes
            document.getElementById('skillsSection').classList.add('fade-in');
            document.getElementById('toolsSection').classList.add('fade-in');
        }
    }
}

function showName() {
    document.getElementById('name').style.opacity = 1;
    setTimeout(typeLine, 50); // Start typing after name appears
}

window.onload = function() {
    setTimeout(() => {
        document.getElementById('profileImage').style.opacity = 1;
        setTimeout(showName, 100); // Show name after image
    }, 50); // Delay before image appears
};
