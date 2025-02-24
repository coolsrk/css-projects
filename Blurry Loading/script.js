const text = document.querySelector('.load-percent');
const bg = document.querySelector('.bg');

let load = 0;

const inc = setInterval(() => incrementCount(), 20);

function incrementCount() {
    load++;
    if(load > 99) {
        clearInterval(inc);
    }
    
    text.innerText = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0); // Makes text blur as it starts reaching 100.
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // Makes background blur to clear as it starts reaching 100.
}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

