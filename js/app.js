function shareShow() {
  document.getElementById("main-bar").style.visibility = "hidden";
  document.getElementById("main-bar").style.position = "absolute";
  document.getElementById("share-bar").style.visibility = "visible";
  document.getElementById("share-bar").style.position = "static";
}

function shareHide() {
  document.getElementById("main-bar").style.visibility = "visible";
  document.getElementById("main-bar").style.position = "static";
  document.getElementById("share-bar").style.visibility = "hidden";
  document.getElementById("share-bar").style.position = "absolute";
}

function test(){

alert("hi");
}
