// DOM - Document Object Model

// select the element using their id
const view1 = document.getElementById("view1")
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.flexDirection = "row";
view2.style.display = "flex";


// select the element using their class names
const views = document.getElementsByClassName("view");
console.log(views); // it gives the html collection

const sameViews = document.querySelectorAll(".view");
console.log(sameViews); // it gives the nodelist, it includes all the contents