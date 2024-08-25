const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

let count = 0;

decrease.addEventListener("click", () => {
  count--;
  document.getElementById("counter").innerHTML = count;
  if (count < 0) {
    document.getElementById("counter").style.color = "red";
  } else if (count === 0) {
    document.getElementById("counter").style.color = "grey";
  }
});

reset.addEventListener("click", () => {
  count = 0;
  document.getElementById("counter").innerHTML = count;
  if (count == 0) {
    document.getElementById("counter").style.color = "grey";
  }
});

increase.addEventListener("click", () => {
  count++;
  document.getElementById("counter").innerHTML = count;
  if (count > 0) {
    document.getElementById("counter").style.color = "green";
  } else if (count === 0) {
    document.getElementById("counter").style.color = "grey";
  }
});
