function openNav() {
  let width = window.innerWidth;

  if (width < 600) {
    let sideBar = document.getElementById("mySidebar");
    sideBar.style.borderTopRightRadius = "0px";
    sideBar.style.borderBottomRightRadius = "0px";
    document.getElementById("mySidebar").style.width = "100vw";
  } else {
    document.getElementById("mySidebar").style.width = "250px";
  }

  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
