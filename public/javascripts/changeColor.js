window.onload = function() { 
    var clickMe = document.getElementById("div1");
    clickMe.addEventListener('click', function() {
      if(clickMe.style.backgroundColor === "red") {
        clickMe.style.backgroundColor = "blue";
      } else {
        clickMe.style.backgroundColor = "red";
      }
    });
}