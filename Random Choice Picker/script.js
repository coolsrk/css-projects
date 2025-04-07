const maxLength = 10;

const textArea = document.getElementsByTagName("textarea")[0];
const tags = document.querySelector("#tags");

textArea.addEventListener('keyup', (e) => {
    const textArray = textArea.value.split(',');
    if(textArray.length > maxLength) {
        alert(`Choices length exceeds. Allowed max ${maxLength}`);
        return;
    }
    
    tags.innerHTML = ''; // ❗❗ IMP ❗❗ Clear previous tags
    for(const text of textArray) {
        const tag = document.createElement("span");
        tag.id = "tag";
        tag.textContent = text.trim();
        if(tag.textContent.length > 0) 
            tags.appendChild(tag);
    }

    if (e.key === 'Enter') {
        textArea.value = ''; // Clear the textarea
        changeTagColor(getRandomChoice(textArray.length));
    }
});

function getRandomChoice(tagsLength) {
    return Math.floor(Math.random() * tagsLength);
};

function changeTagColor (colorIndex) {
    const tags = document.querySelectorAll('#tag');

    let index = 0;
    const originalColor = 'rgb(246, 94, 39)'; 

    const interval = setInterval(() => {
        if (index > 0) {
            // Setting previous tag color to original
            tags[(index - 1) % tags.length].style.backgroundColor = originalColor;
        }
        tags[index % tags.length].style.backgroundColor = 'black';
        index++;
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
        tags.forEach((tag, i) => {
            tag.style.backgroundColor = originalColor;
        });
        tags[colorIndex].style.backgroundColor = 'black';
    }, 5000);
}