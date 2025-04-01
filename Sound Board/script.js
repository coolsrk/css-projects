const texts = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

texts.forEach((text) => {
    const button = document.createElement('button');
    button.classList.add('btn');

    button.innerText = text;

    button.addEventListener('click', () => {
        // We need to stop all other sounds before playing a new one
        texts.forEach((text) => {
            const audio = document.getElementById(text);
            audio.pause();
            audio.currentTime = 0; // Reset the audio to the beginning so next time it plays it starts from the beginning
        });

        document.getElementById(text).play();
    });

    document.querySelector('.buttons').appendChild(button);
});
