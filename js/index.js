const newui = document.getElementById("container");

const oldui = document.getElementById("oldcontainer");

const buttont = document.getElementById("old");

//const ks = new Audio('../audio/movement-200697.mp3');

let isold = JSON.parse(localStorage.getItem("isold"));

document.body.style.overflow = 'hidden';

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

//ks.loop = true;

let userInteraction = 0;

document.addEventListener('click', () => {

  if (userInteraction) return;

  userInteraction++;

  //ks.play();

})
