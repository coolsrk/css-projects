const labels = document.querySelectorAll('.input-container label');

/**
 * Here we have to move each letter of label to up when the input is focused.
 * For that we need to first wrap each letter in a span tag.
 * Then we need to transform the span tag to move it up when the input is focused.
 * here in style tag we are doing transition-delay: ${index * 50}ms
 * and reason is to delay the animation of each letter by 50ms.
 * So the first letter will be animated immediately, the second letter will be animated after 50ms, and so on.
 */

labels.forEach(label => {
    label.innerHTML = label.innerText
                        .split('')
                        .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
                        .join('');
});