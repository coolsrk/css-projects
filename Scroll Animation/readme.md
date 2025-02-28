# Scroll Animation

- New learnings ?
    - **Element.getBoundingClientRect()** :- This function will give us the exact position of the element on the viewport.
    - How we used it ?
        - In our logic we have to bring box from from right or left on scroll but based on if the distance from top to the box is less then 60% of innerHeight of window.
        - Otherwise hide it.
    - **.<class>::nth-of-type(even)** :- With this we can access all boxes or elements which are on even position. 