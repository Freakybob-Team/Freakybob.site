const newui = document.getElementById("container");
const oldui = document.getElementById("oldcontainer");
const buttont = document.getElementById("old");
let isold = JSON.parse(localStorage.getItem("isold"));

if (isold) {
  isold = isold;
  if (isold == true) {
    newui.style.display = "none";
oldui.style.display = 'flex';
buttont.innerHTML = 'Go Back';
document.body.style.overflow = 'hidden';
  }

else {
  newui.style.display = "flex";
oldui.style.display = 'none';
buttont.innerHTML = 'Old Theme';
document.body.style.overflowY = 'scroll';
}
}


if (!isold) {
newui.style.display = "flex";
oldui.style.display = 'none';
}


function old() {
  if (newui.style.display == "flex") {
  newui.style.display = "none";
oldui.style.display = 'flex';
buttont.innerHTML = 'Go Back';
document.body.style.overflow = 'hidden';
isold = true;

localStorage.setItem("isold", JSON.stringify(isold));
  }
  else {
    newui.style.display = "flex";
oldui.style.display = 'none';
buttont.innerHTML = 'Old Theme';
isold = false;
document.body.style.overflowY = 'scroll';
localStorage.setItem("isold", JSON.stringify(isold));
  }
}