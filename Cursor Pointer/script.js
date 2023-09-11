/**
 * Attaches an event listener to the "mousemove" event on the main element.
 * When the mouse moves, it updates the position of the cursor element to match the mouse position.
 * @param {HTMLElement} main - The main element to attach the event listener to.
 * @param {HTMLElement} cursor - The cursor element to update the position of.
 * @returns None
 */
const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function(count){
    cursor.style.left = count.x+"px"
    cursor.style.top = count.y+"px"
});