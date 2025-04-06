const faqDivs = document.querySelectorAll('.faq');

faqDivs.forEach((faq) => {
    const answer = faq.querySelector('.ans');
    answer.style.display = 'none';
});

faqDivs.forEach((faq) => {
    const icon = faq.getElementsByTagName('i')[0];
    let isActive = false;
    

    faq.addEventListener('click', () => {
        const answer = faq.querySelector('.ans');
        isActive = !isActive;
        faq.classList.toggle('active');

        if(isActive){
            answer.style.display = 'block';
            icon.className = 'fa-regular fa-circle-xmark';
        }else {
            answer.style.display = 'none';
            icon.className = 'fa-solid fa-caret-down';
        }
    });
});