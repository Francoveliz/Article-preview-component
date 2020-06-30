function show() {
  document.getElementById("profile-bar").style.visibility = "hidden";
  document.getElementById("profile-bar").style.position = "absolute";
  document.getElementById("share-bar").style.visibility = "visible";
  document.getElementById("share-bar").style.position = "static";
  var share = document.getElementById("share-bar");
  share.classList.toggle("fade-in-fwd");

}

function hide() {
  document.getElementById("profile-bar").style.visibility = "visible";
  document.getElementById("profile-bar").style.position = "static";
  document.getElementById("share-bar").style.visibility = "hidden";
  document.getElementById("share-bar").style.position = "absolute";
  var share = document.getElementById("share-bar");
  share.classList.toggle("fade-in-fwd");

}
