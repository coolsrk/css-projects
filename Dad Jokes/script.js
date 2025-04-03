const jokeBtn = document.querySelector('.jokeBtn');
const jokeText = document.querySelector('.joke');

jokeBtn.addEventListener('click', () => {
    fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
            jokeText.innerText = data.joke;
        })
        .catch(error => console.error("Error fetching joke:", error));
});