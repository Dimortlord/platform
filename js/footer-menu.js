var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// const jsExplolerItem = document.getElementById("js-exploler-item");
// console.log(jsExplolerItem);

// jsExplolerItem.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Hello");
// });

const jsExploreList = document.getElementById("js-explore-list");
const exploreImage = document.getElementById("js-hero");

jsExploreList.addEventListener("click", (event) => {
  console.log(event);
  event.preventDefault();
  const exploreItem = event.target.closest(".explore__item");
  if (exploreItem) {
    // console.log(exploreItem);
    exploreImage.src = "./image/" + exploreItem.dataset.img;
  }
});

const hello = "hello";
const name = "valik";

console.log(`hello ${name}`);

function pow(number, text) {
  return text + number * number;
}

console.log(pow(2, "pow 2: "));
console.log(pow(3, "pow 3: "));
console.log(pow(4, "pow 4: "));
