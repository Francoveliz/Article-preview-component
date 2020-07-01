function shareBarAnimation() {
  var shareBar = document.getElementById("share-bar").style.display
  if (shareBar == "none") {
    document.getElementById("share-bar").style.display = "flex";
    var fade = document.getElementById("share-bar");
    fade.classList.add("fade-in-fwd");

  } else {
    document.getElementById("share-bar").style.display = "none";
    var fade = document.getElementById("share-bar");
    fade.classList.remove("fade-in-fwd");
  }

}
