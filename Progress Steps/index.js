const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');

let active = 1;

prevBtn.addEventListener('click', () => {
    active--;
     if(active <= 1){
        active = 1;
        prevBtn.disabled = true;
    }else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
    update();
});

nextBtn.addEventListener('click', () => {
    active++;
    if(active >= circles.length){
        active = circles.length;
        nextBtn.disabled = true;
    }else {
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if(index < active){
            circle.classList.add('active');
        }else {
            circle.classList.remove('active');
        }
    })

    const activeCircles = document.querySelectorAll('.active').length;
    const progressPercentage = ((activeCircles-1)/(circles.length-1)) * 100;

    progress.style.width = progressPercentage + '%';
}

