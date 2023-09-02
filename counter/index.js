//set initial count
let count = 0;
//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "blue";
    }
    value.textContent = count;
  });
});
